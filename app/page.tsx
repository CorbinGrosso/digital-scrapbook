import Link from 'next/link';
import React from 'react';

export default function Home() {

  function Header() {
    const TITLE = {
      'HOME': "J+C Digital Scrapbook",
      'CREATE_NEW_POST': "New Post"
    }
    return <div id="header" >
      <h1>{TITLE.HOME}</h1>
    </div>
  }
  
  function Body() {
  
  }
  
  function Footer() {
    return <div id="footer" >
      This site was created with love for Jamie McKnight by Corbin Grosso.
        < br />
        Check out his other work, or the source code for this project,
          at his < a href = "https://www.github.com/CorbinGrosso" >Github</a>.
            </div>
  }

  return (
    <div>
    <Header />

    <Footer />
    </div>
  );
}