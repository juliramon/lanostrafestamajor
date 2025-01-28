const colors = {
	primary: {
		100: "#ffffff",
		200: "#384498",
		300: "#E7EBF5",
		400: "#cea5a4",
		500: "#841D1B",
	},
	secondary: {
		100: "#d5d6da",
		200: "#acaeb5",
		300: "#828591",
		400: "#595d6c",
		500: "#2f3447", // text secondary
		600: "#262a39",
		700: "#1c1f2b",
		800: "#13151c",
		900: "#090a0e",
	},
};

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "false", // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: "1.5rem",
		},
		extend: {
			colors: {
				...colors,
			},
			fontSize: {
				11: "11px",
				base: "17px",
			},
			fontFamily: {
				tenez: ["Romans-Story", "sans-serif"],
				fonseca: ["Urbanist", "sans-serif"],
				forever: ["Forever", "sans-serif"],
			},
			borderRadius: {
				350: "350px",
			},
			lineHeight: {
				1.1: "1.1",
				12: "3.2",
			},
			minWidth: {
				"1/2": "50%",
			},
			height: {
				"1/2": "50%",
				"50vh": "50vh",
			},
		},
	},
	variants: {
		extend: {},
	},
};
