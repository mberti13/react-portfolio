import React, { useState } from 'react';

import Nav from './components/Nav';


import './App.css';

function App() {

  const [categories] = useState([
    {name: 'About me', description: 'A summary about me.'},
    {name: 'Portfolio', description: 'A display of some of my work.'},
    {name: 'Contact', description: 'Contact me via email'},
    {name: 'Resume', description: 'A link to my resume.'}
  ])

    // useState to select the category based on click
  const [currentCategory, setCurrentCategory ] = useState(categories[0]);
  // useState to display contact form/ highlight nav field
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

    </div>
  );
}

export default App;

