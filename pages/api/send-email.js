// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY);

async function sendEmail(req, res) {
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
	try {
		await sendgrid.send({
			to: "lagranescapada2023@gmail.com",
			from: "social@escapadesenparella.cat",
			subject: `[NOU ASSISTENT CONFIRMAT]`,
			html: `<p>Nou assistent confirmat al casament:</p>
      <ul>
      <li><strong>Nom i cognoms:</strong> ${firstName} ${surName}</li>
      <li><strong>Num. telèfon:</strong> ${phone}</li>
      <li><strong>Correu electrònic:</strong> ${email}</li>
	  <li><strong>Té al·lèrgies alimentàries?</strong> ${hasFoodAllergy}</li>
	  <li><strong>Quina/es:</strong> ${foodAllergies}</li>
	  <li><strong>Segueix alguna dieta especial?</strong> ${hasSpecialDiet}</li>
	  <li><strong>Quina:</strong> ${foospecialDietdAllergies}</li>
      </ul>`,
		});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
	return res.status(200).json({ status: 200 });
}

export default sendEmail;
