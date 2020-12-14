import React, {useEffect} from "react"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "../styled";
import {Field, reduxForm} from "redux-form";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ReduxFormControls from "../../common/ReduxFormControls";
import {required} from "../../../utils/validate";

const MarkPasswordForm = props => {

    const classes = useStyles()
    useEffect(()=>{
        props.setFormFieldsFill(props.invalid)
    },[props.invalid])

    return (
        <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
            <Grid container>
                <Grid item xs={12} md={9} component={"div"}>
                    <div className={classes.paper}>
                        <Field
                            component={ReduxFormControls}
                            typeComponent={TextField}
                            type="number"
                            validate={required}
                            margin="normal"
                            required
                            fullWidth
                            label="P (вероятность)"
                            name="probability"
                            autoFocus
                            placeholder="Введите вероятность..."
                        />
                        <Field
                            component={ReduxFormControls}
                            typeComponent={TextField}
                            type="number"
                            validate={required}
                            margin="normal"
                            required
                            fullWidth
                            label="V (скорость перебора)"
                            name="speed"
                            placeholder="Введите скорость перебора..."
                        />
                        <Field
                            component={ReduxFormControls}
                            typeComponent={TextField}
                            type="number"
                            validate={required}
                            margin="normal"
                            required
                            fullWidth
                            label="T (срок действия пароля)"
                            name="time"
                            placeholder="Введите срок действия пароля..."
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={3} component={"div"}>
                    <div className={classes.checkBoxWrapper}>
                        <FormControlLabel
                            control={
                                <Field

                                    component={ReduxFormControls}
                                    typeComponent={Checkbox}
                                    name="checkedLatinBig"
                                    color="primary"
                                />
                            }
                            label="Латинские большие"
                        />
                        <FormControlLabel
                            control={
                                <Field
                                    component={ReduxFormControls}
                                    typeComponent={Checkbox}
                                    name="checkedLatinSmall"
                                    color="primary"
                                />
                            }
                            label="Латинские маленькие"
                        />
                        <FormControlLabel
                            control={
                                <Field
                                    component={ReduxFormControls}
                                    typeComponent={Checkbox}
                                    name="checkedRusBig"
                                    color="primary"
                                />
                            }
                            label="Русские большие"
                        />
                        <FormControlLabel
                            control={
                                <Field
                                    component={ReduxFormControls}
                                    typeComponent={Checkbox}
                                    name="checkedRusSmall"
                                    color="primary"
                                />
                            }
                            label="Русские маленькие"
                        />
                        <FormControlLabel
                            control={
                                <Field
                                    component={ReduxFormControls}
                                    typeComponent={Checkbox}
                                    name="checkedSymbols"
                                    color="primary"
                                />
                            }
                            label="Символы"
                        />
                        <FormControlLabel
                            control={
                                <Field
                                    component={ReduxFormControls}
                                    typeComponent={Checkbox}
                                    name="checkedNumbers"
                                    color="primary"
                                />
                            }
                            label="Цифры"
                        />
                    </div>
                </Grid>
                <div className={classes.submitWrapper}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={props.invalid}
                    >
                        Сгенерировать пароль
                    </Button>
                </div>
            </Grid>
        </form>
    )
}

export default reduxForm({
    form: "markPassword"
})(MarkPasswordForm)