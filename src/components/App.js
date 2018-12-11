import React, { Component } from 'react';
import './App.scss';
import ProjectViewer from './ProjectViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>jeff's recent projects</h1>
        </header>
        <ProjectViewer />
      </div>
    );
  }
}

export default App;
