const Navbar = () => {
    return (
        <div className="navbar bg-black py-6 px-10">
            <div className="flex-1">
                <p className="text-4xl font-rev">Iftekhar Rahman</p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Project</a></li>
                    <li><a>Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;