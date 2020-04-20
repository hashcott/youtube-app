import './App.css';
import React from 'react';
import youtube from './apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit('lofi');
  }
  onTermSubmit = async (term) => {
    const KEY = 'AIzaSyCGKw4gc-cdQ_I--j9xxIJIj4vX6JEVkAw';
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  selectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className='ui container'>
        <h2 style={{ marginTop: '10px' }} className='ui center aligned header'>
          <span style={{ fontSize: '24px' }} className='ui label red'>
            F*
          </span>
          Tube
        </h2>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                selectedVideo={this.selectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
