const colors = {
	primary: {
		100: "#ffffff",
		200: "#DAEAEF",
		300: "#E7EBF5",
		400: "#7BA5D0",
		500: "#2F6FAF",
	},
	secondary: {
		100: "#DFA92A",
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
				tenez: ["Tenez", "sans-serif"],
				fonseca: ["Fonseca", "sans-serif"],
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
