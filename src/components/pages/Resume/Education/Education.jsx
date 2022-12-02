import React from "react";
import EducationItem from "./EducationItem";

const educationData = [
  {
    id: 1,
    title: "Michigan State University, East Lansing, Michigan",
    description: "Intensive JavaScript Coding Bootcamp that took 6 months to complete with certificate.",
    name: "JavaScript Coding Boot Camp",
    date: "May 2022 - November 2022",
    button: "Boot Camp's Website",
    link: "https://bootcamp.msu.edu/",
  }, 
  {
    id: 2,
    title: "Eastern Gateway Community College, Youngstown, Ohio",
    description: "2 year Business Management, Associate Degree from Eastern Gateway Community College.",
    name: "Business Management",
    date: "March 2020 - May 2022",
    button: "EGCC's Website",
    link: "https://egcc.edu/",
  },
  {
    id: 3,
    title: "East Kentwood High School, Kentwood, Michigan",
    description: "High school diploma.",
    name: "High School Diploma",
    date: "2013 - 2017",
    button: "East Kentwood HS's Website",
    link: "https://www.kentwoodps.org/ourschools/high-schools/eastkentwoodhighschool1012/",
  },
];

const Education = () => {
  return (
    <section className="pb-10">
      <div className="flex justify-center flex-wrap ">
        {educationData.map((education, id) => (
          <EducationItem education={education} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Education;
