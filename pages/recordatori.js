import Head from "next/head";
import React from "react";
import Navbar from "../components/global/Navbar";

const Recordatori = () => {
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
				<title>Recordatori de La Gran Escapada - Andrea & Juli</title>
				<meta
					name="description"
					content="La gran escapada, la festa on l'Andrea i en Juli faran el gran pas! Us esperem a Ca n'Alzina, Rubió (Igualada)"
				></meta>
				<link
					rel="canonical"
					href="https://www.lagranescapada.cat/confirmar-assistencia"
				></link>
				<meta name="robots" content="Index,Follow"></meta>
				<meta property="og:image" content="/share.jpg"></meta>
			</Head>

			<main>
				{/* Navigation bar */}
				<Navbar navScrolled={true} />

				<section className="flex flex-wrap items-stretch relative z-30 h-screen">
					<div className="w-full relative flex flex-wrap items-center justify-center pt-48 lg:pb-32">
						<div className="relative z-10 max-w-3xl mx-auto bg-white py-12 px-6 md:p-12">
							<video
								poster="https://res.cloudinary.com/dk2qo76qq/image/upload/v1676809293/poster-40-dies-la-gran-escapada_r1tqpi.jpg"
								controls
								autoPlay
							>
								<source
									src="https://res.cloudinary.com/dk2qo76qq/video/upload/v1676809194/40-dies-la-gran-escapada_e7ya9d.mp4"
									type="video/mp4"
								/>
							</video>
							<div className="mt-6 max-w-lg mx-auto flex flex-col items-center">
								<p className="text-xs text-center opacity-60 leading-relaxed">
									Tens al·lèrgies alimentàries o segueixes una dieta especial?
									Confirma la teva assistència i explica'ns-ho per tenir-ho en
									compte!
								</p>
								<a
									href="/confirmar-assistencia"
									title="Confirmar assistència"
									className="button button__primary--white inline-flex items-center mt-3 justify-center"
								>
									Confirmar assistència
								</a>
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
									className="w-full h-full object-cover opacity-40"
									loading="lazy"
								/>
							</picture>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Recordatori;
