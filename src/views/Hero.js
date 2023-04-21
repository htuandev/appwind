import React from 'react';
import {FaPlay} from 'react-icons/fa';
export default function Hero() {
	return (
		<section id='hero'>
			<div className=' box-gradient py-4 md:py-8 xl:py-16 rounded-2xl mx-4 md:mx-8 2xl:mx-14 lg:pl-10 overflow-hidden px-4'>
				<div className=' box-screen'>
					<div className=' flex flex-wrap items-center -mx-4 gap-y-12'>
						<div className=' w-full lg:w-1/2 px-4'>
							<h1 className=' text-main font-medium font-khand text-3xl sm:text-5xl mb-5'>
								Tailwind CSS Template for
								<span className=' font-semibold font-khand'> Apps and Software</span>
							</h1>
							<p className=' text-grey text-base mb-12'>
								All in one Tailwind CSS site template for - App and Software sites. Comes with all essential components,
								clean design and everything you can expect from a complete app landing page.
							</p>
							<div className=' flex items-center gap-10 justify-center lg:justify-start'>
								<div className='btn'>Explore</div>
								<div className='flex items-center text-base font-bold text-main transition-all hover:text-primary gap-4 group cursor-pointer'>
									<span className=' w-16 h-16 inline-flex justify-center items-center rounded-full bg-primary text-primary bg-opacity-10  transition-all group-hover:bg-opacity-100 group-hover:text-white'>
										<FaPlay />
									</span>
									Play
								</div>
							</div>
						</div>
						<div className=' w-full lg:w-1/2 px-4'>
							<div className=' relative z-10 h-[532px] text-center '>
								<img src='images/hero-image-1.svg' alt='hero-images' className='mx-auto' />
								<span className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full bg-white bg-opacity-25 shadow-[0_0_110px_rgba(0,0,0,0.03)] dark:bg-dark dark:bg-opacity-25 h-[350px] w-[350px]'></span>
								<span className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full bg-white bg-opacity-25 shadow-[0_0_110px_rgba(0,0,0,0.03)] dark:bg-dark dark:bg-opacity-25 h-[450px] w-[450px]'></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
