import Head from "next/head";
import Footer from "../components/global/Footer";

import Navbar from "../components/global/Navbar";
import Accordion from "../components/accordions/Accordion";
import Agenda from "../components/others/Agenda";
import Counter from "../components/others/Counter";
import { useState } from "react";
import PlaylistToast from "../components/toasts/PlaylistToast";

const Home = () => {
	const faqs = [
		{
			title: "Hem de seguir algun codi de vestimenta?",
			description:
				"El codi de vestimenta del casament és entre còctel i formal, la qüestió és que vingueu ben elegants!",
		},
		{
			title: "Heu fet llista de casament, o heu obert un compte?",
			description:
				"La vostra presència serà el millor regal, però si tot i així voleu fer-nos un obsequi, agraïrem molt la vostra aportació al número de compte que hem habilitat: ES28 2100 3973 9202 0041 7262 per ajudar-nos a fer del viatge de noces un moment per recordar.",
		},
		{
			title: "Com es diu l'espai on es celebrarà el casament?",
			description:
				"L'espai on es celebrarà tant la cerimònia com el convit és Ca n'Alzina - Espai Gastronomia, i es troba situat a les afores del petit poble de Rubió (Igualada). És important no confondre el nom de l'espai amb el del poble de Ca n'Alzina; el correcte és el primer.",
		},
		{
			title: "Hem de confirmar assistència? Com podem fer-ho?",
			description:
				"Ens facilitareu l'organització del casament si ens confirmeu la vostra assistència. Podeu fer-ho tant al moment de l'entrega de les invitacions, per telèfon o a través del formulari que hem habilitat.",
		},
		{
			title: "Sóc vegà/vegetarià i/o tinc al·lèrgies alimentàries. Què faig?",
			description:
				"Si tens al·lergies alimentàries o tens certes restriccions alimentàries, ens ho pots fer saber a través del formulari de confirmació d'assistència.",
		},
		{
			title: "Si tenim més dubtes, com us podem contactar?",
			description:
				"Podeu contactar amb nosaltres per telèfon o per correu electrònic a lagranescapada2023@gmail.com",
		},
	];

	const agenda = [
		{
			title: "La recepció",
			description: "17:00 h - Arribada a Ca n'Alzina, ben puntuals",
		},
		{
			title: "La cerimònia",
			description: "17:30 a 18:30 h - Un moment per recodar",
		},
		{
			title: "Les fotografies",
			description: "18:30 a 19:00 h - Inmortalitzem el moment",
		},
		{
			title: "L'aperitiu",
			description: "19:00 a 20:30 h - Per anar escalfant motors",
		},
		{
			title: "El convit",
			description: "20:30 a 23:30 h - Que no hi falti de res",
		},
		{
			title: "La festa",
			description: "23:30 h - Veurem sortir el sol?",
		},
	];

	const [stateDeadline, setStateDeadline] = useState("April 01, 2023");

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
				<title>01.04.2023</title>
				<meta
					name="description"
					content="La gran escapada, la festa on l'Andrea i en Juli faran el gran pas! Us esperem a Ca n'Alzina - Espai Gastronomia (Rubió)!"
				></meta>
				<link rel="canonical" href="https://www.lagranescapada.cat"></link>
				<meta name="robots" content="Index,Follow"></meta>
				<meta property="og:image" content="/share.jpg"></meta>
			</Head>

			{/* Navigation bar */}
			<Navbar />

			<main>
				{/* Section cover */}
				<section className="w-full h-screen relative z-10">
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
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-auto">
						<div className="max-w-full md:max-w-lg mx-auto px-6 md:px-0">
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
				<section className="flex flex-wrap items-stretch relative z-30">
					<span id="introduccio" className="absolute -top-20"></span>
					<div className="w-full lg:w-8/12 relative lg:pt-48 lg:pb-32 flex flex-wrap items-center justify-center">
						<div className="relative z-10 max-w-lg mx-auto px-6 md:px-0 pt-10 pb-32">
							<h2>
								Després de 9 anys i moltes escapades junts, hem decidit que és
								el moment de fer-ne una de grossa!
							</h2>
							<p className="mt-6 text-primary-400">
								Ens fa molta il·lusió convidar-vos a formar part del nostre
								casamenT. No hi podeu faltar!
							</p>
							<a
								href="/confirmar-assistencia"
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
									className="w-full h-full object-cover opacity-40"
									loading="lazy"
								/>
							</picture>
						</div>
					</div>
					<div className="w-full lg:w-4/12 relative z-30">
						<iv className="absolute right-10 md:right-auto md:-left-12 -top-56 md:-top-5 z-10">
							<picture>
								<img
									src="img/home/andrea-juli-frame.png"
									className="w-24 md:w-56 h-auto rotate-6 shadow-xl"
								/>
							</picture>
						</iv>
						<picture>
							<img
								src="img/home/flors-right.png"
								alt=""
								className="w-full h-full object-cover absolute"
								loading="lazy"
							/>
						</picture>
					</div>
				</section>

				{/* Section location */}
				<section className="relative py-44 px-10 md:px-14 flex flex-wrap justify-end">
					<span id="localitzacio" className="absolute -top-20"></span>
					<div className="absolute inset-0 z-0">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.080506178645!2d1.5655592512061005!3d41.64038073659367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4411b4c26e683%3A0xdf9f2863d54d0a45!2sCa%20n&#39;Alzina%20-%20Espai%20Gastronomia!5e1!3m2!1sen!2ses!4v1665836717816!5m2!1sen!2ses"
							width="600"
							height="450"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-full h-full object-cover"
						></iframe>
					</div>
					<div className="p-6 md:p-14 bg-white relative z-10 w-full lg:w-5/12 overflow-hidden">
						<div className="relative z-10">
							<h2 className="my-0 max-w-lg">
								Ens veiem el proper <br /> dissabte 01 d'abril de 2023 a les
								17:00h a Ca N'alzina, Rubió (Igualada).
							</h2>
							<p className="mt-3 text-primary-400 max-w-lg">
								En cas de dubtes sobre com arribar a Ca N'Alzina, ens podeu fer
								un truc al{" "}
								<a
									href="tel:+34626138170"
									title="+34 626 138 170"
									className="underline hover:text-primary-500 transition-all duration-300 ease-in-out"
								>
									+34 626 138 170
								</a>
							</p>
							<div className="flex flex-wrap items-stretch mt-8">
								<a
									href="https://g.page/canalzina?share"
									title="Com arribar-hi"
									className="button button__primary inline-flex items-center w-full md:w-auto justify-center"
									target="_blank"
									rel="nofollow noreferrer"
								>
									<span className="inline-block -mb-px mr-2">
										Com arribar-hi
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
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
								<a
									href="/confirmar-assistencia"
									title="Com arribar-hi"
									className="button button__primary--blue inline-flex items-center mt-3 md:mt-0 md:ml-3 justify-center w-full md:w-auto"
									target="_blank"
									rel="nofollow noreferrer"
								>
									<span className="inline-block -mb-px mr-2">
										Confirmar assistència
									</span>
								</a>
							</div>
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
				<section className="relative flex flex-wrap items-stretch overflow-hidden">
					<span id="agenda" className="absolute -top-20"></span>
					<div className="w-full lg:w-4/12 flex flex-col relative order-2 md:order-none">
						<div className="absolute inset-0 opacity-60 z-0">
							<picture>
								<img
									src="white-paper-texture.jpg"
									alt=""
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</picture>
						</div>
						<div className="w-full lg:h-1/2">
							<picture>
								<img
									src="img/home/ca-nalzina-agenda-2.jpg"
									data-src="img/home/ca-nalzina-agenda-2.jpg"
									className="w-full h-full object-cover"
								></img>
							</picture>
						</div>
						<div className="w-full lg:h-1/2">
							<picture>
								<img
									src="img/home/ca-nalzina-agenda-1.jpg"
									data-src="img/home/ca-nalzina-agenda-1.jpg"
									className="w-full h-full object-cover"
								></img>
							</picture>
						</div>
					</div>
					<div className="w-full lg:w-8/12 relative pt-10 pb-14 px-6 md:px-0 lg:pt-40 lg:pb-52 order-1 md:order-none">
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
						<div className="relative z-10 max-w-2xl mx-auto">
							<h2 className="max-w-lg">
								Que a quina hora heu de ser-hi, o què hi farem a Ca n'Alzina?
								Aquesta és l'agenda del dia; feu-li un cop d'ull.
							</h2>
							<div className="relative">
								<ul className="mt-8 md:mt-12 relative z-20">
									{agenda.map((item, idx) => (
										<Agenda
											key={idx}
											title={item.title}
											description={item.description}
										/>
									))}
								</ul>
								<div className="flex justify-end">
									<a
										href="https://g.page/canalzina?share"
										title="Confirmar assistència"
										className="button button__primary--white mt-6 w-full md:w-auto justify-center"
									>
										Confirmar assistència
									</a>
								</div>
								<div className="absolute -top-20 -right-36 z-10 opacity-30 rotate-12">
									<picture>
										<img
											src="img/home/flors-vertical-olive.png"
											alt=""
											className="h-72"
											width=""
											height=""
											loading="lazy"
										/>
									</picture>
								</div>
								<div className="absolute top-0 -left-36 z-10 opacity-30 rotate-12">
									<picture>
										<img
											src="img/home/flors-33.png"
											alt=""
											className="h-96"
											width=""
											height=""
											loading="lazy"
										/>
									</picture>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Section nuvis */}
				<section className="relative">
					{/* Panel countdown */}
					<div className="absolute z-30 top-0 -translate-y-1/2 w-full md:w-9/12 left-1/2 -translate-x-1/2">
						<div className="container">
							<div className="w-full lg:w-8/12 lg:mx-auto px-10 py-12 md:py-20 relative overflow-hidden shadow-lg">
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
								<div className="absolute top-0 left-0 opacity-20 h-full z-10">
									<picture>
										<img
											src="img/home/flors-countdown.png"
											alt=""
											className="w-auto h-full object-contain"
											loading="lazy"
										/>
									</picture>
								</div>
								<div className="absolute top-0 right-0 opacity-20 h-full z-10">
									<picture>
										<img
											src="img/home/flors-countdown-right.png"
											alt=""
											className="w-auto h-full object-contain"
											loading="lazy"
										/>
									</picture>
								</div>
								<Counter deadline={stateDeadline} />
							</div>
						</div>
					</div>

					<span id="nuvis" className="absolute -top-20"></span>

					<div className="relative pt-64 pb-32 overflow-hidden z-20">
						<div className="container relative z-20">
							<h2 className="text-center max-w-xl mx-auto">
								Els nuvis.
								<br /> Un breu resum a tot el que ens ha portat fins a aquest
								punt.
							</h2>
							<div className="mt-14">
								<div className="flex flex-wrap justify-center relative">
									<div className="px-14 rotate-3 relative z-10">
										<picture>
											<img
												src="img/andrea-juli-timeline-nuvia.png"
												alt="Andrea Prat, la núvia"
												className="shadow-xl w-full md:w-64 h-auto mx-auto"
												loading="lazy"
											/>
										</picture>
										<div className="mt-3 text-center">
											<h3 className="text-lg text-center text-black">
												Andrea Prat, la núvia
											</h3>
											<span className="text-sm text-gray-500 max-w-xs inline-block">
												Molt fan d'il·lustrar i de qualsevol esport que l'hi
												proposis
											</span>
										</div>
									</div>
									<div className="px-14 -rotate-6 mt-14 lg:mt-0">
										<picture>
											<img
												src="img/andrea-juli-timeline-nuvi.png"
												alt="Juli Ramon, el nuvi"
												className="shadow-xl w-full md:w-64 h-auto mx-auto"
												loading="lazy"
											/>
										</picture>
										<div className="mt-3 text-center">
											<h3 className="text-lg text-center text-black">
												Juli Ramon, el nuvi
											</h3>
											<span className="text-sm text-gray-500 max-w-xs inline-block">
												Molt fan de picar codi i de dormir fins ben tard (si
												l'Andrea l'hi permet)
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap justify-center mt-16 md:mt-0">
									<div className="px-4 rotate-6 flex flex-col justify-center relative md:-left-12">
										<picture>
											<img
												src="img/andrea-juli-timeline-01.png"
												alt="22 de maig, 2013"
												className="shadow-xl w-52 h-auto mx-auto"
												loading="lazy"
											/>
										</picture>
										<div className="mt-5 text-center">
											<span className="text-sm text-gray-500">
												22 de maig, 2013
											</span>
											<span className="block mt-1 text-sm text-center normal-case text-black max-w-xs mx-auto">
												Ens coneixem a <u>sala Bikini</u> en una nit que cap
												dels dos oblidarà
											</span>
										</div>
									</div>
									<div className="px-4 -rotate-6 flex flex-col justify-center relative md:-right-12 mt-14 md:mt-20">
										<picture>
											<img
												src="img/andrea-juli-timeline-02.png"
												alt="26 d'octubre, 2013"
												className="shadow-xl w-52 h-auto mx-auto"
												loading="lazy"
											/>
										</picture>
										<div className="mt-5 text-center">
											<span className="text-sm text-gray-500">
												26 d'octubre, 2013
											</span>
											<span className="block mt-1 text-sm text-center normal-case text-black max-w-xs mx-auto">
												Comencem a sortir junts, sembla que la cosa promet
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap justify-center mt-12 md:mt-0">
									<div className="px-4 rotate-6 flex flex-col justify-center relative md:-left-12">
										<picture>
											<img
												src="img/andrea-juli-timeline-03.png"
												alt="15 maig 2015"
												className="shadow-xl w-52 h-auto mx-auto"
												loading="lazy"
											/>
										</picture>
										<div className="mt-5 text-center">
											<span className="text-sm text-gray-500">
												15 maig 2015
											</span>
											<span className="block mt-1 text-sm text-center normal-case text-black max-w-xs mx-auto">
												Primer viatge junts, de molts{" "}
												<span className="opacity-40 block">
													(Venècia, Sardenya, Suècia, Menorca, Beijing i Tai'an
													(Xina), Ginebra, Madeira, París, Helsinki i Ivalo
													(Finlàndia), Shangai i Wuxi (Xina), Àustria, Mallorca,
													País Basc, Madrid, Bèlgica
												</span>
											</span>
										</div>
									</div>
									<div className="px-4 -rotate-5 flex flex-col justify-center relative md:-right-12 mt-20">
										<picture>
											<img
												src="img/andrea-juli-timeline-04.png"
												alt="22 agost, 2017"
												className="shadow-xl w-52 h-auto mx-auto"
												loading="lazy"
											/>
										</picture>
										<div className="mt-5 text-center">
											<span className="text-sm text-gray-500">
												22 agost, 2017
											</span>
											<span className="block mt-1 text-sm text-center normal-case text-black max-w-xs mx-auto">
												Ens proposem anar a viure junts. De moment ens conformem
												amb un pis més petit que el Castell Disney
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap justify-center mt-12 md:mt-0">
									<div className="px-4 rotate-12 flex flex-col justify-center relative md:-left-12">
										<picture>
											<img
												src="img/andrea-juli-timeline-05.png"
												alt="25 agost, 2019"
												className="shadow-xl w-52 h-auto mx-auto"
												loading="lazy"
											/>
										</picture>
										<div className="mt-5 text-center">
											<span className="text-sm text-gray-500">
												25 agost, 2019
											</span>
											<span className="block mt-1 text-sm text-center normal-case text-black max-w-xs mx-auto">
												Apareix en Bru a les nostres vides, el nostre secretari
												i company d'escapades
											</span>
										</div>
									</div>
									<div className="px-4 -rotate-3 flex flex-col justify-center relative md:-right-12 mt-20">
										<picture>
											<img
												src="img/andrea-juli-timeline-06.png"
												alt="25 maig 2020"
												className="shadow-xl w-52 h-auto mx-auto -rotate-90"
												loading="lazy"
											/>
										</picture>
										<div className="text-center">
											<span className="text-sm text-gray-500">
												25 maig 2020
											</span>
											<span className="block mt-1 text-sm text-center normal-case text-black max-w-xs mx-auto">
												Finalment, després de dos anys d'obres, el covid i molts
												aprenentatges, anem a viure junts
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap justify-center mt-10">
									<div className="px-4 rotate-2 flex flex-col justify-center">
										<picture>
											<img
												src="img/andrea-juli-timeline-07.png"
												alt="29 gener 2022"
												className="shadow-xl w-52 h-auto mx-auto"
												loading="lazy"
											/>
										</picture>
										<div className="mt-5 text-center">
											<span className="text-sm text-gray-500">
												29 gener 2022
											</span>
											<span className="block mt-1 text-sm text-center normal-case text-black max-w-xs mx-auto">
												Després de vuit anys i una mica més, en Juli es decideix
												a fer la gran pregunta, i l'Andrea diu que sí. Ens
												prometem!
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<picture>
							<img
								src="img/home/flors-vertical-olive.png"
								alt=""
								className="object-cover absolute top-1/4 left-0 w-auto h-auto opacity-25"
								loading="lazy"
							/>
						</picture>
						<picture>
							<img
								src="img/home/flors-vertical-olive.png"
								alt=""
								className="object-cover absolute bottom-0 right-0 w-auto h-auto opacity-25 rotate-180"
								loading="lazy"
							/>
						</picture>
						<picture>
							<img
								src="img/home/flors-countdown-right.png"
								alt=""
								className="object-cover absolute -top-10 left-1/2 -translate-x-1/2 w-auto h-auto"
								loading="lazy"
							/>
						</picture>
						<picture>
							<img
								src="white-paper-texture.jpg"
								alt=""
								className="object-cover absolute inset-0 w-full h-full opacity-30"
								loading="lazy"
							/>
						</picture>
					</div>
				</section>

				{/* Section viatge de noces */}
				<section className="relative py-44 px-10 md:px-14 flex flex-wrap justify-center">
					<span id="viatge" className="absolute top-8"></span>
					<div className="absolute inset-0 z-0">
						<picture>
							<source
								srcSet="img/home/bg-sri-lanka-viatge-noces.webp"
								type="image/webp"
							/>
							<img
								src="img/home/bg-sri-lanka-viatge-noces.jpg"
								alt="Viatge de noces a Sri Lanka"
								className="w-full h-full object-cover"
							/>
						</picture>
					</div>
					<div className="p-6 md:p-14 bg-white relative z-10 w-full max-w-xl overflow-hidden">
						<div className="relative z-10">
							<h2 className="my-0 max-w-lg">
								El nostre viatge de Lluna de mel!
							</h2>
							<p className="mt-3 text-black max-w-lg">
								De totes les destinacions que hi ha al món, després de pensar-ho
								detingudament, hem decidit que la nostra lluna de mel la volem
								passar a Sri Lanka!
							</p>
							<p className="mt-3 text-sm normal-case text-gray-500 max-w-lg leading-normal">
								Sri Lanka és una illa situada a l'Oceà Índic, al nord de
								l'equador. A una banda hi trobem l'Índia i, a l'altre, l'estret
								de Palk. El país té una superfície total de 65.610 Km² on
								destaquen les seves platges de sorra blanca, els boscos
								muntanyosos i camps de te i, una rica història i cultura per
								conèixer.
							</p>
							<p className="mt-3 text-sm normal-case text-gray-500 max-w-lg leading-normal">
								I per què ens escapem a Sri Lanka? Perquè aquesta bella illa
								ofereix una gran combinació d'impressionants paisatges naturals,
								una gran quantitat d'activitats per gaudir a l'aire lliure,
								molts temples per descobrir, molts animals per observar i llocs
								únics on relaxar-te mentre degustes la seva cuina tradicional.
							</p>
							<p className="mt-3 text-sm normal-case text-gray-500 max-w-lg leading-normal">
								Gràcies per fer aquest somni realitat!
							</p>

							<picture className="inline-block mt-5">
								<img
									src="/signatura-andrea-juli.svg"
									alt="Signature de l'Andrea i en Juli"
									className="w-48 h-auto"
									loading="lazy"
								/>
							</picture>

							<div className="flex flex-wrap items-stretch mt-3 -m-2">
								<div className="p-2 w-full md:w-1/2">
									<a
										href="/confirmar-assistencia"
										title="Com arribar-hi"
										className="button button__primary text-center inline-flex items-center w-full mt-3 md:mt-0 justify-center "
										target="_blank"
										rel="nofollow noreferrer"
									>
										<span className="inline-block -mb-px mr-2">
											Confirmar assistència
										</span>
									</a>
								</div>
								<div className="p-2 w-full md:w-1/2">
									<a
										href="https://g.page/canalzina?share"
										title="Com hi puc col·laborar?"
										className="button button__primary--blue text-center inline-flex items-center w-full justify-center"
										target="_blank"
										rel="nofollow noreferrer"
									>
										<span className="inline-block -mb-px mr-2">
											Com hi puc col·laborar?
										</span>
									</a>
								</div>
							</div>
						</div>
						<div className="absolute bottom-0 right-0 opacity-30 z-0 h-full">
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

				{/* Section FAQs */}
				<section className="relative flex flex-wrap items-stretch">
					<span id="faqs" className="absolute -top-20"></span>
					<div className="w-full lg:w-8/12 relative lg:pt-56 lg:pb-32 flex flex-wrap items-center justify-center order-2 md:order-none">
						<div className="relative z-10 max-w-2xl mx-auto py-12 px-6 md:px-0">
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
					<div className="w-full lg:w-4/12 flex flex-col relative order-1 md:order-none">
						<div className="w-full lg:h-1/2">
							<picture>
								<img
									src="img/home/ca-nalzina-agenda-2.jpg"
									data-src="img/home/ca-nalzina-agenda-2.jpg"
									className="w-full h-full object-cover"
								></img>
							</picture>
						</div>
						<div className="w-full lg:h-1/2">
							<picture>
								<img
									src="img/home/ca-nalzina-agenda-1.jpg"
									data-src="img/home/ca-nalzina-agenda-1.jpg"
									className="w-full h-full object-cover"
								></img>
							</picture>
						</div>
						<picture>
							<img
								src="img/home/flors-right.png"
								alt=""
								className="absolute w-full h-full inset-0 opacity-60 z-0"
								loading="lazy"
							/>
						</picture>
					</div>
				</section>

				{/* Section contacte */}
				<section className="relative bg-primary-500 text-zinc-200 py-12 lg:py-24">
					<span id="contacte" className="absolute -top-20"></span>
					<div className="container relative z-20">
						<div className="w-full lg:w-8/12 lg:mx-auto">
							<div className="-mx-6 flex flex-wrap items-center justify-between">
								<div className="px-6 w-full lg:w-2/3 max-w-lg">
									<h2 className="text-zinc-200">
										Seguiu tenint dubtes? Contacteu-nos.
									</h2>
									<p className="mt-4 md:mt-6 text-zinc-300">
										Si en aquest punt seguiu teniu dubtes o preguntes que no us
										hem resolt, no dubteu en contactar-nos pels canals que
										trobareu a continuació. Estarem més que encantats
										d'ajudar-vos.
									</p>
								</div>
								<ul className="list-none m-0 px-6 w-full lg:w-1/3 mt-8 md:mt-0">
									<li className="mb-2.5">
										<h3 className="normal-case text-3xl text-zinc-200">
											<a
												href="tel:+34626138170"
												title="Contacta'ns per Whatsapp"
												className="flex items-center"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="mr-2"
													width={28}
													height={28}
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path
														stroke="none"
														d="M0 0h24v24H0z"
														fill="none"
													></path>
													<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
													<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
												</svg>
												Whatsapp
											</a>
										</h3>
									</li>
									<li className="mb-2.5">
										<h3 className="normal-case text-3xl text-zinc-50">
											<a
												href="tel:+34626138170"
												title="Contacta'ns per telèfon"
												className="flex items-center"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="mr-2"
													width={28}
													height={28}
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path
														stroke="none"
														d="M0 0h24v24H0z"
														fill="none"
													></path>
													<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
												</svg>
												Telèfon
											</a>
										</h3>
									</li>
									<li>
										<h3 className="normal-case text-3xl text-zinc-50">
											<a
												href="mailto:lagranescapada@gmail.com"
												title="Contacta'ns per correu electrònic"
												className="flex items-center relative"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="mr-2"
													width={28}
													height={28}
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path
														stroke="none"
														d="M0 0h24v24H0z"
														fill="none"
													></path>
													<rect
														x={3}
														y={5}
														width={18}
														height={14}
														rx={2}
													></rect>
													<polyline points="3 7 12 13 21 7"></polyline>
												</svg>
												Correu electrònic
											</a>
										</h3>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-opacity-90 before:w-full before:h-full before:bg-black opacity-40">
						<picture>
							<img
								src="white-paper-texture.jpg"
								alt=""
								className="w-full h-full object-cover opacity-20 mix-blend-darken"
								loading="lazy"
							/>
						</picture>
					</div>
				</section>
			</main>

			<PlaylistToast />
		</>
	);
};

export default Home;
