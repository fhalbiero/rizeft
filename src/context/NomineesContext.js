import React, { createContext, useContext, useState } from 'react';

const NomineeContext = createContext({});

const NomineeContextProvider = ({ children }) => {
    const [ selectedNominees, setSelectedNominees ] = useState([]);

    const addSelectNominee = (categoryId, categoryTitle, nominee) => {
        const newSelectedNominee = {
            categoryId,
            categoryTitle,
            ...nominee
        }
        setSelectedNominees( oldValue => [...oldValue, newSelectedNominee]);
    }

    const removeSelectNominee = (categoryId, nomineeId) => {
        const filteredNominees = selectedNominees.filter( nominee => {
            return nominee.categoryId !== categoryId || nominee.id !== nomineeId 
        }); 
        setSelectedNominees([...filteredNominees]);
    }

    return (
        <NomineeContext.Provider
            value={{
                selectedNominees,
                addSelectNominee,
                removeSelectNominee,
            }}
        >
            { children }
        </NomineeContext.Provider>
    )
}

const useNomineeContext = () => {
    const context = useContext(NomineeContext);

    if (!context) {
        throw new Error('The Nominee Context must be used inside the Nominee context provider');
    }

    return context;
}

export { NomineeContextProvider, useNomineeContext }