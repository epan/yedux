import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import data from './dummy_data.js';
import AlbumList from './components/AlbumList';
import NewAlbumForm from './components/NewAlbumForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };

    this.getAllAlbums = this.getAllAlbums.bind(this);
    this.submitAlbum = this.submitAlbum.bind(this);
  }

  componentDidMount () {
    this.getAllAlbums();
  }

  getAllAlbums () {
    $.ajax({
      method: 'GET',
      url: '/api/albums',
      success: (data) => {
        this.setState({
          albums: data
        });
      },
      error: (err) => {
        console.log('ERROR (GET Albums):', err);
      }
    })
  }

  submitAlbum (newAlbum) {
    $.ajax({
      method: 'POST',
      url: '/api/albums',
      contentType: 'application/json',
      data: JSON.stringify(newAlbum),
      success: (data) => {
        this.getAllAlbums();
      },
      error: (err) => {
        console.log('ERROR (Submit Album):', err);
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Yedux</h1>
        <NewAlbumForm submitAlbum={this.submitAlbum} />
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
