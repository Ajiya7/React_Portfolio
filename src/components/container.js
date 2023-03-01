
import React, { useState } from 'react';
import Navigation from './navigation';
import About from './about';
import Projects from './project';
import Contact from './contact';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
          case "About": 
          return <About></About>
          case "Contact": 
          return <Contact></Contact>
          case "Portfolio":
          return  <Projects></Projects>
          default:
            return <About></About>
        }
       
    };

return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;