import React from 'react';
import Image from 'next/image';

const userData = {
    projects: [
          {
            id: 1, 
            title: "Exchange Rates",
            link: "https://competent-kilby-6c3bd3.netlify.app/",
            imgUrl: "/ProjectImages/exchangerates.png",
            repo: "https://github.com/nicolewallace09/exchange-rates"
        },
        {
            id: 2, 
            title: "Movie Search App",
            link: "https://nicolewallace09.github.io/react-movie-app",
            imgUrl: "/ProjectImages/movieapp.png",
            repo: "https://github.com/nicolewallace09/react-movie-app"
        },
        {
            id: 3, 
            title: "Student Profiles",
            link: "https://nicolewallace09.github.io/student-profiles/",
            imgUrl: "/ProjectImages/student.png",
            repo: "https://github.com/nicolewallace09/student-profiles"
        },
        {
            id: 4, 
            title: "The Shoppies",
            link: "https://nicolewallace09.github.io/the-shoppies/",
            imgUrl: "/ProjectImages/shoppies.png",
            repo: "https://github.com/nicolewallace09/the-shoppies"
        },
        {
            id: 5, 
            title: "Employee Tracker",
            imgUrl: "/ProjectImages/employee-tracker.png",
            repo: "https://github.com/nicolewallace09/employee-tracker"
        },
        {
            id: 7, 
            title: "Web Scraper",
            imgUrl: "/ProjectImages/webscraper.png",
            repo: "https://github.com/nicolewallace09/webscraper2"
        },
        {
            id: 8, 
            title: "Readme Generator",
            imgUrl: "/ProjectImages/readme.gif",
            repo: "https://github.com/nicolewallace09/readme-generator"
        },
        {
            id: 7, 
            title: "Team Profile Generator",
            imgUrl: "/ProjectImages/teamprofile.png",
            repo: "https://github.com/nicolewallace09/team-profile-generator"
        },
        {
            id: 9,
            title: "E-Commerce Backend",
            imgUrl: "/ProjectImages/ecommerce.png",
            repo: "https://github.com/nicolewallace09/e-commerce-backend"
        }
      ]
}

const Projects = () => {
    return (
      <section className="dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left" style={{color: '#bb91a6'}}>
            Projects
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20 pb-40">
            {userData.projects.map((proj, i) => (
              <ProjectCard
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={`${i + 1}`}
                key={i}
                repo={proj.repo}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  const ProjectCard = ({ title, link, imgUrl, repo }) => {
    return (
    <>
    <div className="project-card relative overflow-hidden">
        <div className="h-72 object-cover">
        <Image
            src={imgUrl}
            alt="portfolio"
            layout='fill'
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
        />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl rounded-md px-2" style={{backgroundColor: '#eab5d0'}}>
        {title}
        </h1>

      <h1 className="absolute bottom-10 right-20 text-pink-200 font-bold text-xl">
            { link ? <a href={link} className="w-full block shadow-2xl"><img src="https://img.icons8.com/material-outlined/24/000000/link--v1.png" className="project-link"/></a> : null }
      </h1>

      <h1 className="absolute bottom-10 right-10 text-pink-200 font-bold text-xl">
            { repo ? <a href={repo} className="w-full block shadow-2xl"><img src="https://img.icons8.com/material-outlined/24/000000/github.png" className="project-link"/></a> : null }
      </h1>
      </div>
    </>
)};

export default Projects; 

  