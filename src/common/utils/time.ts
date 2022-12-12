/*
- Regras podem ser reaproveitadas em todo código, por isso foi criada em uma pasta
common e utils
*/

export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] =
        tempo.split(":");
    
    //convertendo uma string em number
    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;

    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}