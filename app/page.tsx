import Link from 'next/link';
import React from 'react';

export default function Home() {
  const HEADER_TEXT = {
    'HOME': "J+C Digital Scrapbook",
    'CREATE_NEW_POST': "New Post"
  };

  const title = "J+C Digital Scrapbook";
  return (
    <div>
    <h1>{ title } </h1>

    < br />
    <Footer />
    </div>
  );
}

function header() {

}

function body() {

}

function Footer() {
  return <div id="footer" >
    This site was created with love for Jamie McKnight by Corbin Grosso.
      < br />
      Check out his other work, or the source code for this project,
        at his < a href = "https://www.github.com/CorbinGrosso" > Github </a>
          </div>
}