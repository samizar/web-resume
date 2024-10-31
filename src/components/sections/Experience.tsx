import React from 'react';
import { FaGraduationCap, FaLanguage, FaFootballBall } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      role: "CEO and Co-founder",
      company: "Klu.so",
      location: "Espoo, Finland",
      period: "11/2022 – Present",
      achievements: [
        "Secured pre-seed from Antler VC of 125,000 USD",
        "Won Arctic 15 pitching competition against 140 European startups",
        "Raised bridge round of 250,000 from Antler, Angel Syndicate",
        "Brought over 4000 users in 7 months",
        "Planned and executed our GTM for our B2B users",
        "Pitched and acquired 250,000 Euro from Business Finland for Klu R&D project",
        "Planned and executed two pre-launches in ProductHunt where we managed to win twice product of the year in Nordics",
        "Planned and executed our product roadmap for the enterprise side of Klu",
        "Deep understanding of Product analytics software like Posthog, mixpanels and others"
      ]
    },
    {
      role: "Founder",
      company: "Tira.so",
      location: "Helsinki, Finland",
      period: "01/2021 – 08/2022",
      achievements: [
        "Executed A/B testing initiatives leading to 32% increase in conversions",
        "Raised €70,000 pre-seed funding",
        "Acquired 1000+ sign-ups with 300+ post-launch conversions",
        "Closed 10+ strategic partnerships in Finland and Europe",
        "Planned and executed go-to-market",
        "Helped in closing strategic partnerships (including maria01, startup-grind, epicenter, and others)"
      ]
    },
    {
      role: "Head of Product Marketing",
      company: "LuxTag",
      location: "Cyberjaya, Malaysia",
      period: "11/2017 – 05/2020",
      achievements: [
        "Researched and executed the company's SEO strategy and Developed a go-to-market strategy for various LuxTag products",
        "Resulting in over 2000+ users in the span of 6 months",
        "Led end-to-end development, release and post-release iterations of B2B2C anti-counterfeiting products focused on user growth",
        "Led multiple A/B testing initiatives of new features that led to 23% increase in conversions of our B2B customers",
        "Supported regional sales, partnerships and led go-to-market initiatives that led to $200,000 in sales",
        "Products launched: papyrus.luxtag.io, e-Scroll Malaysia (MOE), Scribe"
      ]
    },
    {
      "role": "Founder & CEO (acquired)",
      company: "Xhai Studios",
      location: "Cyberjaya, Malaysia",
      period: "08/2015 – 09/2019",
      achievements: [
        "Built and led a creative and software agency specializing in customized solutions",
        "Closed and helped build more than 90+ different tech projects including B2B SaaS, Fintech, Blockchain, and Gaming",
        "Designed and implemented A/B experiments improving conversion rate by 18 points and reducing churn by 9 points",
        "Closed and signed more than 8 partnerships including governmental agencies",
        "Led and managed various mobile apps from development to go-to-market with over 1M installs",
        "Raised around $100,000 in pre-seed and bootstrapped with over 500k+ revenue in the first year"
      ]
    },
    {
      role: "Product Marketing Specialist",
      company: "Ebizu (now Krypto POS)",
      location: "Kuala Lumpur, Malaysia",
      period: "07/2013 – 12/2014",
      achievements: [
        "Key team player in product marketing department",
        "Responsible for planning and implementing marketing strategy for Ebizu products (B2B-B2C)",
        "Collected and analyzed user feedback daily",
        "Managed digital marketing campaigns",
        "Helped close over 500+ vendors with marketing team"
      ]
    },
    {
      role: "Marketing Executive",
      company: "Limkokwing University",
      location: "Cyberjaya, Malaysia",
      period: "08/2012 – 06/2013",
      achievements: [
        "Promoted university through seminars, exhibitions, conferences, and online marketing",
        "Managed social media marketing campaigns",
        "Created quality marketing content with content team",
        "Helped recruit over 110 students"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <div className="mb-8 flex items-center gap-3">
        <svg 
          className="w-8 h-8 text-black transition-transform duration-500 hover:rotate-180" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h2 className="text-3xl font-black text-black">Experience</h2>
      </div>
      {experiences.map((job, index) => (
        <div 
  key={index} 
  className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white border-4 border-black rounded-lg 
             shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
             transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 
             hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
>
  <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">{job.role}</h3>
  <div className="flex flex-wrap gap-2 mb-4 text-gray-700 font-medium text-sm sm:text-base">

            <span>{job.company}</span>
            <span>•</span>
            <span>{job.location}</span>
            {job.period && (
              <>
                <span>•</span>
                <span>{job.period}</span>
              </>
            )}
          </div>
          <ul className="list-disc list-inside space-y-2">
            {job.achievements.map((achievement, i) => (
              <li key={i} className="text-gray-700">
                <span className="ml-2">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Separator between Experience and Education, Languages, Hobbies */}
      <hr className="my-12 border-black border-t-4" />

      {/* Education, Languages, and Hobbies Section */}
      <section className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Section */}
          <div className="col-span-2 p-6 bg-pink-100 border-4 border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="w-8 h-8 text-black transition-transform duration-500 hover:rotate-180" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v6"
                />
              </svg>
              <h3 className="text-xl font-bold text-black">Education</h3>
            </div>
            <p className="text-gray-800 font-medium">MBA: Communication & Public Relations - Limkokwing University, Cyberjaya, Malaysia</p>
            <p className="text-gray-800 font-medium">2012</p>
            <p className="text-gray-800 font-medium">BA: Marketing and International Business - MSA/Middle-Sex University, London, United Kingdom</p>
            <p className="text-gray-800 font-medium">2010</p>
          </div>

          {/* Languages Section */}
          <div className="p-6 bg-yellow-100 border-4 border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="w-8 h-8 text-black transition-transform duration-500 hover:rotate-180" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <h3 className="text-xl font-bold text-black">Languages</h3>
            </div>
            <ul className="list-disc list-inside">
              <li className="text-gray-800 font-medium">English (Native)</li>
              <li className="text-gray-800 font-medium">Arabic (Native)</li>
              <li className="text-gray-800 font-medium">Swedish (Beginner)</li>
            </ul>
          </div>

          {/* Hobbies Section */}
          <div className="p-6 bg-green-100 border-4 border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="w-8 h-8 text-black transition-transform duration-500 hover:rotate-180" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-black">Hobbies</h3>
            </div>
            <ul className="list-disc list-inside">
              <li className="text-gray-800 font-medium">Martial Arts</li>
              <li className="text-gray-800 font-medium">Poetry</li>
              <li className="text-gray-800 font-medium">Physics</li>
              <li className="text-gray-800 font-medium">Travel</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}