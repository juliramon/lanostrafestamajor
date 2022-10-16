import { useState } from "react";

const Accordion = ({ title, description }) => {
	const [accordionOpen, setAccordionOpen] = useState(false);

	const handleAccordionOpen = () => {
		const description = document.querySelector(".accordion__content");

		if (description.style.maxHeight) {
			description.style.maxHeight = null;
		} else {
			description.style.maxHeight = description.scrollHeight + "px";
		}

		setAccordionOpen(!accordionOpen);
	};

	return (
		<>
			<div
				className={`accordion__title ${accordionOpen ? "open" : ""}`}
				onClick={() => handleAccordionOpen()}
			>
				{title}
				<div className="w-4 h-4 flex flex-wrap items-center justify-center top-1.5 relative accordion__icon">
					<span className="bg-primary-500 w-full h-px line_1"></span>
					<span className="bg-primary-500 w-full h-px rotate-90 relative -top-1/2 line_2"></span>
				</div>
			</div>
			<div className="accordion__content">{description}</div>
		</>
	);
};

export default Accordion;
