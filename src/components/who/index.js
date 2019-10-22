import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  photo: {
    flex: 1,
  },
  texto: {
    flex: 1,
  },
  materia: {
    display: 'flex',
    flexWrap: "wrap",
  }
}));

const Who = function() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Quem foi George Gracie?</h1>
      <p>
        Falar do George em poucas palavras é complexo dado sua longa história com a luta no Brasil,
        duas décadas como lutador, sendo campeão de <a href="https://catchbrazil.com.br/historia/">Catch Wrestling</a>,
        Jiujitsu e Vale-tudo, e mais três décadas como mestre , deixamos essa matéria
        do jornal Última Hora do RJ, de 16/11/1955 que já naquela época tentava demonstrar a importância
        desse grande pioneiro e co-criador de todo o cenário de combate que foi desenvolvido aqui:
      </p>
      <div className={classes.materia}>
        <div className={classes.photo}>
          <img src="images/declaracao-cortada.png" />
        </div>
        <div className={classes.texto}>
          <h3>ARQUIVOS IMPAGAVEIS</h3>
          <h2>GEORGE GRACIE</h2>
          <p>
          Antes de mais nada, explico por que, em se tratando dos  <br />
          Gracies, começo pelo George. Aos olhos do Brasl, o ex- <br />
          lutador, atual professor, aparece como a Cinderela da família<br />
          famosa. Enquanto os outros dois, Carlos e Hélio, jamais  <br />
          deixaram de ter o nome projetado em alto relêvo, pelos   <br />
          jornais e revistas do pais e do estrangeiro, o de George  <br />
          ofreu um colapso. Dir-se-ia que o homem que venceu a  <br />
          capoeira, esmagou a "fôrça-bruta", não tem direito a um  <br />
          pedacinho dessa fama que êle, a custa de suor e sangue,  <br />
          ajudou a construir. Essa injustiça, talvez inconsciente, vem  <br />
          sendo praticada há 15 anos, todo o tempo em que George  <br />
          esteve ausente do Rio. Por outro lado, não se pode negar<br />
          o	valor da dupla Hélio e Carlos. Sua Academia, uma das  <br />
          mais bem organizadas do país, também nasceu da peseverança <br />
          dêsses rapazes. São, indiscutivelmente, dois baluar- <br />
          tes da lula do "kimono". De qualquer maneira, exemplo  <br />
          dos Três Mosqueteiros, que não eram três e, sim, quatro,  <br />
          também os dois pioneiros do Jiu-Jitsu não são dois e, sim,  <br />
          três.. Ninguém pode, honestamente, lembrar os nomes de  <br />
          Hélio e Carlos sem associar o de George. Outro detalhe  <br />
          importante e que dá direito a figurar nesta crônica: a  <br />
          vida do campeão George. Enquanto, de uma maneira geral,  <br />
          os dias de Hélio e Carlos correm iguais, quase gemeos, os do  <br />
          despresado George, são mais instáveis que as opiniões do  <br />
          'Corvo". A existência de Carlos, Hélio e sua gente é tran- <br />
          quila e sem preocupações. Ora, essa estabilidade provaca  <br />
          bocéjos e tira todo o pitoresco que o repórter poderia ex- <br />
          plorar. Volta e meia temos as lutas do fabuloso Carlson;  <br />
          do excelente Hélio Vigio Gomes ou, ainda, êsse quase des- <br />
          conhecido mas espetacular João Alberto Barreto quebra	<br />
          a cara de alguns, longe dos "rings" e dos gongos. Mas é só. <br /> 
          Tudo isto, porém, já se transformou em rotina na vida dêsse<br />
          pessoal, George, não. Êle já subiu ao céu e desceu ao in- <br />
          ferno umas quinhentas vezes, no mínimo. Já passou fome<br />
          e	já viu o dinheiro escorrer por entre os dedos, como se  <br />
          fôsse água. Convenhamos que sofrimento lava a alma do  <br />
          sujeito, dá-lhe o lastro de vida que a felicidade total não  <br />
          proporciona. Tantas lutas, dentro e fora do "ring', ponti- <br />
          lharam a vida de George do mais vivo colorido. Hoje, pro- <br />
          fessor, pode recordar com saudade os lances pitorescos de  <br />
          sua carreira de lutador. Acusam o "Gato Ruivo" de ter  <br />
          topado a chamada "marmelada" e êle sorri. Já explicou,  <br />
          milhões de vezes, que jamais negociou o resultado de sua  <br />
          luta. "O máximo que fazia — diz êle — era, atendendo aos  <br />
          pedidos dos empresários, adiar minha vitória. Por exem- <br />
          plo: ao Invés de liquidar no primeiro, no segundo, acabava   <br />
          com o adversário no último "round". Era uma maneira de  <br />
          oferecer ao público um espetáculo mais movimentado". De  <br />
          qualquer forma, fôsse George o mais descarado "marme- <br />
          leiro" do planeta e não perderia sua condição de excelente  <br />
          profeasor. Nem ofuscaria seu glorioso passado. Eis, em pou- <br />
          cas pinceladas, o perfil do Sr. George Gracie. Hoje êle vive  <br />
          das aulas que ministra e para sua espôsa, D. Lina e seu  <br />
          casal de filhos. Seu nome, quer queiram, quer não, faz  <br />
          parte da história dos esportes do "ring" do Brasil.
          </p>        
        </div>
      </div>
    </div>
  )
};

export default withRouter(Who);