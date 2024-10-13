import React, { useState, useEffect } from 'react';

const DynamicAnimatedText = ({text}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

//   const text = "Hover Me";

  const handleMouseEnter = () => {
    if (!animationTriggered) {
      setIsAnimating(true);
      setAnimationTriggered(true);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setAnimationTriggered(false);
      }, text.length * 50 + 1000); // Animation duration + delay for all letters

      return () => clearTimeout(timer);
    }
  }, [isAnimating, text.length]);

  return (
    <div 
      className="animated-line-container"
      onMouseEnter={handleMouseEnter}
      aria-label={`Animated text: ${text}`}
    >
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className={`letter ${isAnimating ? 'animate' : ''}`}
          style={{ 
            animationDelay: `${index * 50}ms`,
            display: 'inline-block',
            transition: 'transform 0.5s ease'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <style jsx>{`
        .animated-line-container {
          text-size-adjust: 100%;
          --rem: 16;
          --swatch--white: white;
          --swatch--black: black;
          --swatch--grey-main: #999;
          --swatch--grey-stroke-two: #4d4d4d;
          --swatch--green-light: #dbf2bd;
          --swatch--blue-dark: #2f3847;
          --white: white;
          --black: black;
          --swatch--grey-stroke-one: #d0d0d0;
          --swatch--grey-blue: #b3bdce;
          --swatch--blue-light: #a6b8c6;
          --swatch--grey-other: #909aaa;
          letter-spacing: -0.0175rem;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          color: #fcf9f9;
          text-transform: uppercase;
          font-family: Teko, sans-serif;
          font-size: 4.375rem;
          font-weight: 700;
          line-height: 1;
          box-sizing: border-box;
          position: relative;
          display: inline-block;
          cursor: pointer;
          padding-bottom: 5px;
          transition: all 0.3s ease;
          overflow: hidden;
          height: 1.2em;
        }

        .animated-line-container::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: var(--swatch--green-light);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .animated-line-container:hover::after {
          transform: scaleX(1);
        }

        .letter {
          display: inline-block;
          transition: transform 0.5s ease;
        }

        .letter.animate {
          animation: letterExit 1s ease forwards;
        }

        @keyframes letterExit {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-120%);
            opacity: 0;
          }
          51% {
            transform: translateY(120%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default DynamicAnimatedText;