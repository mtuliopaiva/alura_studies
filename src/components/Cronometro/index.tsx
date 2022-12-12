import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
    selecionado:ITarefas | undefined
}

export function Cronometro({selecionado}:Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    
      },[selecionado])
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro</p>
            Tempo:{tempo}
            <div className={style.relogioWrapper}>
                <Relogio />

            </div>
            <Botao>Começar</Botao>
        </div>
    )
}