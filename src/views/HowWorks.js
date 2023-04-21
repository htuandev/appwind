import React from 'react';
import {FaDownload, FaUser, FaGrinHearts} from 'react-icons/fa';
import Heading from '../components/Heading';
import {useWasViewed} from '../hooks/useWasViewed';

export default function HowWorks() {
	return (
		<section id='how-work'>
			<div className=' box-screen pt-20'>
				<Heading title={'How it Works?'} />
				<div className='flex flex-wrap justify-center'>
					<Box type={1} title='Download For Free' />
					<Box type={2} title='Open an Account' />
					<Box type={3} title='Enjoy our App' />
				</div>
			</div>
		</section>
	);
}

const Box = ({type, title}) => {
	const {setRef, wasViewed} = useWasViewed();
	const animation = wasViewed ? 'animate-fade-in-up delay-200' : null;
	return (
		<div className={`text-center max-w-[300px] mb-12 mx-auto px-2 ${animation}`} ref={setRef}>
			<div className='w-20 h-20 mx-auto rounded-3xl flex justify-center items-center text-primary transition-all hover:text-white text-4xl cursor-pointer bg-primary bg-opacity-5 hover:bg-opacity-100 mb-6'>
				{type === 1 ? <FaDownload /> : type === 2 ? <FaUser /> : <FaGrinHearts />}
			</div>
			<h3 className=' text-main text-xl md:text-2xl font-bold mb-4'>{title}</h3>
			<p className='text-grey font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non ipsum.</p>
		</div>
	);
};
