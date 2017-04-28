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
        console.log('GET ALBUMS ERROR:', err);
      }
    })
  }

  submitAlbum (newAlbum) {
    console.log('POST newAlbum:', newAlbum);
    $.ajax({
      method: 'POST',
      url: '/api/albums',
      contentType: 'application/json',
      data: JSON.stringify(newAlbum),
      success: (data) => {
        console.log('Submit success response:', data);
      },
      error: (err) => {
        console.log('SUBMIT ALBUM ERROR:', err);
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
