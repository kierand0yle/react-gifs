import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "3orifdiq4gZo2vILHa"
    };
  }

  search = (query) => {
    giphy('hRoY8rgo5u5gOU1HelfAldAftkjWG4vK').search( {
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render () {
    // const gifs = [
    //   { id: "9zXJzvkmJav28aEgNj"},
    //   { id: "Ok2nsdrObGGIYexdCG"}
    // ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <Gif id={this.state.selectedGifId}/>
          <div className="selected-gif">
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}


export default App;
