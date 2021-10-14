import React from "react";

const userData = {
    about: {
        title:
          "Hi I'm Nicole! A Full Stack Software Engineer from the SF Bay Area",
    },
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/nicole-wallace09/",
        github: "https://github.com/nicolewallace09",
    },
    email: 'nicole.elisaw@gmail.com',
    resumeUrl: "https://www.dropbox.com/s/m8a0he8l09nwyq0/Nicole%20Wallace%20-%20Software%20Engineer%20Resume%20v2021.pdf?dl=0"
}

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>

      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20 justify-center">
          <p
            className="leading-loose text-xl md:text-4xl font-semibold  mx-1"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
        
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Feel free to send me an <a
                    href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >email</a>
                .
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Resume
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Download my current <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  download
                >
                  resume
                </a>
                .
              </p>
            </div>

            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Links
            </h1>
            
            <div className="mt-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <p className="text-lg text-gray-500 relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <p className="text-lg text-gray-500 relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>

            </div>
          </div>
        

        
          <div className="col-span-1 md:col-span-2">
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
                I graduated from San Francisco State University with a Bachelor’s Degree in Business Administration and  from Los Medanos College with 3 Liberal Arts Associate’s Degrees in Arts and Sciences -- I&apos;d like to think I&apos;m a well-rounded individual! Before becoming a Software Engineer, I had roles in retail management and as an Operations Coordinator. I believe my work experience allowed me to work with a wide range of people, to be consumer-facing, and to work under pressure.   
                <br></br>
                <br></br>
                Being from a small city across from the big city of San Francisco and from an unrepresented background in Tech, I wasn&apos;t aware of all the opportunities I could have had. For years, I wanted to be a Software Engineer, but had self-doubt and was scared of the obstacles I would face. I decided to switch careers during the start of the global pandemic and quit my full time job to finally fulfill my dreams.
                <br></br>
                <br></br>
                I took this risk to challenge myself and to enter a career/industry that will always challenge me and allow me to learn. I wanted to be able to continuously grow within my career and to make an impact on real world problems. I am a naturally curious person which makes me want to always learn new things, a problem-solver who questions everything.I graduated from UC Berkeley&apos;s Full Stack Coding Bootcamp in August 2020 and I couldn&apos;t be happier now that I made the decision to make the jump. Now, I am looking for my first professional role as a Software Engineer and looking for a team to build with and learn from.
            </p>
        

            <h1 className="bg-pink-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50 mt-4">
              My Tech Stack
            </h1>

                <div className="flex flex-row flex-wrap mt-1 justify-center">
                    <img src="https://img.icons8.com/color/70/000000/javascript.png" alt="javascript-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/html-5.png" alt="html-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/css3.png" alt="css-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/json--v1.png" alt="json-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/react-native.png" alt="react-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/vue-js.png" alt="view-icon" className="h-20 w-20  mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/bootstrap.png" alt="bootstrap-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/api.png" alt="api-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/ios-filled/70/000000/jquery.png" alt="jquery" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/nodejs.png" alt="node-icon" className="h-20 w-20 mx-2my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/mongodb.png" alt="mongodb" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/sql.png" alt="sql-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/npm.png" alt="npm-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/graphql.png" alt="graphql" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/git.png" alt="git-icon" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/visual-studio-code-2019.png" alt="vs-icon" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/github--v1.png" alt="github" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/heroku.png" alt="heroku" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/shopify.png" alt="shopify" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/wordpress.png" alt="wordpress" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/doodle/70/000000/canva.png" alt="canva" className="h-20 w-20 my-4"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}