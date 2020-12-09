import React from 'react';
import './App.css';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home
        imageURL="https://64.media.tumblr.com/3ea08052e7c57b0c06ccdbae8c34cdb3/1d5d9363b08e4751-6e/s640x960/2751402315c46681fc7e8810fe2dff1d7bba4ab7.jpg"
        description="I'm Kristi Ingco and I like to code meaningful and usable products for people."  
        navigationLinks={[{
          "title": "Home",
          "link": "https://google.com"
          }
        ]}
        socialLinks={[{
          "socialMedia": "twitter",
          "link": "https://twitter/arcanekind"
        }]}
        />

    </div>
  );
}

export default App;
