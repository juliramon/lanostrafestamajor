import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = ({ navScrolled }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const [offSet, setOffset] = useState(0);

	const router = useRouter();

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });

		if (offSet > 99 || navScrolled) {
			const nav = document.querySelector("nav");
			nav.classList.add("nav--scrolled");
		} else {
			const nav = document.querySelector("nav");
			nav.classList.remove("nav--scrolled");
		}

		return () => window.removeEventListener("scroll", onScroll);
	});

	return (
		<nav
			className={`nav flex flex-wrap items-center justify-between w-full py-4 fixed top-0 z-50 px-6 ${
				openMenu ? "nav--open" : ""
			}`}
		>
			<div className="w-full md:w-1/3 relative">
				<button
					type="button"
					className="uppercase text-sm inline-flex items-center tracking-widest nav__menu-button"
					onClick={() => setOpenMenu(!openMenu)}
				>
					<div className="w-5 h-5 mr-2.5 flex flex-wrap items-center justify-center nav__menu-button-icon">
						<span className="w-full h-px block line_1"></span>
						<span className="w-full h-px block line_2"></span>
					</div>
					Menu
				</button>
				<div className="absolute top-14 -left-6 bg-primary-500 py-2.5 px-2 min-w-[300px] nav__dropdown">
					<ul>
						<li>
							<a
								href="#introduccio"
								title="Introducció"
								className="text-white font-tenez italic py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Introducció
							</a>
						</li>
						<li>
							<a
								href="#localitzacio"
								title="Localització"
								className="text-white font-tenez italic py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Localització
							</a>
						</li>
						<li>
							<a
								href="#agenda"
								title="Horari i agenda"
								className="text-white font-tenez italic py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Horari i agenda
							</a>
						</li>
						<li>
							<a
								href="#nuvis"
								title="Els nuvis"
								className="text-white font-tenez italic py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Els nuvis
							</a>
						</li>
						<li>
							<a
								href="#faqs"
								title="Preguntes freqüents"
								className="text-white font-tenez italic py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Preguntes freqüents
							</a>
						</li>
						<li>
							<a
								href="#contacte"
								title="Contacte"
								className="text-white font-tenez italic py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Contacte
							</a>
						</li>
					</ul>
				</div>
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
				{router.pathname == "confirmar-assistencia" ? (
					<a
						href="#"
						title="Confirmar assistència"
						className="button nav__button"
					>
						Confirmar assistència
					</a>
				) : (
					<a
						href="tel:+34626138170"
						title="Necessites ajuda?"
						className="button nav__button"
					>
						Necessites ajuda?
					</a>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
