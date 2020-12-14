import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {login, setPassword} from "./AuthUtlis";
import {toast} from "react-toastify";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const mounth = ["Январь", "Февраль","Март", "Апрель","Май", "Июнь","Июль", "Август","Сентябрь", "Октябрь","Ноябрь", "Декабрь",]

export default function (props){



    const classes = useStyles();

    const [pass, setPass] = useState("")
    const [pass1, setPass1] = useState("")

    return <div className={classes.root}>
        <Paper className={classes.padding}>
            <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField onChange={(e) => setPass(e.target.value)} value={pass} id="username" label="Пароль" type="password" fullWidth autoFocus required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">

                    <Grid item md={true} sm={true} xs={true}>
                        <TextField onChange={(e) => setPass1(e.target.value)} value={pass1} id="username" label="Подтвердите пароль" type="password" fullWidth required />
                    </Grid>
                </Grid>

                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button onClick={()=>{
                        if (pass == pass1){
                            if (mounth.find((it) => it.toLowerCase() == pass.toLowerCase())){
                                toast.error("Пароль не может являться названием месяца", {
                                    autoClose: 2000,
                                });

                            }                            else{
                            toast.success("Пароль изменен", {
                                autoClose: 2000,
                            });
                            setPassword(pass)
                            props.setScreen('auth')}

                        }else
                            toast.error("Пароли не совпадают", {
                                autoClose: 2000,
                            });
                    }} variant="outlined" color="primary" style={{ textTransform: "none" }}>Изменить пароль</Button>
                </Grid>
            </div>
        </Paper>
    </div>

}