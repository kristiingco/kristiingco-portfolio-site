import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home/Home';
import Experience from './components/pages/Experience/Experience'
import About from './components/pages/About/About'
import Skill from './components/pages/Skill/Skill'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home
              imageURL="img/home.png"
              description="I'm Kristi Ingco and I like to code meaningful and usable products for people."  
              navigationLinks={[{
                  "title": "About",
                  "link": "/about"
                },
                {
                  "title": "Experience",
                  "link": "/experience"
                },
                {
                  "title": "Skills",
                  "link": "/skills"
                }
              ]}
              socialLinks={[{
                  "socialMedia": "facebook",
                  "link": "https://facebook.com/kristiingco/"
                }, 
                {
                  "socialMedia": "linkedin",
                  "link": "https://linkedin.com/in/kristianaingco/"
                },
                {
                  "socialMedia": "github",
                  "link": "https://github.com/kristiingco"
                }
              ]}
              />
          </Route>
          <Route exact path="/about">
              <About 
                imageURL="img/about.jpg"
                description={`
                Hello! I'm Kristiana Ingco, but people usually call me Kristi!

                I graduated with a Bachelor's Degree in Computer Science from Ateneo de Manila University and a GPA of 3.62! 

                I am currently based in San Francisco, California, USA. 

                As of the moment, I am looking for a full-time, entry-level position as a Software Engineer to futher hone my skills and contribute to solve problems and offer solutions that will help people.
                `}
              />
          </Route>
          <Route exact path="/experience" component={Experience}/>
          <Route exact path="/skills">
              <Skill skillList={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Angular"
              ]}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
