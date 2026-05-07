const SkillUI = ({text} : {text : string}) => {
    return (
        <div
            className="
                border-solid border border-primary
                rounded-lg
                p-2
                text-center
            "
        >{text}</div>
    )
}

export default SkillUI;