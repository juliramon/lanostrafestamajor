import axios from "axios";

class EmailService {
	constructor() {
		let service = axios.create({
			baseURL: process.env.API_URL,
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
			},
		});
		this.service = service;
	}

	sendConfirmAttendance = (
		firstName,
		surName,
		phone,
		email,
		hasFoodAllergy,
		foodAllergies,
		hasSpecialDiet,
		specialDiet
	) => {
		return this.service
			.post("/api/send-email", {
				firstName,
				surName,
				phone,
				email,
				hasFoodAllergy,
				foodAllergies,
				hasSpecialDiet,
				specialDiet,
			})
			.then((res) => res.data);
	};
}

export default EmailService;
