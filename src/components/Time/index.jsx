import Colaborador from "../Colaborador";
import "./styles.css";

const Time = ({nomeDoTime,corPrimaria,corSecundaria,colaboradores}) => {

    const estilosContainer = {
        backgroundColor: corSecundaria
    };

    const estilosTitulo ={
        borderColor: corPrimaria
    }

    return colaboradores.length > 0 && (
        <section 
            style={estilosContainer} 
            className="time"
        >
            <h3 style={estilosTitulo}>{nomeDoTime}</h3>

            <div className="colaboradores">
            {
                colaboradores.map((colaborador,i) => (

                    <Colaborador 
                        corDeFundo={corPrimaria}
                        key={colaborador.nome+i+colaborador.time+colaborador.cargo}
                        imagem={colaborador.imagem} 
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        time={colaborador.time}
                    />

                ) 
                )
            }
            </div>
            
        </section>
    )
}

export default Time;