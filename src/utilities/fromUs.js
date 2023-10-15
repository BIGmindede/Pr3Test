export default (val, type) => {
    switch(type) {
        case "дюйм":
            return 0.0254 * val
        case "фут":
            return 0.3048 * val
        case "ярд":
            return 0.9144 * val
        case "миля":
            return 1609 * val
        case "унция":
            return 28.35 * val
        case "фунт":
            return 453.6 * val
        case "галлон":
            return 3.785 * val
        default:
            throw new Error("Invalid arguments supplied")
    }
}