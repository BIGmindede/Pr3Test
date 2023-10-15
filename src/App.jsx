import {React, useState } from 'react';
import GenerateInputFields from './components/GenerateInputFields';
import handleOnclick from './utilities/handleOnclick';
import './App.css'

function App() {

  const [src, setSrc] = useState("Исходная система");
  const [res, setRes] = useState("Конечная система");
  const [par, setPar] = useState("Параметр");
  const [srcUnit, setSrcUnit] = useState("Исходная величина");
  const [resUnit, setResUnit] = useState("Конечная величина");
  const [srcVal, setSrcVal] = useState()
  const [resVal, setResVal] = useState()



  return (
      <main>
        <article>
          <section>
            <h1>Конвертер величин</h1>
            <cite>Выберите исходную и конечную систему и единицы измерения величин</cite>
          </section>
          <section>
            <table>
              <tr>
                <td><span className={"tcolname " + (src === "Исходная система" ? "pop_down" : "pop_up")}>
                  Исходная система
                </span></td>
                <td><span className={"tcolname " + (res === "Конечная система" ? "pop_down" : "pop_up")}>
                  Конечная система
                </span></td>
                <td><span className={"tcolname " + (par === "Параметр" ? "pop_down" : "pop_up")}>
                  Параметр
                </span></td>
              </tr>
              <GenerateInputFields test-id="input-fields" src={src} res={res} par={par} setSrc={setSrc} setRes={setRes} setPar={setPar} setSrcUnit={setSrcUnit} setResUnit={setResUnit} srcUnit={srcUnit} resUnit={resUnit}/>
              <tr>
                <td><input type="number" value={srcVal} onChange={e => setSrcVal(e.target.value)}/></td>
                <td><input type="number" disabled value={resVal} onChange={e => setResVal(e.target.value)}/></td>
                <td><button onClick={() => handleOnclick(src, res, srcUnit, resUnit, srcVal, setResVal)}>Посчитать</button></td>
              </tr>
            </table>
            
          </section>
        </article>
      </main>
  )
}

export default App