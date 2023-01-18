import fs from 'fs';
import matter from 'gray-matter';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function Post({frontmatter, content}) {
	const {title, author, category, date, bannerImage, tags} = frontmatter

	return (
		<main>
			<div class="card">
				<img src={bannerImage}/>
		        <h1>{title}</h1>
		        <h2>{author} || {date}</h2>
		        <h3>{category} || {tags.join()}</h3>
		        <ReactMarkdown>{content}</ReactMarkdown>
		    </div>
	    </main>
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