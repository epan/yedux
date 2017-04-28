import React from 'react';

class NewAlbumForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      year: '',
      description: '',
      imageUrl: ''
    }
  }

  render () {
    return (
      <div>
        <label>
          Name: <input
          onChange={(e) => {this.setState({name: e.target.value})}}
          value={this.state.name}
          />
        </label><br />
        <label>
          Year: <input
          onChange={(e) => {this.setState({year: e.target.value})}}
          value={this.state.year}
          />
        </label><br />
        <label>
          Description: <input
          onChange={(e) => {this.setState({description: e.target.value})}}
          value={this.state.description}
          />
        </label><br />
        <label>
          Cover art URL: <input
          onChange={(e) => {this.setState({imageUrl: e.target.value})}}
          value={this.state.imageUrl}
          />
        </label>
        <div><input type="button" value="Add Album" onClick={() => {
          this.props.submitAlbum(this.state)
        }}/></div>
      </div>
    )
  }
}

export default NewAlbumForm;
