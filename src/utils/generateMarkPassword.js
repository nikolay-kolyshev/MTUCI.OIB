const latinBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const latinSmall = "abcdefghijklmnopqrstuvwxyz"
const rusBig = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
const rusSmall = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
const symbols = "!@#$%?-+=~"
const numbers = "0123456789"

export default (passwordLength, checkedLatinBig, checkedLatinSmall, checkedRusBig, checkedRusSmall, checkedSymbols, checkedNumbers) => {
    let charset = ""
    if (checkedLatinBig) charset += latinBig
    if (checkedLatinSmall) charset += latinSmall
    if (checkedRusBig) charset += rusBig
    if (checkedRusSmall) charset += rusSmall
    if (checkedSymbols) charset += symbols
    if (checkedNumbers) charset += numbers

    let length = passwordLength, retVal = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n))
    }

    debugger

    return retVal
}