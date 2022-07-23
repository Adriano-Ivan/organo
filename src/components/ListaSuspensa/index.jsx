import "./../../utils/commonStylesForm.css";

const ListaSuspensa = ({itens,inputLabel,obrigatorio,valor,definirValor}) => {

    const handleChange = (e) => {
        console.log("TIME: "+e.target.value)
        definirValor(e.target.value);
    }

    return (
        <div className="container-input">
            <label>{inputLabel}</label>
            <select onChange={handleChange}   required={obrigatorio}>
                <option defaultValue=""></option>
                {
                    itens.map((item,i) => (
                        <option key={item} 
                            defaultValue={item === valor ? true : false}
                            value={item}>
                            {item}
                        </option>
                    ))
                }
            </select>
        </div>
       
    )
}

export default ListaSuspensa;