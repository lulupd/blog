import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import { Space_Grotesk } from '@next/font/google'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import { getAllPostTags } from '../lib/tags';

const space = Space_Grotesk({ subsets: ['latin'] })

export default function Home({posts}){
    posts.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
    });
    return <div>
        {posts.map(post => {
            const {id, frontmatter, content} = post
            const {title, author, category, date, bannerImage, tags} = frontmatter
            //JSX for individual blog listing
            return (
                <div className="card" key={title}>
                    <Link href={`/posts/${id}`}>
                        <h1>{title}</h1>
                    </Link>
                    <ReactMarkdown className="post">{content}</ReactMarkdown>
                    <h3>{author}</h3>
                    <h3>{date}</h3>
                </div>
            );
        })}
    </div>
}


export async function getStaticProps(){
    const files = fs.readdirSync('posts');

    const posts = files.map((fileName) => {
        const id = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        return {
          id,
          frontmatter,
          content,
        };
    });
    return {
        props: {
          posts,
        },
    };
}
