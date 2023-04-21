import React from 'react';
import { useWasViewed } from '../hooks/useWasViewed';

export default function Heading({title}) {
	const { setRef, wasViewed } = useWasViewed();
	const animation = wasViewed ? 'animate-fade-in-up delay-200' : null 
	return (
		<div className=' text-center mb-16 max-w-[500px] mx-auto'>
			<div className={animation} ref={setRef}>
				<h2 className='  text-main font-bold font-khand text-3xl sm:text-4xl mb-4'>{title}</h2>
				<p className=' text-grey'>
					There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some
					form.
				</p>
			</div>
			</div>
	);
}
