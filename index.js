class Noticia {
  constructor(titulo,data_publicacao,resumo,texto){
    this.titulo = titulo;
    this.data_publicacao = data_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }

  mostrarNoticia(){
    return this.titulo + "\n" + this.data_publicacao + "\n" + "\n" + this.resumo + "\n" + "\n"+ this.texto
  }

}

let noticia = new Noticia("Evento promove reflexão sobre temática indígena", "23/03/2022", "Dia da Consciência Indígena do IFMS foi realizado de forma online nessa terça-feira, 22, com palestras, mesas-redondas e apresentações culturais", "O Instituto Federal de Mato Grosso do Sul (IFMS) realizou nessa terça-feira, 22, o II Dia da Consciência Indígena, evento com uma série de atividades que visaram promover o debate e a reflexão acerca da luta e da história indígenas no Brasil, e ainda sobre racismo e preconceito, entre outras temáticas.O evento online foi organizado pelos Núcleos de Estudos Afro-Brasileiros e Indígenas (Neabi), com transmissão ao vivo pelos canais dos campi do IFMS no YouTube.");
console.log(noticia.mostrarNoticia())

