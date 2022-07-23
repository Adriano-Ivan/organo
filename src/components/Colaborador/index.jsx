import "./styles.css"

const Colaborador = ({imagem, nome, cargo,time,corDeFundo}) => {

    return (
        <div className="colaborador">
            <div style={{backgroundColor: `${corDeFundo}`}} className="cabecalho">
                <img src={imagem} alt={`Foto de ${nome}`}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;