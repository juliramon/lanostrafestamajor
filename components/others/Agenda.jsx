const Agenda = ({icon, title, description}) => {
	return (
		<li className="bg-white hover:bg-opacity-40 hover:backdrop-blur px-6 pt-3 pb-2.5 shadow-sm font-tenez text-lg flex flex-col mb-2 hover:translate-x-6 transition-all duration-700 ease-in-out cursor-pointer">
			<div className="inline-flex items-center gap-2">
				<h3 className="text-secondary-500 text-xl mb-0">{title}</h3>
			</div>
			<span className={`font-fonseca text-secondary-300 block -mt-1`}>
				{description}
			</span>
		</li>
	);
};

export default Agenda;
