import Link from 'next/link';
import Image from 'next/image';
import { Nunito } from '@next/font/google'

const nunito = Nunito({ subsets: ['latin'] })


function Header (props) {
	return (
		<header>
			<div className={nunito.className}>
				<h1 className="title"><Link href="/">Next.js Sample Blog</Link></h1>
			</div>
			<section>
				<nav>
					<Link href="/">home</Link>
					<Link href="/">random post</Link>
					<Link href="/">other work</Link>
					<Link href="/">contact</Link>
				</nav>
			</section>
		</header>
	);
}

export default Header