"use client";
import AddPostForm from '@/components/AddPostForm';
import Chapter from '@/components/Chapter';
import React from 'react';
import { useState } from 'react';

export default function Home() {

  const SCREENS = {
    'HOME': 0,
    'CREATE_NEW_POST': 1,
  }

  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME)

  function Header() {
    return <div id="header" >
      <h1 id="title">Digital Scrapbook</h1> {/* Change this later */}
      <nav>
        <button onClick={()=>{setCurrentScreen(SCREENS.HOME)}}>Home</button>
        <button onClick={()=>{setCurrentScreen(SCREENS.CREATE_NEW_POST)}}>Upload</button>
      </nav>
    </div>
  }
  
  function Body() {

    if (currentScreen == SCREENS.CREATE_NEW_POST) {
      return <div id="body">
        <h1>New Post</h1>
        <AddPostForm />
      </div>
    } else {
      return <div id="body">
        <h1>Table of Contents</h1>
        <div id="TOC">
          <Chapter title="Test" date={new Date(2000, 9, 19)} />
          <Chapter title="Test" date={new Date(2000, 9, 19)} />
          <Chapter title="Test" date={new Date(2000, 9, 19)} />
        </div>
    </div>
    }
    
  }
  
  function Footer() {
    // return <div id="footer" >
    //   This site was created with love for Jamie McKnight by Corbin Grosso.
    //   < br />
    //   Check out his other work, or the source code for this project,
    //   at his < a href = "https://www.github.com/CorbinGrosso" >Github</a>.
    // </div>
    return <div id="footer" >
      This site was created by Corbin Grosso.
      < br />
      Check out his other work, or the source code for this project,
      at his < a href = "https://www.github.com/CorbinGrosso" >Github</a>.
    </div>
  }

  return (
    <div>
      <Header />

      <Body />

      <Footer />
    </div>
  );
}