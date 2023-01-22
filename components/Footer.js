import Link from 'next/link';

function Footer (props) {
	return (
		<div className='footer'>
			<section>
				<div className="linkbarContainer">
					<div className="linkbar">
						<h1>navigation</h1>
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
			</section>
		</div>
	)
}

export default Footer