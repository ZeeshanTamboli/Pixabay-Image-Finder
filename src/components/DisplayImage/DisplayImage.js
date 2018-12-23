import React from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from '@material-ui/core';
import InfoIcon from '@material-ui/core/Icon';

const DisplayImage = props => {
  const { images } = props;

  if (images) {
    return (
      <div>
        <GridList cols={4}>
          {images.map(image => (
            <GridListTile key={image.id}>
              <img src={image.largeImageURL} alt="" />
              <GridListTileBar
                subtitle={<span>by: {image.user}</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  } else {
    return <p>No images</p>;
  }
};

export default DisplayImage;
