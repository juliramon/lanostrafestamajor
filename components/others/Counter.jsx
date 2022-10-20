import { useEffect, useState } from "react";

const Counter = ({ deadline }) => {
	const [state, setState] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		getTimeUntil(deadline);
		setInterval(() => getTimeUntil(deadline), 1000);
	}, []);

	const leading0 = (num) => (num < 10 ? "0" + num : num);

	const getTimeUntil = (deadline) => {
		const time = Date.parse(deadline) - Date.parse(new Date());
		if (time < 0) {
			setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
		} else {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));
			setState({ days, hours, minutes, seconds });
		}
	};

	return (
		<div className="flex items-center justify-center relative z-20">
			<div className="text-6xl font-tenez text-secondary-100 px-4 inline-flex flex-col items-center">
				{leading0(state.days)}
				<span className="uppercase block text-lg">dies</span>
			</div>
			<span className="text-2xl text-secondary-100 opacity-80">:</span>
			<div className="text-6xl font-tenez text-secondary-100 px-4 inline-flex flex-col items-center min-w-[100px]">
				{leading0(state.hours)}
				<span className="uppercase block text-lg">hrs</span>
			</div>
			<span className="text-2xl text-secondary-100 opacity-80">:</span>
			<div className="text-6xl font-tenez text-secondary-100 px-4 inline-flex flex-col items-center min-w-[100px]">
				{leading0(state.minutes)}
				<span className="uppercase block text-lg">min</span>
			</div>
			<span className="text-2xl text-secondary-100 opacity-80">:</span>
			<div className="text-6xl font-tenez text-secondary-100 px-4 inline-flex flex-col items-center min-w-[100px]">
				{leading0(state.seconds)}
				<span className="uppercase block text-lg">seg</span>
			</div>
		</div>
	);
};

export default Counter;
