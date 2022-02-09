import React from "react";

const userData = {
    experience: [
        {
          title: "Front End Developer (Freelance)",
          company: "J.CO Art Haus",
          year: "2021",
          desc: "Worked on web development projects utilizing the Shopify platform to increase customer traffic and branding.",
        },
        {
          title: "Full Stack Coding Bootcamp",
          company: "UC Berkeley Extension",
          year: "2020",
          desc: "A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, jQuery, Bootstrap, Node.js, Express.js, MongoDB, Restful API, MySQL, React (Redux)",
        },
        {
          title: "Operations Coordinator",
          company: "Belcampo Meat Co.",
          year: "2019",
          desc: "Focused on operations and digital marketing of the business. Oversaw e-commerce/third-party delivery services, website, and mail marketing. Managed IT services, POS systems for restaurants, and loyalty reward applications.",
        },
        {
          title: "Retail Sales Manager",
          company: "Ulta Beauty",
          year: "2019",
          desc: "Promoted from Lancome Counter Manager and became the Retail Sales Manager. Managed the team of cashiers, maintained sales goals for mass cosmetics, and ran the cash wrap.",
        },
        {
          title: "Bachelor's Degree",
          company: "San Francisco State University",
          year: "2017",
          companyLink: "https://intel.com",
          desc: "Graduated with Bachelor's Degree in Business Administration with a concentration in Management.",
        },
        {
          title: "Associate's Degree",
          company: "Los Medanos College",
          year: "2014",
          companyLink: "https://upes.co.in",
          desc: "Graduated for transfer with Associate Degrees in Liberal Arts - Math and Science, Biological and Social Science, and Arts and Humanities, and Business Administration.",
        }
      ]
}

const Experience = () => {
  return (
    <section className="dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left" style={{color: '#bb91a6'}}>
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-gray-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-gray-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800" style={{color: '#eab5d0'}}>
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <p className="text-gray-500">
        {company}
      </p>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
}

export default Experience; 