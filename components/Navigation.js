import {useState, useRef} from 'react';
import Link from 'next/link';
import Toggler from './Toggler'
import { getAllPostTags } from '@/lib/tags';


export default function Navigation({posts, children}) {
	const [show, setShow] = useState(false);
	const tags = getAllPostTags(posts);
	return (
		<div className="toggler-container">
			[<a className="toggler" onClick={() => setShow(!show)}>{show ? '-' : '+'}</a>]
			Navigation
			{tags.map(tag => {
				return (
					<div key={tag} className="nested-container">
						{ show ? 
						<Toggler tag={tag}></Toggler> :
						null}
					</div>
				);
			})}				
		</div>
		)
}