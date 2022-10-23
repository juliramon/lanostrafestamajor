import { useEffect, useRef, useState } from "react";

const Accordion = ({ title, description }) => {
	const [accordionOpen, setAccordionOpen] = useState(false);
	const content = useRef(null);
	const [height, setHeight] = useState("0px");

	const handleAccordionToggle = () => {
		setAccordionOpen(!accordionOpen);
		setHeight(accordionOpen ? "0px" : `${content.current.scrollHeight}px`);
	};

	return (
		<>
			<div
				className={`accordion__title ${accordionOpen ? "open" : ""}`}
				onClick={() => handleAccordionToggle()}
			>
				{title}
				<div className="w-4 h-4 flex flex-wrap items-center justify-center top-1.5 relative accordion__icon">
					<span className="bg-primary-500 w-full h-px line_1"></span>
					<span className="bg-primary-500 w-full h-px rotate-90 relative -top-1/2 line_2"></span>
				</div>
			</div>
			<div
				className="accordion__content"
				ref={content}
				style={{ maxHeight: `${height}` }}
			>
				<div className="mb-4">{description}</div>
			</div>
		</>
	);
};

export default Accordion;
