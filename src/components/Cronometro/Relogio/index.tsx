import style from './Relogio.module.scss'

interface Props {
  tempo?:number;
  //mesma coisa que tempo:number | undefined
}
//tempoigual a 0 se nao for definido
function Relogio({ tempo = 0}:Props) {
  const minutos = Math.floor(tempo/60);
  const segundos = tempo%60; //Apenas a parcela que sobra

  //padstart é para mostrar o zero quando for o caso de 01:01 por exemplo - ele diz qual caractere inicial
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2,'0');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2,'0');

    return (
      <>
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutoUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
      </>
    );
}

export default Relogio