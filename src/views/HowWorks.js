import React from 'react';
import {FaDownload, FaUser, FaGrinHearts} from 'react-icons/fa';

export default function HowWorks() {
	return (
		<section id='how-work'>
			<div className=' box-screen mt-24'>
				<div className=' text-center  mb-16 max-w-[500px] mx-auto'>
					<h2 className='  text-main font-bold font-khand text-3xl sm:text-5xl mb-5'>How it Works?</h2>
					<p className=' text-grey'>
						There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in
						some form.
					</p>
				</div>
				<div className='flex flex-wrap justify-center'>
					<Box type={1} title='Download For Free'/>
					<Box type={2} title='Open an Account'/>
					<Box type={3} title='Enjoy our App'/>
				</div>
			</div>
		</section>
	);
}

const Box = ({type, title}) => (
	<div className=' text-center max-w-[300px] mb-12 mx-auto px-2'>
		<div className='w-20 h-20 mx-auto rounded-3xl flex justify-center items-center text-primary hover:text-white text-4xl cursor-pointer bg-primary bg-opacity-5 hover:bg-opacity-100 mb-6'>
			{type === 1 ? <FaDownload /> : type === 2 ? <FaUser /> : <FaGrinHearts />}
		</div>
		<h3 className=' text-main text-xl md:text-2xl font-bold mb-4'>{title}</h3>
		<p className='text-grey font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non ipsum.</p>
	</div>
);
