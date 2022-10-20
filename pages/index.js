import Head from "next/head";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Accordion from "../components/accordions/Accordion";
import Agenda from "../components/others/Agenda";
import Counter from "../components/others/Counter";
import { useState } from "react";

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

	const agenda = [
		{
			title: "La recepció",
			description: "17:00 h - Arribada a Ca n'Alzina, ben puntuals",
		},
		{
			title: "La cerimònia",
			description: "17:30 a 19:30 h - Un moment per recodar",
		},
		{
			title: "L'aperitiu",
			description: "19:00 a 21:00 h - Per anar escalfant motors",
		},
		{
			title: "El convit",
			description: "21:00 a 23:30 h - Que no hi falti de res",
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
									className="w-full h-full object-cover opacity-40"
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
				<section className="relative flex items-stretch">
					<span id="agenda" className="absolute -top-20"></span>
					<div className="w-full lg:w-4/12 flex flex-col relative">
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
					<div className="w-full lg:w-8/12 relative lg:pt-40 lg:pb-52">
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
								<ul className="mt-12 relative z-20">
									{agenda.map((item, key) => (
										<Agenda
											idx={key}
											title={item.title}
											description={item.description}
										/>
									))}
								</ul>
								<div className="flex justify-end">
									<a
										href="https://g.page/canalzina?share"
										title="Confirmar assistència"
										className="button button__primary--white mt-6"
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

				{/* Section countdown */}
				<section className="relative z-20 -mt-28">
					<div className="container">
						<div className="w-full lg:w-8/12 lg:mx-auto px-10 py-20 relative overflow-hidden">
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
							<div className="absolute top-0 right-0 opacity-40 h-full z-10">
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
