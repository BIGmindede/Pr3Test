export const pickUnits = (sys, par) => {
    var values = {
        us: {
          len: ["дюйм", "фут", "ярд", "миля"],
          weight: ["унция", "фунт"],
          volume: ["галлон"]
        },
        si: {
          len: ["м"],
          weight: ["г"],
          volume: ["литр"]
        },
        ru: {
          len: ["аршин", "верста"],
          weight: ["пуд", "золоотник"],
          volume: ["четверть", "ведро", "бочка"]
        }
    }
    switch(sys) {
        case "Система СИ":
            values = {...values.si}
            break
        case "Старорусская система":
            values = {...values.ru}
            break
        case "Американская система":
            values = {...values.us}
            break
        default:
            throw new Error("Invalid arguments supplied")
    }
    switch(par) {
        case "длина":
            return values.len
        case "масса":
            return values.weight
        case "объем":
            return values.volume
        default:
            throw new Error("Invalid arguments supplied")
    }
}