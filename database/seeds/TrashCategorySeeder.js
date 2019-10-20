/*
|--------------------------------------------------------------------------
| TrashCategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const model = use('App/Models/TrashCategory');

const categories = [
  {
    type: 'Lixo orgânico',
    description:
      'É o lixo derivado dos resíduos orgânicos. São gerados principalmente nas residências, restaurantes e estabelecimentos comerciais que atuam na área de alimentação. Devem ser separados dos outros tipos de lixo, pois são destinados, principalmente, aos aterros sanitários das cidades.Exemplos: cascas de frutas e legumes; restos de verduras, de arroz e de feijão; restos de carnes e ovos.',
    scoreId: 4,
  },
  {
    type: 'Lixo reciclável',
    description:
      'É todo lixo material que pode ser utilizado no processo de transformação de outros materiais ou na fabricação de matéria-prima. São gerados nas residências, comércios e indústrias. Devem ser separados e destinados a coleta seletiva. São usados por cooperativas e empresas de reciclagem. A separação para a reciclagem deste tipo de resíduo sólido é de extrema importância, pois além de gerar empregos e renda, também contribuí para o meio ambiente. Isto ocorre, pois este lixo não vai gerar poluição em rios, solo e mar.Exemplos: embalagens de plástico, papelão, potes de vidro, garrafas PET, jornais e revistas usadas e objetos de metal.',
    scoreId: 3,
  },
  {
    type: 'Lixo industrial',
    description:
      'São os resíduos, principalmente sólidos, originários no processo de produção das indústrias. Geralmente é composto por sobras de matérias-primas, destinados à reciclagem ou reuso no processo industrial.Exemplos: retalhos de tecido, sobras e retalhos de metal, embalagens de matéria-prima, sobras de vidro e etc.',
    scoreId: 9,
  },
  {
    type: 'Lixo hospitalar',
    description:
      'São os resíduos originados em hospitais e clínicas médicas. São perigosos, pois podem apresentar contaminação e transmitir doenças para as pessoas que tiverem contato. Devem ser tratados segundo padrões estabelecidos, com todo cuidado possível. São destinados para empresas especializadas no tratamento deste tipo de lixo, onde geralmente são incinerados.Exemplos: curativos, seringas e agulhas usadas, material cirúrgico usado, restos de medicamentos e até mesmo partes do corpo humano extraídos em procedimentos cirúrgicos.',
    scoreId: 14,
  },
  {
    type: 'Lixo comercial',
    description:
      'É aquele produzido pelos estabelecimentos comerciais como, por exemplo, lojas de roupas, brinquedos e eletrodomésticos. Este lixo é quase totalmente destinado à reciclagem, pois é composto, principalmente, por embalagens plásticas, papelão e diversos tipos de papéis.',
    scoreId: 8,
  },
  {
    type: 'Lixo verde',
    description:
      'É aquele que resulta, principalmente, da poda de árvores, galhos, troncos, cascas e folhas que caem nas ruas. Por se tratar de matéria orgânica, poderia ser utilizado para compostagem, produção de adubo orgânico e até confecção de objetos de artesanato. Infelizmente, no Brasil, ele é destinado quase exclusivamente aos aterros sanitários.',
    scoreId: 10,
  },
  {
    type: 'Lixo eletrônico',
    description:
      'São os resíduos gerados pelo descarte de produtos eletroeletrônicos que não funcionam mais ou que estão muito superados.Exemplos: televisores, rádios, impressoras, computadores, geladeiras, micro-ondas, telefones e etc.',
    scoreId: 18,
  },
  {
    type: 'Lixo nuclear',
    description:
      'É aquele que é gerado, principalmente, pelas usinas nucleares. É um lixo altamente perigoso por se tratar de elemento radioativo. Devem tratados seguindo padrões rigorosos de segurança.Exemplos: sobras de urânio utilizados em usinas nucleares e elementos radioativos que compõem aparelhos de raio-x.',
    scoreId: 7,
  },
  {
    type: 'Lixo espacial',
    description:
      'É o lixo gerado a partir das atividades espaciais. Ficam na órbita terrestre, gerando uma grande poluição espacial.Exemplos: satélites desativados, ferramentas perdidas em missões espaciais, resíduos de tintas e pedaços de foguetes espaciais.',
    scoreId: 13,
  },
];

class TrashCategorySeeder {
  async run() {
    const promises = categories.map(cat => model.create(cat));

    await Promise.all(promises);
  }
}

module.exports = TrashCategorySeeder;
