import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
	return (
		<div class="base">
			<Header />
			<main>
				<Sidebar />
				<div class="midcolumn">
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
}