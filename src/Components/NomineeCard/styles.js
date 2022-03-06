import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    min-width: 300px;
    height: 500px;
    border-radius: 6px;
    margin: 8px 8px 16px;
    overflow: hidden;
    
    background-color: #fff; 

    header {
        margin: 0;
        padding: 12px;
        width: 100%;
        z-index: 10;
        display: flex;
        justify-content: center;
        background: #009B86;
        ${(props) => props.isSelected === true 
            ? css`
                color: #fff;
                background-color: #009B86;
            ` 
            : css`
                color: #0D2436;
                background-color: #fff;
            `
        }
      
        h4 { 
            font-weight: 600;
        }
    }

    button {
        position: absolute;
        bottom: 16px;
        padding: 12px 28px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 16px;
        z-index: 10;
        background: #0D2436;
        color: #FFF;
        transition: background-color .3s; 
        
        &:hover {
            background: #2D4869;
        }
    }

    div {
        position: absolute;
        top: 0;
        -webkit-filter: opacity(0.6);
        filter: opacity(0.6);
        transition: all 1.5s;

        img {
            width: 100%;
            min-width: 400px;
        }
    }

    &:hover {
        div {
            -webkit-filter: opacity(1);
            filter: opacity(1);
        }
    }

    @media screen and (max-width: 520px) {
        height: 400px; 
    }
`;