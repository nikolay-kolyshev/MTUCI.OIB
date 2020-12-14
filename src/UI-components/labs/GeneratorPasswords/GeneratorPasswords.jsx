import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {useStyles} from "./styled";
import GeneratePasswordForm from "./GeneratePasswordForm";
import Copyright from "../Copyright";
import {TypographyImportant} from "../styled";
import generatePassword from "../../../utils/generatePassword";

export default () => {

    const classes = useStyles()
    const [password, setPassword] = useState(null)
    const [IDLength, setIDLength] = useState(0)

    const generatePasswordForID = ({userID}) => {
        if (!!userID)
            setPassword(generatePassword(userID.length))
    }

    return (
        <Grid container xs={12} component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} component={Paper} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <VpnKeyIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Генератор паролей
                    </Typography>
                    <GeneratePasswordForm onSubmit={generatePasswordForID} setIDLength={setIDLength}/>
                    {
                        !!IDLength &&
                            <TypographyImportant>
                                Длина ID: {IDLength}
                            </TypographyImportant>
                    }
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