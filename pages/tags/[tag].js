import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import { Inter } from '@next/font/google'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import { useRouter } from 'next/router';
import { getAllPostTags } from '../../lib/tags';
import { getAllPosts } from '../../lib/posts';

export default function TagPage({posts}) {
	posts.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
    });

    const { asPath } = useRouter();
    const tag = asPath.replace('/tags/', '')
    return <div>
        {posts.map(post => {
            const {id, frontmatter, content} = post
            const {title, author, category, date, bannerImage, tags} = frontmatter
            if (tags.includes(tag)) {
	            return (
	                <div className="card" key={title}>
                    {bannerImage !== "" ? <Image src={bannerImage} width={1000} height={300} className="banner"></Image> : null}
	                  <Link href={`/posts/${id}`}>
	                      <h1>{title}</h1>
	                  </Link>
	                  <ReactMarkdown className="post">{content}</ReactMarkdown>
	                  <h3>{author}</h3>
	                  <h3>{date}</h3>
	                </div>

	            );
	    	}
        })}
    </div>
}

export async function getStaticPaths() {
  const posts = getAllPosts();
	const tags = getAllPostTags(posts);
	const paths = tags.map((tagName) => ({
		params: {
			tag: tagName
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps() {
  const posts = getAllPosts();
    return {
        props: {
          posts,
        },
    };
}