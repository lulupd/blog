import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

// The Blog Page Content
export default function Blog({posts}){
    return <main>
        {posts.map(post => {
            const {id, frontmatter, content} = post
            const {title, author, category, date, bannerImage, tags} = frontmatter

            //JSX for individual blog listing
            return (
            	<main>
                        <div className="card">
                                <h1>{title}</h1>
                                <h2>{author} || {date}</h2>
                                <h3>{category} || {tags.join()}</h3>
                                <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                </main>
            );
        })}
    </main>
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
