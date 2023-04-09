import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import Toggler from './Toggler'


export default function Sidebar() {
	return (
		<div className="leftcolumn">
			<div className="boxSticky">
				<h2 id="about">About:</h2>
				<Image src="/woods.jpg" className="icon" width="100" height="100" />
				<p>Hi there!</p>
				<p>This is a blog built with Next.js with support for Markdown posts.</p>
				<Toggler name='Navigation'>
					<Toggler name='art'>
						test
					</Toggler>
				</Toggler>
			</div>
		</div>
	);
}