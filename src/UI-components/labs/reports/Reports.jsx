import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Copyright from "../Copyright";
import {TypographyImportant, useStyles} from "../styled";
import {Inner, TitleIcon} from "./styled";
import {RateReview} from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import Report from "./Report";
import report1 from "../../../assets/docs/report1.pdf"
import report2 from "../../../assets/docs/report2.pdf"
import report3 from "../../../assets/docs/report3.pdf"
import report4 from "../../../assets/docs/report4.pdf"

const a11yProps = index => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default () => {

    const classes = useStyles()

    const [reportNumber, setReportNumber] = useState(0);

    const handleChangeReport = (event, newValue) => {
        setReportNumber(newValue)
    };

    const handleChangeReportIndex = (index) => {
        setReportNumber(index)
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <AppBar position="static" color="default">
                <Tabs
                    value={reportNumber}
                    onChange={handleChangeReport}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="1 отчёт"/>
                    <Tab label="2 отчёт"/>
                    <Tab label="3 отчёт"/>
                    <Tab label="4 отчёт"/>
                    <Tab label="5 отчёт"/>
                </Tabs>
            </AppBar>

            <Grid item xs={12} component={Paper}>
                <Inner className={classes.paper}>


                    <TitleIcon className={classes.avatar}>
                        <RateReview/>
                    </TitleIcon>
                    <Typography
                        component="h1"
                        variant="h5"
                        style={{marginBottom: "20px"}}
                    >
                        Отчеты
                    </Typography>

                    <TypographyImportant style={{marginBottom: "20px"}}>
                        Исходный код: <span><a href={"https://github.com/alexsvdk/oiblabs"}>github.com/alexsvdk/oiblabs</a></span>
                    </TypographyImportant>

                    <div>
                        <TabPanel value={reportNumber} index={0}>
                            <Report report={report1}/>
                        </TabPanel>
                        <TabPanel value={reportNumber} index={1}>
                            <Report report={report2}/>
                        </TabPanel>
                        <TabPanel value={reportNumber} index={2}>
                            <Report report={report3}/>
                        </TabPanel>
                        <TabPanel value={reportNumber} index={3}>
                            <Report report={report4}/>
                        </TabPanel>
                    </div>

                    <Box mt={5}>
                        <Copyright />
                    </Box>

                </Inner>
            </Grid>



        </Grid>
    );
}