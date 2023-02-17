import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/global/Navbar";
import EmailService from "../services/emailService";
import FormToast from "../components/toasts/FormToast";

const ConfirmarAssistencia = () => {
	const initialState = {
		firstName: "",
		surName: "",
		phone: "",
		email: "",
		hasFoodAllergy: "false",
		foodAllergies: "",
		hasSpecialDiet: "false",
		specialDiet: "",
		serverMessage: "",
	};

	const [formData, setFormData] = useState(initialState);
	const [toastState, setToastState] = useState({
		isVisible: false,
		duration: 0,
	});
	const [alertState, setAlertState] = useState({
		isVisible: false,
		message: "Sisplau, omple tots els camps per enviar el formulari",
	});

	const handleChange = (e) => {
		if (e.target.name == "hasFoodAllergy" && e.target.value == "false") {
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
				foodAllergies: "",
			});
		} else if (e.target.name == "hasSpecialDiet" && e.target.value == "false") {
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
				specialDiet: "",
			});
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const validateFormData = (e) => {
		e.preventDefault();
		const { firstName, surName, phone, email } = formData;
		if (firstName !== "" && surName !== "" && phone !== "" && email !== "") {
			handleSubmit(firstName, surName, phone, email);
		} else {
			setAlertState({ ...alertState, isVisible: true });
			setTimeout(
				() => setAlertState({ ...alertState, isVisible: false }),
				5000
			);
		}
	};

	const emailService = new EmailService();

	const handleSubmit = (name, phone, email, website, message) => {
		emailService
			.sendConfirmAttendance(name, phone, email, website, message)
			.then((res) => {
				if (res.status === 200) {
					setFormData({
						firstName: "",
						surName: "",
						phone: "",
						email: "",
						hasFoodAllergy: "false",
						foodAllergies: "",
						hasSpecialDiet: "false",
						specialDiet: "",
						serverMessage:
							"Formulari enviat correctament! Moltes gràcies per confirmar assistència :)",
					});
					setToastState({ ...formData, isVisible: true, duration: 5000 });
					setTimeout(
						() => setToastState({ ...toastState, isVisible: false }),
						8000
					);
				}
			})
			.catch((error) => console.error(error));
	};

	const notification = toastState.isVisible ? (
		<FormToast message={formData.serverMessage} />
	) : null;

	const alertContainer = alertState.isVisible ? (
		<div className="w-full rounded-md bg-secondary-100 text-secondary-900 py-3 px-3 transition-all duration-300 ease-in-out flex items-center text-sm">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-alert-circle mr-2"
				width="22"
				height="22"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="12" cy="12" r="9" />
				<line x1="12" y1="8" x2="12" y2="12" />
				<line x1="12" y1="16" x2="12.01" y2="16" />
			</svg>
			{alertState.message}
		</div>
	) : null;

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
				<title>Confirmar assitència - Andrea & Juli</title>
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
							<h1 className="text-3xl md:text-5xl md:text-center">
								Confirmar assistència
							</h1>
							<p className="mt-3 text-gray-500 md:text-center text-base md:text-lg leading-snug font-tenez">
								Omple el formulari per confirmar la teva assistència al
								casament.
								<br />
								Envia tants formularis com persones vulguis confirmar.
							</p>
							{alertContainer}
							<form
								onSubmit={(e) => validateFormData(e)}
								className="flex flex-wrap items-start justify-center mt-9 -mx-4"
							>
								<fieldset className="w-full lg:w-1/2 mb-8 px-4">
									<label htmlFor="firstName">
										Nom <span className="text-red-400">*</span>
									</label>
									<input
										type="text"
										name="firstName"
										value={formData.firstName}
										onChange={(e) => handleChange(e)}
										required
									/>
								</fieldset>
								<fieldset className="w-full lg:w-1/2 mb-8 px-4">
									<label htmlFor="surName">
										Cognom <span className="text-red-400">*</span>
									</label>
									<input
										type="text"
										name="surName"
										value={formData.surName}
										onChange={(e) => handleChange(e)}
										required
									/>
								</fieldset>
								<fieldset className="w-full lg:w-1/2 mb-8 px-4">
									<label htmlFor="phone">
										Telèfon <span className="text-red-400">*</span>
									</label>
									<input
										type="phone"
										name="phone"
										value={formData.phone}
										onChange={(e) => handleChange(e)}
										required
									/>
								</fieldset>
								<fieldset className="w-full lg:w-1/2 mb-8 px-4">
									<label htmlFor="email">
										Correu electrònic <span className="text-red-400">*</span>
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={(e) => handleChange(e)}
										required
									/>
								</fieldset>
								<fieldset className="w-full lg:w-1/2 mb-8 px-4">
									<legend className="mb-3">
										Tens al·lèrgies alimentàries?
									</legend>
									<div className="flex items-center w-full mb-2">
										<input
											type="radio"
											id="allergy-0"
											name="hasFoodAllergy"
											className="mr-1.5"
											value="false"
											onChange={(e) => handleChange(e)}
											defaultChecked={
												formData.hasFoodAllergy == "false" ? true : false
											}
										/>
										<label htmlFor="allergy-0" className="mb-0">
											No
										</label>
									</div>
									<div className="flex items-center w-full">
										<input
											type="radio"
											id="allergy-1"
											name="hasFoodAllergy"
											className="mr-1.5"
											value="true"
											onChange={(e) => handleChange(e)}
											defaultChecked={
												formData.hasFoodAllergy == "true" ? true : false
											}
										/>
										<label htmlFor="allergy-1" className="mb-0">
											Sí
										</label>
									</div>
								</fieldset>
								<fieldset
									className={`w-full lg:w-1/2 mb-8 px-4 ${
										formData.hasFoodAllergy == "false"
											? " opacity-40"
											: "opacity-100"
									}`}
									disabled={
										formData.hasFoodAllergy == "false" ? "disabled" : ""
									}
								>
									<label htmlFor="foodAllergies">Digue'ns quines</label>
									<textarea
										placeholder="Ex. súlfits, glúten, etc."
										name="foodAllergies"
										value={formData.foodAllergies}
										onChange={(e) => handleChange(e)}
									></textarea>
								</fieldset>
								<fieldset className="w-full lg:w-1/2 mb-8 px-4">
									<legend className="mb-3">
										Segueixes alguna dieta especial?
									</legend>
									<div className="flex items-center w-full mb-2">
										<input
											type="radio"
											id="diet-0"
											name="hasSpecialDiet"
											className="mr-1.5"
											value="false"
											onChange={(e) => handleChange(e)}
											defaultChecked={
												formData.hasSpecialDiet == "false" ? true : false
											}
										/>
										<label htmlFor="diet-0" className="mb-0">
											No
										</label>
									</div>
									<div className="flex items-center w-full">
										<input
											type="radio"
											id="diet-1"
											name="hasSpecialDiet"
											className="mr-1.5"
											value="true"
											onChange={(e) => handleChange(e)}
											defaultChecked={
												formData.hasSpecialDiet == "true" ? true : false
											}
										/>
										<label htmlFor="diet-1" className="mb-0">
											Sí
										</label>
									</div>
								</fieldset>
								<fieldset
									className={`w-full lg:w-1/2 mb-8 px-4 ${
										formData.hasSpecialDiet == "false"
											? " opacity-40"
											: "opacity-100"
									}`}
									disabled={
										formData.hasSpecialDiet == "false" ? "disabled" : ""
									}
								>
									<label htmlFor="specialDiet">Diga'ns quina</label>
									<textarea
										placeholder="Ex. vegetariana, vegana, etc."
										name="specialDiet"
										value={formData.specialDiet}
										onChange={(e) => handleChange(e)}
									></textarea>
								</fieldset>
								<fieldset className="w-full lg:w-1/2 px-6 flex justify-center mt-4">
									<button
										type="submit"
										className="button button__primary--blue w-full md:w-auto justify-center"
									>
										Confirmar assistència
									</button>
								</fieldset>
							</form>
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
				{notification}
			</main>
		</>
	);
};

export default ConfirmarAssistencia;
