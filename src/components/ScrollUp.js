import React from 'react';
import {FaChevronUp} from 'react-icons/fa';

export default function ScrollUp({visible}) {
	return (
		<div
			className=' fixed text-center z-50 right-4 bottom-8 overflow-hidden flex-col cursor-pointer animate-bounce duration-700 ease-in-out'
			style={visible ? {visibility: 'visible', opacity: '1'} : {visibility: 'hidden', opacity: '0'}}
		>
			<FaChevronUp
				className=' p-2 bg-primary text-4xl rounded-lg text-white'
				onClick={() => {
					window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
				}}
			/>
		</div>
	);
}
