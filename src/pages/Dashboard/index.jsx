import React, { useEffect, useState } from 'react';
import Categories from '../../Components/Categories';
import SubmitButtom from '../../Components/SubmitButtom';
import SubmitModal from '../../Components/SubmitModal';
import { useNomineeContext } from '../../context/NomineesContext';
import api from '../../Api/Api';

import { Container } from './styles';

const Dashboard = () => {
  const [ categories, setCategories ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  const { selectedNominees } = useNomineeContext();

  useEffect(() => {
      async function getBallotsFromApi() {
        const { items } = await api.getBallotData();
        setCategories(items);
      }
      getBallotsFromApi();
  }, []);

  const handleSubmit = () => {
    if (selectedNominees.length === 0) {
      return alert(`You must select at leat one Nominee to submit`);
    }

    setShowModal(true);
  }


  return (
      <Container>
          <div>
            <h2>Movie Awards 2021</h2>
            { categories?.map( category => {
                return <Categories key={category.id} category={category}/>
              })
            }
          </div> 
          <SubmitButtom onSubmit={handleSubmit}/>
          { showModal && <SubmitModal selectedNominees={selectedNominees} onClose={() => setShowModal(false)}/> }
      </Container>
  )
}

export default Dashboard; 
