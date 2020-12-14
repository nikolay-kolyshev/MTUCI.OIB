import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {login} from "./AuthUtlis";
import {toast} from "react-toastify";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Copyright from "../Copyright";
import {useStyles} from "../styled";

export default function AuthScreen(props) {

    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={6} className={classes.image} />
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Аутентификация
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email адрес"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Запомнить меня"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={()=>{
                                if (login(username,pass)){
                                    toast.success("Вы успешно вошли", {
                                        autoClose: 2000,
                                    });
                                    props.setScreen('user')
                                }else
                                    toast.error("Неверный логин или пароль", {
                                        autoClose: 2000,
                                    });
                            }}
                        >
                            Войти
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Забыли пароль?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Впервые у нас? Зарегестрируйтесь."}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}