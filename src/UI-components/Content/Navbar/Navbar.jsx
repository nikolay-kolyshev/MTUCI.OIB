import React from 'react';
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import Looks3Icon from "@material-ui/icons/Looks3";
import Looks4Icon from "@material-ui/icons/Looks4";
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import {LogoWrapper, NavLinkStyled} from "./styled";
import logo from "../../../assets/images/logo.svg"
import {RateReview} from "@material-ui/icons";

const Navbar = ({mobileOpen, handleDrawerToggle, theme, classes, container}) => {

    const iconsLabsDictionary = new Map(
        [
            ['Генератор паролей', {id: 1, path: "generator_password", component: <LooksOneIcon/>}],
            ['Аутентификация', {id: 2, path: "auth", component: <LooksTwoIcon/>}],
            ['Оценка пароля', {id: 3, path: "mark_password", component: <Looks3Icon/>}],
            ['Хеширование', {id: 4, path: "hash", component: <Looks4Icon/>}],
        ]
    )

    const iconsLabsBottomDictionary = new Map(
        [
            ['Отчеты', {id: 1, path: "reports", component: <RateReview/>}],
            ['О нас', {id: 1, path: "about", component: <FolderSharedIcon/>}]
        ]
    )

    const drawer = (
        <div>
            <LogoWrapper className={classes.toolbar}>
                <img src={logo}/>
            </LogoWrapper>
            <Divider />
            <List>
                {Array.from(iconsLabsDictionary.entries()).map(([key, value], index) => (
                    <NavLinkStyled to = {value.path} key={value.id} activeClassName="active ">
                        <ListItem button>
                            <ListItemIcon>{value.component}</ListItemIcon>
                            <ListItemText primary={key} />
                        </ListItem>
                    </NavLinkStyled>
                ))}
            </List>
            <Divider />
            <List>
                {Array.from(iconsLabsBottomDictionary.entries()).map(([key, value], index) => (
                    <NavLinkStyled to = {value.path} key={value.id} activeClassName="active">
                        <ListItem button>
                            <ListItemIcon>{value.component}</ListItemIcon>
                            <ListItemText primary={key} />
                        </ListItem>
                    </NavLinkStyled>
                ))}
            </List>
        </div>
    );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )

}

export default Navbar
