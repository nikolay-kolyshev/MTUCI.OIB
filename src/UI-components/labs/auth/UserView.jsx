import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {currentUser, login} from "./AuthUtlis";
import {Button, Typography} from "@material-ui/core";


export default function (props) {
    return <div>
        <Paper>
            <div>

                <Grid container spacing={26} alignItems="center">
                    <Grid item md={true} sm={true} xs={true}>
                        <Typography variant="h1" align="center">{currentUser.f_name+ " "+ currentUser.l_name}</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={26} alignItems="center">
                    <Grid item xl={4} xs={12}>
                    <Typography variant="h5" align="center">{"Телефон: "+currentUser.phone}</Typography>
                    </Grid>
                    <Grid item xl={4} xs={12}>
                    <Typography variant="h5" align="center">{"Дата рождения: "+currentUser.birthday}</Typography>
                    </Grid>
                    <Grid item xl={4} xs={12}>
                    <Typography variant="h5" align="center">{"Место рождения: "+currentUser.birthday_place}</Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={26}>
                    <Grid item xl={12} xs={12}>
                        <Typography variant="h5" align="center">{"Секретная информация:"}</Typography>
                    </Grid>
                    <Grid item xl={12} xs={12} alignContent="center">
                        <iframe align="center" width="100%" height="315" src="https://www.youtube.com/embed/0UWi3SHLCEM" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                    </Grid>
                </Grid>

                <Grid container justify="center" style={{ marginTop: '10px' } }>
                    <Button onClick={()=>{props.setScreen("pass")}} color="primary">Изменить пароль</Button>
                </Grid>
            </div>
        </Paper>
    </div>


}