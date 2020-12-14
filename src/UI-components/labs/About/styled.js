import styled from "styled-components"
import {Avatar} from "@material-ui/core";

export const TitleIcon = styled(Avatar)`
    span {
        font-size: 27px;
        font-weight: bold;
    }
`

export const ImgWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
    }
`
