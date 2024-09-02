import React, { useState } from 'react';
import Header from './components/Header/Header';
import Parallax from './components/Main/Parallax/Parallax';
import Snap from './components/Main/Snap/Snap'; 
import Animation from './components/Main/Animation/Animation'; 
import Sticky from './components/Main/Sticky/Sticky'; 

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
      <Header setActiveComponent={setActiveComponent} />
      <ComponentSwitcher activeComponent={activeComponent} />
    </>
  );
}

function ComponentSwitcher({ activeComponent }) {
  switch (activeComponent) {
    case 'Snap':
      return <Snap />;
    case 'Animation':
      return <Animation />;
    case 'Sticky':
      return <Sticky />;
    default:
      return <Parallax />;
  }
}

export default App;
