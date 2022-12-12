// Essa maneira se chama class components

import React from "react";
import style from './Botao.module.scss'


interface IProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

class Botao extends React.Component<IProps>{
    render() {       
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
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