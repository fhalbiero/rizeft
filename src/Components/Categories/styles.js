import styled from 'styled-components';

export const Container = styled.div`
    .category-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #364d60;
        padding: 8px 16px;
        margin: 36px 0 16px;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        transition: opacity .3s;

        .category-header-left-container {  
            display: flex;
            align-items: center;
            h3 {
                text-align: left;
                margin-left: 16px;
            }

            button {
                background: transparent;
            }

            &:hover {
                opacity: 0.8;
            }
        }

        .category-header-right-container {  
            margin-left: 16px;  
            font-size: 14px;
        } 
    }


    main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 16px;
        
        div {
            display: flex;
            flex-direction: column;
    
            h2 {
                text-align: left;
            }
        }
    }

    @media screen and (max-width: 520px) {
        main {
            padding: 0;
            
            div {
                display: flex;
                flex-direction: column;
        
                h2 {
                    text-align: left;
                }
            }
        }
    }
`;
    