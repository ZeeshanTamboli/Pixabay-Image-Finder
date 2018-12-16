import React from 'react';
import { Input } from '@material-ui/core';

const InputText = () => {
  return (
    <React.Fragment>
      <Input fullWidth={true} placeholder="Search for images" />
    </React.Fragment>
  );
};

export default InputText;
