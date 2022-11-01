import React, { useEffect, useState } from "react";

const PlaylistToast = () => {
	const [toast, setToast] = useState(false);
	useEffect(() => {
		setTimeout(() => setToast(true), 3000);
	}, []);
	return (
		<div className={`toast-playlist ${toast ? "show" : ""}`}>
			<div className="w-16 h-16 rounded overflow-hidden mt-0.5">
				<picture>
					<img
						src="img/spotify-cover.jpg"
						alt="La playlist oficial del casament"
						className="h-full w-full object-cover"
						width="64"
						height="64"
						loading="eager"
					/>
				</picture>
			</div>
			<div className="ml-5 text-white">
				<span className="block tracking-wider font-tenez uppercase">
					La playlist del casament
				</span>
				<a
					href="https://open.spotify.com/playlist/1NeOOivWhbywFUE00OWHXO?si=e83fa6b123274d45"
					title="Escolta-la"
					className="bg-[#1DB954] button rounded-full mt-2 py-2 hover:bg-[#168b3f] transition-all duration-300 ease-in-out text-11 group"
					target="_blank"
					rel="nofollow noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mr-1.5 fill-transparent group-hover:fill-white transition-all duration-300 ease-in-out"
						width={16}
						height={16}
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M7 4v16l13 -8z"></path>
					</svg>
					Escolta-la
				</a>
			</div>
			<button
				className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  rounded-full p-0.5 bg-white shadow-lg"
				onClick={() => setToast(false)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="text-black"
					width={16}
					height={16}
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<line x1={18} y1={6} x2={6} y2={18}></line>
					<line x1={6} y1={6} x2={18} y2={18}></line>
				</svg>
			</button>
		</div>
	);
};

export default PlaylistToast;
