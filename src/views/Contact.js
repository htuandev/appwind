import React from 'react';
import Heading from '../components/Heading';

export default function Contact() {
	return (
		<section id='contact' className=' overflow-hidden'>
			<div className=' box-screen py-20'>
				<Heading title={'Need Any Help?'} />
				<div className='max-w-[770px] relative rounded-2xl bg-white dark:bg-[#07102D] mx-auto border border-[#e4f2fe] dark:border-dark py-10 px-8 md:p-16'>
					<div className=' absolute bottom-8 -left-14 -z-10'>
						<LeftSVG />
					</div>
					<Form />
                    <div className=' absolute -z-10 -top-8 -right-14'>
                        <RightSVG/>
                    </div>
				</div>
			</div>
		</section>
	);
}

const Form = () => (
	<form>
		<div className='flex flex-wrap'>
			<div className='w-full md:w-1/2 px-4 '>
				<div className='mb-6'>
					<label className='block mb-3 font-semibold text-main' htmlFor='fname'>
						First Name
					</label>
					<input
						className=' text-grey px-5 py-3 text-sm dark:bg-dark border border-[#e4f2fe] dark:border-dark outline-offset-2 outline-transparent outline outline-2 focus:border-primary rounded-lg w-full'
						placeholder='Enter your first name'
						type='text'
						id='fname'
					/>
				</div>
			</div>
			<div className='w-full md:w-1/2 px-4 '>
				<div className='mb-6'>
					<label className='block mb-3 font-semibold text-main' htmlFor='lname'>
						Last Name
					</label>
					<input
						className=' text-grey px-5 py-3 text-sm dark:bg-dark dark:border-dark outline-offset-2 outline-transparent outline outline-2 border border-[#e4f2fe] focus:border-primary rounded-lg w-full'
						placeholder='Enter your last name'
						type='text'
						id='lname'
					/>
				</div>
			</div>
			<div className='w-full md:w-1/2 px-4 '>
				<div className='mb-6'>
					<label className='block mb-3 font-semibold text-main' htmlFor='email'>
						Business email
					</label>
					<input
						className=' text-grey px-5 py-3 text-sm dark:bg-dark dark:border-dark outline-offset-2 outline-transparent outline outline-2 border border-[#e4f2fe] focus:border-primary rounded-lg w-full'
						placeholder='Enter your email'
						type='email'
						id='email'
					/>
				</div>
			</div>
			<div className='w-full md:w-1/2 px-4 '>
				<div className='mb-6'>
					<label className='block mb-3 font-semibold text-main' htmlFor='phone'>
						Phone number
					</label>
					<input
						className=' text-grey px-5 py-3 text-sm dark:bg-dark dark:border-dark outline-offset-2 outline-transparent outline outline-2 border border-[#e4f2fe] focus:border-primary rounded-lg w-full'
						placeholder='Enter your phone number'
						type='number'
						id='phone'
					/>
				</div>
			</div>
			<div className='w-full p-4'>
				<div className='mb-6'>
					<label className='block mb-3 font-semibold text-main' htmlFor='mgs'>
						What are you looking for?
					</label>
					<textarea
						className=' text-grey px-5 py-3 text-sm dark:bg-dark dark:border-dark outline-offset-2 outline-transparent outline outline-2 border border-[#e4f2fe] focus:border-primary rounded-lg w-full '
						placeholder='Enter your message'
						type='number'
						id='mgs'
						rows={5}
					/>
				</div>
			</div>
		</div>
		<div className='w-full px-4 text-center'>
			<button className=' btn py-3 px-12 font-khand'>Submit Message</button>
		</div>
	</form>
);

