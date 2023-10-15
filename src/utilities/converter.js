import fromRu from "./fromRu"
import fromUs from "./fromUs"

export const converter = (source, res, type1, type2, input) => {
    if (source === res && type1 === type2) return input
    let val1 = 0
    switch (source) {
        case "Старорусская система":
            val1 = fromRu(input, type1)
            break
        case "Американская система":
            val1 = fromUs(input, type1)
            break
        case "Система СИ":
            val1 = input
            break
        default:
            throw new Error("Invalid arguments supplied")
    }

    let val2 = 0
    switch (res) {
        case "Старорусская система":
            val2 = fromRu(1, type2)
            break
        case "Американская система":
            val2 = fromUs(1, type2)
            break
        case "Система СИ":
            val2 = input
            break
        default:
            throw new Error("Invalid arguments supplied")
    }
    
    return val1 / val2
}