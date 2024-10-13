import HoverMe from "../HoverAnimation/HoverMe";

const Hire = () => {
    return (
        <div className="grid w-full text-center justify-center justify-items-center text-customText my-36">
            {/* <h1 className="text-6xl font-teko mb-10">Why should you hire me?</h1> */}
            <HoverMe text={'Why should you hire me?'}></HoverMe>
            <p className="text-2xl font-teko lg:w-[477px] mx-2">
                You should hire me because I’m driven by challenges and eager to turn them into opportunities for growth. While I’m a fresher, I’ve demonstrated the ability to adapt quickly and lead projects in my academic and personal work. For example, in a recent project, I took charge of optimizing a web application that improved user experience significantly.
                <br /><br />

                Additionally, my academic background and hands-on experience in tech have equipped me with fresh insights and the ability to learn quickly, which I’m confident will help me excel in this role.
            </p>
            <a 
            className="btn btn-success max-w-32"
            href="https://docs.google.com/document/d/1Pwj05ltLBU9XkcaNp3iSAy3Fe4aIEHvb/edit?usp=sharing&ouid=118425701329445050509&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            >Resume</a>
        </div>
    );
};

export default Hire;