import Link from 'next/link';
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
	return (
		<div className="base">
			<Head>
				<title>Next.js Sample blog</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Header />
			<main>
				<Sidebar />
				<div className="midcolumn">
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
}