import React from 'react';
import AlbumListEntry from './AlbumListEntry';

const AlbumList = ({albums}) => {
  return(
    <div>
      <h4>Display the albums here :)</h4>
      {albums.map((album) => {
        return <AlbumListEntry album={album} key={album.id} />
      })}
    </div>
  )
};

export default AlbumList;
