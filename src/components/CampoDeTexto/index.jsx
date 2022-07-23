import "./../../utils/commonStylesForm.css";

const CampoDeTexto = ({inputLabel,inputPlaceholder,obrigatorio,definirValor,valor}) => {

    const handleChange = ( e) => {
        definirValor(e.target.value)
      
    }

    return (
        <div className="container-input">
            <label>{inputLabel}</label>
            <input onChange={handleChange} value={valor} required={obrigatorio} placeholder={inputPlaceholder}/>
        </div>
    )
}

export default CampoDeTexto;