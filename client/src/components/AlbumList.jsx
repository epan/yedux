import React from 'react';

const AlbumList = ({albums}) => {
    return (
      <div>
        {albums.map((album) => {
          return (
            <div key={album.id}>
              <h3>{album.era} - <span>{album.year}</span></h3>
              <p>{album.description}</p>
              <img src={album.imageUrl} alt="album art" />
            </div>
          )
        })}
        <h4>Display the albums here :)</h4>
      </div>
    )
  };

export default AlbumList;
