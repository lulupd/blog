import {useState} from 'react';
import Link from 'next/link';

export default function Toggler({children, tag}) {
	const [show, setShow] = useState(false);
	return (
		<div className="nested">
			[<a className="toggler" onClick={() => setShow(!show)}>{show ? '-' : '+'}</a>] 
			<Link href={`/tags/${tag}`}> 
				{tag}
			</Link>
			{ show ? 
			<div className="nested">
				{children}
			</div> : null}						
		</div>
		)
}