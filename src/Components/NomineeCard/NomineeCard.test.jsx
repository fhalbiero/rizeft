import { render, screen } from '@testing-library/react';
import NomineeCard from './index';


describe('NomineeCard test', () => {
  const nominee = {
    title: 'Nomadland',
    photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
    id: 'nomadland'
  }
  

  it('displays card on the page', () => {
    render(<NomineeCard nominee={nominee} />);
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });
  
  it('displays card title properly', () => {
    render(<NomineeCard nominee={nominee} />);
    const title = screen.getByText(/nomadland/i);
    expect(title).toBeInTheDocument();
  });
  
  it('displays select button text as Select', () => {
    const selectedNominee = {
      title: 'The Trial of the Chicago 7',
      photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
      id: 'the-trial-of-the-chicago-7'
    };

    render(<NomineeCard nominee={nominee} selectedNominee={selectedNominee} />);
    const buttonText = screen.getByText(/select/i);
    expect(buttonText).toBeInTheDocument();
  });

  it('displays select button text as UnSelect', () => {
    const selectedNominee = {
      title: 'Nomadland',
      photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
      id: 'nomadland'
    };

    render(<NomineeCard nominee={nominee} selectedNominee={selectedNominee} />);
    const buttonText = screen.getByText(/unselect/i);
    expect(buttonText).toBeInTheDocument();
  });

});
