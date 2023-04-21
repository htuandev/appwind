import React from 'react';
import {FaArrowRight} from 'react-icons/fa';

export default function About() {
	return (
		<section id='about'>
		  <div className=' box-screen pt-20'>
  			<div className=' grid md:grid-cols-2 gap-6 md:gap-y-16 items-center'>
  				<div className=' order-1'>
  					<img src='images/about-image-1.svg' alt='about-1' />
  				</div>
  				<div className='flex order-2 md:justify-end'>
  					<div className='  max-w-[450px]'>
  						<span className=' text-primary font-bold mb-2'>About Application</span>
  						<h2 className='text-dark dark:text-white text-3xl sm:text-4xl font-khand font-bold mb-6'>
  							Manage your online wallet with Appwind.
  						</h2>
  						<p className='mb-12 lg:mb-16 text-lg text-grey'>
  							Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or
  							create your own publishing schedule.
  						</p>
  						<span className='inline-flex items-center text-lg font-bold text-[#8b5cf6] gap-2 cursor-pointer hover:underline'>
  							Know More About App <FaArrowRight />
  						</span>
  					</div>
  				</div>
  				<div className=' order-3 mt-16 md:mt-0 md:order-4'>
  					<img src='images/about-image-2.svg' alt='about-1' />
  				</div>
  				<div className='flex flex-col justify-center max-w-[450px] order-4 md:order-3'>
  					<span className=' text-primary font-bold mb-2'>Easy to Manage Appwind</span>
  					<h2 className='text-dark dark:text-white text-3xl sm:text-4xl font-khand font-bold mb-6'>
  						Manage your online wallet with Appwind.
  					</h2>
  					<p className='mb-12 lg:mb-16 text-lg text-grey'>
  						Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or
  						create your own publishing schedule.
  					</p>
  					<span className='inline-flex items-center text-lg font-bold text-[#8b5cf6] gap-2 cursor-pointer hover:underline'>
  						Get the App Now! <FaArrowRight />
  					</span>
  				</div>
  			</div>
  		</div>
		</section>
	);
}
