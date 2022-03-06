import React from 'react';

import { ButtomContainer } from './styles';

const SubmitButtom = ({ onSubmit }) => {
  

  return (
    <ButtomContainer
      onClick={onSubmit}
    >
        Submit Ballot  
    </ButtomContainer>
  )
}

export default SubmitButtom;