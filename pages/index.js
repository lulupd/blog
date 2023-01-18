import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import { Inter } from '@next/font/google'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

// The Blog Page Content
export default function Home({posts}){
    return <div>
        {posts.map(post => {
            const {id, frontmatter, content} = post
            const {title, author, category, date, bannerImage, tags} = frontmatter

            //JSX for individual blog listing
            return (
                <div class="card">
                  <article key={title}>
                      <Link href={`/posts/${id}`}>
                          <h1>{title}</h1>
                      </Link>
                      <ReactMarkdown>{content}</ReactMarkdown>
                      <h3>{author}</h3>
                      <h3>{date}</h3>
                  </article>
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
