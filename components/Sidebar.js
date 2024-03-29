import Image from 'next/image';
import Navigation from './Navigation';


export default function Sidebar({posts}) {
	return (
		<div className="leftcolumn">
			<div className="boxSticky">
				<h2 id="about">About:</h2>
				<Image src="/woods.jpg" alt="Picture of the woods. Taken at Galiano Island, Canada." className="icon" width="100" height="100" />
				<p>Hi there!</p>
				<p>This is a blog built with Next.js with support for Markdown posts.</p>
				<Navigation posts={posts}></Navigation>
			</div>
		</div>
	);
}