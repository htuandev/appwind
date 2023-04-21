import React from 'react';
import {FaStar, FaArrowRight, FaTrophy} from 'react-icons/fa';
import Heading from '../components/Heading';

export default function Features() {
	return (
		<section id='features'>
			<div className=' box-screen pt-20'>
				<div className=' flex px-4 justify-center'>
					<div className=' px-4'>
						<div className=' text-center mx-auto mb-16 max-w-[510px]'>
							<Heading title={'Our Recent Awards'}/>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4 mb-8'>
					<div className='flex flex-col justify-between rounded-3xl bg-white dark:bg-[#07102d] p-10 text-main shadow-[0_3px_100px_rgba(11,5,22,0.07)] sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12'>
						<div className='flex items-center mb-6'>
							<div className='mr-3 text-white w-10 h-10 flex items-center justify-center bg-[#8b5cf6] rounded-full'>
								<FaStar width='32' height='32' />
							</div>
							<span className='text-main text-xl font-bold'>4.9 Rating</span>
						</div>
						<div className='flex items-center mb-8'>
							<div className='flex items-center'>
								<img
									src='./images/person-1.png'
									alt='rating-person-1'
									className=' w-9 rounded-full h-9 border-[2px] border-white'
								/>
								<img
									src='./images/person-2.png'
									alt='rating-person-2'
									className=' w-9 rounded-full h-9 border-[2px] border-white -ml-3'
								/>
								<img
									src='./images/person-3.png'
									alt='rating-person-3'
									className=' w-9 rounded-full h-9 border-[2px] border-white -ml-3'
								/>
							</div>
							<span className='text-main font-bold inline-block pl-4'>+195K rates</span>
						</div>
						<div>
							<p className='text-grey mb-10 text-lg'>
								Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.
							</p>
							<span className='inline-flex items-center text-lg font-bold text-[#8b5cf6] gap-2 cursor-pointer hover:underline'>
								Rate Out Application <FaArrowRight w='28' h='28' />
							</span>
						</div>
					</div>
					<div className='flex flex-col justify-between rounded-3xl bg-white dark:bg-[#07102d] p-10 text-main shadow-[0_3px_100px_rgba(11,5,22,0.07)] sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12'>
						<div className='flex items-center mb-6'>
							<div className='mr-3 text-white w-10 h-10 flex items-center justify-center bg-[#8b5cf6] rounded-full'>
								<FaTrophy />
							</div>
							<span className='text-main text-2xl font-bold'>Awards</span>
						</div>
						<div className='flex items-center mb-8'>
							<span className='text-main text-xl font-bold'>
								Best of trendy design in <span className='text-[#8b5cf6]'>2023</span> on Awards
							</span>
						</div>
						<div>
							<p className='text-grey mb-10 text-lg'>
								Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.
							</p>
							<span className='inline-flex items-center text-lg font-bold text-[#8b5cf6] gap-2 cursor-pointer hover:underline'>
								Go to Awards <FaArrowRight />
							</span>
						</div>
					</div>
					<div className='flex flex-col justify-between rounded-3xl bg-white dark:bg-[#07102d] p-10 text-main shadow-[0_3px_100px_rgba(11,5,22,0.07)] sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12'>
						<div className='flex items-center mb-6'>
							<img src="/images/logo-icon.png" alt='logo' className='w-12 h-12 mr-3' />
                            <span className='text-main text-2xl font-bold'>Appwind.</span>
						</div>
						<div className='flex items-center mb-8'>
							<span className='text-main text-xl font-bold'>Appwind is the best app for online payments.</span>
						</div>
						<div>
							<p className='text-grey mb-10 text-lg'>
								Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.
							</p>
							<span className='inline-flex items-center text-lg font-bold text-[#8b5cf6] gap-2 cursor-pointer hover:underline'>
								Know More <FaArrowRight />
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
