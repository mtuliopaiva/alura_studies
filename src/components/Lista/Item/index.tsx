// declarando as props e os tipos
import { ITarefas } from '../../../types/tarefas'
import style from './Item.module.scss'

interface Props extends ITarefas{
    selecionaTarefa: (tarefaSelecionada:ITarefas) => void
}

export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa}: Props) {
    console.log('item atual:', {tarefa,tempo,selecionado,completado,id})
    return (
        <li
            onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })} className={`${style.item} ${selecionado ?style.itemSelecionado:''} `}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
        
    )
}


