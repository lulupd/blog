import {useState, useRef} from 'react';
import Link from 'next/link';

// To-do: Make toggler automatically create its tag tree from existing tags.

export default function Toggler({children, name}) {
	const [show, setShow] = useState(false);
	return (
		<ul>
			[<a className="toggler" onClick={() => setShow(!show)}>{show ? '-' : '+'}</a>] 
			<Link href={`/tags/${name}`}> 
				{name}
			</Link>
			{ show ? 
			<ul className="nested">
				{children}
			</ul> : null}						
		</ul>
		)
}