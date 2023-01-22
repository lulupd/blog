import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import Toggler from './toggler'


export default function Sidebar() {
	return (
		<div className="leftcolumn">
			<div className="boxSticky">
				<h2 id="about">about me</h2>
				<Image src="/logopersonal.png" className="icon" width="100" height="100" />
				<p>hi! i'm lucy! welcome to my (WIP) portfolio :).</p>
				<p>i'm a 22 year old computer science student, 3d artist and musician based in minneapolis.</p>
				<Toggler name='projects'>
					<Toggler name='art'>
						test
					</Toggler>
				</Toggler>
			</div>
		</div>
	);
}