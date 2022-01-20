import { useEffect, useState } from "react"
import { lotofacil } from "./functions/lotofacil"
import NumeroDisplay from "../components/NumeroDisplay"

export default function lotofacilsena() {
    const [qtde, setQtde] = useState(15)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(lotofacil())
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

            <h1>Simulador LotoFacil</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={15} max={20} value={qtde}
                    onChange={ev => setQtde(ev.target.value)} />
                <button onClick={() => setNumeros(lotofacil(qtde))}>
                    Gerar Aposta
                    </button>
            </div>
        </div>
    )
} 