import { useEffect, useState } from "react"
import {pickUnits} from "../utilities/pickUnits"

const GenerateInputFields = ({
    src, res, par, setSrc, setRes, setPar, setSrcUnit, setResUnit, srcUnit, resUnit
}) => {
  const system_types = [
    "Исходная система",
    "Конечная система"
  ]

  const systems = [ 
    "Система СИ",
    "Старорусская система",
    "Американская система"
  ]

  const parameters = ["Параметр", "длина", "масса", "объем"]

  const [units1, setUnits1] = useState([])
  const [units2, setUnits2] = useState([])

  useEffect(() => {
    if (systems.includes(src) && par !== "Параметр") setUnits1(pickUnits(src, par))
    else setUnits1([])
  }, [src, par])

  useEffect(() => {
    if (systems.includes(res) && par !== "Параметр") setUnits2(pickUnits(res, par))
    else setUnits2([])
  }, [res, par])

  return <>
    <tr>
      {system_types.map(f => 
        <td key={f}>
          <select onChange={e => {
            if (f === "Исходная система") setSrc(e.target.value)
            else if (f === "Конечная система") setRes(e.target.value)
          }}>
            <option value={f}>{f}</option>
            {systems.map(s => 
              <option key={s} value={s}>{s}</option>
            )}
          </select>
        </td>
      )}
      <td>
        <select onChange={e => setPar(e.target.value)}>
          {parameters.map(p =>
            <option key={p}>{p}</option>      
          )}
        </select>
      </td>
    </tr>
    <tr>
      <td><span className={srcUnit === "Исходная величина" ? "pop_down" : "pop_up"}>
        Исходная величина
      </span></td>
      <td><span className={resUnit === "Конечная величина" ? "pop_down" : "pop_up"}>
        Конечная величина
      </span></td>
    </tr>
    <tr>
      <td>
        <select
          onChange={e => {setSrcUnit(e.target.value)}}
        >
          <option value="Исходная величина">{"Исходная величина"}</option>
          {units1.map(u => 
              <option key={u} value={u}>{u}</option>
          )}
        </select>
      </td>
      <td>
        <select
          onChange={e => {setResUnit(e.target.value)}}
        >
          <option value="Конечная величина">{"Конечная величина"}</option>
          {units2.map(u => 
              <option key={u} value={u}>{u}</option>
          )}
        </select>
      </td>
    </tr>
  </>
}

  export default GenerateInputFields