import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] })


function Header ({posts}) {
	const router = useRouter();
	const lastPath = router.asPath;

	const getRandomPost = () => {
		const otherPosts = posts.filter((post) => !lastPath.includes(post.id));
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
					<Link onClick={getRandomPost} href={lastPath}>random post</Link>
					<Link href="/other-work">other work</Link>
					<Link href="/contact">contact</Link>
				</nav>
			</section>
		</header>
	);
}

export default Header