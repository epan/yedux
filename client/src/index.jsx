import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
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
  }

  componentDidMount () {
    this.getAllAlbums();
  }

  getAllAlbums () {
    $.ajax({
      url: '/api/albums',
      method: 'GET',
      success: (data) => {
        this.setState({
          albums: data
        });
      },
      error: (err) => {
        console.log('ERROR:', err);
      }
    })
  }

  submitAlbum (newAlbum) {
    $.ajax({
      url: '/api/albums',
      data: newAlbum,
      method: 'POST',
      success: () => {},
      error: () => {}
    })
  }

  render() {
    return (
      <div>
        <h1>Yedux</h1>
        <NewAlbumForm />
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
