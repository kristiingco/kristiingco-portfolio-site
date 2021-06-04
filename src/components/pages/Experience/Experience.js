import React, { Fragment } from 'react'
import './Experience.css'
import Work from './Work'
import Project from './Project'
import Back from '../../Back'

const Experience = () => {
    return (
        <Fragment>
            <div className="experience-container">
                <Work workList={ [{
                    title: "VP for Logistics and Promotions",
                    company: "Computer Society of the Ateneo",
                    description: "I lead the department regarding the promotional materials and the logistical procedures, facilitating and streamlining processes to make sure the logistics and promotions are ready in time for events.",
                    timeline: "June 2019 - May 2020"
                },
                {
                    title: "Software Engineering Intern",
                    company: "Freelancer.com",
                    description: "As a Software Engineering Intern, I had the honor to work alongside a team in charge of the websites allowing users to interact with jobs. I contributed to fixing bugs and creating components using Angular.",
                    timeline: "June 2019 - July 2019"
                }]}/>
                <Project projectList={[{
                    title: "Catch Those Clothes!",
                    link: "https://drive.google.com/file/d/1wSjzhYgRQuOmMKIo1SpdFaqX0g362K56/view?usp=sharing",
                    description: "I decided to combine my love for art and coding as well as fortify design and object-oriented principles through game development. This game is a simple catcher game made from Unity using C#.",
                },
                {
                    title: "Bell and Pedre",
                    link: "https://bellandpedre.netlify.app/#/",
                    description: "I learned React, Gatsby, GraphSQL, and NetlifyCMS through my tasks as a React Developer. I created some of the components and helped in modifying the CMS. ",
                },
                {
                    title: "TALAB",
                    link: "https://talab.ateneo.edu/",
                    description: "For an enlistment site for alternative classes in my university, I volunteered as a developer. My tasks required splitting the slots for batches and allowing for email notifications. On my second year also working for this site, I worked on the front-end of the admin website.",
                },
                {
                    title: "Morse Test",
                    link: "https://github.com/kristiingco/morse-test",
                    description: "For my thesis project 'Learning Morse Code with Passive Haptic Learning', I created a web application as a testing site for the participants. The application was created using the MEAN stack.",
                },
                {
                    title: "Lakada",
                    link: "https://github.com/kristiingco/blue-hacks-2020",
                    description: "With a team, this project was our entry to Blue Hacks 2020, my university's hackathon. Our task was to create a product for cultural awareness. Thus, we created an e-commerce web application promoting local products. The web application was made with the MEAN stack, and was integrated with a chatbot. We won 3rd place overall.",
                }]} />
            </div>
            <Back />
        </Fragment>
    )
}

export default Experience