import React from 'react';

const AlbumListEntry = (props) => {
  const {name, year, description, imageUrl} = props.album;
  return (
    <div className="album-container">
      <h3>{name} • <span>{year}</span></h3>
      <p>{description}</p>
      <img src={imageUrl} alt={`Album art for ${name}`} />
    </div>
  )
}

export default AlbumListEntry;
