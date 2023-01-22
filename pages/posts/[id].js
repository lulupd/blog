import fs from 'fs';
import matter from 'gray-matter';
import { Space_Grotesk } from '@next/font/google'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

const space = Space_Grotesk({ subsets: ['latin'] })

export default function Post({frontmatter, content}) {
	const {title, author, category, date, bannerImage, tags} = frontmatter
	return (
		<div>
			<div className="card">
		        <h1>{title}</h1>
		        <h2>{author} || {date}</h2>
		        <h3>{category} || {tags.join()}</h3>
		        <ReactMarkdown className="post">{content}</ReactMarkdown>
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
	const {data: frontmatter, content} = matter(file);
	return {
		props: {
			frontmatter,
			content,
		}
	}
}