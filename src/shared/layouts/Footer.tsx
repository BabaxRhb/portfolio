import Container from "../components/container/Container";
import LinkBtn from "../components/ui/button/LinkBtn";

const Footer = () => {

	const footerLinkArray = [
		{ link : "#", text: "LinkedIn" },
		{ link : "#", text: "Github" },
		{ link : "#", text: "Email" },
	];

	return (
		<Container spacing={10}>
			{
				footerLinkArray.map((footerLink, index) => (
					<div key={index}>
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