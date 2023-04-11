import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout({ children, posts }) {
	return (
		<div className="base">
			<Head>
				<title>Next.js Sample blog</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Header posts={posts}/>
			<main>
				<Sidebar posts={posts} />
				<div className="midcolumn">
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
}