const RightSVG = () => (
	<svg width={161} height={189} viewBox='0 0 161 189' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M160.578 80.5879C160.578 36.3933 124.762 0.587885 80.5784 0.587887C36.3946 0.587889 0.578432 36.3933 0.578434 80.5879C0.578436 124.761 36.3947 160.588 80.5784 160.588C124.762 160.588 160.578 124.761 160.578 80.5879Z'
			fill='url(#paint0_radial_100_548)'
		/>
		<circle cx='93.1069' cy='153.111' r='1.72625' transform='rotate(-120 93.1069 153.111)' fill='#8B5CF6' />
		<circle cx='119.12' cy='138.093' r='1.72625' transform='rotate(-120 119.12 138.093)' fill='#8B5CF6' />
		<circle cx='80.5492' cy='160.362' r='1.72625' transform='rotate(-120 80.5492 160.362)' fill='#8B5CF6' />
		<circle cx='105.964' cy='145.688' r='1.72625' transform='rotate(-120 105.964 145.688)' fill='#8B5CF6' />
		<circle cx='131.976' cy='130.67' r='1.72625' transform='rotate(-120 131.976 130.67)' fill='#8B5CF6' />
		<circle cx='108.125' cy='179.124' r='1.72625' transform='rotate(-120 108.125 179.124)' fill='#8B5CF6' />
		<circle cx='85.5115' cy='139.955' r='1.72625' transform='rotate(-120 85.5115 139.955)' fill='#8B5CF6' />
		<circle cx='134.138' cy='164.105' r='1.72625' transform='rotate(-120 134.138 164.105)' fill='#8B5CF6' />
		<circle cx='111.524' cy='124.937' r='1.72625' transform='rotate(-120 111.524 124.937)' fill='#8B5CF6' />
		<circle cx='95.5677' cy='186.374' r='1.72625' transform='rotate(-120 95.5677 186.374)' fill='#8B5CF6' />
		<circle cx='72.9537' cy='147.206' r='1.72625' transform='rotate(-120 72.9537 147.206)' fill='#8B5CF6' />
		<circle cx='120.982' cy='171.701' r='1.72625' transform='rotate(-120 120.982 171.701)' fill='#8B5CF6' />
		<circle cx='98.3683' cy='132.533' r='1.72625' transform='rotate(-120 98.3683 132.533)' fill='#8B5CF6' />
		<circle cx='146.995' cy='156.682' r='1.72625' transform='rotate(-120 146.995 156.682)' fill='#8B5CF6' />
		<circle cx='124.381' cy='117.514' r='1.72625' transform='rotate(-120 124.381 117.514)' fill='#8B5CF6' />
		<circle cx='100.53' cy='165.968' r='1.72625' transform='rotate(-120 100.53 165.968)' fill='#8B5CF6' />
		<circle cx='77.916' cy='126.8' r='1.72625' transform='rotate(-120 77.916 126.8)' fill='#8B5CF6' />
		<circle cx='126.543' cy='150.95' r='1.72625' transform='rotate(-120 126.543 150.95)' fill='#8B5CF6' />
		<circle cx='103.929' cy='111.781' r='1.72625' transform='rotate(-120 103.929 111.781)' fill='#8B5CF6' />
		<circle cx='87.9723' cy='173.219' r='1.72625' transform='rotate(-120 87.9723 173.219)' fill='#8B5CF6' />
		<circle cx='65.3583' cy='134.05' r='1.72625' transform='rotate(-120 65.3583 134.05)' fill='#8B5CF6' />
		<circle cx='113.387' cy='158.546' r='1.72625' transform='rotate(-120 113.387 158.546)' fill='#8B5CF6' />
		<circle cx='90.7728' cy='119.377' r='1.72625' transform='rotate(-120 90.7728 119.377)' fill='#8B5CF6' />
		<circle cx='139.399' cy='143.527' r='1.72625' transform='rotate(-120 139.399 143.527)' fill='#8B5CF6' />
		<circle cx='116.785' cy='104.358' r='1.72625' transform='rotate(-120 116.785 104.358)' fill='#8B5CF6' />
		<defs>
			<radialGradient
				id='paint0_radial_100_548'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(0.578434 80.5879) scale(160)'
			>
				<stop stopColor='white' />
				<stop offset='0.569' stopColor='#FFEEFE' />
				<stop offset='0.993' stopColor='#F1C6EF' />
			</radialGradient>
		</defs>
	</svg>
);

