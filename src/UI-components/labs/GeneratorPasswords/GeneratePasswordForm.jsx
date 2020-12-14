import React from "react"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "../styled";
import {Field, reduxForm} from "redux-form";
import ReduxFormControls from "../../common/ReduxFormControls";
import {required} from "../../../utils/validate";

const GeneratePassordForm = props => {

    const classes = useStyles()
    const handleInputChange = e => {
        props.setIDLength(e.target.value.length)
    }

    return (
        <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
            <Field
                component={ReduxFormControls}
                typeComponent={TextField}
                validate={required}
                margin="normal"
                required
                fullWidth
                label="Ваш ID"
                name="userID"
                helperText="Incorrect entry."
                autoFocus
                placeholder="Введите ваш ID..."
                onChange={handleInputChange}
            />
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
        </form>
    )
}

export default  reduxForm({
    form: "generatePassword"
})(GeneratePassordForm)