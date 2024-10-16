import React from "react";

const Project = [
        {
            name: 'Food Finder',
            description : 'In this Project you will be able to find the recipe of a food corresponding to the location',
            link:'https://github.com/ibr3hab/FoodSearch'
        },
        {
            name: 'Movie data',
            description : "You will be able to fine data of the movies in this project",
            link : 'https://github.com/ibr3hab/Moviedata'
        },
        {
            name: 'Medical',
            description : 'This is Medical perscription and history of the patient',
            link: 'https://github.com/ibr3hab/Medical'
        }
]

const Projects = ()=>{
    return(
        <div className="container">
        <h1>My Projects</h1>
        <ul>
        {Project.map((pro,index)=>(
         <li key={index}>
            <h3>{pro.name}</h3>
            <p>{pro.description}</p>
            <a href={pro.link} target="_blank" rel="noopener noreferrer">View Projects</a>
         </li>
        ))}
        </ul>
        </div>
    )
}

export default Projects;
