const Navbar = () => {

    const  navbarArray : {
        title : string,
        link : string
    }[] = [
        {title: 'About', link: "/about"},
        {title: 'Skills', link: "/skills"},
        {title: 'Projects', link: "/projects"},
    ]

    return (
        <nav className="flex flex-row items-center w-full">
            { navbarArray.map((item, index) => (
                <div key={index} className="mx-5">
                    <a href={item.link} className="text-text max-sm:text-lg text-2xl font-bold">{item.title}</a>
                </div>
            ))}
        </nav>
    )
}

export default Navbar;