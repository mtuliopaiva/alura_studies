import React, { useState } from 'react';
import Botao from '../components/Botao';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefas } from '../types/tarefas';
import style from './App.module.scss';


function App() {
  //const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  //aqui estamos tipando a tarefas dizendo que começa em 
  //Itarefas ouu vazio
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado } />
    </div>
  );
}

export default App;
