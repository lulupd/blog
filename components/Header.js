import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] })


function Header ({posts}) {
	const router = useRouter();
	const lastPath = router.asPath;
	const lastPost = lastPath.replace("/posts/", "");
	const otherPosts = posts.filter((post) => !lastPath.includes(post.id));

	const getRandomPost = () => {
		let randomIndex = Math.floor(Math.random() * otherPosts.length);
		let post = otherPosts[randomIndex];
		if (!lastPath.includes(post.id)) {
			router.push({
				pathname: '/posts/[pid]',
				query: { pid: post.id },
			  })
		} 
	}

	return (
		<header>
			<div className={nunito.className}>
				<h1 className="title"><Link href="/">Next.js Sample Blog</Link></h1>
			</div>
			<section>
				<nav>
					<Link href="/">home</Link>
					<Link onClick={getRandomPost} href="/">random post</Link>
					<Link href="/">other work</Link>
					<Link href="/">contact</Link>
				</nav>
			</section>
		</header>
	);
}

export default Header