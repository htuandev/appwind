import React from 'react';
import {FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin, FaPaperPlane} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer>
			<div className='bg-[#E4F2FE] dark:bg-[#07102D] py-12 relative z-10'>
				<div className='box-screen'>
					<div className='flex flex-wrap gap-y-6'>
						<div className=' w-full px-4 md:w-1/2 lg:w-1/3'>
							<div className='mb-12 max-w-[300px]'>
								<a href='/' className='flex items-center mb-8'>
									<img src='/images/logo-icon.png' alt='logo' className='w-12 h-12 mr-3' />
									<span className='text-main text-2xl font-bold'>Appwind.</span>
								</a>
								<p className=' mb-8 text-grey'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat et sem at Etiam in lobortis
									dui. Praesent .
								</p>
								<div className=' flex items-center gap-4 text-grey text-xl '>
									<FaFacebookSquare className=' cursor-pointer hover:text-primary' />
									<FaTwitterSquare className=' cursor-pointer hover:text-primary' />
									<FaInstagram className=' cursor-pointer hover:text-primary' />
									<FaLinkedin className=' cursor-pointer hover:text-primary' />
								</div>
							</div>
						</div>
						<div className=' w-full px-4 sm:w-1/2 lg:w-1/6'>
							<p className=' text-2xl font-khand font-bold text-main mb-9'>Quick Links</p>
							<ul className=' text-grey list-none'>
								<li>
									<span className='mb-4 cursor-pointer hover:text-primary block'>Our Blog</span>
								</li>
								<li>
									<span className='mb-4 cursor-pointer hover:text-primary block'>Check Pricing</span>
								</li>
								<li>
									<span className='mb-4 cursor-pointer hover:text-primary block'>About Us</span>
								</li>
								<li>
									<span className='mb-4 cursor-pointer hover:text-primary block'>Help & Support</span>
								</li>
							</ul>
						</div>
						<div className=' w-full px-4 sm:w-1/2 lg:w-1/4'>
							<p className=' text-2xl font-khand font-bold text-main mb-9'>App Information</p>
							<ul className=' text-grey list-none'>
								<li>
									<span className=' mb-4 cursor-pointer hover:text-primary block'>Style Guideline</span>
								</li>
								<li>
									<span className='mb-4 cursor-pointer hover:text-primary block'>Getting Started</span>
								</li>
								<li>
									<span className='mb-4 cursor-pointer hover:text-primary block'>Changelog</span>
								</li>
								<li>
									<span className='mb-4 cursor-pointer hover:text-primary block'>Update Details</span>
								</li>
							</ul>
						</div>
						<div className=' w-full px-4 md:w-1/2 lg:w-1/4'>
							<p className=' text-2xl font-khand font-bold text-main mb-9'>Join Our Newsletter</p>
							<p className=' mb-8 text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla feugiat</p>
							<form className=' relative'>
								<input
									type='email'
									className='text-grey px-5 py-3 text-sm dark:bg-dark dark:border-dark outline-offset-2 outline-transparent outline outline-2 border border-[#e4f2fe] focus:border-primary rounded-lg w-full'
									placeholder='Enter your email'
								/>
								<button className=' absolute top-1/2 right-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-primary text-white'>
									<FaPaperPlane className=' text-xl' />
								</button>
							</form>
						</div>
					</div>
				</div>
                <div className=' absolute -z-10 bottom-0 left-0'><LeftSVG/></div>
                <div className=' absolute -z-10 right-0 top-0'><RightSVG/></div>
			</div>
			<div className='p-4 bg-white dark:bg-dark'>
				<p className=' text-center font-medium text-lg text-grey'>© 2023 Appwind - All rights reserved.</p>
			</div>
		</footer>
	);
}

