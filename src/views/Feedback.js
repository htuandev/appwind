import React from 'react';
import Heading from '../components/Heading';
import { useWasViewed } from '../hooks/useWasViewed';

export default function Feedback() {
	return (
		<section id='feedback'>
			<div className='bg-[#E4F2FE] dark:bg-[#07102D] pt-20'>
				<div className=' box-screen'>
					<Heading title={'What Clients Say?'} />
					<div className=' flex flex-wrap mb-10'>
						{reviewers.map((r, i) => (
							<Box reviewer={r} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

const reviewers = [
	{
		reviewer_name: 'Musharof Chowdhury',
		job_title: 'Web Entrepreneur',
		avatar: '/images/reviewer-1.png',
	},
	{
		reviewer_name: 'Alex Glorio',
		job_title: 'Graphics Designer',
		avatar: '/images/reviewer-2.png',
	},
	{
		reviewer_name: 'Jonathon Smith',
		job_title: 'UI/UX Designer',
		avatar: '/images/reviewer-3.png',
	},
	{
		reviewer_name: 'David Miller',
		job_title: 'Product Designer',
		avatar: '/images/reviewer-4.png',
	},
	{
		reviewer_name: 'Adam Wilsmith',
		job_title: 'App Developer',
		avatar: '/images/reviewer-5.png',
	},
	{
		reviewer_name: 'Justin Farnandes',
		job_title: 'Seo Expert',
		avatar: '/images/reviewer-6.png',
	},
];

const Box = ({reviewer}) => {
	const {reviewer_name: name, job_title: job, avatar} = reviewer;

	const {setRef, wasViewed} = useWasViewed();
	const animation = wasViewed ? 'animate-fade-in-up delay-200' : null;

	return (
		<div className={`p-2 w-full md:w-1/2 lg:w-1/3 ${animation}`} ref={setRef}>
			<div className=' overflow-hidden relative z-10 rounded-2xl rounded-tl-none cursor-pointer bg-white dark:bg-dark p-10 shadow-[0px_5px_50px_rgba(178,152,236,0.05)] dark:hover:bg-primary dark:hover:bg-opacity-30 hover:bg-primary hover:bg-opacity-20 select-none transition-all'>
				<p className=' mb-10 text-main font-bold'>
					Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed
					diam, quis bibendum ex.
				</p>
				<div className=' flex items-center gap-4'>
					<img src={avatar} alt={name} className=' w-12 h-12 rounded-full overflow-hidden' />
					<div>
						<span className=' block text-main text-sm font-bold font-khand'>{name}</span>
						<span className=' text-xs text-grey italic'>{job}</span>
					</div>
				</div>
				<span className=' absolute top-0 right-8 -z-10'>
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
