import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Copyright from "../Copyright";
import {useStyles} from "../styled";
import {TitleIcon} from "./styled";
import TextField from "@material-ui/core/TextField";

export default () => {

    const classes = useStyles()

    const [ksum, setKsum] = useState()
    const [summKodBukvOtkr, setSummKodBukvOtkr] = useState()

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={12} component={Paper}>
                <div className={classes.paper}>
                    <TitleIcon className={classes.avatar}>
                        <span>#</span>
                    </TitleIcon>
                    <Typography component="h1" variant="h5">
                        Хэширование
                    </Typography>

                    <Typography component="p" variant="body1">
                        а=71, b=13, с=МахVal+1=256, t0=144
                    </Typography>

                    <TextField
                        style={{maxWidth: 700}}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Что хершируем?"
                        name="text"
                        autoFocus
                        onChange={(e)=>{
                            const str = e.target.value

                            let ksum = 0
                            let mksum = 0
                            let t = 144
                            for (let i = 0; i < str.length; i++) {
                                ksum = (ksum+str.charCodeAt(i))%256
                                t = (71*t+13)%256
                                mksum = (mksum+(str.charCodeAt(i)^t))%256
                            }
                            setKsum(ksum)
                            setSummKodBukvOtkr(mksum)
                        }}
                    />

                    <br/>
                    <br/>

                    <Typography component="p" variant="body1">
                        {"KSumm: "+ksum}
                    </Typography>

                    <Typography component="p" variant="body1">
                        {"SummKodBukvOtkr: "+summKodBukvOtkr}
                    </Typography>


                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>







        </Grid>
    );
}