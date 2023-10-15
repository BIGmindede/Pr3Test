import {converter} from "./converter"

export default (src, res, srcUnit, resUnit, srcVal, setResVal) => {
    const result = converter(src, res, srcUnit, resUnit, srcVal)
    setResVal(result)
}