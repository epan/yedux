import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from './dummy_data.js';
import AlbumList from './components/AlbumList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }

    this.getAllAlbums = this.getAllAlbums.bind(this);
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
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <h1>Yedux</h1>
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
