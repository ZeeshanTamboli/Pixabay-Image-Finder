import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import DisplayImage from '../DisplayImage/DisplayImage';

// Axios
import axios from 'axios';

class InputText extends Component {
  state = {
    images: []
  };

  onChange = async e => {
    try {
      if (e.target.value !== '') {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${
            e.target.value
          }&per_page=8&safesearch=true`
        );
        this.setState({ images: response.data.hits });
      } else {
        this.setState({ images: [] });
      }
    } catch (error) {
      console.log(`Could not find image ${error}`);
    }
  };

  render() {
    const { images } = this.state;

    return (
      <React.Fragment>
        <TextField
          fullWidth={true}
          placeholder="Search for images"
          onChange={this.onChange}
          style={{ marginBottom: '20px' }}
        />
        {images.length > 0 ? <DisplayImage images={images} /> : null}
      </React.Fragment>
    );
  }
}

export default InputText;
