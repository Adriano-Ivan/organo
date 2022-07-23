import { useState } from "react";
import Botao from "../Botao";
import CampoDeTexto from "../CampoDeTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./styles.css";

const OrganoFormulario = ({campos,titleForm,adicionarColaborador}) => {
    const [nome ,setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const submitCardCreation = (e) => {
        e.preventDefault();
        console.log(nome,cargo,imagem,time);

        const colaborador={nome,cargo,imagem,time};

        adicionarColaborador(colaborador);

        setNome("");
        setCargo("");
        setTime("");
        setImagem("");
    }

    const definirStateEretornarFuncaoDeSet = (flagState) => {
        if(flagState.toLowerCase().trim() === "nome"){
            return setNome;
        }else if(flagState.toLowerCase().trim() === "cargo"){
            return setCargo;
        } else if(flagState.toLowerCase().trim() === "time"){
            return setTime;
        } else if(flagState.toLowerCase().trim() === "imagem"){
            return setImagem;
        }
    }

    const definirValor = (flagState) =>{
        if(flagState.toLowerCase().trim() === "nome"){
            return nome;
        }else if(flagState.toLowerCase().trim() === "cargo"){
            return cargo;
        } else if(flagState.toLowerCase().trim() === "time"){
            return time;
        } else if(flagState.toLowerCase().trim() === "imagem"){
            return imagem;
        } 
    }

    return (
        <section className="formulario">
            <form onSubmit={submitCardCreation} >
                <h2>{titleForm}</h2>
                {
                    campos.map((campo,i) => (

                        campo.tipo !== "select" ?

                        <CampoDeTexto
                            obrigatorio={
                                campo.label.trim().toLowerCase() !== "imagem:" ?

                                true
                                : 
                                false
                            }
                            valor={definirValor(campo.flagState)}
                            definirValor={definirStateEretornarFuncaoDeSet(campo.flagState)}
                            key={campo.label}
                            inputLabel={campo.label} 
                            inputPlaceholder={campo.placeholder} 
                        />

                        :

                        <ListaSuspensa 
                            valor={definirValor(campo.flagState)}
                            definirValor={definirStateEretornarFuncaoDeSet(campo.flagState)}
                            obrigatorio={true}
                            key={campo.label} 
                            inputLabel={campo.label} 
                            itens={campo.itens}
                        />
                    ))
                }

                <Botao >
                    Criar card
                </Botao>
            </form>
        </section>    
    )
}

export default OrganoFormulario;