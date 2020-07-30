import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

function App() {
  return (
    <div className="App">
      <Accordion title="메뉴1" content="내용1" />
      <Accordion title="메뉴2" content="내용2" />
      <Accordion
        title="메뉴3"
        content="<p>내용3</p></br><p>내용3</p></br><p>내용3</p>"
      />
    </div>
  );
}

export default App;
