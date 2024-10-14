const Footer = () => {
    return (
        <div id="Contact">
            <footer className="footer bg-black text-customText p-10">
                <nav>
                    <h6 className="footer-title">Contact Me</h6>
                    <p>Name: Iftekhar Rahman</p>
                    <p>Email: stormfuryultra784@gmail.com</p>
                    <p>Whatsapp: +8801975137868</p>
                    <div className="flex">
                        <p>LinkedIn: </p>
                        <a
                            className="text-blue-500 underline ml-2"
                            href="https://www.linkedin.com/in/ifti784/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.linkedin.com/in/irahman784
                        </a>
                    </div>
                    <div className="flex">
                        <p>GitHub: </p>
                        <a
                            className="text-blue-500 underline ml-2"
                            href="https://github.com/IRahman2024"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/IRahman2024
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;