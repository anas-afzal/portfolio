import React from 'react';

const Intro: React.FC = () => {
    return (
        <div className = "flex lg:flex-row flex-col-reverse lg:h-full w-full">
            <div className = "lg:w-1/2 my-auto ml-6 space-y-4">
                <h1 className = "text-3xl font-extralight text-gray-500">Muhammad Anas Afzal</h1>
                <h1 className = "text-6xl font-semibold">Fullstack and Blockchain Developer</h1>
                <p className = "text-lg font-light">
                    I am a technology enthusiast, in particular, trying to master the field of BlockChain. 
                    Gained some experience in programming on Ethereum and working on my Hyperledger skills. 
                    Ready to get hands-on and adapt new problem-solving technologies.
                </p>
            </div>
            <div className = "rounded-2xl z-0 lg:w-1/2 lg:h-full">
                <div className = "flex h-full relative">
                    <div className = "w-96 h-96 bg-gray-500 left-1/2 top-1/2 -mt-36 -ml-36 absolute rounded-bl-4xl rounded-tr-4xl shadow-xl -z-10 hidden lg:block"></div>
                    <img src="./assets/hero-1.png" className = "lg:rounded-bl-4xl lg:rounded-tr-4xl w-full lg:w-96 h-96 object-cover block lg:shadow-xl my-auto mx-auto" alt="" />
                </div>
            </div>         
        </div>
    );
}

export default Intro;