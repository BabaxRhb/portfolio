interface BtnProps {
	link: string;
	text: string;
}

const LinkBtn = ({ link, text }: BtnProps) => {

	return (
		<a href={link} type="button">
			<div className="flex flex-row">
				{text}
				<img
					style={{ width: '10px', height: '10px'}}
					src="/images/arrow.svg" alt={link}
				/>
			</div>
		</a>
	)
}

export default LinkBtn;