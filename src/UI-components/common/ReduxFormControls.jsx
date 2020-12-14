import React from "react";

export default ({
    input,
    typeComponent: Component,
    meta: { touched, error, warning },
    helperText,
    ...props
}) => {

    const isErorr = touched && !!error

    return (
        <Component
            {...input}
            {...props}
            error={isErorr}
            helperText={!!isErorr && error}
        />
    )
}