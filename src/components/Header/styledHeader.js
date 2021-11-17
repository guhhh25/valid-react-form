
import styled from 'styled-components';
import image from './../imgs/bg.png'



export const Container = styled.div`
    
    height: 100vh;
    width: 100%;
    background-image:url(${image});
    background-repeat: no-repeat;
    text-align: center;
    
    display: flex;
    justify-content: center;

    @media(max-width: 1400px) {
            height:104vh;
        }

    @media(max-width: 700px) {
            height:107vh;
        }

    
    


`

export const Content = styled.div`
    margin-top: 35px;
    height: 300px;
    
`


