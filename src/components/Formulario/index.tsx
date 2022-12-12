// Essa maneira se chama class components

import React from "react";
import { ITarefas } from "../../types/tarefas";
import Botao from "../Botao";
import style from './Formulario.module.scss';
//importando o pacote uuid que retorna o id
import { v4 as uuidv4 } from 'uuid'

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00:00",
  };

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    console.log("Formulario enviado");
    this.props.setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]);
    this.setState({
      tarefa: "",
      tempo:"00:00:00"
    })

   
  }

  render() {
    return (
      //Dessa forma estamos associando o adicionar tarefa com o bind, logo realizaremos a operação
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
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
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
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