const LeftSVG = () => (
	<svg width={142} height={73} viewBox='0 0 142 73' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M97.5778 80C97.5778 35.8054 61.7615 -5.42825e-06 17.5778 -3.49691e-06C-26.606 -1.56558e-06 -62.4222 35.8054 -62.4222 80C-62.4222 124.173 -26.606 160 17.5778 160C61.7615 160 97.5778 124.173 97.5778 80Z'
			fill='url(#paint0_radial_106_149)'
		/>
		<circle cx='103.496' cy='55.2326' r='1.84993' transform='rotate(-150.952 103.496 55.2326)' fill='#8B5CF6' />
		<circle cx='95.5911' cy='69.464' r='1.84993' transform='rotate(-150.952 95.5911 69.464)' fill='#8B5CF6' />
		<circle cx='111.22' cy='41.3244' r='1.84993' transform='rotate(-150.952 111.22 41.3244)' fill='#8B5CF6' />
		<circle cx='73.6349' cy='75.4679' r='1.84993' transform='rotate(-150.952 73.6349 75.4679)' fill='#8B5CF6' />
		<circle cx='131.636' cy='70.862' r='1.84993' transform='rotate(-150.952 131.636 70.862)' fill='#8B5CF6' />
		<circle cx='89.2642' cy='47.3283' r='1.84993' transform='rotate(-150.952 89.2642 47.3283)' fill='#8B5CF6' />
		<circle cx='81.3598' cy='61.5597' r='1.84993' transform='rotate(-150.952 81.3598 61.5597)' fill='#8B5CF6' />
		<circle cx='139.36' cy='56.9538' r='1.84993' transform='rotate(-150.952 139.36 56.9538)' fill='#8B5CF6' />
		<circle cx='96.9888' cy='33.4196' r='1.84993' transform='rotate(-150.952 96.9888 33.4196)' fill='#8B5CF6' />
		<circle cx='59.4034' cy='67.5636' r='1.84993' transform='rotate(-150.952 59.4034 67.5636)' fill='#8B5CF6' />
		<circle cx='117.404' cy='62.9572' r='1.84993' transform='rotate(-150.952 117.404 62.9572)' fill='#8B5CF6' />
		<circle cx='75.0325' cy='39.4235' r='1.84993' transform='rotate(-150.952 75.0325 39.4235)' fill='#8B5CF6' />
		<circle cx='67.1284' cy='53.6554' r='1.84993' transform='rotate(-150.952 67.1284 53.6554)' fill='#8B5CF6' />
		<circle cx='125.129' cy='49.049' r='1.84993' transform='rotate(-150.952 125.129 49.049)' fill='#8B5CF6' />
		<circle cx='82.7576' cy='25.5158' r='1.84993' transform='rotate(-150.952 82.7576 25.5158)' fill='#8B5CF6' />
		<defs>
			<radialGradient
				id='paint0_radial_106_149'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(-62.4222 80) scale(160)'
			>
				<stop stopColor='#FFEEFE' />
				<stop offset='0.569' stopColor='#FFEEFE' />
				<stop offset='0.993' stopColor='#F1C6EF' />
			</radialGradient>
		</defs>
	</svg>
);

const RightSVG = () => (
	<svg width={120} height={75} viewBox='0 0 120 75' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M103 75C137.804 75 166 46.7947 166 12C166 -22.7947 137.804 -51 103 -51C68.2141 -51 40.0003 -22.7947 40.0003 12C40.0003 46.7947 68.2141 75 103 75Z'
			fill='url(#paint0_radial_106_293)'
		/>
		<circle cx='32.5072' cy='32.5491' r='1.84993' transform='rotate(-157.548 32.5072 32.5491)' fill='#8B5CF6' />
		<circle cx='38.7245' cy='17.5037' r='1.84993' transform='rotate(-157.548 38.7245 17.5037)' fill='#8B5CF6' />
		<circle cx='44.9415' cy='2.4583' r='1.84993' transform='rotate(-157.548 44.9415 2.4583)' fill='#8B5CF6' />
		<circle cx='62.2536' cy='44.8406' r='1.84993' transform='rotate(-157.548 62.2536 44.8406)' fill='#8B5CF6' />
		<circle cx='17.4619' cy='26.3323' r='1.84993' transform='rotate(-157.548 17.4619 26.3323)' fill='#8B5CF6' />
		<circle cx='68.4737' cy='29.7972' r='1.84993' transform='rotate(-157.548 68.4737 29.7972)' fill='#8B5CF6' />
		<circle cx='23.6791' cy='11.2869' r='1.84993' transform='rotate(-157.548 23.6791 11.2869)' fill='#8B5CF6' />
		<circle cx='74.6905' cy='14.7513' r='1.84993' transform='rotate(-157.548 74.6905 14.7513)' fill='#8B5CF6' />
		<circle cx='80.908' cy='-0.293648' r='1.84993' transform='rotate(-157.548 80.908 -0.293648)' fill='#8B5CF6' />
		<circle cx='47.2109' cy='38.6253' r='1.84993' transform='rotate(-157.548 47.2109 38.6253)' fill='#8B5CF6' />
		<circle cx='2.41638' cy='20.115' r='1.84993' transform='rotate(-157.548 2.41638 20.115)' fill='#8B5CF6' />
		<circle cx='53.4277' cy='23.5794' r='1.84993' transform='rotate(-157.548 53.4277 23.5794)' fill='#8B5CF6' />
		<circle cx='8.63378' cy='5.06963' r='1.84993' transform='rotate(-157.548 8.63378 5.06963)' fill='#8B5CF6' />
		<circle cx='59.6451' cy='8.53448' r='1.84993' transform='rotate(-157.548 59.6451 8.53448)' fill='#8B5CF6' />
		<defs>
			<radialGradient
				id='paint0_radial_106_293'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(103 -51) rotate(90) scale(126)'
			>
				<stop stopColor='white' />
				<stop offset='0.569' stopColor='#E4F2FE' />
				<stop offset='0.993' stopColor='#D2E2EF' />
			</radialGradient>
		</defs>
	</svg>
);
