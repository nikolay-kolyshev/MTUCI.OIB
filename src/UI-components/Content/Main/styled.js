import styled from "styled-components"

export const MainStyled = styled.main`
    padding: ${({offset}) => 
        `calc(64px + ${offset}px) ${offset}px ${offset}px;` 
    }
    width: 100%;
    
    @media screen and (max-width: 600px) {
        padding: ${({offset}) =>
            `calc(56px + ${offset}px) ${offset}px ${offset}px;`
        }
    }
`