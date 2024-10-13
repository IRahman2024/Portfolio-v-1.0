const Projects = () => {
    return (
        <div className="grid text-center mt-9">
            <h1 className="text-4xl font-titi mb-9">Projects</h1>
            <div className="flex justify-evenly mx-28">
                <img
                    className="ml-4 w-1/2 max-w-[18.125rem] md:max-w-[37.5rem] h-auto"
                    src="/amar-bari-laptop.png" alt="" />
                <div className="text-start ml-3">
                    <h4 className="text-4xl text-customText font-titi font-semibold">Amar Bari</h4>
                    <p className="mt-5 font-teko text-4xl">Amar Bari is a user-friendly platform showcasing various residential properties. I developed this website from scratch using the frontend tools I’m familiar with, focusing on providing an intuitive experience for users to explore available properties.</p>
                    <div className="flex space-x-2 mt-2 items-center">
                        <p
                            className="text-xl font-rev"
                        >Technologies:</p>
                        
                        <img className='icon-size' src="/js.svg" alt="" />
                        <img className='icon-size' src="/tailwind-css.svg" alt="" />
                        <img className='icon-size' src="/git.svg" alt="" />
                        <img className='icon-size' src="/github.svg" alt="" />
                        <img className='icon-size' src="/react.svg" alt="" />
                        <img className='icon-size' src="/firebase.svg" alt="" />
                    </div>
                    <a
                        className="btn bg-customElements mt-1"
                        href="https://amar-bari.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Link
                    </a>

                </div>
            </div>
            {/* titans */}
            <div className="flex justify-evenly mx-28 mt-3">
                <img
                    className="ml-4 w-1/2 max-w-[18.125rem] md:max-w-[37.5rem] h-auto"
                    src="/titan's-nest-laptop.png" alt="" />
                <div className="text-start ml-3">
                    <h4 className="text-4xl text-customText font-titi font-semibold">Titan's Rest</h4>
                    <p className="mt-5 font-teko text-4xl">Hostel Hub is a web platform I developed to streamline hostel operations, allowing admins to manage student meals and accommodations. It’s designed for ease of use and can be implemented in various hostel environments.</p>
                    <div className="flex space-x-2 mt-2 items-center">
                        <p
                            className="text-xl font-rev"
                        >Technologies:</p>
                        <img className='icon-size' src="/css.svg" alt="" />
                        <img className='icon-size' src="/tailwind-css.svg" alt="" />
                        <img className='icon-size' src="/js.svg" alt="" />
                        <img className='icon-size' src="/git.svg" alt="" />
                        <img className='icon-size' src="/github.svg" alt="" />
                        <img className='icon-size' src="/react.svg" alt="" />
                        <img className='icon-size' src="/nodejs.svg" alt="" />
                        <img className='icon-size' src="/firebase.svg" alt="" />
                        <img className='icon-size' src="/mongodb.svg" alt="" />
                    </div>
                    <a
                        className="btn bg-customElements mt-1"
                        href="https://titan-s-rest.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Link
                    </a>

                </div>
            </div>
            <div className="flex justify-evenly mx-28 mt-3">
                <img
                    className="ml-4 w-1/2 max-w-[18.125rem] md:max-w-[37.5rem] h-auto"
                    src="/hungry-laptop.png" alt="" />
                <div className="text-start ml-3">
                    <h4 className="text-4xl text-customText font-titi font-semibold">Hungry Boy</h4>
                    <p className="mt-5 font-teko text-4xl">HungryBoy is a web platform I built to simplify restaurant operations, offering tools to manage orders, reservations, and customer preferences. It’s designed to enhance the dining experience and streamline backend processes.</p>
                    <div className="flex space-x-2 mt-2">
                        <p
                            className="text-xl font-rev"
                        >Technologies:</p>
                        <img className='icon-size' src="/css.svg" alt="" />
                        <img className='icon-size' src="/tailwind-css.svg" alt="" />
                        <img className='icon-size' src="/js.svg" alt="" />
                        <img className='icon-size' src="/git.svg" alt="" />
                        <img className='icon-size' src="/github.svg" alt="" />
                        <img className='icon-size' src="/firebase.svg" alt="" />
                    </div>
                    <a
                        className="btn bg-customElements mt-1"
                        href="https://hungryboy.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Link
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Projects;