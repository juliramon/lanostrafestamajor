import {Resend} from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export default async (req, res) => {
	const {
		firstName,
		surName,
		phone,
		email,
		hasFoodAllergy,
		foodAllergies,
		hasSpecialDiet,
		specialDiet,
	} = req.body;

	const {data, error} = await resend.emails.send({
		from: `${process.env.NEXT_RESEND_FROM_EMAIL_ALIAS} <${process.env.NEXT_RESEND_FROM_EMAIL_ADDRESS}>`,
		to: [`${process.env.NEXT_RESEND_TO_EMAIL}`],
		subject: "[NOU ASSISTENT CONFIRMAT]",
		html: `<h1>Nou assistent confirmat al casament:</h1>
			<hr />
			<br />
			<ul>
				<li>
					<strong>Nom i cognoms:</strong> ${firstName} ${surName}
				</li>
				<li>
					<strong>Num. telèfon:</strong> ${phone}
				</li>
				<li>
					<strong>Correu electrònic:</strong> ${email}
				</li>
				<li>
					<strong>Té al·lèrgies alimentàries?</strong>
					${hasFoodAllergy}
				</li>
				<li>
					<strong>Quina/es:</strong> ${foodAllergies}
				</li>
				<li>
					<strong>Segueix alguna dieta especial?</strong>
					${hasSpecialDiet}
				</li>
				<li>
					<strong>Quina:</strong> ${specialDiet}
				</li>
			</ul>`,
	});

	if (error) {
		return res.status(400).json(error);
	}

	res.status(200).json(data);
};
