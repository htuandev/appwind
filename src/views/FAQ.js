import React from 'react';
import Heading from '../components/Heading';

export default function FAQ() {
	return (
		<section id='faq' className='overflow-hidden'>
			<div className='box-screen pt-20'>
				<Heading title={'Frequently Asked Questions'} />
				<div className=' flex flex-wrap'>
					<div className=' px-4 w-full lg:w-1/2'>
						<div className=' relative mb-12 lg:mb-0'>
							<Box />
							<div className=' absolute -z-10 bottom-4 -left-16'>
								<LeftSVG />
							</div>
						</div>
					</div>
					<div className=' px-4 w-full lg:w-1/2'>
						<div className=' relative mb-12 lg:mb-0'>
							<Box />
                            <div className=' absolute -z-10 -top-12 -right-16'>
								<RightSVG />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const Box = () => (
	<div className='z-10 bg-white dark:bg-dark rounded-3xl border-[2px] overflow-hidden mb-12 relative px-8 py-10 sm:p-12 md:p-8 lg:p-5 xl:p-9 2xl:p-12 border-primary'>
		<div className='mb-12'>
			<span className=' mb-4 font-bold text-main text-lg sm:text-2xl lg:text-xl xl:text-2xl block'>
				Which plan is suitable for me?
			</span>
			<span className='text-grey '>
				Sed tempor mi at nunc commodo, quis tincidunt turpis finibus. Pellentesque congue neque justo.
			</span>
		</div>
		<div className='mb-12'>
			<span className=' mb-4 font-bold text-main text-lg sm:text-2xl lg:text-xl xl:text-2xl  block'>
				Will I get free future updates?
			</span>
			<span className='text-grey '>
				Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique at sit amet elit.
			</span>
		</div>
		<div>
			<span className=' mb-4 font-bold text-main text-lg sm:text-2xl lg:text-xl xl:text-2xl block'>
				Do you provide support?
			</span>
			<span className='text-grey '>
				Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique.
			</span>
		</div>
	</div>
);

const RightSVG = () => (
	<svg width='170' height='183' viewBox='0 0 170 183' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M116 138.694C145.662 121.568 155.815 83.655 138.694 54.0002C121.572 24.3454 83.662 14.1812 54 31.3066C24.3524 48.4237 14.1852 86.3454 31.3064 116C48.4276 145.655 86.3524 155.811 116 138.694Z'
			fill='url(#paint0_radial_100_227)'
		></path>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M54 84C74.9924 84 92 66.9873 92 46C92 25.0127 74.9924 8 54 8C33.0178 8 16 25.0127 16 46C16 66.9873 33.0178 84 54 84Z'
			fill='url(#paint1_radial_100_227)'
		></path>
		<circle cx='95.3482' cy='146.68' r='1.72625' transform='rotate(-120 95.3482 146.68)' fill='#8B5CF6'></circle>
		<circle cx='121.361' cy='131.663' r='1.72625' transform='rotate(-120 121.361 131.663)' fill='#8B5CF6'></circle>
		<circle cx='82.7904' cy='153.931' r='1.72625' transform='rotate(-120 82.7904 153.931)' fill='#8B5CF6'></circle>
		<circle cx='108.205' cy='139.258' r='1.72625' transform='rotate(-120 108.205 139.258)' fill='#8B5CF6'></circle>
		<circle cx='134.218' cy='124.239' r='1.72625' transform='rotate(-120 134.218 124.239)' fill='#8B5CF6'></circle>
		<circle cx='110.367' cy='172.693' r='1.72625' transform='rotate(-120 110.367 172.693)' fill='#8B5CF6'></circle>
		<circle cx='87.7528' cy='133.525' r='1.72625' transform='rotate(-120 87.7528 133.525)' fill='#8B5CF6'></circle>
		<circle cx='136.379' cy='157.675' r='1.72625' transform='rotate(-120 136.379 157.675)' fill='#8B5CF6'></circle>
		<circle cx='113.765' cy='118.507' r='1.72625' transform='rotate(-120 113.765 118.507)' fill='#8B5CF6'></circle>
		<circle cx='97.8089' cy='179.944' r='1.72625' transform='rotate(-120 97.8089 179.944)' fill='#8B5CF6'></circle>
		<circle cx='75.195' cy='140.775' r='1.72625' transform='rotate(-120 75.195 140.775)' fill='#8B5CF6'></circle>
		<circle cx='123.223' cy='165.27' r='1.72625' transform='rotate(-120 123.223 165.27)' fill='#8B5CF6'></circle>
		<circle cx='100.61' cy='126.102' r='1.72625' transform='rotate(-120 100.61 126.102)' fill='#8B5CF6'></circle>
		<circle cx='149.236' cy='150.252' r='1.72625' transform='rotate(-120 149.236 150.252)' fill='#8B5CF6'></circle>
		<circle cx='126.622' cy='111.084' r='1.72625' transform='rotate(-120 126.622 111.084)' fill='#8B5CF6'></circle>
		<circle cx='102.771' cy='159.538' r='1.72625' transform='rotate(-120 102.771 159.538)' fill='#8B5CF6'></circle>
		<circle cx='80.1573' cy='120.369' r='1.72625' transform='rotate(-120 80.1573 120.369)' fill='#8B5CF6'></circle>
		<circle cx='128.784' cy='144.52' r='1.72625' transform='rotate(-120 128.784 144.52)' fill='#8B5CF6'></circle>
		<circle cx='106.17' cy='105.351' r='1.72625' transform='rotate(-120 106.17 105.351)' fill='#8B5CF6'></circle>
		<circle cx='90.2135' cy='166.788' r='1.72625' transform='rotate(-120 90.2135 166.788)' fill='#8B5CF6'></circle>
		<circle cx='67.5996' cy='127.62' r='1.72625' transform='rotate(-120 67.5996 127.62)' fill='#8B5CF6'></circle>
		<circle cx='115.628' cy='152.115' r='1.72625' transform='rotate(-120 115.628 152.115)' fill='#8B5CF6'></circle>
		<circle cx='93.0141' cy='112.947' r='1.72625' transform='rotate(-120 93.0141 112.947)' fill='#8B5CF6'></circle>
		<circle cx='141.641' cy='137.096' r='1.72625' transform='rotate(-120 141.641 137.096)' fill='#8B5CF6'></circle>
		<circle cx='119.027' cy='97.928' r='1.72625' transform='rotate(-120 119.027 97.928)' fill='#8B5CF6'></circle>
		<defs>
			<radialGradient
				id='paint0_radial_100_227'
				cx='0'
				cy='0'
				r='1'
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(54 31.3066) rotate(60) scale(124)'
			>
				<stop stopColor='white'></stop>
				<stop offset='0.569' stopColor='#FFEEFE'></stop>
				<stop offset='0.993' stopColor='#F1C6EF'></stop>
			</radialGradient>
			<radialGradient
				id='paint1_radial_100_227'
				cx='0'
				cy='0'
				r='1'
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(54 8) rotate(90) scale(76)'
			>
				<stop stopColor='white'></stop>
				<stop offset='0.569' stopColor='#E4F2FE'></stop>
				<stop offset='0.993' stopColor='#D2E2EF'></stop>
			</radialGradient>
		</defs>
	</svg>
);

const LeftSVG = () => (
	<svg width='170' height='198' viewBox='0 0 170 198' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M115.694 166.387C145.356 149.262 155.508 111.348 138.387 81.6936C121.266 52.0388 83.3556 41.8746 53.6936 59C24.046 76.117 13.8788 114.039 31 143.694C48.1212 173.348 86.046 183.504 115.694 166.387Z'
			fill='url(#paint0_radial_100_226)'
		></path>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M64.6936 109.694C85.686 109.694 102.694 92.6809 102.694 71.6936C102.694 50.7063 85.686 33.6936 64.6936 33.6936C43.7114 33.6936 26.6936 50.7063 26.6936 71.6936C26.6936 92.6809 43.7114 109.694 64.6936 109.694Z'
			fill='url(#paint1_radial_100_226)'
		></path>
		<circle cx='72.1069' cy='51.1106' r='1.72625' transform='rotate(-120 72.1069 51.1106)' fill='#8B5CF6'></circle>
		<circle cx='98.1196' cy='36.0928' r='1.72625' transform='rotate(-120 98.1196 36.0928)' fill='#8B5CF6'></circle>
		<circle cx='59.5491' cy='58.3611' r='1.72625' transform='rotate(-120 59.5491 58.3611)' fill='#8B5CF6'></circle>
		<circle cx='84.9638' cy='43.688' r='1.72625' transform='rotate(-120 84.9638 43.688)' fill='#8B5CF6'></circle>
		<circle cx='110.976' cy='28.6695' r='1.72625' transform='rotate(-120 110.976 28.6695)' fill='#8B5CF6'></circle>
		<circle cx='87.1254' cy='77.1236' r='1.72625' transform='rotate(-120 87.1254 77.1236)' fill='#8B5CF6'></circle>
		<circle cx='64.5115' cy='37.9551' r='1.72625' transform='rotate(-120 64.5115 37.9551)' fill='#8B5CF6'></circle>
		<circle cx='113.138' cy='62.1053' r='1.72625' transform='rotate(-120 113.138 62.1053)' fill='#8B5CF6'></circle>
		<circle cx='90.5241' cy='22.9371' r='1.72625' transform='rotate(-120 90.5241 22.9371)' fill='#8B5CF6'></circle>
		<circle cx='74.5676' cy='84.3741' r='1.72625' transform='rotate(-120 74.5676 84.3741)' fill='#8B5CF6'></circle>
		<circle cx='51.9537' cy='45.2054' r='1.72625' transform='rotate(-120 51.9537 45.2054)' fill='#8B5CF6'></circle>
		<circle cx='99.9822' cy='69.7005' r='1.72625' transform='rotate(-120 99.9822 69.7005)' fill='#8B5CF6'></circle>
		<circle cx='77.3682' cy='30.5323' r='1.72625' transform='rotate(-120 77.3682 30.5323)' fill='#8B5CF6'></circle>
		<circle cx='125.995' cy='54.6824' r='1.72625' transform='rotate(-120 125.995 54.6824)' fill='#8B5CF6'></circle>
		<circle cx='103.381' cy='15.514' r='1.72625' transform='rotate(-120 103.381 15.514)' fill='#8B5CF6'></circle>
		<circle cx='79.5299' cy='63.9678' r='1.72625' transform='rotate(-120 79.5299 63.9678)' fill='#8B5CF6'></circle>
		<circle cx='56.916' cy='24.7994' r='1.72625' transform='rotate(-120 56.916 24.7994)' fill='#8B5CF6'></circle>
		<circle cx='105.543' cy='48.9498' r='1.72625' transform='rotate(-120 105.543 48.9498)' fill='#8B5CF6'></circle>
		<circle cx='82.9287' cy='9.78106' r='1.72625' transform='rotate(-120 82.9287 9.78106)' fill='#8B5CF6'></circle>
		<circle cx='66.9722' cy='71.2183' r='1.72625' transform='rotate(-120 66.9722 71.2183)' fill='#8B5CF6'></circle>
		<circle cx='44.3583' cy='32.0499' r='1.72625' transform='rotate(-120 44.3583 32.0499)' fill='#8B5CF6'></circle>
		<circle cx='92.3868' cy='56.5452' r='1.72625' transform='rotate(-120 92.3868 56.5452)' fill='#8B5CF6'></circle>
		<circle cx='69.7728' cy='17.3768' r='1.72625' transform='rotate(-120 69.7728 17.3768)' fill='#8B5CF6'></circle>
		<circle cx='118.399' cy='41.5267' r='1.72625' transform='rotate(-120 118.399 41.5267)' fill='#8B5CF6'></circle>
		<circle cx='95.7854' cy='2.35821' r='1.72625' transform='rotate(-120 95.7854 2.35821)' fill='#8B5CF6'></circle>
		<defs>
			<radialGradient
				id='paint0_radial_100_226'
				cx='0'
				cy='0'
				r='1'
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(53.6936 59) rotate(60) scale(124)'
			>
				<stop stopColor='white'></stop>
				<stop offset='0.569' stopColor='#FFEEFE'></stop>
				<stop offset='0.993' stopColor='#F1C6EF'></stop>
			</radialGradient>
			<radialGradient
				id='paint1_radial_100_226'
				cx='0'
				cy='0'
				r='1'
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(64.6936 33.6936) rotate(90) scale(76)'
			>
				<stop stopColor='white'></stop>
				<stop offset='0.569' stopColor='#E4F2FE'></stop>
				<stop offset='0.993' stopColor='#D2E2EF'></stop>
			</radialGradient>
		</defs>
	</svg>
);
