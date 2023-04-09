import {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import Toggler from './Toggler'
import { getAllPostTags } from '@/lib/tags';


export default function Navigation({posts, children}) {
	if (posts) {
        const [show, setShow] = useState(false);
        const tags = getAllPostTags(posts);
        let togglerElements = [];
        return (
            <div className="toggler-container">
                [<a className="toggler" onClick={() => setShow(!show)}>{show ? '-' : '+'}</a>]
                Navigation
                {tags.map(tag => {
                    const splitTags = tag.split("/");
                    if (splitTags.length > 1) {
                    let togglers = splitTags.map((splitTag, index) => {
                        if (index < splitTags.length) {
                            index = index + 1
                            const togglerElement = (
                                    show ? 
                                    <Toggler tag={splitTags[splitTags.length - index]} key={splitTags[splitTags.length - index]}>{togglerElements.pop()}</Toggler> :
                                    null
                            );
                                togglerElements.push(togglerElement);
                                return togglerElement;
                        }
                    });
                    return togglers.pop();
                    } else {
                        return (
                            <div key={tag} className="nested-container">
                                { show ? 
                                <Toggler tag={tag}></Toggler> :
                                null}
                            </div>
                        );
                    }
                })}				
            </div>
        )
    }
}