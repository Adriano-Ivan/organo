
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import OrganoFormulario from './components/OrganoFormulario';
import Time from './components/Time';
import camposDoFormulario from './utils/form_fields.data.jsx';
import times from './utils/times.data';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(()=> {
      console.log(colaboradores)
  },[colaboradores]);

  const adicionarColaborador= (colaborador)=> {
    // debugger
    setColaboradores([...colaboradores,colaborador]);
  }

  return (
    <div className="App">
      <Banner/>
      <OrganoFormulario 
        adicionarColaborador={adicionarColaborador}
        campos={camposDoFormulario} 
        titleForm={"Preencha os dados para criar o card do colaborador"}
      />
      {
        times.map((time) => {
          return (
            <Time 
              key={time.nome}
              nomeDoTime={time.nome} 
              corPrimaria={time.corPrimaria}
              corSecundaria={time.corSecundaria}
              colaboradores={colaboradores.filter((colaborador) =>
                 colaborador.time.trim().toLowerCase()
                  === time.nome.trim().toLowerCase())}
            />
          )
        })
      }

    </div>
  );
}

export default App;
