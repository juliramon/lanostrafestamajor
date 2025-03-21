import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Navbar = ({navScrolled}) => {
	const [openMenu, setOpenMenu] = useState(false);
	const [offSet, setOffset] = useState(0);

	const router = useRouter();

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, {passive: true});

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
			<div className="flex-auto md:w-1/3 relative flex items-center justify-start">
				<button
					type="button"
					className="text-sm inline-flex items-center nav__menu-button text-white"
					onClick={() => setOpenMenu(!openMenu)}
				>
					<div className="w-5 h-5 mr-2.5 flex flex-wrap items-center justify-center nav__menu-button-icon">
						<span className="w-full h-px block line_1"></span>
						<span className="w-full h-px block line_2"></span>
					</div>
					Menu
				</button>
				<div className="absolute top-[42px] md:top-[52px] -left-6 bg-primary-500 py-2.5 px-2 min-w-[300px] nav__dropdown">
					<ul>
						<li>
							<a
								href="/#introduccio"
								title="Introducció"
								className="text-white font-urbanist py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 rounded-sm transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Introducció
							</a>
						</li>
						<li>
							<a
								href="/#localitzacio"
								title="Localització"
								className="text-white font-urbanist py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 rounded-sm transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Localització
							</a>
						</li>
						<li>
							<a
								href="/#agenda"
								title="Horari i agenda"
								className="text-white font-urbanist py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 rounded-sm transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Horari i agenda
							</a>
						</li>
						<li>
							<a
								href="/#nuvis"
								title="Els nuvis"
								className="text-white font-urbanist py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 rounded-sm transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Els nuvis
							</a>
						</li>
						{/* <li>
							<a
								href="/#viatge"
								title="El viatge de noces"
								className="text-white font-urbanist py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 rounded-sm transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								El viatge de noces
							</a>
						</li> */}
						<li>
							<a
								href="/#faqs"
								title="Preguntes freqüents"
								className="text-white font-urbanist py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 rounded-sm transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Preguntes freqüents
							</a>
						</li>
						<li>
							<a
								href="/#contacte"
								title="Contacte"
								className="text-white font-urbanist py-2.5 block px-4 bg-primary-500 hover:bg-primary-400 rounded-sm transition-all duration-300 ease-in-out"
								onClick={() => setOpenMenu(!openMenu)}
							>
								Contacte
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex-auto md:w-1/3 text-center flex justify-end md:justify-center">
				<a
					href="/"
					title="Jordi & Marta"
					className="text-2xl font-tenez inline-flex items-center"
				>
					JORDI
					<span className="inline-block ml-1 mr-2">
						<svg
							width="22"
							height="24"
							viewBox="0 0 22 24"
							xmlns="http://www.w3.org/2000/svg"
							className="fill-current"
						>
							<path
								d="M18.798 11.925a22 22 0 0 1-3.109 2.886c-.546.42-1.118.805-1.689 1.189l.07-.119c.469-.401.909-.84 1.354-1.269a161 161 0 0 0 4.174-4.167c.465-.481.95-.95 1.402-1.445a22.3 22.3 0 0 1-2.202 2.925m-2.56 1.08a21.2 21.2 0 0 1 3.406-3.1Q20.304 9.426 21 9c-.362.38-.715.771-1.077 1.152a190 190 0 0 1-4.647 4.634c-.422.407-.856.803-1.276 1.214a22.4 22.4 0 0 1 2.237-2.994m.466 4.254q.643-.148 1.296-.259c-.42.155-.833.33-1.25.488q-.846.32-1.693.638-1.685.629-3.368 1.264c-.53.2-1.064.393-1.593.595L10 20a23 23 0 0 1 6.704-2.74m-4.648 2.51q-.525.13-1.056.231l.862-.376c.55-.238 1.1-.47 1.65-.707 1.09-.47 2.181-.943 3.275-1.408l.92-.39L18 17a17.5 17.5 0 0 1-5.944 2.77m-1.934.231a15.3 15.3 0 0 1 .493-6.226q.114-.389.252-.774c.095.879.16 1.756.122 2.638a15 15 0 0 1-.494 3.16c-.107.402-.235.803-.373 1.202m.893-6.15q-.005-.81-.023-1.618l.01-.232c.073 2.17.063 4.411-.031 6.561l-.021.439c.055-1.7.076-3.428.065-5.15m3.485-8.83a35 35 0 0 0-.27-.98c-.074-.253-.143-.512-.23-.762q.022-.139.049-.278c1.121 1.862 1.781 4.058 1.925 6.29.038.589.03 1.175 0 1.764q-.117.476-.254.946a42.4 42.4 0 0 0-1.22-6.98m-1.008 2.925a10.7 10.7 0 0 1-.482-3.651q.03-.651.146-1.294l.13.363q.143.42.278.84.28.87.513 1.755A34.5 34.5 0 0 1 15 11a11.5 11.5 0 0 1-1.508-3.055m2.57.656a13.5 13.5 0 0 1 3.19-4.934q.361-.35.748-.667a208 208 0 0 1-3.14 4.74c-.287.42-.584.833-.86 1.26l.063-.4m1.473-1.14q-.264.271-.535.539l.492-.6a207 207 0 0 0 2.974-3.71q.269-.345.534-.69a26.4 26.4 0 0 1-3.465 4.46m4.34.54a21.4 21.4 0 0 0-3.688 2.54 21 21 0 0 0-3.072 3.236q-.152.203-.3.408a21 21 0 0 0 1.305-3.371c.027.018.063.02.097-.007l.155-.124c.653-.27 1.266-.659 1.825-1.08.637-.48 1.21-1.032 1.714-1.646.058-.07-.027-.184-.113-.142A15 15 0 0 0 17.8 8.98a13 13 0 0 0-1.35 1.084l-.158.144q.174-.66.312-1.33c.785-.704 1.485-1.507 2.141-2.324a25.6 25.6 0 0 0 2.793-4.294c.047-.091-.076-.16-.149-.11q-.012.006-.024.016a.074.074 0 0 0-.084.03l-.04.058a13.14 13.14 0 0 0-4.088 4.46q-.143.26-.273.525.15-1.127.204-2.262.069-.075.133-.155a.12.12 0 0 0 .056-.056l.017-.037q.198-.258.377-.53.288-.431.549-.88.527-.914.927-1.886.135-.336.254-.678l.1-.201a.1.1 0 0 0 0-.095l.048-.144a.096.096 0 0 0-.165-.093c-.453.497-.873 1.015-1.219 1.59a9.3 9.3 0 0 0-1.053 2.531V4.31q.022-.847-.011-1.694a22 22 0 0 0-.264-2.557c-.016-.095-.158-.073-.15.022.174 2.26.236 4.53-.033 6.787q-.081.675-.2 1.344l-.037.094a.1.1 0 0 0 .005.088q-.123.67-.281 1.33c.039-2-.452-4.031-1.344-5.812a13 13 0 0 0-1.025-1.69c-.052-.073-.152-.026-.17.046l-.055.255c-.032-.007-.072.012-.062.052q.013.052.028.103a11.75 11.75 0 0 0 .785 7.115c.299.663.658 1.31 1.088 1.9a.12.12 0 0 0 .08.05l.005.034a.08.08 0 0 0 .05.07 19.4 19.4 0 0 1-1.512 3.345l.032-.15a6.7 6.7 0 0 0 .12-1.252c.007-.846-.12-1.69-.318-2.512-.026-.11-.18-.11-.202.002a13 13 0 0 0-.284 2.283q-.03 1.15.155 2.285c.005.033.026.06.054.08a17.7 17.7 0 0 1-3.197 3.774 15.7 15.7 0 0 0 .479-8.275c-.026-.12-.182-.109-.21.003a25.4 25.4 0 0 0-.796 6.672q.015.945.1 1.889.004.035.022.058a18 18 0 0 1-2.093 1.51c.76-1.228 1.138-2.702 1.137-4.126 0-.099-.119-.164-.19-.076-.825 1.02-1.35 2.235-1.472 3.537q-.024.268-.027.538c0 .146-.005.296.015.441q-.354.202-.719.385a16 16 0 0 1-2.831 1.104 16.6 16.6 0 0 1-3.011.529c-.244.022-.491.03-.737.034-.042 0-.041.071 0 .072 2.06.027 4.079-.42 5.958-1.236q.44-.192.865-.41c.327.03.658.018.986.006a18 18 0 0 0 1.655-.138q.41-.03.815-.109a.12.12 0 0 0 .068-.039 10.5 10.5 0 0 0 1.996-.59c.114-.046.081-.207-.033-.225-1.547-.254-3.084.125-4.558.584a17.6 17.6 0 0 0 2.2-1.54.08.08 0 0 0 .057.015l.167-.019a.05.05 0 0 0 .056.01l.054-.022c2.463-.283 4.862-1.153 6.972-2.42q.93-.558 1.783-1.229c.082-.063.025-.201-.081-.185-2.462.381-4.843 1.171-7.012 2.377q-.504.28-.992.588l.1-.093a18.3 18.3 0 0 0 2.643-3.23c.017.03.053.051.09.032.673-.342 1.305-.756 1.918-1.19q.927-.659 1.776-1.41a22.5 22.5 0 0 0 3.067-3.28c.512-.675.97-1.38 1.406-2.105.041-.069-.02-.19-.112-.14"
								fill="currentColor"
								fillRule="evenodd"
							/>
						</svg>
					</span>{" "}
					MARTA
				</a>
			</div>
			<div className="w-full md:w-1/3 hidden md:flex justify-end">
				{router.pathname == "confirmar-assistencia" ? (
					<a
						href="tel:+34678124694"
						title="Necessites ajuda?"
						className="button nav__button"
					>
						Necessites ajuda?
					</a>
				) : (
					<a
						href="/confirmar-assistencia"
						title="Com arribar-hi"
						className="button button__primary--blue inline-flex items-center"
						target="_blank"
						rel="nofollow noreferrer"
					>
						<span className="inline-block -mb-px mr-2">
							Confirmar assistència
						</span>
					</a>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
