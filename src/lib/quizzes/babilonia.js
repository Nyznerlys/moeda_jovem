import React from 'react';
import { Coins, Wallet, TrendingUp, ShieldCheck, Building, PiggyBank } from 'lucide-react';

export const BABILONIA_QUIZZES = {
  "q3_1": {
    title: "O Homem Que Desejava Ouro",
    trackId: 3,
    category: "Sabedoria da Babilônia",
    difficulty: "INICIANTE",
    description: "As primeiras lições sobre como começar a acumular riqueza.",
    icon: <Coins />,
    color: "bg-yellow-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a primeira lei do ouro segundo Arkad, o homem mais rico da Babilônia?",
        options: [
          "Invista em negócios arriscados",
          "Guarde pelo menos um décimo de tudo que ganhar",
          "Gaste tudo para estimular a economia",
          "Empreste dinheiro para amigos"
        ],
        correctAnswerIndex: 1,
        explanation: "A primeira lei do ouro é: 'Guarde pelo menos um décimo de tudo que ganhar'. Este é o fundamento da construção de riqueza - sempre separar uma parte da renda antes de gastar."
      },
      {
        id: 2,
        type: "scenario",
        question: "Bansir ganha 2 moedas de ouro por mês como construtor de carruagens. Seguindo a primeira lei do ouro, quanto ele deveria guardar mensalmente?",
        options: [
          "0,1 moedas de ouro",
          "0,2 moedas de ouro",
          "0,5 moedas de ouro",
          "1 moeda de ouro"
        ],
        correctAnswerIndex: 1,
        explanation: "Um décimo de 2 moedas é 0,2 moedas de ouro. Mesmo parecendo pouco, essa quantia guardada consistentemente se tornará a base de sua riqueza futura."
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: Segundo a sabedoria babilônica, é impossível enriquecer com uma renda pequena.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A sabedoria babilônica ensina que qualquer pessoa pode enriquecer, independentemente da renda, seguindo as leis do ouro. O segredo está na disciplina e consistência."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Por que Arkad conseguiu ficar rico enquanto seus amigos permaneceram pobres?",
        options: [
          "Ele teve sorte",
          "Ele nasceu em família rica",
          "Ele aprendeu e aplicou as leis do ouro",
          "Ele roubou dinheiro"
        ],
        correctAnswerIndex: 2,
        explanation: "Arkad ficou rico porque aprendeu e aplicou consistentemente as leis do ouro. Ele e seus amigos começaram na mesma situação, mas apenas ele seguiu os princípios corretos."
      },
      {
        id: 5,
        type: "scenario",
        question: "Kobbi reclama que não consegue guardar dinheiro porque ganha pouco. Arkad responderia:",
        options: [
          "Você realmente ganha pouco demais",
          "Procure um emprego melhor primeiro",
          "Guarde um décimo, mesmo que seja pouco",
          "Espere ganhar mais para começar"
        ],
        correctAnswerIndex: 2,
        explanation: "Arkad diria para guardar um décimo independentemente do valor. O hábito de poupar é mais importante que a quantia inicial. Pequenas quantias se tornam grandes fortunas com o tempo."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Qual é a importância de guardar 'pelo menos' um décimo?",
        options: [
          "É o máximo que se pode guardar",
          "É o mínimo - pode guardar mais se possível",
          "É um número mágico",
          "Não tem importância específica"
        ],
        correctAnswerIndex: 1,
        explanation: "Um décimo é o mínimo recomendado. Se for possível guardar mais (15%, 20% ou mais), melhor ainda. O importante é nunca guardar menos que um décimo."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: A primeira lei do ouro deve ser aplicada apenas quando sobra dinheiro no final do mês.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A primeira lei deve ser aplicada PRIMEIRO, assim que você recebe sua renda. 'Pague-se primeiro' - separe o décimo antes de qualquer gasto."
      },
      {
        id: 8,
        type: "scenario",
        question: "Dabasir ganha 10 moedas por mês e tem gastos de 10 moedas. Ele diz que é impossível guardar. O que Arkad aconselharia?",
        options: [
          "Realmente é impossível",
          "Aprenda a viver com 9 moedas e guarde 1",
          "Procure renda extra primeiro",
          "Desista de enriquecer"
        ],
        correctAnswerIndex: 1,
        explanation: "Arkad diria para aprender a viver com 9 moedas e guardar 1. A sabedoria babilônica ensina que sempre é possível viver com um pouco menos do que se ganha."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Segundo Arkad, o que acontece com quem não segue a primeira lei do ouro?",
        options: [
          "Fica rico mesmo assim",
          "Permanece pobre a vida toda",
          "Fica rico mais devagar",
          "Não faz diferença"
        ],
        correctAnswerIndex: 1,
        explanation: "Segundo Arkad, quem não guarda pelo menos um décimo de sua renda permanecerá pobre a vida toda, independentemente de quanto ganhe. É a base fundamental da riqueza."
      },
      {
        id: 10,
        type: "true_false",
        question: "Verdadeiro ou Falso: A primeira lei do ouro é apenas sobre guardar dinheiro, não sobre como usá-lo.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. A primeira lei foca especificamente em guardar pelo menos um décimo. As outras leis ensinam como usar esse dinheiro guardado para multiplicar a riqueza."
      }
    ]
  },
  "q3_2": {
    title: "Controle Seus Gastos",
    trackId: 3,
    category: "Sabedoria da Babilônia",
    difficulty: "INICIANTE",
    description: "A segunda lei do ouro: como viver com menos do que ganha.",
    icon: <Wallet />,
    color: "bg-yellow-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a segunda lei do ouro?",
        options: [
          "Gaste tudo que ganhar",
          "Controle seus gastos para viver com nove décimos do que ganha",
          "Compre apenas coisas caras",
          "Nunca gaste dinheiro"
        ],
        correctAnswerIndex: 1,
        explanation: "A segunda lei é controlar os gastos para viver confortavelmente com nove décimos da renda, permitindo que um décimo seja sempre poupado."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: Segundo a sabedoria babilônica, desejos sempre crescem para igualar a renda, a menos que sejam controlados.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. O livro ensina que nossos desejos sempre crescem para consumir toda nossa renda, a menos que conscientemente os controlemos. Por isso é importante definir prioridades e viver abaixo das possibilidades."
      },
      {
        id: 3,
        type: "scenario",
        question: "Megiddo ganha 5 moedas por mês. Seus desejos incluem: comida (2 moedas), moradia (1,5), roupas (1), entretenimento (1), presentes (0,5). Total: 6 moedas. O que ele deve fazer?",
        options: [
          "Ganhar mais dinheiro",
          "Distinguir entre necessidades e desejos, cortando os menos importantes",
          "Gastar as 6 moedas mesmo assim",
          "Desistir de todos os desejos"
        ],
        correctAnswerIndex: 1,
        explanation: "Megiddo deve distinguir entre necessidades reais e desejos, priorizando o essencial e cortando gastos menos importantes para viver com 4,5 moedas (9/10 de 5)."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual é a diferença entre necessidades e desejos segundo a sabedoria babilônica?",
        options: [
          "Não há diferença",
          "Necessidades são para sobrevivência, desejos são para prazer",
          "Desejos são mais importantes",
          "Necessidades custam mais caro"
        ],
        correctAnswerIndex: 1,
        explanation: "Necessidades são gastos essenciais para sobrevivência e trabalho (comida básica, moradia, transporte). Desejos são gastos para prazer e status que podem ser controlados ou eliminados."
      },
      {
        id: 5,
        type: "drag_drop",
        question: "Classifique os gastos abaixo em NECESSIDADES ou DESEJOS:",
        items: [
          { text: "Alimentação básica", category: "NECESSIDADES" },
          { text: "Moradia", category: "NECESSIDADES" },
          { text: "Roupas de marca", category: "DESEJOS" },
          { text: "Transporte para trabalho", category: "NECESSIDADES" },
          { text: "Jantares em restaurantes caros", category: "DESEJOS" },
          { text: "Entretenimento luxuoso", category: "DESEJOS" }
        ],
        explanation: "Necessidades são essenciais para viver e trabalhar. Desejos são prazeres que, embora agradáveis, podem ser controlados ou eliminados sem prejudicar a sobrevivência."
      },
      {
        id: 6,
        type: "true_false",
        question: "Verdadeiro ou Falso: É impossível ser feliz vivendo apenas com necessidades.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A sabedoria babilônica ensina que é possível viver bem e feliz focando nas necessidades e alguns desejos selecionados, desde que dentro dos nove décimos da renda."
      },
      {
        id: 7,
        type: "scenario",
        question: "Zabado quer comprar uma túnica cara que custa 2 moedas, mas ganha apenas 4 moedas por mês. Seguindo a segunda lei, ele deveria:",
        options: [
          "Comprar a túnica, é importante se vestir bem",
          "Economizar por alguns meses para comprar sem comprometer o orçamento",
          "Pedir emprestado para comprar",
          "Nunca comprar roupas"
        ],
        correctAnswerIndex: 1,
        explanation: "Zabado deveria economizar por alguns meses, guardando parte dos nove décimos destinados aos gastos, para comprar a túnica sem comprometer seu orçamento ou a poupança."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Como a segunda lei do ouro ajuda a cumprir a primeira lei?",
        options: [
          "Não há relação entre elas",
          "Controlando gastos, sobra dinheiro para guardar o décimo",
          "A segunda lei substitui a primeira",
          "São leis contraditórias"
        ],
        correctAnswerIndex: 1,
        explanation: "A segunda lei é essencial para cumprir a primeira. Controlando os gastos para viver com nove décimos, você garante que sempre haverá um décimo disponível para poupança."
      },
      {
        id: 9,
        type: "scenario",
        question: "Rodan diz: 'Meus gastos sempre consomem toda minha renda, não importa quanto eu ganhe.' Qual seria o conselho babilônico?",
        options: [
          "É normal, acontece com todos",
          "Você precisa ganhar muito mais",
          "Faça um orçamento e controle conscientemente seus desejos",
          "Desista de controlar os gastos"
        ],
        correctAnswerIndex: 2,
        explanation: "O conselho seria fazer um orçamento detalhado e controlar conscientemente os desejos. Sem controle deliberado, os gastos sempre crescem para consumir toda a renda."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Qual é o resultado de aplicar consistentemente a segunda lei do ouro?",
        options: [
          "Você fica infeliz por não gastar",
          "Você vive confortavelmente dentro de suas possibilidades",
          "Você precisa ganhar menos dinheiro",
          "Você não consegue mais comprar nada"
        ],
        correctAnswerIndex: 1,
        explanation: "O resultado é viver confortavelmente dentro de suas possibilidades, tendo controle sobre suas finanças e garantindo que sempre haverá dinheiro para poupança e investimentos."
      }
    ]
  },
  "q3_3": {
    title: "Faça Seu Ouro Multiplicar",
    trackId: 3,
    category: "Sabedoria da Babilônia",
    difficulty: "INTERMEDIARIO",
    description: "A terceira lei: como fazer seu dinheiro trabalhar para você.",
    icon: <TrendingUp />,
    color: "bg-yellow-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a terceira lei do ouro?",
        options: [
          "Esconda o ouro debaixo da cama",
          "Faça cada moeda trabalhar para você como um escravo",
          "Gaste o ouro em festas",
          "Dê o ouro para os pobres"
        ],
        correctAnswerIndex: 1,
        explanation: "A terceira lei é fazer cada moeda trabalhar para você. O dinheiro poupado deve ser investido para gerar mais dinheiro, criando um exército de 'escravos dourados' trabalhando para você."
      },
      {
        id: 2,
        type: "scenario",
        question: "Kobbi guardou 10 moedas de ouro. Um mercador oferece 20% de lucro ao ano se ele emprestar o dinheiro. Qual seria o resultado após 1 ano?",
        options: [
          "10 moedas (sem mudança)",
          "12 moedas (10 + 20%)",
          "15 moedas",
          "20 moedas"
        ],
        correctAnswerIndex: 1,
        explanation: "Com 20% de lucro ao ano, as 10 moedas se tornariam 12 moedas (10 + 2 de lucro). Essas 2 moedas extras são o resultado do dinheiro trabalhando para ele."
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: Segundo a terceira lei, o dinheiro guardado deve ficar parado em segurança.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A terceira lei ensina que o dinheiro guardado deve trabalhar, ou seja, ser investido para gerar mais dinheiro. Dinheiro parado não multiplica."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "O que significa 'fazer o ouro trabalhar como escravo'?",
        options: [
          "Usar o ouro para comprar escravos",
          "Investir o ouro para que gere renda constantemente",
          "Esconder o ouro",
          "Gastar o ouro rapidamente"
        ],
        correctAnswerIndex: 1,
        explanation: "Significa investir o ouro para que gere renda constantemente, como um escravo que trabalha para seu dono. O dinheiro investido 'trabalha' gerando mais dinheiro."
      },
      {
        id: 5,
        type: "scenario",
        question: "Dabasir tem 50 moedas guardadas há 2 anos sem investir. Seu amigo Arkad investiu 50 moedas a 15% ao ano. Quanto cada um tem agora?",
        options: [
          "Ambos têm 50 moedas",
          "Dabasir: 50, Arkad: cerca de 66 moedas",
          "Dabasir: 60, Arkad: 50 moedas",
          "Ambos têm 66 moedas"
        ],
        correctAnswerIndex: 1,
        explanation: "Dabasir ainda tem 50 moedas (dinheiro parado não cresce). Arkad tem cerca de 66 moedas (50 × 1,15²), pois seu dinheiro trabalhou gerando 15% ao ano."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Qual é o poder dos juros compostos segundo a sabedoria babilônica?",
        options: [
          "Não existe tal poder",
          "O lucro gera mais lucro, multiplicando a riqueza",
          "Apenas confunde as pessoas",
          "Só funciona com grandes quantias"
        ],
        correctAnswerIndex: 1,
        explanation: "Os juros compostos fazem o lucro gerar mais lucro. Quando você reinveste os ganhos, eles também passam a gerar retorno, multiplicando a riqueza exponencialmente."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: A terceira lei só funciona para pessoas que já têm muito dinheiro.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A terceira lei funciona com qualquer quantia. Mesmo pequenas quantias, quando investidas consistentemente, podem se tornar grandes fortunas através do poder dos juros compostos."
      },
      {
        id: 8,
        type: "scenario",
        question: "Megiddo guarda 1 moeda por mês e investe a 10% ao ano. Após 10 anos de aportes mensais, ele terá aproximadamente:",
        options: [
          "120 moedas (apenas o que depositou)",
          "Cerca de 200 moedas (com juros compostos)",
          "100 moedas",
          "150 moedas"
        ],
        correctAnswerIndex: 1,
        explanation: "Com aportes mensais e juros compostos, Megiddo terá muito mais que as 120 moedas depositadas. Os juros compostos fazem o dinheiro crescer exponencialmente."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Por que a terceira lei é considerada fundamental para a riqueza?",
        options: [
          "Porque ensina a gastar dinheiro",
          "Porque transforma poupança em renda passiva crescente",
          "Porque é a mais fácil de seguir",
          "Porque não requer disciplina"
        ],
        correctAnswerIndex: 1,
        explanation: "A terceira lei é fundamental porque transforma a poupança (primeira e segunda leis) em renda passiva crescente. É o que faz a diferença entre apenas guardar dinheiro e construir riqueza."
      },
      {
        id: 10,
        type: "scenario",
        question: "Zabado tem medo de investir suas 20 moedas guardadas. Ele prefere mantê-las seguras sem render nada. Arkad diria:",
        options: [
          "Está certo, segurança é tudo",
          "Estude investimentos seguros e comece devagar",
          "Invista tudo em negócios arriscados",
          "Gaste o dinheiro em prazeres"
        ],
        correctAnswerIndex: 1,
        explanation: "Arkad aconselharia estudar investimentos seguros e começar devagar. O medo deve ser vencido com conhecimento, não com inação. Dinheiro parado perde valor com o tempo."
      }
    ]
  },
  "q3_4": {
    title: "Proteja Seu Tesouro das Perdas",
    trackId: 3,
    category: "Sabedoria da Babilônia",
    difficulty: "INTERMEDIARIO",
    description: "A quarta lei: como proteger seu capital de investimentos ruins.",
    icon: <ShieldCheck />,
    color: "bg-yellow-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a quarta lei do ouro?",
        options: [
          "Invista em qualquer negócio que prometa lucros altos",
          "Proteja seu tesouro de perdas investindo apenas onde seu capital esteja seguro",
          "Nunca invista em nada",
          "Invista apenas em ouro físico"
        ],
        correctAnswerIndex: 1,
        explanation: "A quarta lei enfatiza a proteção do capital. Antes de buscar lucros, certifique-se de que o principal está seguro. É melhor um retorno menor e seguro do que perder tudo em investimentos arriscados."
      },
      {
        id: 2,
        type: "scenario",
        question: "Dois investimentos são oferecidos a você: A) 50% de lucro em 6 meses, mas com risco de perder tudo; B) 10% ao ano com garantia do capital. Qual seguiria a sabedoria babilônica?",
        options: [
          "Opção A, pelo lucro maior",
          "Opção B, pela segurança do capital",
          "Metade em cada",
          "Nenhuma das duas"
        ],
        correctAnswerIndex: 1,
        explanation: "A sabedoria babilônica escolheria a opção B. Proteger o capital é mais importante que buscar lucros altos. Um retorno consistente e seguro constrói riqueza a longo prazo."
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: Segundo a quarta lei, é melhor não ganhar nada do que arriscar perder o capital.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. A quarta lei prioriza a preservação do capital. É melhor um retorno baixo ou zero do que perder o dinheiro que você trabalhou duro para guardar."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Como identificar um investimento seguro segundo a sabedoria babilônica?",
        options: [
          "Pelo lucro prometido",
          "Pela reputação e experiência de quem oferece",
          "Pela aparência do negócio",
          "Pelo que os amigos dizem"
        ],
        correctAnswerIndex: 1,
        explanation: "A sabedoria babilônica ensina a avaliar a reputação, experiência e histórico de quem oferece o investimento. Pessoas confiáveis e experientes oferecem maior segurança."
      },
      {
        id: 5,
        type: "scenario",
        question: "Rodan quer investir suas 30 moedas. Um amigo oferece um negócio 'garantido' de 100% de lucro, mas ele nunca fez negócios antes. O que a quarta lei aconselharia?",
        options: [
          "Investir tudo, é uma grande oportunidade",
          "Não investir, pois o amigo não tem experiência",
          "Investir metade",
          "Pedir mais detalhes sobre a 'garantia'"
        ],
        correctAnswerIndex: 1,
        explanation: "A quarta lei aconselharia não investir, pois o amigo não tem experiência em negócios. Promessas de lucros altos de pessoas inexperientes são sinais de perigo."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Qual é o principal inimigo da quarta lei do ouro?",
        options: [
          "A preguiça",
          "A ganância por lucros rápidos",
          "A falta de dinheiro",
          "A inflação"
        ],
        correctAnswerIndex: 1,
        explanation: "A ganância por lucros rápidos é o principal inimigo da quarta lei. Ela faz as pessoas ignorarem os riscos e investirem em esquemas que prometem retornos irreais."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: A quarta lei significa nunca assumir riscos.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A quarta lei não proíbe riscos, mas ensina a assumir apenas riscos calculados e com pessoas experientes e confiáveis. É sobre gestão inteligente de riscos."
      },
      {
        id: 8,
        type: "scenario",
        question: "Megiddo perdeu 10 moedas em um investimento ruim. Agora tem medo de investir suas 20 moedas restantes. A quarta lei sugeriria:",
        options: [
          "Nunca mais investir",
          "Aprender com o erro e investir com mais cuidado",
          "Investir tudo para recuperar a perda",
          "Guardar o dinheiro debaixo da cama"
        ],
        correctAnswerIndex: 1,
        explanation: "A quarta lei sugeriria aprender com o erro e investir com mais cuidado, buscando oportunidades seguras com pessoas experientes e confiáveis."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Segundo a sabedoria babilônica, qual é a melhor forma de proteger investimentos?",
        options: [
          "Diversificar entre várias oportunidades seguras",
          "Investir tudo em uma única oportunidade",
          "Nunca investir",
          "Seguir sempre a maioria"
        ],
        correctAnswerIndex: 0,
        explanation: "Diversificar entre várias oportunidades seguras reduz riscos. Se um investimento tiver problemas, os outros continuam protegendo seu capital."
      },
      {
        id: 10,
        type: "scenario",
        question: "Dabasir tem 100 moedas e quer investir. Encontra 5 oportunidades diferentes, todas com pessoas experientes. Seguindo a quarta lei, ele deveria:",
        options: [
          "Escolher apenas uma",
          "Dividir entre as 5 oportunidades",
          "Não investir em nenhuma",
          "Investir tudo na que promete mais lucro"
        ],
        correctAnswerIndex: 1,
        explanation: "Seguindo a quarta lei, Dabasir deveria dividir entre as 5 oportunidades. Isso protege seu capital através da diversificação - se uma falhar, as outras continuam seguras."
      }
    ]
  },
  "q3_5": {
    title: "Torne Sua Moradia um Investimento Lucrativo",
    trackId: 3,
    category: "Sabedoria da Babilônia",
    difficulty: "INTERMEDIARIO",
    description: "A quinta lei: como sua casa pode contribuir para sua riqueza.",
    icon: <Building />,
    color: "bg-yellow-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a quinta lei do ouro?",
        options: [
          "Alugue sempre, nunca compre",
          "Torne sua moradia um investimento lucrativo",
          "Compre a casa mais cara possível",
          "More com os pais para sempre"
        ],
        correctAnswerIndex: 1,
        explanation: "A quinta lei sugere que sua moradia deve ser um investimento lucrativo. Em vez de pagar aluguel para sempre, é melhor ter uma propriedade que pode valorizar e eventualmente gerar renda."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: Segundo a sabedoria babilônica, pagar aluguel é como jogar moedas de ouro em um poço.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. O livro compara pagar aluguel a jogar ouro em um poço - você nunca mais vê esse dinheiro. Ter sua própria moradia, mesmo que financiada, pelo menos constrói patrimônio ao longo do tempo."
      },
      {
        id: 3,
        type: "scenario",
        question: "Bansir paga 2 moedas de aluguel por mês. Ele pode comprar uma casa similar pagando 2,5 moedas mensais por 10 anos. Segundo a quinta lei, ele deveria:",
        options: [
          "Continuar alugando, é mais barato",
          "Comprar a casa, pois estará construindo patrimônio",
          "Procurar um aluguel mais barato",
          "Morar na rua para economizar"
        ],
        correctAnswerIndex: 1,
        explanation: "Segundo a quinta lei, Bansir deveria comprar a casa. Mesmo pagando um pouco mais, após 10 anos ele terá uma propriedade, enquanto com aluguel não teria nada."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Como a quinta lei se relaciona com as outras leis do ouro?",
        options: [
          "Não tem relação",
          "Substitui as outras leis",
          "Complementa as outras - moradia própria reduz gastos futuros",
          "Contradiz as outras leis"
        ],
        correctAnswerIndex: 2,
        explanation: "A quinta lei complementa as outras. Ter moradia própria reduz gastos futuros (sem aluguel), facilitando o cumprimento das outras leis de poupança e investimento."
      },
      {
        id: 5,
        type: "scenario",
        question: "Kobbi tem 20 moedas guardadas e paga 1,5 moedas de aluguel. Pode dar entrada em uma casa e pagar 1,8 moedas mensais. A quinta lei sugeriria:",
        options: [
          "Manter o dinheiro guardado e continuar alugando",
          "Usar as 20 moedas de entrada e comprar a casa",
          "Gastar as 20 moedas em outras coisas",
          "Procurar uma casa mais cara"
        ],
        correctAnswerIndex: 1,
        explanation: "A quinta lei sugeriria usar as 20 moedas como entrada. Mesmo pagando um pouco mais mensalmente, Kobbi estará construindo patrimônio em vez de 'jogar dinheiro no poço'."
      },
      {
        id: 6,
        type: "true_false",
        question: "Verdadeiro ou Falso: A quinta lei recomenda comprar a casa mais cara que você conseguir financiar.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A quinta lei recomenda moradia própria como investimento, mas dentro das possibilidades financeiras. Comprar casa muito cara pode comprometer as outras leis do ouro."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "Qual é a principal vantagem da moradia própria segundo a sabedoria babilônica?",
        options: [
          "Status social",
          "Construção de patrimônio ao longo do tempo",
          "Poder decorar como quiser",
          "Não ter vizinhos"
        ],
        correctAnswerIndex: 1,
        explanation: "A principal vantagem é a construção de patrimônio. Cada pagamento aumenta sua participação na propriedade, criando riqueza em vez de apenas gasto."
      },
      {
        id: 8,
        type: "scenario",
        question: "Dabasir mora de aluguel há 15 anos, pagando sempre 1 moeda por mês. Quanto ele 'investiu' em moradia e o que tem para mostrar?",
        options: [
          "Investiu 180 moedas e tem uma casa",
          "Investiu 180 moedas e não tem nada",
          "Investiu 15 moedas e tem uma casa",
          "Não investiu nada"
        ],
        correctAnswerIndex: 1,
        explanation: "Dabasir 'investiu' 180 moedas (15 anos × 12 meses × 1 moeda) em aluguel e não tem nada para mostrar. Se tivesse comprado uma casa, teria patrimônio construído."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Segundo a quinta lei, quando é o melhor momento para comprar moradia própria?",
        options: [
          "Apenas quando se tem todo o dinheiro",
          "Quando se consegue pagar prestações similares ao aluguel",
          "Nunca, aluguel é sempre melhor",
          "Apenas quando se é muito rico"
        ],
        correctAnswerIndex: 1,
        explanation: "O melhor momento é quando se consegue pagar prestações similares ao aluguel atual. Assim você constrói patrimônio sem comprometer significativamente o orçamento."
      },
      {
        id: 10,
        type: "scenario",
        question: "Zabado tem dúvidas: 'E se eu precisar me mudar? Com casa própria fico preso.' A quinta lei responderia:",
        options: [
          "Realmente, nunca compre casa",
          "Você pode vender ou alugar a casa se precisar se mudar",
          "Fique preso mesmo, não importa",
          "Compre várias casas"
        ],
        correctAnswerIndex: 1,
        explanation: "A quinta lei responderia que você pode vender a casa (recuperando o investimento) ou alugá-la (gerando renda) se precisar se mudar. Ter propriedade oferece mais opções, não menos."
      }
    ]
  },
  "q3_6": {
    title: "Assegure uma Renda para o Futuro",
    trackId: 3,
    category: "Sabedoria da Babilônia",
    difficulty: "AVANCADO",
    description: "A sexta lei: planejamento para aposentadoria e legado familiar.",
    icon: <PiggyBank />,
    color: "bg-yellow-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a sexta lei do ouro?",
        options: [
          "Gaste tudo enquanto é jovem",
          "Assegure uma renda para o futuro",
          "Confie que os filhos cuidarão de você",
          "Trabalhe até morrer"
        ],
        correctAnswerIndex: 1,
        explanation: "A sexta lei é assegurar uma renda para o futuro. Isso significa planejar para a aposentadoria e criar fontes de renda que continuarão mesmo quando você não puder mais trabalhar."
      },
      {
        id: 2,
        type: "scenario",
        question: "Dabasir tem 30 anos e quer se aposentar aos 60. Ele decide guardar uma pequena quantia mensalmente que, com juros compostos, garantirá sua aposentadoria. Qual princípio babilônico ele está seguindo?",
        options: [
          "Primeira lei (guardar um décimo)",
          "Sexta lei (assegurar renda futura)",
          "Terceira lei (fazer o ouro multiplicar)",
          "Todas as anteriores"
        ],
        correctAnswerIndex: 3,
        explanation: "Dabasir está aplicando todas: guarda parte da renda (1ª lei), faz o dinheiro trabalhar com juros compostos (3ª lei) e planeja renda futura (6ª lei). As leis trabalham juntas!"
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: A sexta lei é apenas para pessoas ricas que podem guardar muito dinheiro.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A sexta lei funciona para qualquer pessoa. Mesmo pequenas quantias, guardadas consistentemente desde jovem, podem se tornar grandes fortunas para a aposentadoria através dos juros compostos."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Por que é importante começar cedo a aplicar a sexta lei?",
        options: [
          "Porque jovens ganham mais dinheiro",
          "Porque o tempo potencializa os juros compostos",
          "Porque é mais fácil quando jovem",
          "Porque não há outra opção"
        ],
        correctAnswerIndex: 1,
        explanation: "Começar cedo é crucial porque o tempo potencializa os juros compostos. Quanto mais tempo o dinheiro tem para crescer, maior será o resultado final, mesmo com aportes menores."
      },
      {
        id: 5,
        type: "scenario",
        question: "Megiddo, aos 25 anos, guarda 0,5 moedas por mês para aposentadoria. Rodan, aos 45 anos, guarda 2 moedas por mês. Quem terá mais aos 65 anos?",
        options: [
          "Rodan, pois guarda mais por mês",
          "Megiddo, pelo poder do tempo nos juros compostos",
          "Terão quantias iguais",
          "Impossível determinar"
        ],
        correctAnswerIndex: 1,
        explanation: "Megiddo provavelmente terá mais, pois seus 40 anos de investimento (25 aos 65) com juros compostos superam os 20 anos de Rodan (45 aos 65), mesmo guardando menos por mês."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Qual é o objetivo principal da sexta lei?",
        options: [
          "Ficar rico rapidamente",
          "Garantir independência financeira na velhice",
          "Impressionar outras pessoas",
          "Deixar herança para os filhos"
        ],
        correctAnswerIndex: 1,
        explanation: "O objetivo principal é garantir independência financeira na velhice, para que você possa viver dignamente sem depender de outros quando não puder mais trabalhar."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: A sexta lei sugere que você deve trabalhar até morrer.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A sexta lei é exatamente o oposto - ela ensina a criar renda para o futuro para que você NÃO precise trabalhar até morrer, garantindo uma aposentadoria digna."
      },
      {
        id: 8,
        type: "scenario",
        question: "Kobbi tem 40 anos e nunca guardou para aposentadoria. Ele acha que é tarde demais. A sexta lei diria:",
        options: [
          "Realmente é tarde demais",
          "Comece agora, ainda há tempo para construir algo",
          "Confie na sorte",
          "Trabalhe até morrer"
        ],
        correctAnswerIndex: 1,
        explanation: "A sexta lei diria para começar agora. Embora seja melhor começar cedo, ainda há 25 anos até uma aposentadoria aos 65, tempo suficiente para construir uma reserva significativa."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Como a sexta lei protege sua família?",
        options: [
          "Não protege a família",
          "Garante que você não será um fardo financeiro na velhice",
          "Apenas beneficia você",
          "Só funciona para famílias ricas"
        ],
        correctAnswerIndex: 1,
        explanation: "A sexta lei protege sua família garantindo que você não será um fardo financeiro na velhice. Você terá sua própria renda, permitindo que seus filhos cuidem de suas próprias famílias."
      },
      {
        id: 10,
        type: "scenario",
        question: "Zabado quer aplicar a sexta lei mas não sabe por onde começar. O conselho babilônico seria:",
        options: [
          "Espere ter mais conhecimento",
          "Comece guardando uma pequena quantia mensalmente em investimentos seguros",
          "Só comece quando tiver muito dinheiro",
          "Peça para outros investirem por você"
        ],
        correctAnswerIndex: 1,
        explanation: "O conselho seria começar imediatamente guardando uma pequena quantia mensalmente em investimentos seguros. O importante é começar, mesmo que com pouco - o tempo fará o resto."
      }
    ]
  }
};