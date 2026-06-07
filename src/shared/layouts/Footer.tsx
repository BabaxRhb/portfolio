import Container from "../components/container/Container";
import LinkBtn from "../components/ui/button/LinkBtn";

const Footer = () => {

	const footerLinkArray = [
		{ link : "https://www.linkedin.com/in/barbara-randrianarisaona/", text: "LinkedIn" },
		{ link : "https://github.com/BabaxRhb", text: "Github" },
		{ link : "mailto:baba.randrianarisaona@gmail.com", text: "Email" },
	];

	const position = "fixed bottom-0";

	const customStyle = `backdrop-blur-lg bg-background/10 z-10`;

	return (
		<Container spacing={10} position={position} customStyle={customStyle}>
			{
				footerLinkArray.map((footerLink, index) => (
					<div key={index} className="hover:scale-105 transition-all">
						<LinkBtn
							link={footerLink.link}
							text={footerLink.text}
						/>
					</div>
				))
			}
		</Container>
	)
}

export default Footer;