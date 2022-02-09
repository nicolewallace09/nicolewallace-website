import React from "react";
import Image from 'next/image'; 
import profileImg from '../public/ProjectImages/profileImg.png';

const Hero = () => {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 sm: w-full mx-auto text-center md:text-left lg:p-20">
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2" style={{color: '#eab5d0'}}>
              Hi, I&apos;m Nicole!
            </h1>
            {/* <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Nicole.
            </h1> */}
            <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              A Software Engineer based in the Bay Area.
            </h1>
            {/* <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Engineer.
            </h1> */}
      </div>
      <div className="w-full md:w-1/2 sm: w-full -mr-40 mt-20">
        <div className="w-3/4 ">
          <Image 
            src={profileImg} 
            alt="avatar" 
            className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero; 