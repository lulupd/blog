import Link from 'next/link';
import { Nunito } from '@next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

function Footer (props) {
	return (
		<footer>
			<div className="linkbarContainer">
				<div className="linkbar">
				<div className={nunito.className}>
					<h1>navigation</h1>
				</div>
					<Link href="/">home</Link>
					<Link href="/">coding</Link>
					<Link href="/">art</Link>
					<Link href="/">contact</Link>
				</div>
				<div className="linkbar">
					<h1>terms & policies</h1>
					<Link href="/">license</Link>
					<Link href="/">terms of use</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer