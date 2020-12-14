import styled from "styled-components"
import {Avatar} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export const TitleIcon = styled(Avatar)`
    span {
        font-size: 27px;
        font-weight: bold;
    }
`

export const Inner = styled(Grid)`
  padding: 30px 0;
`

export const ReportStyled = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`