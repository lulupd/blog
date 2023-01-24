import Link from 'next/link';
import Image from 'next/image';
import { Orbitron } from '@next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })


function Header (props) {
	return (
		<header>
			<div className="headerContainer">
				<div className={orbitron.className}>
					<h1 className="title">lulupd.me</h1>
					<h2 className="title">coding and art portfolio</h2>
				</div>
			</div>
			<section>
				<nav>
					<div className="navbar">
					  <Link href="/">home</Link>
					  <Link href="/">coding</Link>
					  <Link href="/">art</Link>
					  <Link href="/">contact</Link>
					</div>
				</nav>
			</section>
		</header>
	);
}

export default Header