import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import Copyright from "../Copyright";
import {TypographyImportant, useStyles} from "../styled";
import MarkPasswordForm from "./MarkPasswordForm";
import generateMarkPassword from "../../../utils/generateMarkPassword";

export default () => {

    const classes = useStyles()
    const [password, setPassword] = useState(null)
    const [formFieldsFill, setFormFieldsFill] = useState(false)

    const [lowBorder, setLowBorder] = useState(null)
    const [power, setPower] = useState(null)
    const [length, setLength] = useState(null)

    const generatePasswordForID = (values) => {
        console.log(values)

        const alphabetArray = [
            {isConfirm: values.checkedLatinBig, count: 26},
            {isConfirm: values.checkedLatinSmall, count: 26},
            {isConfirm: values.checkedRusBig, count: 33},
            {isConfirm: values.checkedRusSmall, count: 33},
            {isConfirm: values.checkedSymbols, count: 10},
            {isConfirm: values.checkedNumbers, count: 10}
        ]
        const alphabet = alphabetArray.reduce((acc, obj) => {
            if (obj.isConfirm)
                return acc + obj.count
            return acc
        }, 0)

        const S = values.speed * values.time / values.probability
        const lengthPassword = Math.ceil(Math.log(S) / Math.log(alphabet))

        setLowBorder(Math.abs(values.speed * values.time / values.probability))
        setPower(alphabet)
        setLength(lengthPassword)
        setPassword(
            generateMarkPassword(
                lengthPassword,
                values.checkedLatinBig,
                values.checkedLatinSmall,
                values.checkedRusBig,
                values.checkedRusSmall,
                values.checkedSymbols,
                values.checkedNumbers
            )
        )
    }

    return (
        <Grid container xs={12} component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} component={Paper} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <VerifiedUserIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Оценка пароля
                    </Typography>
                    <MarkPasswordForm
                        onSubmit={generatePasswordForID}
                        setFormFieldsFill={setFormFieldsFill}
                        setLowBorder={setLowBorder}
                        setPower={setPower}
                        setLength={setLength}
                        initialValues={{
                            probability: null,
                            speed: null,
                            time: null,
                            checkedLatinBig: false,
                            checkedLatinSmall: false,
                            checkedRusBig: false,
                            checkedRusSmall: false,
                            checkedSymbols: false
                        }}
                    />
                    <TypographyImportant>
                        S* (нижняя граница пароля): {lowBorder}
                    </TypographyImportant>
                    <TypographyImportant>
                        A (мощность алфавита): {power}
                    </TypographyImportant>
                    <TypographyImportant>
                        L (длина пароля): {length}
                    </TypographyImportant>
                    {
                        !!password &&
                            <TypographyImportant>
                                Пароль: <span>{password}</span>
                            </TypographyImportant>
                    }
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}