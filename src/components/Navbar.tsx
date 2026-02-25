const Navbar = () => {

    const  navbarArray : {
        title : string,
        link : string
    }[] = [
        {title: 'About', link: "/about"},
        {title: 'Skills', link: "/skills"},
        {title: 'Projects', link: "/projects"},
        {title: 'Contact', link: "/contact"},
    ]

    return (
        <nav className="flex flex-row justify-between items-center w-full mx-5">
            { navbarArray.map((item, index) => (
                <div key={index}>
                    <a href={item.link}>{item.title}</a>
                </div>
            ))}
        </nav>
    )
}

export default Navbar;