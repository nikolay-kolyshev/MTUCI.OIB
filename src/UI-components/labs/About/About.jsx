import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Copyright from "../Copyright";
import {useStyles} from "../styled";
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import Button from "@material-ui/core/Button";
import Carousel from "react-material-ui-carousel";
import {Inner} from "../reports/styled";
import {ImgWrapper} from "./styled";

export default () => {

    const classes = useStyles()

    const items = [
        {
            name: "Копатыч",
            description: "Frontend-bear-dev. В институте появляется только по праздникам. Сейчас в спячке.",
            image: "https://pbs.twimg.com/media/D9wqEzhXkAE0QIw.jpg"
        },
        {
            name: "Лёха",
            description: "- Кто ты без своего костюма? - Программист, музыкант, студент МТУСИ, у вас есть перфоратор?",
            image: "https://static.wikia.nocookie.net/smesharikiarhives/images/5/5b/%D0%9C%D0%B0%D0%BB%D0%BE%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B9_%D0%B0%D1%82%D0%BE%D0%BC.jpg/revision/latest/scale-to-width-down/1000?cb=20200606203009&path-prefix=ru"
        },
        {
            name: "Тема",
            description: "Если наша жизнь RPG, этот парень вкачал все очки в soft skills.",
            image: "https://pbs.twimg.com/media/EZmu5kNWAAYp8I8.jpg:large"
        }
    ]

    return (
        <Grid container xs={12} component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} component={Paper} square>
                <Inner className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <FolderSharedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        О нас
                    </Typography>
                    <Carousel animation="slide" timeout={400} interval={6000}>
                        {
                            items.map( (item, i) => <Item key={i} item={item}/> )
                        }
                    </Carousel>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Inner>
            </Grid>
        </Grid>
    );
}

const Item = ({item}) => (
    <Paper>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <ImgWrapper>
            <img src={item.image}/>
        </ImgWrapper>
    </Paper>
)