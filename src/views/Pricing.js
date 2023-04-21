import React from 'react';
import Heading from '../components/Heading';
import {FaCheck} from 'react-icons/fa';

export default function Pricing() {
	return (
		<section id='pricing'>
			<div className=' box-screen pt-20'>
				<Heading title={'Flexible Plans'} />
				<div className=' grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
					{planList.map((p, i) => (
						<Box plan={p} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}

const planList = [
	{
		plan_name: 'Basic Plan',
		price: '$35',
		list_services: ['Life time free updates!', 'Unlimited transactions', 'Free credit-card', '1 year premium support'],
	},
	{
		plan_name: 'Popular Plan',
		price: '$99',
		list_services: ['Life time free updates!', 'Unlimited transactions', 'Free credit-card', '2 year premium support'],
	},
	{
		plan_name: 'Golden Plan',
		price: '$159',
		list_services: [
			'Life time free updates!',
			'Unlimited transactions',
			'Free credit-card',
			'Lifetime premium support',
		],
	},
];

const Box = ({plan}) => {
	const {plan_name, price, list_services} = plan;

	return (
		<div className='rounded-3xl border-[#EEF3FF] dark:border-[#07102D] border-[2px] overflow-hidden relative px-8 py-10 sm:p-12 md:p-8 lg:p-5 xl:p-9 2xl:p-12 transition-all hover:border-primary dark:hover:border-primary cursor-pointer'>
			<span className=' mb-2 block text-xl font-bold font-khand text-main'>{plan_name}</span>
			<span className=' text-4xl font-khand font-bold text-main'>
				{price}
				<span className='text-base ml-2'>/month</span>
			</span>
			<div className='pt-24'>
				{list_services.map((s, i) => (
					<div className=' flex gap-4 items-center text-grey' key={i}>
						<FaCheck />
						<span className='text-grey'>{s}</span>
					</div>
				))}
			</div>
			<div className=' btn mt-11 text-center p-3'>{`Choose ${plan_name}`}</div>
			<div>
				<span className=' absolute left-0 top-0 -z-10'>
					<svg width='294' height='190' viewBox='0 0 294 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M199.25 163.88C109.57 215.656 -5.10297 184.93 -56.8797 95.2499C-108.656 5.57007 -77.9297 -109.103 11.7501 -160.88C101.43 -212.656 216.103 -181.93 267.88 -92.25C319.657 -2.57014 288.93 112.103 199.25 163.88Z'
							fill='url(#paint0_linear_100_168)'
						></path>
						<defs>
							<linearGradient
								id='paint0_linear_100_168'
								x1='-53.0679'
								y1='-96.4761'
								x2='331.837'
								y2='237.372'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#E4F2FE'></stop>
								<stop offset='1' stopColor='#E4F2FE' stopOpacity='0'></stop>
							</linearGradient>
						</defs>
					</svg>
				</span>
				<span className=' absolute top-0 right-0 -z-10'>
					<svg width='138' height='104' viewBox='0 0 138 104' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M161 23.5C161 67.9589 124.959 104 80.5 104C36.0411 104 0 67.9589 0 23.5C0 -20.9589 36.0411 -57 80.5 -57C124.959 -57 161 -20.9589 161 23.5Z'
							fill='url(#paint0_linear_100_167)'
						></path>
						<defs>
							<linearGradient
								id='paint0_linear_100_167'
								x1='149.5'
								y1='72.5'
								x2='-51.5'
								y2='-35'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#FFEEFE'></stop>
								<stop offset='1' stopColor='#FFEEFE' stopOpacity='0'></stop>
							</linearGradient>
						</defs>
					</svg>
				</span>
				<span className=' absolute top-0 right-32 -z-10'>
					<svg width='63' height='30' viewBox='0 0 63 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle
							cx='7.21563'
							cy='10.1013'
							r='1.14106'
							transform='rotate(-118.771 7.21563 10.1013)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='24.8191'
							cy='0.43515'
							r='1.14106'
							transform='rotate(-118.771 24.8191 0.43515)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='16.7716'
							cy='27.5037'
							r='1.14106'
							transform='rotate(-118.771 16.7716 27.5037)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='2.38256'
							cy='1.2995'
							r='1.14106'
							transform='rotate(-118.771 2.38256 1.2995)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='25.5737'
							cy='22.6717'
							r='1.14106'
							transform='rotate(-118.771 25.5737 22.6717)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='34.3754'
							cy='17.8386'
							r='1.14106'
							transform='rotate(-118.771 34.3754 17.8386)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='43.1771'
							cy='13.0056'
							r='1.14106'
							transform='rotate(-118.771 43.1771 13.0056)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='51.9788'
							cy='8.17249'
							r='1.14106'
							transform='rotate(-118.771 51.9788 8.17249)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='60.5805'
							cy='3.44925'
							r='1.14106'
							transform='rotate(-118.771 60.5805 3.44925)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='11.9389'
							cy='18.7029'
							r='1.14106'
							transform='rotate(-118.771 11.9389 18.7029)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='20.7405'
							cy='13.8698'
							r='1.14106'
							transform='rotate(-118.771 20.7405 13.8698)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='29.5423'
							cy='9.0368'
							r='1.14106'
							transform='rotate(-118.771 29.5423 9.0368)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='38.344'
							cy='4.2038'
							r='1.14106'
							transform='rotate(-118.771 38.344 4.2038)'
							fill='#8B5CF6'
						></circle>
						<circle
							cx='47.1458'
							cy='-0.62915'
							r='1.14106'
							transform='rotate(-118.771 47.1458 -0.62915)'
							fill='#8B5CF6'
						></circle>
					</svg>
				</span>
			</div>
		</div>
	);
};
