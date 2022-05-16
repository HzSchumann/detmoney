import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    //margin: 0 auto centraliza
    margin: 0 auto;

    //Respeita as medidas em relação a fonte
    padding: 2rem 1rem 12rem;

    //alinha o logo e o botão ao centro
    display: flex;
    align-items: center;

    //Espaço entre o logo e o botão
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        
        //transicao do filtro aplicado no hover
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`