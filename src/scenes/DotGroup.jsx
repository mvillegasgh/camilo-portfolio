import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
	const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
    before:top-[-50%]`;

	return (
		<div className="flex flex-col gap-6 fixed top-[60%] right-7">
			<AnchorLink
				className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
				href="#home"
				onClick={() => setSelectedPage("home")}
			/>
			<AnchorLink
				className={`${selectedPage === "Work" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
				href="#Work"
				onClick={() => setSelectedPage("Work")}
			/>
			<AnchorLink
				className={`${selectedPage === "Bio" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
				href="#Bio"
				onClick={() => setSelectedPage("Bio")}
			/>
			<AnchorLink
				className={`${
					selectedPage === "Contact" ? selectedStyles : "bg-dark-grey"
				}
        w-3 h-3 rounded-full`}
				href="#Contact"
				onClick={() => setSelectedPage("Contact")}
			/>
		</div>
	);
};

export default DotGroup;
