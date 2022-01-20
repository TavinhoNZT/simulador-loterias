import { useEffect, useState } from "react"
import { quina } from "./functions/quina"
import NumeroDisplay from "../components/NumeroDisplay"

export default function quinasena() {
    const [qtde, setQtde] = useState(5)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(quina())
    }, [])

    function renderNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />)
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            
            }}>

            <h1>Simulador Quina</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={5} max={15} value={qtde}
                    onChange={ev => setQtde(ev.target.value)} />
                <button onClick={() => setNumeros(quina(qtde))}>
                    Gerar Aposta
                    </button>
            </div>
        </div>
    )
} 