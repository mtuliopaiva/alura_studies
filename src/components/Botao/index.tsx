// Essa maneira se chama class components

import React from "react";
import style from './Botao.module.scss'


function Botao({onClick, type, children}:Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

interface Props {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined,
    //necessario tipar o onclick que é opcional, sendo uma função que retorna void
    onClick?: () => void;
}

export default Botao;


/*
Podemos estilizar inline inserindo objetos, variaveis
porém não é possível colocar if dentro do objeto e para isso colocamos
o ternário
ternário syntax -> variavel ? Faz algo : Caso contrario faça outra coisa
*/
/*
Código com inline style----
import React from "react";

class Botao extends React.Component{
    render() {       

        var estaAtivo = true;
        const backgroundColor = 'green';
        const styles = {
            backgroundColor: estaAtivo ? "green" :"red"
        }
        return (
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Botao;
*/