// Essa maneira se chama class components

import React, { useState } from "react";
import { ITarefas } from "../../types/tarefas";
import Botao from "../Botao";
import style from './Formulario.module.scss';
//importando o pacote uuid que retorna o id
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}


function Formulario({setTarefas}:Props){

  const[tarefa,setTarefa] = useState("");
  const[tempo,setTempo] = useState("00:00");

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    console.log("Formulario enviado");
    setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]);
      setTarefa("");
      setTempo("00:00");
  }



  return (
    //Dessa forma estamos associando o adicionar tarefa com o bind, logo realizaremos a operação
    <form
      className={style.novaTarefa}
      onSubmit={adicionarTarefa}
    >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value )}
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo"></label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value )}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;

/*Com class componentes criamos o state de outra forma*/
/*
Alterando o estado é necessário setar o estado criando um objeto
com um spread state ({...this.state,tempo:evento.target.value})
*/

/*
Instalando o pacote de gerador de ID
npm i uuid
*/

