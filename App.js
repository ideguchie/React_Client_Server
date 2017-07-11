import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList.react.js';
import ItemInput from './components/ItemInput.js';
import MenuBar from './components/MenuBar.js';
import HeaderBar from './components/HeaderBar.js';
import ColumnBar from './components/ColumnBar.js';
import UploadFile from './components/UploadFile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="custom-header">
          <HeaderBar />
        </div>
        <div className='custom-menubar'>
          <MenuBar/>
        </div>
        <div className='App-Sandbox'>
          <ItemInput url='http://localhost:3000/tasks' pollInterval={2000} />
          <UploadFile />
          <ItemList dataFrom='http://localhost:3000/tasks' />
        </div>
        <div className='custom-page'>
          <ColumnBar url='http://localhost:3000/upload' />
        </div>
      </div>
    );
  }
}

export default App;