const LeftSVG = () => (
	<svg width={126} height={156} viewBox='0 0 126 156' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M62.9999 126C97.8032 126 126 97.7947 126 63C126 28.2053 97.8032 0 62.9999 0C28.2137 0 -6.10352e-05 28.2053 -6.10352e-05 63C-6.10352e-05 97.7947 28.2137 126 62.9999 126Z'
			fill='url(#paint0_radial_100_549)'
		/>
		<circle cx='45.3482' cy='119.68' r='1.72625' transform='rotate(-120 45.3482 119.68)' fill='#8B5CF6' />
		<circle cx='71.3609' cy='104.662' r='1.72625' transform='rotate(-120 71.3609 104.662)' fill='#8B5CF6' />
		<circle cx='32.7905' cy='126.931' r='1.72625' transform='rotate(-120 32.7905 126.931)' fill='#8B5CF6' />
		<circle cx='58.2051' cy='112.258' r='1.72625' transform='rotate(-120 58.2051 112.258)' fill='#8B5CF6' />
		<circle cx='84.2176' cy='97.2391' r='1.72625' transform='rotate(-120 84.2176 97.2391)' fill='#8B5CF6' />
		<circle cx='60.3668' cy='145.693' r='1.72625' transform='rotate(-120 60.3668 145.693)' fill='#8B5CF6' />
		<circle cx='37.7528' cy='106.525' r='1.72625' transform='rotate(-120 37.7528 106.525)' fill='#8B5CF6' />
		<circle cx='86.3793' cy='130.675' r='1.72625' transform='rotate(-120 86.3793 130.675)' fill='#8B5CF6' />
		<circle cx='63.7654' cy='91.5066' r='1.72625' transform='rotate(-120 63.7654 91.5066)' fill='#8B5CF6' />
		<circle cx='47.809' cy='152.944' r='1.72625' transform='rotate(-120 47.809 152.944)' fill='#8B5CF6' />
		<circle cx='25.195' cy='113.775' r='1.72625' transform='rotate(-120 25.195 113.775)' fill='#8B5CF6' />
		<circle cx='73.2235' cy='138.27' r='1.72625' transform='rotate(-120 73.2235 138.27)' fill='#8B5CF6' />
		<circle cx='50.6096' cy='99.1019' r='1.72625' transform='rotate(-120 50.6096 99.1019)' fill='#8B5CF6' />
		<circle cx='99.2361' cy='123.252' r='1.72625' transform='rotate(-120 99.2361 123.252)' fill='#8B5CF6' />
		<circle cx='76.6221' cy='84.0833' r='1.72625' transform='rotate(-120 76.6221 84.0833)' fill='#8B5CF6' />
		<circle cx='52.7713' cy='132.537' r='1.72625' transform='rotate(-120 52.7713 132.537)' fill='#8B5CF6' />
		<circle cx='30.1573' cy='93.3689' r='1.72625' transform='rotate(-120 30.1573 93.3689)' fill='#8B5CF6' />
		<circle cx='78.7839' cy='117.519' r='1.72625' transform='rotate(-120 78.7839 117.519)' fill='#8B5CF6' />
		<circle cx='56.17' cy='78.3504' r='1.72625' transform='rotate(-120 56.17 78.3504)' fill='#8B5CF6' />
		<circle cx='40.2136' cy='139.788' r='1.72625' transform='rotate(-120 40.2136 139.788)' fill='#8B5CF6' />
		<circle cx='17.5996' cy='100.619' r='1.72625' transform='rotate(-120 17.5996 100.619)' fill='#8B5CF6' />
		<circle cx='65.6281' cy='125.115' r='1.72625' transform='rotate(-120 65.6281 125.115)' fill='#8B5CF6' />
		<circle cx='43.0141' cy='85.9466' r='1.72625' transform='rotate(-120 43.0141 85.9466)' fill='#8B5CF6' />
		<circle cx='91.6406' cy='110.096' r='1.72625' transform='rotate(-120 91.6406 110.096)' fill='#8B5CF6' />
		<circle cx='69.0267' cy='70.9275' r='1.72625' transform='rotate(-120 69.0267 70.9275)' fill='#8B5CF6' />
		<defs>
			<radialGradient
				id='paint0_radial_100_549'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(62.9999) rotate(90) scale(126)'
			>
				<stop stopColor='white' />
				<stop offset='0.569' stopColor='#E4F2FE' />
				<stop offset='0.993' stopColor='#D2E2EF' />
			</radialGradient>
		</defs>
	</svg>
);
