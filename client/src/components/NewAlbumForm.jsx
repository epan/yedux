import React from 'react';

class NewAlbumForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      year: '',
      description: '',
      coverArtUrl: ''
    }
  }

  render () {
    return (
      <div>
        <div>Name: <input /></div>
        <div>Year: <input /></div>
        <div>Description: <input /></div>
        <div>Cover art URL: <input /></div>
        <div><input type="button" value="Add Album" /></div>
      </div>
    )
  }
}

export default NewAlbumForm;
