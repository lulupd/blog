import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { getAllPosts } from '@/lib/posts';
import { getSplitTags } from '../../lib/tags';
import Link from 'next/link';

export default function Post({frontmatter, content}) {
	const {title, author, category, date, bannerImage, tags} = frontmatter;
	const splitBanner = bannerImage.split("|");
	return (
		<div className="cardContainer">
			<div className="card">
				{bannerImage !== "" ? <Image src={splitBanner[0]} alt={splitBanner.length > 1 ? splitBanner[1]: ""} width={1000} height={300} className="banner"></Image> : null}
		        <h1>{title}</h1>
		        <h2>{author} || {date}</h2>
		        <ReactMarkdown className="post">{content}</ReactMarkdown>
		        <div className="bottom-info">
					<h3>{category} || {getSplitTags(tags).map((tag) => <Link key={tag} href={`/tags/${tag}`}>{tag} </Link>)}</h3>
				</div>
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