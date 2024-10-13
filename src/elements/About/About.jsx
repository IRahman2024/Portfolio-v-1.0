import HoverMe from "../HoverAnimation/HoverMe";

const About = () => {
    return (
        <div>
            <div id="About" className="grid text-center my-36 justify-items-center">
                {/* <h1 className="text-6xl font-teko font-bold">About</h1> */}
                <HoverMe
                text={'About'}></HoverMe>
                <p className="text-2xl font-teko lg:w-[760px] mx-2">Here you will find more information about me, what I do, and my <br />current skills mostly in terms of programming and technology</p>
            </div>

            <div className="ml-5 lg:flex">
                <div className='mx-4 lg:w-1/2'>
                    <HoverMe text={'Get to know me!'}></HoverMe>
                    {/* <h1 className="font-titi text-4xl">Get to know me!</h1> */}
                    <br />
                    <p className="font-titi">
                        I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        <br />
                        <br />
                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming
                        <br />
                        <br />
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </p>
                </div>
                {/* skills */}
                <div className='grid justify-center lg:ml-6 lg:w-1/2 text-center'>
                    <HoverMe text={'My Skills'}></HoverMe>
                    {/* <h1 className="font-titi text-4xl my-2">My Skills</h1> */}
                    <div className='grid grid-cols-3 
                lg:grid-cols-3
                md:space-x-24 
                space-y-2 space-x-2 
                lg:space-y-3 items-center justify-items-end'>
                        <img className='icon-size' src="/html.svg" alt="" />
                        <img className='icon-size' src="/css.svg" alt="" />
                        <img className='icon-size' src="/js.svg" alt="" />
                        <img className='icon-size' src="/git.svg" alt="" />
                        <img className='icon-size' src="/github.svg" alt="" />
                        <img className='icon-size' src="/react.svg" alt="" />
                        <img className='icon-size' src="/nodejs.svg" alt="" />
                        <img className='icon-size' src="/firebase.svg" alt="" />
                        <img className='icon-size' src="/mongodb.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;