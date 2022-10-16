import React from "react";

const Navbar = () => {
	return (
		<nav className="flex flex-wrap items-center justify-between w-full py-4 fixed top-0 z-50 px-6">
			<div className="w-full md:w-1/3">
				<button
					type="button"
					className="uppercase text-sm inline-flex items-center tracking-widest"
				>
					<svg
						className="w-5 h-5 mr-2.5"
						width="28px"
						height="28px"
						viewBox="0 0 38 38"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g id="Desktop-HD" transform="translate(-65.000000, -39.000000)">
								<g id="menu-icon" transform="translate(65.000000, 39.000000)">
									<rect
										fillOpacity="0"
										fill="#D8D8D8"
										x="0"
										y="0"
										width="38"
										height="38"
									></rect>
									<g
										transform="translate(3.000000, 11.000000)"
										fill="currentColor"
									>
										<rect x="0" y="0" width="33" height="3"></rect>
										<rect x="0" y="13" width="33" height="3"></rect>
									</g>
								</g>
							</g>
						</g>
					</svg>
					Menu
				</button>
			</div>
			<div className="w-full md:w-1/3 text-center flex justify-center">
				<a
					href="/"
					title="Andrea & Juli"
					className="uppercase  text-2xl font-tenez tracking-wider"
				>
					Andrea & Juli
				</a>
			</div>
			<div className="w-full md:w-1/3 flex justify-end">
				<a href="#" title="Confirmar assistència" className="button">
					Confirmar assistència
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
