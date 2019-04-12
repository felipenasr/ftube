import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <SearchBar></SearchBar>
          <VideoList></VideoList>
          <VideoPlayer></VideoPlayer>
        </div>
      </Provider>
    );
  }
}

export default App;
