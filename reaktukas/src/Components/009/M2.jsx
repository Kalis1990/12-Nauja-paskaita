import { useContext } from "react"
import PirmasisKontekstas, { DarKontekstas } from "../../Contexts/PirmasisKontekstas"

function M2({kas}){

    const{pirmas, spalva}= useContext(PirmasisKontekstas);
    const{dar}= useContext(DarKontekstas);

    return <h2 style={{color: spalva}}>{kas} {dar} {pirmas}</h2>
}

export default M2