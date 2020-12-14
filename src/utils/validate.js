export const required = value => {
    if (!value)
        return "Поле не может быть пустым!"
    return undefined
}