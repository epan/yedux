import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import data from './dummy_data.js';
import AlbumList from './components/AlbumList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };

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
