
//Criando um import da pasta criada com os types
import { ITarefas } from '../../types/tarefas';
import Item from './Item'
import style from './Lista.module.scss';

//Forma de tipar uma função - selecionaTarefa. Retorna nada pois é uma função
interface Props {
  tarefas: ITarefas[],
  selecionaTarefa: (tarefaSelecionada:ITarefas) => void
}

//Criando uma function component
//estamos colocando um array de ITarefas
function Lista({tarefas,selecionaTarefa}:Props) {

    return (
      <aside className={style.listaTarefas}>
        <h2> Estudos do dia </h2>
        <ul>
                {tarefas.map((item, index) => (
                  
                  <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                  />
                ))}
            
        </ul>
      </aside>
    );
}

export default Lista;

/*map faz o loop no array e retorna algo, nesse caso estamos retornando
uma li que dentro dela temos h3 e span
Ao usar o map, o react necessita do key para renderizar e nao dar algum problema
*/

/*
Foram criados CSS Modules para evitar que se repitam os mesmos nomes das classes, pois ele cria
um código diferenciando cada uma. É possivel ver ao inspecionar
*/

/*
ler sobre no VScode Convencional commits
git merge
git clone
git push
git pull
git checkout
commit
*/

/*
Aprender sobre os principais hooks do react TS
useState
useEffect
useContext
*/