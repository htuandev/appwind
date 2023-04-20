import React from 'react';

export default function Heading({title}) {
	return (
		<div className=' text-center  mb-16 max-w-[500px] mx-auto'>
			<h2 className='  text-main font-bold font-khand text-3xl sm:text-4xl mb-4'>{title}</h2>
			<p className=' text-grey'>
				There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some
				form.
			</p>
		</div>
	);
}
