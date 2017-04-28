import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
    axios.get('/api/albums')
    .then(({data}) => {
      this.setState({
        albums: data
      })
    })
    .catch((err) => {
      console.error('[GET Albums]', err);
    });
  }

  submitAlbum (newAlbum) {
    axios.post('/api/albums', newAlbum)
    .then((response) => {
      this.getAllAlbums();
    })
    .catch((err) => {
      console.error('[POST Albums]', err);
    });
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
