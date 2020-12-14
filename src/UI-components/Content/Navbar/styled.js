import React from "react"
import styled from "styled-components"
import {NavLink} from "react-router-dom"

export const NavLinkStyled = styled(NavLink)`
    &.${({activeClassName}) => activeClassName} {
        .MuiTypography-body1{
            color: #372579;
            font-weight: bold;
        }
        
        .MuiListItemIcon-root{
            color: #372579;
        }
    }
`

export const LogoWrapper = styled.div`
    
    display: flex;
    justify-content: center;
    padding: 30px;
    
    img {
        display: block;
        width: 100%;
    }
`