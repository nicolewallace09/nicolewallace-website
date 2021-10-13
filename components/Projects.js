import React from "react";

const userData = {
    projects: [
        {
            id: 1, 
            title: "Movie Search App",
            link: "https://nicolewallace09.github.io/react-movie-app",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/react-movie-app"
        },
        {
            id: 2, 
            title: "Student Profiles",
            link: "https://nicolewallace09.github.io/student-profiles/",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/student-profiles"
        },
        {
            id: 3, 
            title: "The Shoppies",
            link: "https://nicolewallace09.github.io/the-shoppies/",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/the-shoppies"
        },
        {
            id: 4, 
            title: "Web Scraper",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/webscraper2"
        },
        {
            id: 5, 
            title: "Travel Planner",
            link: "https://nicolewallace09.github.io/travel-planner/",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/travel-planner"
        },
        {
            id: 6, 
            title: "Techly",
            link: "https://techly.herokuapp.com/",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/techly"
        },
        {
            id: 7, 
            title: "Team Profile Generator",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/team-profile-generator"
        },
        {
            id: 8,
            title: "Work Day Scheduler",
            link: "https://nicolewallace09.github.io/work-day-scheduler/",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/work-day-scheduler"
        },
        {
            id: 9,
            title: "Weather App",
            link: "https://nicolewallace09.github.io/weather-dashboard/",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/weather-dashboard"
        },
        {
            id: 10,
            title: "The Tech Blog",
            link: "https://dry-harbor-54501.herokuapp.com/",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/the-tech-blog"
        },
        {
            id: 11,
            title: "Note Taker",
            link: "https://note-express.herokuapp.com/",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/note-taker"
        },
        {
            id: 12,
            title: "E-Commerce Backend",
            imgUrl: "https://reacttricks.com/static/images/next-motion.png",
            repo: "https://github.com/nicolewallace09/e-commerce-backend"
        }
      ]
}

export default function Projects() {
    return (
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Projects.
          </h1>
        </div>
        {/* Grid starts here */}
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-20 pb-40">
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
  
  const ProjectCard = ({ title, link, imgUrl, number, repo }) => {
    return (
    <>
      {/* <a href={repo} className="w-full block shadow-2xl"> */}
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <img
              src={imgUrl}
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-red-200 font-bold text-xl">
            { number.length === 1 ? "0" + number : number }
          </h1>
        
      {/* </a> */}
      <h1 className="absolute bottom-10 right-20 text-red-200 font-bold text-xl">
            { link ? <a href={link} className="w-full block shadow-2xl"><img src="https://img.icons8.com/material-outlined/24/000000/link--v1.png"/></a> : null }
      </h1>

      <h1 className="absolute bottom-10 right-10 text-red-200 font-bold text-xl">
            { repo ? <a href={repo} className="w-full block shadow-2xl"><img src="https://img.icons8.com/material-outlined/24/000000/github.png"/></a> : null }
      </h1>
      </div>
    </>
)};

  