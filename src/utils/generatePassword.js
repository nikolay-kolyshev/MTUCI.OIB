const randomInRange = (min, max) =>
    Math.floor(min + Math.random() * (max + 1 - min))

const generateSymbolForPart1 = () =>
    String.fromCharCode(randomInRange(1040, 1071))

const generateSymbolForPart2 = count =>
    (count*count)%10

const generateSymbolForPart3 = count =>
    randomInRange(0, 9)

const generateSymbolForPart4 = () => {
    const setSymbolds = [`!`, `”`, `#`, `$`, `%`, `&`, `’`, `(`, `)`, `*`]
    return setSymbolds[randomInRange(0, setSymbolds.length)]
}

const generateSymbolForPart5 = () =>
    String.fromCharCode(randomInRange(1072, 1103))

function* generatePartOfPassword(start, end, func, count = -1) {
    for (let i = start; i <= end; i++)
        yield (count !== -1) ? func(count) : func()
}

function* generatorPassword(count) {

    yield* generatePartOfPassword(1, 2, generateSymbolForPart1)
    yield* generatePartOfPassword(3, 3, generateSymbolForPart2, count)
    yield* generatePartOfPassword(4, 4, generateSymbolForPart3)
    yield* generatePartOfPassword(5, 5, generateSymbolForPart4)
    yield* generatePartOfPassword(6, 6, generateSymbolForPart5)

}

export default count =>
    Array.from(generatorPassword(count)).join("")
