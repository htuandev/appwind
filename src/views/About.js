import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import { useWasViewed } from '../hooks/useWasViewed';

export default function About() {
	const {setRef: setRefOne, wasViewed: wasViewedOne} = useWasViewed();
	const {setRef: setRefTwo, wasViewed: wasViewedTwo} = useWasViewed();
	const {setRef: setRefThree, wasViewed: wasViewedThree} = useWasViewed();
	const {setRef: setRefFour, wasViewed: wasViewedFour} = useWasViewed();

	const animationOne = wasViewedOne ? 'animate-fade-in-left delay-200' : null;
	const animationTwo = wasViewedTwo ? 'animate-fade-in-right delay-200' : null;
	const animationThree = wasViewedThree ? 'animate-fade-in-right delay-200' : null;
	const animationFour = wasViewedFour ? 'animate-fade-in-left delay-200' : null;
	return (
		<section id='about'>
		  <div className=' box-screen pt-20'>
  			<div className=' grid md:grid-cols-2 gap-6 md:gap-y-16 items-center'>
  				<div className={`order-1 ${animationOne}`} ref={setRefOne}>
  					<img src='images/about-image-1.svg' alt='about-1' />
  				</div>
  				<div className={`flex order-2 md:justify-end ${animationTwo}`} ref={setRefTwo}>
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
  				<div className={`order-3 mt-16 md:mt-0 md:order-4 ${animationThree}`} ref={setRefThree}>
  					<img src='images/about-image-2.svg' alt='about-1' />
  				</div>
  				<div className={`flex flex-col justify-center max-w-[450px] order-4 md:order-3 ${animationFour}`} ref={setRefFour}>
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
