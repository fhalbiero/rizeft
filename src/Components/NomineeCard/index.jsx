import React from 'react';

import { Container } from './styles';

const NomineeCard = ({ 
  nominee, 
  selectedNominee, 
  onSelectNominee, 
  onUnselectNominee 
}) => {
  const isSelected = selectedNominee?.id === nominee.id;
  return (
    <Container role="tab" isSelected={isSelected}>
      <header>
        <h4>{ nominee.title }</h4>
      </header>
      <div>
        <img src={nominee.photoUrL} alt={nominee.title}/>
      </div>
      { isSelected 
        ? (
              <button 
                type='button'
                onClick={() => onUnselectNominee(nominee.id)}
              >
                Unselect  
              </button>
        ) : (
              <button 
                type='button'
                onClick={() => onSelectNominee(nominee)}
              >
                Select  
              </button>
        )
      }
    </Container>
  )
}

export default NomineeCard;