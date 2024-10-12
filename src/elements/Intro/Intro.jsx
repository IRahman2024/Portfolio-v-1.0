import { TypeAnimation } from "react-type-animation";

const Intro = () => {
    return (
        <div className="flex mx-[25%] mt-14 
        font-teko text-5xl text-customText">
            <div className="text-left">
                <h1 className="">Hello</h1>
                <h1 className="">I'm Ifti And I'm a</h1>
                <TypeAnimation
                    sequence={[
                        'Developer',
                        1000,
                        'Creative',
                        1000,
                        'Problem Solver',
                        1000,
                        'Creative Thinker',
                        1000,
                    ]}
                    speed={48}
                    style={{ fontSize: '7rem' }}
                    repeat={Infinity}
                />

            </div>
        </div>
    );
};

export default Intro;