import Head from "next/head";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Accordion from "../components/accordions/Accordion";

const Home = () => {
	const faqs = [
		{
			title: "Hem de seguir algun codi de vestimenta?",
			description: "",
		},
		{
			title: "Heu fet llista de casament, o heu obert un compte?",
			description: "",
		},
		{
			title: "Hi ha allotjaments a la vora on poder passar la nit?",
			description: "",
		},
		{
			title: "Com es diu l'espai on es celebrarà el casament?",
			description: "",
		},
		{
			title: "Hem de confirmar assistència? Com podem fer-ho?",
			description: "",
		},
		{
			title: "Sóc vegà/vegetarià i/o tinc al·lèrgies alimentàries. Què faig?",
			description: "",
		},
		{
			title: "Si tenim més dubtes, com us podem contactar?",
			description: "",
		},
	];
	return (
		<>
			<Head>
				<meta charSet="UTF-8"></meta>
				<meta
					content="width=device-width, initial-scale=1.0, minimum-scale=1"
					name="viewport"
				></meta>
				<meta name="theme-color" content="#ffffff"></meta>
				<link rel="mask-icon" href="favicon.svg" color="#ffffff"></link>
				<link rel="icon" href="favicon.svg"></link>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
				<title>Andrea & Juli - 01.04.2023</title>
				<meta
					name="description"
					content="La gran escapada, la festa on l'Andrea i en Juli faran el gran pas! Us esperem a Ca n'Alzina, Rubió (Igualada)"
				></meta>
				<link rel="canonical" href="https://www.lagranescapada.cat"></link>
				<meta name="robots" content="Index,Follow"></meta>
				<meta property="og:image" content="/share.jpg"></meta>
			</Head>
			{/* Navigation bar */}
			<Navbar />
			<div className="main">
				{/* Section cover */}
				<section className="w-full h-screen relative">
					<div className="relative w-full h-full after:absolute after:inset-0 after:bg-gradient-to-b after:from-black after:to-transparent after:opacity-50">
						<picture>
							<img
								src="img/home/cover-ca-nalzina.jpg"
								alt=""
								className="w-full h-screen object-cover"
								loading="eager"
								fetchpriority="high"
							/>
						</picture>
					</div>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<div className="max-w-lg mx-auto">
							<h1 className="text-white uppercase font-bold">
								Benvinguts a la gran escapada.
							</h1>
							<p className="text-white mt-8">
								<span className="inline-flex items-center after:w-5 after:h-px after:bg-white after:block after:ml-3 after:mr-2">
									01 d'abril 2023
								</span>{" "}
								<span className="inline-flex">
									Ca n’Alzina, Rubió (Igualada)
								</span>
							</p>
						</div>
					</div>
				</section>

				{/* Section intro  */}
				<section className="flex flex-wrap items-stretch overflow-hidden relative">
					<span id="introduccio" className="absolute -top-20"></span>
					<div className="w-full lg:w-8/12 relative lg:pt-56 lg:pb-32 flex flex-wrap items-center justify-center">
						<div className="relative z-10 max-w-lg mx-auto">
							<h2>
								Després de 9 anys i moltes escapades junts, hem dicidit que és
								el moment de fer-ne una de grossa!
							</h2>
							<p className="mt-6 text-primary-400">
								Ens fa molta il·lusió convidar-vos a formar part del nostre
								casamenT. No hi podeu faltar!
							</p>
							<a
								href="/"
								title="Confirmar assistència"
								className="button button__primary mt-12"
							>
								Confirmar assistència
							</a>
						</div>
						<div className="absolute top-0 left-0 max-w-sm z-0">
							<picture>
								<img
									src="img/home/flors-top-left.png"
									alt=""
									className="w-auto h-auto"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="absolute inset-0 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover opacity-20"
									loading="lazy"
								/>
							</picture>
						</div>
					</div>
					<div className="w-full lg:w-4/12 relative">
						<picture>
							<img
								src="img/home/flors-right.png"
								alt=""
								className="w-full h-full object-cover absolute top-0 right-9"
								loading="lazy"
							/>
						</picture>
					</div>
				</section>

				{/* Section location */}
				<section className="relative p-14 flex justify-end">
					<span id="localitzacio" className="absolute -top-20"></span>
					<div className="absolute inset-0 z-0">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.080506178645!2d1.5655592512061005!3d41.64038073659367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4411b4c26e683%3A0xdf9f2863d54d0a45!2sCa%20n&#39;Alzina%20-%20Espai%20Gastronomia!5e1!3m2!1sen!2ses!4v1665836717816!5m2!1sen!2ses"
							width="600"
							height="450"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							className="w-full h-full object-cover"
						></iframe>
					</div>
					<div className="p-14 bg-white relative z-10 w-full lg:w-5/12 overflow-hidden">
						<div className="relative z-10">
							<h2 className="my-0 max-w-lg">
								Ens veiem el proper <br /> dissabte 01 d'abril de 2023 <br /> a
								Ca N'alzina, Rubió (Igualada).
							</h2>
							<a
								href="https://g.page/canalzina?share"
								title="Com arribar-hi"
								className="button button__primary mt-8 inline-flex items-center"
								target="_blank"
								rel="nofollow noreferrer"
							>
								<span className="inline-block -mb-px mr-2">Com arribar-hi</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M8 21h4"></path>
									<path d="M10 21v-10"></path>
									<path d="M10 6v-3"></path>
									<path d="M6 6h10l2 2.5l-2 2.5h-10z"></path>
								</svg>
							</a>
						</div>
						<div className="absolute bottom-0 right-0 opacity-60 z-0 h-full">
							<picture>
								<img
									src="img/home/flors-bottom-right.png"
									alt=""
									className="w-full h-full object-contain"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="absolute inset-0 opacity-50 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</picture>
						</div>
					</div>
				</section>

				{/* Section agenda */}
				<section className="relative flex items-center">
					<span id="agenda" className="absolute -top-20"></span>
					<div className="w-full lg:w-4/12"></div>
					<div className="w-full lg:w-8/12 relative lg:pt-40 lg:pb-48">
						<div className="absolute inset-0 opacity-50 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="relative z-10 max-w-lg mx-auto">
							<h2>
								Que a quina hora heu de ser-hi, o què hi farem a Ca n'Alzina?
								Aquesta és l'agenda del dia; feu-li un cop d'ull.
							</h2>
							<ul className="mt-10">
								<li className="flex items-start">
									<svg
										width="40px"
										height="40px"
										viewBox="0 0 40 40"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g
											id="Pàgina-web"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="Desktop-HD"
												transform="translate(-1085.000000, -2569.000000)"
											>
												<g
													id="section__right"
													transform="translate(976.000000, 2354.000000)"
												>
													<g
														id="Group-22"
														transform="translate(106.000000, 82.000000)"
													>
														<g
															id="Group-11"
															transform="translate(0.000000, 132.000000)"
														>
															<g
																id="Group-10"
																transform="translate(3.000000, 0.000000)"
															>
																<g
																	id="Group-23"
																	transform="translate(0.000000, 1.000000)"
																>
																	<g
																		id="32-Valentines"
																		transform="translate(0.000000, 1.000000)"
																		fill-rule="nonzero"
																	>
																		<ellipse
																			id="Oval"
																			fill="#EBE4D4"
																			cx="28.358209"
																			cy="17.3664513"
																			rx="11.641791"
																			ry="11.103141"
																		></ellipse>
																		<path
																			d="M32.2568461,2.84695923 L4.16106437,2.84695923 C1.86297197,2.84695923 0,4.62833773 0,6.82577946 L0,31.3234743 C0,33.520916 1.86297197,35.3022945 4.16106437,35.3022945 L32.2568461,35.3022945 C34.5549385,35.3022945 36.4179104,33.520916 36.4179104,31.3234743 L36.4179104,6.82577946 C36.4179104,4.62833773 34.5549385,2.84695923 32.2568461,2.84695923 Z M4.16106437,4.49109982 L32.2568461,4.49109982 C33.6053135,4.49109982 34.6984624,5.5363715 34.6984624,6.82577946 L34.6984624,31.3234743 C34.6984624,32.6128822 33.6053135,33.6581539 32.2568461,33.6581539 L4.16106437,33.6581539 C2.81259693,33.6581539 1.71944809,32.6128822 1.71944809,31.3234743 L1.71944809,6.82577946 C1.71944809,5.5363715 2.81259693,4.49109982 4.16106437,4.49109982 Z"
																			id="Rectangle"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M34.3554953,34.1635108 C34.8350912,34.1635108 35.2238806,34.4891455 35.2238806,34.8908362 C35.2238806,36.6389941 33.5802125,38.0656131 31.5166517,38.1457071 L31.3335142,38.1492537 L5.68141113,38.1492537 C3.53282112,38.1492537 1.79104478,36.6904105 1.79104478,34.8908362 C1.79104478,34.4891455 2.17983414,34.1635108 2.65943012,34.1635108 C3.13902611,34.1635108 3.52781547,34.4891455 3.52781547,34.8908362 C3.52781547,35.8471814 4.41641999,36.6296953 5.53981162,36.6907663 L5.68141113,36.694603 L31.3335142,36.694603 C32.4753364,36.694603 33.4096138,35.9503429 33.4825291,35.0094343 L33.4871099,34.8908362 C33.4871099,34.4891455 33.8758993,34.1635108 34.3554953,34.1635108 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M9.25373134,0 C9.71298732,0 10.0914989,0.309588925 10.1432289,0.708434829 L10.1492537,0.801960348 L10.1492537,7.73891735 C10.1492537,8.18182782 9.7483147,8.5408777 9.25373134,8.5408777 C8.79447537,8.5408777 8.41596374,8.23128878 8.36423379,7.83244287 L8.35820896,7.73891735 L8.35820896,0.801960348 C8.35820896,0.359049878 8.75914799,0 9.25373134,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M27.761194,0 C28.22045,0 28.5989616,0.309588925 28.6506916,0.708434829 L28.6567164,0.801960348 L28.6567164,7.73891735 C28.6567164,8.18182782 28.2557774,8.5408777 27.761194,8.5408777 C27.3019381,8.5408777 26.9234264,8.23128878 26.8716965,7.83244287 L26.8656716,7.73891735 L26.8656716,0.801960348 C26.8656716,0.359049878 27.2666107,0 27.761194,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M35.5581864,11.3878369 C36.0329989,11.3878369 36.4179104,11.7702251 36.4179104,12.2419247 C36.4179104,12.6799315 36.0860224,13.0409299 35.6584484,13.0902664 L35.5581864,13.0960125 L0.859724043,13.0960125 C0.384911565,13.0960125 0,12.7136244 0,12.2419247 C0,11.8039179 0.331888033,11.4429195 0.759462057,11.393583 L0.859724043,11.3878369 L35.5581864,11.3878369 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M19.5723862,16.6334692 C20.1217956,16.3189316 20.8214575,16.6523295 20.8900502,17.2278577 L20.8955224,17.3206836 L20.8955224,28.2319387 C20.8955224,28.6776576 20.5068989,29.0389842 20.0275074,29.0389842 C19.5823582,29.0389842 19.2154732,28.7274322 19.1653322,28.3260572 L19.1594925,28.2319387 L19.1594925,18.764488 L16.845646,20.0900753 C16.4665931,20.3070836 15.9784885,20.220646 15.7094431,19.9033113 L15.6513937,19.8260144 C15.4179912,19.4735863 15.5109588,19.0197662 15.8522671,18.7696186 L15.9354035,18.7156466 L19.5723862,16.6334692 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																	</g>
																	<rect
																		id="Rectangle"
																		fill-opacity="0"
																		fill="#D8D8D8"
																		x="0"
																		y="0"
																		width="40"
																		height="40"
																	></rect>
																</g>
															</g>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
									<div className="ml-5">
										<h3>La recepció</h3>
										<span className="text-primary-400">
											17:00 h - Arribada a Ca n'Alzina, ben puntuals.
										</span>
									</div>
								</li>
								<li className="flex items-start mt-6">
									<svg
										width="40px"
										height="40px"
										viewBox="0 0 40 40"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g
											id="Pàgina-web"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="Desktop-HD"
												transform="translate(-1085.000000, -2569.000000)"
											>
												<g
													id="section__right"
													transform="translate(976.000000, 2354.000000)"
												>
													<g
														id="Group-22"
														transform="translate(106.000000, 82.000000)"
													>
														<g
															id="Group-11"
															transform="translate(0.000000, 132.000000)"
														>
															<g
																id="Group-10"
																transform="translate(3.000000, 0.000000)"
															>
																<g
																	id="Group-23"
																	transform="translate(0.000000, 1.000000)"
																>
																	<g
																		id="32-Valentines"
																		transform="translate(0.000000, 1.000000)"
																		fill-rule="nonzero"
																	>
																		<ellipse
																			id="Oval"
																			fill="#EBE4D4"
																			cx="28.358209"
																			cy="17.3664513"
																			rx="11.641791"
																			ry="11.103141"
																		></ellipse>
																		<path
																			d="M32.2568461,2.84695923 L4.16106437,2.84695923 C1.86297197,2.84695923 0,4.62833773 0,6.82577946 L0,31.3234743 C0,33.520916 1.86297197,35.3022945 4.16106437,35.3022945 L32.2568461,35.3022945 C34.5549385,35.3022945 36.4179104,33.520916 36.4179104,31.3234743 L36.4179104,6.82577946 C36.4179104,4.62833773 34.5549385,2.84695923 32.2568461,2.84695923 Z M4.16106437,4.49109982 L32.2568461,4.49109982 C33.6053135,4.49109982 34.6984624,5.5363715 34.6984624,6.82577946 L34.6984624,31.3234743 C34.6984624,32.6128822 33.6053135,33.6581539 32.2568461,33.6581539 L4.16106437,33.6581539 C2.81259693,33.6581539 1.71944809,32.6128822 1.71944809,31.3234743 L1.71944809,6.82577946 C1.71944809,5.5363715 2.81259693,4.49109982 4.16106437,4.49109982 Z"
																			id="Rectangle"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M34.3554953,34.1635108 C34.8350912,34.1635108 35.2238806,34.4891455 35.2238806,34.8908362 C35.2238806,36.6389941 33.5802125,38.0656131 31.5166517,38.1457071 L31.3335142,38.1492537 L5.68141113,38.1492537 C3.53282112,38.1492537 1.79104478,36.6904105 1.79104478,34.8908362 C1.79104478,34.4891455 2.17983414,34.1635108 2.65943012,34.1635108 C3.13902611,34.1635108 3.52781547,34.4891455 3.52781547,34.8908362 C3.52781547,35.8471814 4.41641999,36.6296953 5.53981162,36.6907663 L5.68141113,36.694603 L31.3335142,36.694603 C32.4753364,36.694603 33.4096138,35.9503429 33.4825291,35.0094343 L33.4871099,34.8908362 C33.4871099,34.4891455 33.8758993,34.1635108 34.3554953,34.1635108 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M9.25373134,0 C9.71298732,0 10.0914989,0.309588925 10.1432289,0.708434829 L10.1492537,0.801960348 L10.1492537,7.73891735 C10.1492537,8.18182782 9.7483147,8.5408777 9.25373134,8.5408777 C8.79447537,8.5408777 8.41596374,8.23128878 8.36423379,7.83244287 L8.35820896,7.73891735 L8.35820896,0.801960348 C8.35820896,0.359049878 8.75914799,0 9.25373134,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M27.761194,0 C28.22045,0 28.5989616,0.309588925 28.6506916,0.708434829 L28.6567164,0.801960348 L28.6567164,7.73891735 C28.6567164,8.18182782 28.2557774,8.5408777 27.761194,8.5408777 C27.3019381,8.5408777 26.9234264,8.23128878 26.8716965,7.83244287 L26.8656716,7.73891735 L26.8656716,0.801960348 C26.8656716,0.359049878 27.2666107,0 27.761194,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M35.5581864,11.3878369 C36.0329989,11.3878369 36.4179104,11.7702251 36.4179104,12.2419247 C36.4179104,12.6799315 36.0860224,13.0409299 35.6584484,13.0902664 L35.5581864,13.0960125 L0.859724043,13.0960125 C0.384911565,13.0960125 0,12.7136244 0,12.2419247 C0,11.8039179 0.331888033,11.4429195 0.759462057,11.393583 L0.859724043,11.3878369 L35.5581864,11.3878369 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M19.5723862,16.6334692 C20.1217956,16.3189316 20.8214575,16.6523295 20.8900502,17.2278577 L20.8955224,17.3206836 L20.8955224,28.2319387 C20.8955224,28.6776576 20.5068989,29.0389842 20.0275074,29.0389842 C19.5823582,29.0389842 19.2154732,28.7274322 19.1653322,28.3260572 L19.1594925,28.2319387 L19.1594925,18.764488 L16.845646,20.0900753 C16.4665931,20.3070836 15.9784885,20.220646 15.7094431,19.9033113 L15.6513937,19.8260144 C15.4179912,19.4735863 15.5109588,19.0197662 15.8522671,18.7696186 L15.9354035,18.7156466 L19.5723862,16.6334692 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																	</g>
																	<rect
																		id="Rectangle"
																		fill-opacity="0"
																		fill="#D8D8D8"
																		x="0"
																		y="0"
																		width="40"
																		height="40"
																	></rect>
																</g>
															</g>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
									<div className="ml-5">
										<h3>La cerimònia</h3>
										<span className="text-primary-400">
											17:30 a 19:30 H - Un moment per recodar
										</span>
									</div>
								</li>
								<li className="flex items-start mt-6">
									<svg
										width="40px"
										height="40px"
										viewBox="0 0 40 40"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g
											id="Pàgina-web"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="Desktop-HD"
												transform="translate(-1085.000000, -2569.000000)"
											>
												<g
													id="section__right"
													transform="translate(976.000000, 2354.000000)"
												>
													<g
														id="Group-22"
														transform="translate(106.000000, 82.000000)"
													>
														<g
															id="Group-11"
															transform="translate(0.000000, 132.000000)"
														>
															<g
																id="Group-10"
																transform="translate(3.000000, 0.000000)"
															>
																<g
																	id="Group-23"
																	transform="translate(0.000000, 1.000000)"
																>
																	<g
																		id="32-Valentines"
																		transform="translate(0.000000, 1.000000)"
																		fill-rule="nonzero"
																	>
																		<ellipse
																			id="Oval"
																			fill="#EBE4D4"
																			cx="28.358209"
																			cy="17.3664513"
																			rx="11.641791"
																			ry="11.103141"
																		></ellipse>
																		<path
																			d="M32.2568461,2.84695923 L4.16106437,2.84695923 C1.86297197,2.84695923 0,4.62833773 0,6.82577946 L0,31.3234743 C0,33.520916 1.86297197,35.3022945 4.16106437,35.3022945 L32.2568461,35.3022945 C34.5549385,35.3022945 36.4179104,33.520916 36.4179104,31.3234743 L36.4179104,6.82577946 C36.4179104,4.62833773 34.5549385,2.84695923 32.2568461,2.84695923 Z M4.16106437,4.49109982 L32.2568461,4.49109982 C33.6053135,4.49109982 34.6984624,5.5363715 34.6984624,6.82577946 L34.6984624,31.3234743 C34.6984624,32.6128822 33.6053135,33.6581539 32.2568461,33.6581539 L4.16106437,33.6581539 C2.81259693,33.6581539 1.71944809,32.6128822 1.71944809,31.3234743 L1.71944809,6.82577946 C1.71944809,5.5363715 2.81259693,4.49109982 4.16106437,4.49109982 Z"
																			id="Rectangle"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M34.3554953,34.1635108 C34.8350912,34.1635108 35.2238806,34.4891455 35.2238806,34.8908362 C35.2238806,36.6389941 33.5802125,38.0656131 31.5166517,38.1457071 L31.3335142,38.1492537 L5.68141113,38.1492537 C3.53282112,38.1492537 1.79104478,36.6904105 1.79104478,34.8908362 C1.79104478,34.4891455 2.17983414,34.1635108 2.65943012,34.1635108 C3.13902611,34.1635108 3.52781547,34.4891455 3.52781547,34.8908362 C3.52781547,35.8471814 4.41641999,36.6296953 5.53981162,36.6907663 L5.68141113,36.694603 L31.3335142,36.694603 C32.4753364,36.694603 33.4096138,35.9503429 33.4825291,35.0094343 L33.4871099,34.8908362 C33.4871099,34.4891455 33.8758993,34.1635108 34.3554953,34.1635108 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M9.25373134,0 C9.71298732,0 10.0914989,0.309588925 10.1432289,0.708434829 L10.1492537,0.801960348 L10.1492537,7.73891735 C10.1492537,8.18182782 9.7483147,8.5408777 9.25373134,8.5408777 C8.79447537,8.5408777 8.41596374,8.23128878 8.36423379,7.83244287 L8.35820896,7.73891735 L8.35820896,0.801960348 C8.35820896,0.359049878 8.75914799,0 9.25373134,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M27.761194,0 C28.22045,0 28.5989616,0.309588925 28.6506916,0.708434829 L28.6567164,0.801960348 L28.6567164,7.73891735 C28.6567164,8.18182782 28.2557774,8.5408777 27.761194,8.5408777 C27.3019381,8.5408777 26.9234264,8.23128878 26.8716965,7.83244287 L26.8656716,7.73891735 L26.8656716,0.801960348 C26.8656716,0.359049878 27.2666107,0 27.761194,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M35.5581864,11.3878369 C36.0329989,11.3878369 36.4179104,11.7702251 36.4179104,12.2419247 C36.4179104,12.6799315 36.0860224,13.0409299 35.6584484,13.0902664 L35.5581864,13.0960125 L0.859724043,13.0960125 C0.384911565,13.0960125 0,12.7136244 0,12.2419247 C0,11.8039179 0.331888033,11.4429195 0.759462057,11.393583 L0.859724043,11.3878369 L35.5581864,11.3878369 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M19.5723862,16.6334692 C20.1217956,16.3189316 20.8214575,16.6523295 20.8900502,17.2278577 L20.8955224,17.3206836 L20.8955224,28.2319387 C20.8955224,28.6776576 20.5068989,29.0389842 20.0275074,29.0389842 C19.5823582,29.0389842 19.2154732,28.7274322 19.1653322,28.3260572 L19.1594925,28.2319387 L19.1594925,18.764488 L16.845646,20.0900753 C16.4665931,20.3070836 15.9784885,20.220646 15.7094431,19.9033113 L15.6513937,19.8260144 C15.4179912,19.4735863 15.5109588,19.0197662 15.8522671,18.7696186 L15.9354035,18.7156466 L19.5723862,16.6334692 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																	</g>
																	<rect
																		id="Rectangle"
																		fill-opacity="0"
																		fill="#D8D8D8"
																		x="0"
																		y="0"
																		width="40"
																		height="40"
																	></rect>
																</g>
															</g>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
									<div className="ml-5">
										<h3>L'aperitiu</h3>
										<span className="text-primary-400">
											19:00 a 21:00 H - Per anar escalfant motors
										</span>
									</div>
								</li>
								<li className="flex items-start mt-6">
									<svg
										width="40px"
										height="40px"
										viewBox="0 0 40 40"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g
											id="Pàgina-web"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="Desktop-HD"
												transform="translate(-1085.000000, -2569.000000)"
											>
												<g
													id="section__right"
													transform="translate(976.000000, 2354.000000)"
												>
													<g
														id="Group-22"
														transform="translate(106.000000, 82.000000)"
													>
														<g
															id="Group-11"
															transform="translate(0.000000, 132.000000)"
														>
															<g
																id="Group-10"
																transform="translate(3.000000, 0.000000)"
															>
																<g
																	id="Group-23"
																	transform="translate(0.000000, 1.000000)"
																>
																	<g
																		id="32-Valentines"
																		transform="translate(0.000000, 1.000000)"
																		fill-rule="nonzero"
																	>
																		<ellipse
																			id="Oval"
																			fill="#EBE4D4"
																			cx="28.358209"
																			cy="17.3664513"
																			rx="11.641791"
																			ry="11.103141"
																		></ellipse>
																		<path
																			d="M32.2568461,2.84695923 L4.16106437,2.84695923 C1.86297197,2.84695923 0,4.62833773 0,6.82577946 L0,31.3234743 C0,33.520916 1.86297197,35.3022945 4.16106437,35.3022945 L32.2568461,35.3022945 C34.5549385,35.3022945 36.4179104,33.520916 36.4179104,31.3234743 L36.4179104,6.82577946 C36.4179104,4.62833773 34.5549385,2.84695923 32.2568461,2.84695923 Z M4.16106437,4.49109982 L32.2568461,4.49109982 C33.6053135,4.49109982 34.6984624,5.5363715 34.6984624,6.82577946 L34.6984624,31.3234743 C34.6984624,32.6128822 33.6053135,33.6581539 32.2568461,33.6581539 L4.16106437,33.6581539 C2.81259693,33.6581539 1.71944809,32.6128822 1.71944809,31.3234743 L1.71944809,6.82577946 C1.71944809,5.5363715 2.81259693,4.49109982 4.16106437,4.49109982 Z"
																			id="Rectangle"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M34.3554953,34.1635108 C34.8350912,34.1635108 35.2238806,34.4891455 35.2238806,34.8908362 C35.2238806,36.6389941 33.5802125,38.0656131 31.5166517,38.1457071 L31.3335142,38.1492537 L5.68141113,38.1492537 C3.53282112,38.1492537 1.79104478,36.6904105 1.79104478,34.8908362 C1.79104478,34.4891455 2.17983414,34.1635108 2.65943012,34.1635108 C3.13902611,34.1635108 3.52781547,34.4891455 3.52781547,34.8908362 C3.52781547,35.8471814 4.41641999,36.6296953 5.53981162,36.6907663 L5.68141113,36.694603 L31.3335142,36.694603 C32.4753364,36.694603 33.4096138,35.9503429 33.4825291,35.0094343 L33.4871099,34.8908362 C33.4871099,34.4891455 33.8758993,34.1635108 34.3554953,34.1635108 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M9.25373134,0 C9.71298732,0 10.0914989,0.309588925 10.1432289,0.708434829 L10.1492537,0.801960348 L10.1492537,7.73891735 C10.1492537,8.18182782 9.7483147,8.5408777 9.25373134,8.5408777 C8.79447537,8.5408777 8.41596374,8.23128878 8.36423379,7.83244287 L8.35820896,7.73891735 L8.35820896,0.801960348 C8.35820896,0.359049878 8.75914799,0 9.25373134,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M27.761194,0 C28.22045,0 28.5989616,0.309588925 28.6506916,0.708434829 L28.6567164,0.801960348 L28.6567164,7.73891735 C28.6567164,8.18182782 28.2557774,8.5408777 27.761194,8.5408777 C27.3019381,8.5408777 26.9234264,8.23128878 26.8716965,7.83244287 L26.8656716,7.73891735 L26.8656716,0.801960348 C26.8656716,0.359049878 27.2666107,0 27.761194,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M35.5581864,11.3878369 C36.0329989,11.3878369 36.4179104,11.7702251 36.4179104,12.2419247 C36.4179104,12.6799315 36.0860224,13.0409299 35.6584484,13.0902664 L35.5581864,13.0960125 L0.859724043,13.0960125 C0.384911565,13.0960125 0,12.7136244 0,12.2419247 C0,11.8039179 0.331888033,11.4429195 0.759462057,11.393583 L0.859724043,11.3878369 L35.5581864,11.3878369 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M19.5723862,16.6334692 C20.1217956,16.3189316 20.8214575,16.6523295 20.8900502,17.2278577 L20.8955224,17.3206836 L20.8955224,28.2319387 C20.8955224,28.6776576 20.5068989,29.0389842 20.0275074,29.0389842 C19.5823582,29.0389842 19.2154732,28.7274322 19.1653322,28.3260572 L19.1594925,28.2319387 L19.1594925,18.764488 L16.845646,20.0900753 C16.4665931,20.3070836 15.9784885,20.220646 15.7094431,19.9033113 L15.6513937,19.8260144 C15.4179912,19.4735863 15.5109588,19.0197662 15.8522671,18.7696186 L15.9354035,18.7156466 L19.5723862,16.6334692 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																	</g>
																	<rect
																		id="Rectangle"
																		fill-opacity="0"
																		fill="#D8D8D8"
																		x="0"
																		y="0"
																		width="40"
																		height="40"
																	></rect>
																</g>
															</g>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
									<div className="ml-5">
										<h3>El convit</h3>
										<span className="text-primary-400">
											21:00 a 23:30 H - Que no hi falti de res
										</span>
									</div>
								</li>
								<li className="flex items-start mt-6">
									<svg
										width="40px"
										height="40px"
										viewBox="0 0 40 40"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g
											id="Pàgina-web"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="Desktop-HD"
												transform="translate(-1085.000000, -2569.000000)"
											>
												<g
													id="section__right"
													transform="translate(976.000000, 2354.000000)"
												>
													<g
														id="Group-22"
														transform="translate(106.000000, 82.000000)"
													>
														<g
															id="Group-11"
															transform="translate(0.000000, 132.000000)"
														>
															<g
																id="Group-10"
																transform="translate(3.000000, 0.000000)"
															>
																<g
																	id="Group-23"
																	transform="translate(0.000000, 1.000000)"
																>
																	<g
																		id="32-Valentines"
																		transform="translate(0.000000, 1.000000)"
																		fill-rule="nonzero"
																	>
																		<ellipse
																			id="Oval"
																			fill="#EBE4D4"
																			cx="28.358209"
																			cy="17.3664513"
																			rx="11.641791"
																			ry="11.103141"
																		></ellipse>
																		<path
																			d="M32.2568461,2.84695923 L4.16106437,2.84695923 C1.86297197,2.84695923 0,4.62833773 0,6.82577946 L0,31.3234743 C0,33.520916 1.86297197,35.3022945 4.16106437,35.3022945 L32.2568461,35.3022945 C34.5549385,35.3022945 36.4179104,33.520916 36.4179104,31.3234743 L36.4179104,6.82577946 C36.4179104,4.62833773 34.5549385,2.84695923 32.2568461,2.84695923 Z M4.16106437,4.49109982 L32.2568461,4.49109982 C33.6053135,4.49109982 34.6984624,5.5363715 34.6984624,6.82577946 L34.6984624,31.3234743 C34.6984624,32.6128822 33.6053135,33.6581539 32.2568461,33.6581539 L4.16106437,33.6581539 C2.81259693,33.6581539 1.71944809,32.6128822 1.71944809,31.3234743 L1.71944809,6.82577946 C1.71944809,5.5363715 2.81259693,4.49109982 4.16106437,4.49109982 Z"
																			id="Rectangle"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M34.3554953,34.1635108 C34.8350912,34.1635108 35.2238806,34.4891455 35.2238806,34.8908362 C35.2238806,36.6389941 33.5802125,38.0656131 31.5166517,38.1457071 L31.3335142,38.1492537 L5.68141113,38.1492537 C3.53282112,38.1492537 1.79104478,36.6904105 1.79104478,34.8908362 C1.79104478,34.4891455 2.17983414,34.1635108 2.65943012,34.1635108 C3.13902611,34.1635108 3.52781547,34.4891455 3.52781547,34.8908362 C3.52781547,35.8471814 4.41641999,36.6296953 5.53981162,36.6907663 L5.68141113,36.694603 L31.3335142,36.694603 C32.4753364,36.694603 33.4096138,35.9503429 33.4825291,35.0094343 L33.4871099,34.8908362 C33.4871099,34.4891455 33.8758993,34.1635108 34.3554953,34.1635108 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M9.25373134,0 C9.71298732,0 10.0914989,0.309588925 10.1432289,0.708434829 L10.1492537,0.801960348 L10.1492537,7.73891735 C10.1492537,8.18182782 9.7483147,8.5408777 9.25373134,8.5408777 C8.79447537,8.5408777 8.41596374,8.23128878 8.36423379,7.83244287 L8.35820896,7.73891735 L8.35820896,0.801960348 C8.35820896,0.359049878 8.75914799,0 9.25373134,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M27.761194,0 C28.22045,0 28.5989616,0.309588925 28.6506916,0.708434829 L28.6567164,0.801960348 L28.6567164,7.73891735 C28.6567164,8.18182782 28.2557774,8.5408777 27.761194,8.5408777 C27.3019381,8.5408777 26.9234264,8.23128878 26.8716965,7.83244287 L26.8656716,7.73891735 L26.8656716,0.801960348 C26.8656716,0.359049878 27.2666107,0 27.761194,0 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M35.5581864,11.3878369 C36.0329989,11.3878369 36.4179104,11.7702251 36.4179104,12.2419247 C36.4179104,12.6799315 36.0860224,13.0409299 35.6584484,13.0902664 L35.5581864,13.0960125 L0.859724043,13.0960125 C0.384911565,13.0960125 0,12.7136244 0,12.2419247 C0,11.8039179 0.331888033,11.4429195 0.759462057,11.393583 L0.859724043,11.3878369 L35.5581864,11.3878369 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																		<path
																			d="M19.5723862,16.6334692 C20.1217956,16.3189316 20.8214575,16.6523295 20.8900502,17.2278577 L20.8955224,17.3206836 L20.8955224,28.2319387 C20.8955224,28.6776576 20.5068989,29.0389842 20.0275074,29.0389842 C19.5823582,29.0389842 19.2154732,28.7274322 19.1653322,28.3260572 L19.1594925,28.2319387 L19.1594925,18.764488 L16.845646,20.0900753 C16.4665931,20.3070836 15.9784885,20.220646 15.7094431,19.9033113 L15.6513937,19.8260144 C15.4179912,19.4735863 15.5109588,19.0197662 15.8522671,18.7696186 L15.9354035,18.7156466 L19.5723862,16.6334692 Z"
																			id="Path"
																			fill="#2F6FAF"
																		></path>
																	</g>
																	<rect
																		id="Rectangle"
																		fill-opacity="0"
																		fill="#D8D8D8"
																		x="0"
																		y="0"
																		width="40"
																		height="40"
																	></rect>
																</g>
															</g>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
									<div className="ml-5">
										<h3>La festa</h3>
										<span className="text-primary-400">
											23:30 H - Veurem sortir el sol?
										</span>
									</div>
								</li>
							</ul>
							<a
								href="https://g.page/canalzina?share"
								title="Confirmar assistència"
								className="button button__primary mt-12"
							>
								Confirmar assistència
							</a>
						</div>
					</div>
				</section>

				{/* Section countdown */}
				<section className="relative z-20 -mt-28">
					<div className="container">
						<div className="w-full lg:w-8/12 lg:mx-auto px-10 py-16 relative overflow-hidden">
							<div className="absolute inset-0 z-0">
								<picture>
									<img
										src="white-paper-texture.jpg"
										alt=""
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</picture>
							</div>
							<div className="absolute top-0 left-0 opacity-60 h-full z-10">
								<picture>
									<img
										src="img/home/flors-countdown.png"
										alt=""
										className="w-auto h-full object-contain"
										loading="lazy"
									/>
								</picture>
							</div>
							<div className="absolute top-0 right-0 opacity-60 h-full z-10">
								<picture>
									<img
										src="img/home/flors-countdown-right.png"
										alt=""
										className="w-auto h-full object-contain"
										loading="lazy"
									/>
								</picture>
							</div>
							<div className="flex items-center justify-center relative z-20">
								<div className="text-6xl font-tenez text-secondary-100 px-4 inline-flex flex-col items-center">
									187
									<span className="uppercase block text-sm">dies</span>
								</div>
								<span className="text-2xl text-secondary-100 opacity-80">
									:
								</span>
								<div className="text-6xl font-tenez text-secondary-100 px-4 inline-flex flex-col items-center">
									5<span className="uppercase block text-sm">hrs</span>
								</div>
								<span className="text-2xl text-secondary-100 opacity-80">
									:
								</span>
								<div className="text-6xl font-tenez text-secondary-100 px-4 inline-flex flex-col items-center">
									8<span className="uppercase block text-sm">min</span>
								</div>
								<span className="text-2xl text-secondary-100 opacity-80">
									:
								</span>
								<div className="text-6xl font-tenez text-secondary-100 px-4 inline-flex flex-col items-center">
									23<span className="uppercase block text-sm">seg</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Section nuvis */}
				<section className="relative lg:pt-40 lg:pb-32">
					<span id="nuvis" className="absolute -top-20"></span>
					<div className="container">
						<h2 className="text-center max-w-xl mx-auto">
							Els nuvis.
							<br /> Una breu introducció a tot el que ens ha portat fins a
							aquest punt.
						</h2>
					</div>
				</section>

				{/* Section FAQs */}
				<section className="relative">
					<span id="faqs" className="absolute -top-20"></span>
					<div className="w-full lg:w-8/12 relative lg:pt-56 lg:pb-32 flex flex-wrap items-center justify-center">
						<div className="relative z-10 max-w-2xl mx-auto">
							<h2 className="max-w-lg">
								Preguntes i respostes freqüents que, potser, us ajuden a fer
								l'espera més lleugera.
							</h2>
							<div className="accordion mt-12">
								{faqs.map((faq, idx) => (
									<Accordion
										key={idx}
										title={faq.title}
										description={faq.description}
									/>
								))}
							</div>
						</div>
						<div className="absolute top-0 left-0 max-w-sm z-0">
							<picture>
								<img
									src="img/home/flors-top-left.png"
									alt=""
									className="w-auto h-auto"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="absolute inset-0 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover opacity-20"
									loading="lazy"
								/>
							</picture>
						</div>
					</div>
					<div className="w-full lg:w-4/12 relative">
						<picture>
							<img
								src="img/home/flors-right.png"
								alt=""
								className="w-full h-full object-cover absolute top-0 right-9"
								loading="lazy"
							/>
						</picture>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
