import React from 'react';
import './scss/_base.scss';
import { Button } from './components/button/Button.component';
import { Board } from './components/board/Board.component';
import { Controls } from './components/controls/Controls.component';

function App() {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
