const Agenda = ({ title, description }) => {
	return (
		<li className="bg-white hover:bg-opacity-40 hover:backdrop-blur px-6 pt-3 pb-2.5 shadow-sm font-tenez text-lg flex flex-col mb-2 hover:translate-x-6 transition-all duration-700 ease-in-out cursor-pointer">
			<h3 className="text-black text-xl mb-0">{title}</h3>
			<span className="text-gray-500 block -mt-1">{description}</span>
		</li>
	);
};

export default Agenda;
