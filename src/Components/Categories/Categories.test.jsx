import { render, screen } from '@testing-library/react';
import Category from './index';

const data = {
  items: [
    {
      id: "best-picture",
      items: [
        {
          title: 'Nomadland',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
          id: 'nomadland'
        },
        {
          title: 'The Trial of the Chicago 7',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
          id: 'the-trial-of-the-chicago-7'
        },
        {
          title: 'Minari',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
          id: 'minari'
        },
        {
          title: 'Mank',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
          id: 'mank'
        },
        {
          title: 'One Night in Miami',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
          id: 'one-night-in-miami'
        },
      ],
      title: "Best Picture"
    }
  ]};


describe('test the Categories component', () => {
  const category = data.items[0];

  it('displays categories on the page', async () => {
    render(<Category category={category}/>);
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
  
  it('displays category title properly', async () => {
    render(<Category category={category}/>);
    const title = screen.getByText(/best picture/i);
    expect(title).toBeInTheDocument();
  });

  it('displays the itens', async () => {
    render(<Category category={category}/>);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

});