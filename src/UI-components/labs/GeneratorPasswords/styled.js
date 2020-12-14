import styled from "styled-components"
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100vh - 64px)',
        "@media screen and (max-width: 600px)": {
            height: 'calc(100vh - 56px)'
        }
    },
    paper: {
        margin: theme.spacing(0, 40),
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        "@media screen and (max-width: 1400px)": {
            margin: theme.spacing(0, 20)
        },
        "@media screen and (max-width: 1000px)": {
            margin: theme.spacing(0, 4)
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#372579",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        "&.MuiButton-containedPrimary": {
            backgroundColor: "#372579"
        },
        "&.MuiButton-containedPrimary:disabled": {
            backgroundColor: "#eee"
        }
    }
}));