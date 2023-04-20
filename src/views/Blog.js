import React from 'react';
import Heading from '../components/Heading';
import {FaArrowRight} from 'react-icons/fa';

export default function Blog() {
	return (
		<section id='blog'>
			<div className=' box-screen pt-20'>
				<Heading title={'Recent Articles'} />
				<div className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div className='col-auto lg:col-start-2 lg:row-start-1 lg:row-end-3'>
						<Box
							src={'images/blog-3.jpg'}
							height={570}
							title={'50+ High rated online banking mobile apps on playstore.'}
						/>
					</div>
					<div className=''>
						<Box src={'images/blog-1.jpg'} height={270} title={'Want to use Appwind in your organization?'} />
					</div>
					<div className=''>
						<Box src={'images/blog-2.jpg'} height={270} title={'Interested in selling your own Apps on marketplace?'} />
					</div>
				</div>
			</div>
		</section>
	);
}

const Box = ({src, height, title}) => (
	<div className=' overflow-hidden rounded-xl relative'>
		<img src={src} alt='blog' className='w-full h-full object-cover' />
		<div
			className={`absolute right-0 top-0 flex items-end w-full h-full bg-gradient-to-t from-[#07102d] to-transparent h-[${height}px]`}
		>
			<div className=' flex justify-between items-end p-8 w-full '>
				<div className='max-w-[400px]'>
					<p className=' mb-2 text-white font-bold font-khand text-2xl cursor-pointer hover:text-primary'>{title}</p>
					<p className=' text-white text-base'>Continue reading...</p>
				</div>
				<FaArrowRight className=' text-white hover:text-primary text-xl cursor-pointer min-w-[16px]' />
			</div>
		</div>
	</div>
);
