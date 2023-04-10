import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import { Nunito } from '@next/font/google'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import { getAllPosts } from '@/lib/posts';


const space = Nunito({ subsets: ['latin'] })

export default function Home({posts}){
    posts.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
    });
    return <div className="cardContainer">
        {posts.map(post => {
            const {id, frontmatter, content} = post;
            const {title, author, category, date, bannerImage, tags} = frontmatter;
	        const splitBanner = bannerImage.split("|");
            return (
                <div className="card" key={title}>
                    {bannerImage !== "" ? <Image src={splitBanner[0]} alt={splitBanner.length > 1 ? splitBanner[1]: ""} width={1000} height={300} className="banner"></Image> : null}
                    <Link href={`/posts/${id}`}>
                        <h1>{title}</h1>
                    </Link>
                    <ReactMarkdown className="post">{content}</ReactMarkdown>
                    <div className="bottom-info">
                        <h3>{author}</h3>
                        <h3>{date}</h3>
                    </div>
                </div>
            );
        })}
    </div>
}


export async function getStaticProps(){
    const posts = getAllPosts();
    return {
        props: {
          posts,
        },
    };
}
