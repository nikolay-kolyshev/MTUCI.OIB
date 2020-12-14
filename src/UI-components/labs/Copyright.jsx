import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

export default () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'MTUCI.OIB © '}
            <Link color="inherit" href="https://material-ui.com/">
                и Копатыч и Лёха и Тема
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}