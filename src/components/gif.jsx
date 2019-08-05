import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" alt="" onClick={this.handleClick}/>
    );
  }
}


export default Gif;
