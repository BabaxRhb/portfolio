import Container from "../components/ui/Container";
import LinkBtn from "../components/ui/LinkBtn";

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