const SVG = ({width, height, viewBox, color}) => {
	<svg width={width} height={height} viewBox={viewBox} fill='none' xmlns='http://www.w3.org/2000/svg'>
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
				<stop stopColor={color}></stop>
				<stop offset='1' stopColor={color} stopOpacity='0'></stop>
			</linearGradient>
		</defs>
	</svg>;
};
