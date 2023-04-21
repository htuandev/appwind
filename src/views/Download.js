import React from 'react';
import { useWasViewed } from '../hooks/useWasViewed';

export default function Download() {
	const {setRef, wasViewed} = useWasViewed();
	const animation = wasViewed ? 'animate-fade-in-up delay-200' : null;
	return (
		<section id='download'>
			<div className='box-screen pt-20'>
				<div className='box-gradient rounded-2xl'>
					<div className={animation} ref={setRef}>
						<div className='flex flex-wrap items-end md:justify-center lg:justify-start'>
							<div className=' lg:w-1/2 px-4'>
								<div className='max-w-[400px] py-16'>
									<span className='mb-2 text-primary font-bold'>Download Now!</span>
									<h3 className=' text-main text-xl md:text-2xl font-bold mb-2'>Download our mobile application.</h3>
									<p className='text-grey font-medium mb-10'>
										Download Appwind mobile banking app for IOS & Android to manage your online money.
									</p>
									<div className='flex items-center justify-center gap-4 -my-8 w-full'>
										<div className='w-full'>
											<img
												src='images/google-play.svg'
												alt='google play'
												className='max-w-[150px] cursor-pointer md:max-w-[200px] xl:max-w-[230px]'
											/>
										</div>
										<div className='w-full'>
											<img
												src='images/app-store.svg'
												alt='app store'
												className='max-w-[150px] cursor-pointer md:max-w-[200px] xl:max-w-[240px]'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className=' lg:w-1/2 px-4'>
								<div className=' flex items-end justify-end w-full'>
									<div className='w-full'>
										<img src='images/cta-image-1.svg' alt='cta-1' className='relative z-20 drop-shadow-[25px_40px_100px_rgba(0,0,0,0.2)]' />
									</div>
									<div className='w-full -ml-8'>
										<img src='images/cta-image-2.svg' alt='cta-2' className='relative z-10 drop-shadow-[25px_40px_100px_rgba(0,0,0,0.2)]' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
