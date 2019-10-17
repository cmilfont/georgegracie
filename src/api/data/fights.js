const fights = [
  { title: 'h$',"date":"19 de janeiro de 1930","desc":"Vitória sobre o Boxer Johann Tose (também descrito em outro jornal como Johnson Toow)."}
  ,
  { title: 'h$',"date":"03 de julho de 1931","desc":"Vitória sobre o capoeira Eduardo José Sant'Anna (Coronel)."}
  ,
  { title: 'h$',"date":"19 de novembro de 1931","desc":"Vitória sobre Jayme Ferreira."}
  ,
  { title: 'h$',"date":"03 de dezembro de 1931","desc":"Vitória sobre Mario Aleixo."}
  ,
  { title: 'h$',"date":"08 de abril de 1933","desc":"Empate com Geo Omori (Jiu Jitsu)."},
  { title: 'h$',"date":"08 de Julho de 1933","desc":"Vitória sobre Tico Soledade."}
  ,
  { title: 'h$',"date":"28 de outubro de 1933","desc":"Vitória sobre Manoel Fernandes (armlock)."}
  ,
  { title: 'h$',"date":"23 de dezembro de 1933","desc":"Empate com Geo Omori (Vale Tudo)."},
  {
    'date':'19 de janeiro de 1934',
    'desc':'Empate com Orlando Americo da Silva "Dudu".',
    'title': 'Empate com Dudu',
    'img': 'img/jornal_a_noite-20-1-1934.png'
  },
  { title: 'h$',"date":"16 de maio de 1934","desc":"Vitória sobre Shigêo (estrangulamento)."}
  ,
  { title: 'h$',"date":"12 de agosto de 1934","desc":"Vitória sobre Jack Conley (chave de braço)."}
  ,
  { title: 'h$',"date":"06 de outubro de 1934","desc":"Derrota para Wladek Zbyszko (chave de braço)."}
  ,
  { title: 'h$',"date":"28 de setembro de 1935","desc":"Empate com Takeo Yano."},
  { title: 'h$',"date":"18 de novembro de 1935","desc":"Vitória sobre Maximino Grandi em Belo Horizonte na academia Loanzi por estrangulamento."}
  ,
  { title: 'h$',"date":"24 de novembro de 1935","desc":"Vitória sobre Maximino Grandi em Belo Horizonte na academia Loanzi por gravata (?)."}
  ,
  { title: 'h$',"date":"14 de dezembro de 1935","desc":"Vitória sobre Ary Martins (estrangulamento)."}
  ,
  { title: 'h$',"date":"02 de abril de 1936","desc":"Vitória dupla em 12 minutos:\r\nVitória sobre o alemão Barthowiak por \"compressão carótida\"?\r\nVitória sobre o alemão Eberle por \"gravata japonesa\"?"}
  ,
  { title: 'h$',"date":"07 de maio de 1936","desc":"Vitória e Derrota na mesma noite:\r\nVitória sobre Bié na primeira luta;\r\nDerrota para Lino na segunda luta (desclassificação);"}
  ,
  { title: 'h$',"date":"23 de junho de 1936","desc":"Vitória sobre:\r\nGeroncio Barbosa;\r\nAntonio Roque;\r\nJosé Amorim."}
  ,
  { title: 'h$',"date":"06 de setembro de 1936","desc":"Vitória sobre Roberto Ruhmann (estrangulamento)."}
  ,
  { title: 'h$',"date":"30 de novembro de 1936","desc":"Vitória sobre o japonês Zano (seria a grafia escrita errada e falavam de Yano?) (chave de pescoço?)"}
  ,
  { title: 'h$',"date":"16 de janeiro de 1937","desc":"Derrota para Orlando Americo da Silva \"Dudu\" (desclassificação)."}
  ,
  { title: 'Derrota para Roberto Ruhmann nas regras do Jiu Jitsu',"date":"Entre fev e abril de 1937","desc":"Derrota para Roberto Ruhmann nas regras do Jiu Jitsu."},
  { title: 'h$',"date":"Entre fev e abril de 1937","desc":"Derrota para Roberto Ruhmann nas regras da Luta Livre."},
  { title: 'h$',"date":"11 de setembro de 1937","desc":"Derrota para Yassuiti Ono (estrangulamento)."},
  { title: 'h$',"date":"02 de outubro de 1937","desc":"Vitória sobre Naoti (Nauite) Ono (desistência?)."}
  ,
  { title: 'h$',"date":"16 de outubro de 1937","desc":"Vitória sobre Yassuiti Ono (desclassificação)."}
  ,
  { title: 'h$',"date":"13 de novembro de 1937","desc":"Vitória sobre Naoti Ono (pontos)."}
  ,
  { title: 'h$',"date":"11 de dezembro de 1937","desc":"Derrota para Grillo (regras do Catch As Catch Can, encostamento de ombros)."},
  { title: 'h$',"date":"16 de dezembro de 1937","desc":"Vitória sobre Grillo (regras do Catch As Catch Can, desclassificação)."}
  ,
  { title: 'h$',"date":"30 de abril de 1938","desc":"Vitória sobre o boxer/catcher Bergomas na Bahia no terceiro round."}
  ,
  { title: 'h$',"date":"02 de agosto de 1938","desc":"Derrota para Jack Russel (regras do Catch As Catch Can, encostamento de ombros)."},
  { title: 'h$',"date":"13 de agosto de 1938","desc":"Vitória sobre Jack Russel (regras Jiu Jitsu, pontos)."}
  ,
  { title: 'h$',"date":"25 de agosto de 1938","desc":"Vitória sobre Joe Campbell (regras do Catch As Catch Can, chave de braço)."}
  ,
  { title: 'h$',"date":"01 de setembro de 1938","desc":"Vitória sobre Takeo Yano (chave de perna) Terceiro encontro (e o segundo?)."}
  ,
  { title: 'h$',"date":"24 de setembro de 1938","desc":"Derrota para Takeo Yano (pontos)."},
  { title: 'h$',"date":"22 de outubro de 1938","desc":"Vitória sobre o italiano Gardini por armlock no braço direito em Bello Horizonte."}
  ,
  { title: 'h$',"date":"26 de outubro de 1938","desc":"Derrota por K.O. para Jack Russel (chute) em Bello Horizonte."},
  { title: 'h$',"date":"04 de fevereiro de 1939","desc":"Vitória sobre Naoti Ono (estrangulamento)."}
  ,
  { title: 'h$',"date":"08 de julho de 1939","desc":"Derrota para Roberto Ruhmann (regras do Catch As Catch Can, encostamento de ombros)."},
  { title: 'h$',"date":"22 de julho de 1939","desc":"Vitória sobre Benedicto Perez (armlock)."}
  ,
  { title: 'h$',"date":"02 de setembro de 1939","desc":"Vitória sobre Fritz Weber (chave de braço)."}
  ,
  { title: 'h$',"date":"09 de setembro de 1939","desc":"Empate com francês Ulster (ou Ulsemer), machucou o braço em Belo Horizonte. Jornal do dia 13."}
  ,
  { title: 'h$',"date":"07 de outubro de 1939","desc":"Empate com Takeo Yano."},
  {
    "date":"16 de março de 1940",
    'title': 'George e Yano se estrangulando',
    'img': 'img/george-yano.png',
    "desc":'Sem vencedor com Takeo Yano (ambos se <a href="https://www.graciemag.com/2015/03/11/estrangulamento-duplo-o-dia-em-que-george-gracie-e-yano-apagaram-juntos-no-jiu-jitsu-a-la-rocky-x-apollo/">estrangularam até perderem os sentidos</a>).'}
  ,
  {
    "date":"30 de março de 1940",
    "desc":"Empate com Takeo Yano.",
    'title':'Empate com Yano',
    'img': 'img/george-yano-empate.png'
  }
  ,
  { title: 'h$',"date":"13 de abril de 1940","desc":"Vitória sobre Fritz Webber (chave de braço)."}
  ,
  { title: 'h$',"date":"27 de abril de 1940","desc":"Vitória sobre Budip armlock no primeiro round."}
  ,
  { title: 'h$',"date":"25 de maio de 1940","desc":"Vitória sobre Jung Meri (chave de braço)."}
  ,
  { title: 'h$',"date":"13 de junho de 1940","desc":"Derrota pra Budip (dia 12 de junho afirma que haverá esse combate e na luta seguinte confirma)"}
  ,
  { title: 'h$',"date":"20 de junho de 1940","desc":"Vitória sobre Angelo Orlando (italiano). Segundo o jornal ele foi asfixiado (?)"}
  ,
  { title: 'h$',"date":"27 de julho de 1946","desc":"Empate com Fritz Webber."},
  { title: 'h$',"date":"04 de novembro de 1948","desc":"Empate com Takeo Yano."},
  { title: 'h$',"date":"30 de outubro de 1948","desc":"Vitória sobre o Japones Oka por estrangulamento."}
  ,
  { title: 'h$',"date":"13 de dezembro de 1952","desc":"Derrota para Pedro Hemetério por desistência (segundo os Gracie e Pedro foi estrangulamento)"}
  
];
  

export default fights.map(fight => ({
  ...fight,
  type: 'fight',
}));