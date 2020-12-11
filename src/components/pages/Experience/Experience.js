import React, { Fragment } from 'react'
import Work from './Work'
import Project from './Project'

const Experience = () => {
    return (
        <Fragment>
            <Work workList={ [{
                title: "VP for Logistics and Promotions",
                description: "Yes",
                image: "https://gamewith-en.akamaized.net/img/98b5636bf86a736707e906b570e538f8.jpg",
                timeline: "June 2019 - May 2020"
            }]}/>
            <Project projectList={[{
                title: "TALAB",
                link: "https://gamewith-en.akamaized.net/img/98b5636bf86a736707e906b570e538f8.jpg",
                description: "hi",
                image: "https://gamewith-en.akamaized.net/img/98b5636bf86a736707e906b570e538f8.jpg"
            }]} />
        </Fragment>
    )
}

export default Experience