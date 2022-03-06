import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, 0.75);
    z-index: 100;

    .modal-header {
        position: relative;
        background: #fff;
        width: 680px;
        border-radius: 16px;
        display:flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: #222;
            margin-top: 26px;
        }

        button {
            position: absolute;
            top: 8px;
            right: 8px;
            background: transparent;
            transition: opacity .3s;

            &:hover {
                opacity: 0.5;
            }
        }

        .selected-nominees-list {
            margin: 46px 0 26px;
            width: 80%;
            color: #222;

            ul {
                text-align: left;

                li {
                    margin-bottom: 8px;
                }
            }
        }
    }

    
`;