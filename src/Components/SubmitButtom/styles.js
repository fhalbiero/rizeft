import styled from 'styled-components';

export const ButtomContainer = styled.button`
    position: fixed;
    bottom: 26px;
    right: 26px;
    padding: 18px 38px;
    border-radius: 5px;
    z-index: 10;
    background: #009B86;
    font-size: 20px;
    color: #FFF;
    transition: background-color .3s; 
    
    &:hover {
        background: #34AC9C;
    }

    @media screen and (max-width: 520px) {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        border-radius: 0;
        padding: 8px;
        font-size: 16px;
    }
`;