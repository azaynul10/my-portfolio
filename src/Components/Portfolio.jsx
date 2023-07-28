/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/src/images/vr.jpg";

const imageAltText = "Man wearing Vr Goggles";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Introduction To Data Structure And Algorithms",
    description:
      "This blog will introduce you to the world of Data Structure and Algorithms with some real life examples.",
    url: "https://dev.to/azaynul10/introduction-to-data-structure-and-algorithms-2j7k",
  },
  {
    title: "Flowcharts",
    description:
      "This blog will give you some ideas about flowcharts and how to create them.",
    url: "https://dev.to/azaynul10/flowcharts-oka",
  },
  {
    title: "My Microsoft learn student ambassador profile",
    description:
      "My Microsoft learn student ambassador profile",
    url: "hhttps://studentambassadors.microsoft.com/en-US/studentambassadors/profile/0aa833b2-8b54-4e12-b0ea-d4a3fb435449",
  },
  {
    title: "Introduction To Machine Learning",
    description:
      "In this blog you will get to know about the basics of Machine Learning which I learned through AWS Machine Learning Scholarship Program.",
    url: "https://dev.to/azaynul10/introduction-to-machine-learning-2bp6",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
