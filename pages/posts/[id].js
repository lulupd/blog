import fs from 'fs';
import matter from 'gray-matter';
import { Space_Grotesk } from '@next/font/google'
import Image from 'next/image';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import { getAllPosts } from '@/lib/posts';

const space = Space_Grotesk({ subsets: ['latin'] })

export default function Post({frontmatter, content}) {
	const {title, author, category, date, bannerImage, tags} = frontmatter
	return (
		<div className="cardContainer">
			<div className="card">
				{bannerImage !== "" ? <Image src={bannerImage} width={1000} height={300} className="banner"></Image> : null}
		        <h1>{title}</h1>
		        <h2>{author} || {date}</h2>
		        <ReactMarkdown className="post">{content}</ReactMarkdown>
		        <h3>{category} || {tags.join()}</h3>
		    </div>
	    </div>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync('posts');
	const paths = files.map((fileName) => ({
		params: {
			id: fileName.replace('.md', '')
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({params: {id}}) {
	const file = fs.readFileSync(`posts/${id}.md`, 'utf-8');
	const posts = getAllPosts();
	const {data: frontmatter, content} = matter(file);
	return {
		props: {
			posts,
			frontmatter,
			content,
		}
	}
}