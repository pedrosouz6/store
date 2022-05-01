import styled from 'styled-components';

export const Container = styled.div `
    margin-bottom: 1rem;

    button {
        background: none;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        gap: .4rem;
        padding: 5px 0;
        cursor: pointer;
        font-size: 15px;
        color: #333;

        i {
            padding-top: 2px;
        }
    }
`