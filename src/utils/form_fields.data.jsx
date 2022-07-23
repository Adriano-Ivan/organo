import times from "./times.data";

const camposDoFormulario = [
    {
      label: "Nome:",
      placeholder: "Digite o seu nome",
      tipo: "text",
      flagState: "nome"
    }, 
    {
      label: "Cargo:",
      placeholder: "Digite seu cargo",
      tipo: "text",
      flagState: "cargo"
    },
    {
      label: "Imagem: ",
      placeholder:"Digite o endereço da imagem",
      tipo: "text",
      flagState: "imagem"
    },
    {
      label:"Time:",
      tipo: "select",
      flagState:"time",
      itens: [
        ...times.map((time) => time.nome)
      ]
    }
  ];

export default camposDoFormulario;