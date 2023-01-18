import Link from 'next/link';

function Header (props) {
	return (
		<header>
			<h1 class="title">lulupd.me</h1>
			<h2 class="title">coding and art portfolio</h2>
			<section>
				<nav>
					<div class="navbar">
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