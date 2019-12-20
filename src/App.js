import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import youtube from "./APIs/youtube";
import VideoList from "./Components/videoList";
import VideoDetail from "./Components/VideoDetail";
import './Components/App.css';
import Spinner from "./Components/Spinner";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    // by declaring this function we set it to do it at rendering n we set a default search value
    this.onTermSubmit("");
  }

  onTermSubmit = async term => {
    const KEY = "AIzaSyBqr8Wmz7vAzqrVsnao3Mm5rAzkfHMsM6A";
    const response = await youtube.get("/search", {
      params: {
        maxResults:20,
        part: "snippet",
        q: term,
        key: KEY
      }
    });
    console.log(response)
   
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0] //to make the fisrt video display automatically in the video player
    });
    //response is the whole request result that we should access to  display data
  };
 
 
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    if(this.state.videos===[]){
      return <Spinner/>
    }else{
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="col-md-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
    }
  }
}

export default App;
