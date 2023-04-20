import React from 'react';

export default function Partner() {
	return (
		<div className='pt-20'>
			<div className='md:w-full md:mx-auto md:px-8 md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1140px] 2xl:max-w-[1320px]'>
				<div className='bg-gradient-to-l from-[#e4f2fe] to-[#ffeefe] p-8 sm:px-10 md:rounded-xl md:px-12 xl:py-12 xl:px-14 2xl:p-16'>
					<div className=' flex flex-wrap justify-center items-center'>
						{partners.map((p, i) => (
							<Logo info={p} key={i} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const partners = [
	{
		logo_name: 'uideck',
		src: 'images/uideck.svg',
		homepage: 'https://uideck.com/',
	},
	{
		logo_name: 'tailgrids',
		src: 'images/tailgrids.svg',
		homepage: 'https://tailgrids.com/',
	},
	{
		logo_name: 'lineicons',
		src: 'images/lineicons.svg',
		homepage: 'https://lineicons.com/',
	},
	{
		logo_name: 'ayroui',
		src: 'images/ayroui.svg',
		homepage: 'https://ayroui.com/',
	},
	{
		logo_name: 'plainadmin',
		src: 'images/plainadmin.svg',
		homepage: 'https://plainadmin.com/',
	},
];

const Logo = ({info}) => {
	const {src, logo_name, homepage} = info;
	return (
		<a href={homepage} target='_blank' rel='noopener noreferrer'>
			<img
				src={src}
				alt={logo_name}
				className=' flex justify-center items-center grayscale hover:grayscale-0 transition-all mx-3 sm:mx-4 xl:mx-6 max-w-[160px] lg:max-w-[130px] xl:max-w-[150px] py-4 cursor-pointer'
			/>
		</a>
	);
};
