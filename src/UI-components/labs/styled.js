import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {Typography} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100vh - 64px)',
        "@media screen and (max-width: 600px)": {
            height: 'calc(100vh - 56px)',
        }
    },
    image: {
        backgroundImage: 'url(https://i.gifer.com/Js1Z.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(0, 4),
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#372579",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submitWrapper: {
        margin: theme.spacing(0, 40),
        width: `100%`,
        "@media screen and (max-width: 1300px)": {
            margin: theme.spacing(0, 20)
        },
        "@media screen and (max-width: 960px)": {
            margin: theme.spacing(0, 4)
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        "&.MuiButton-containedPrimary": {
            backgroundColor: "#372579"
        },
        "&.MuiButton-containedPrimary:disabled": {
            backgroundColor: "#eee"
        }
    },
    checkBoxWrapper: {
        margin: theme.spacing(0, 4),
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));

export const TypographyImportant = styled(Typography)`
    span{
        color: #372579;
        font-weight: bold;
    }
`