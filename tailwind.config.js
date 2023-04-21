module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			sm: '540px',
			md: '768px',
			lg: '992px',
			xl: '1140px',
			'2xl': '1320px',
		},
		fontFamily: {
			khand: ['Khand', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#8b5cf6',
				dark: '#1d2144',
				grey: '#9699A6',
			},
			animation: {
				'fade-in-up': 'fade-in-up 1s ease-in-out',
				'fade-in-right': 'fade-in-right 1s ease-in-out',
				'fade-in-left': 'fade-in-left 1s ease-in-out',
			},
		},
	},
	plugins: [],
};
