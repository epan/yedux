import React from 'react';

class AddAlbumForm extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      name: '',
      year: '',
      description: '',
      imageUrl: ''
    }
  }

  render () {
    const {name, year, description, imageUrl} = this.state;
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name}
            onChange={(e) => {this.setState({name: e.target.value})}}
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input type="text" value={year}
            onChange={(e) => {this.setState({year: e.target.value})}}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" value={description}
            onChange={(e) => {this.setState({description: e.target.value})}}
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" value={imageUrl}
            onChange={(e) => {this.setState({imageUrl: e.target.value})}}
          />
        </div>
        <input type="button" value="Add album"
          onClick={() => {
            console.log('When clicked Add, state was:', this.state);
            this.props.addAlbum(this.state);
          }}
        />
      </form>
    );
  }
}

export default AddAlbumForm;
