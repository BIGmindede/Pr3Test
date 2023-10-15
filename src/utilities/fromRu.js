export default (val, type) => {
    switch (type) {
        case "дюйм":
            return 0.0254 * val
        case "аршин":
            return 71.12 * val
        case "верста":
            return 1066.8 * val
        case "фунт":
            return 409.5 * val
        case "пуд":
            return 16380 * val
        case "золоотник":
            return 4.26 * val
        case "четверть":
            return 3.27 * val
        case "ведро":
            return 12.3 * val
        case "бочка":
            return 123 * val
        default:
            throw new Error("Invalid arguments supplied")
    }
}