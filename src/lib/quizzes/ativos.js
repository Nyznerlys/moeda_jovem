
import React from 'react';
import { BarChart2, TrendingUp, Building } from 'lucide-react';

export const ATIVOS_QUIZZES = {
  "q2_1": {
    title: "Definindo Ativos e Passivos",
    trackId: 2,
    category: "Ativos vs Passivos",
    difficulty: "INICIANTE",
    description: "A definição mais importante em finanças pessoais segundo Robert Kiyosaki.",
    icon: <BarChart2 />,
    color: "bg-green-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Segundo Kiyosaki, qual é a definição simples de um ATIVO?",
        options: [
          "Algo que você possui",
          "Algo que coloca dinheiro no seu bolso",
          "Algo caro que você comprou",
          "Qualquer investimento"
        ],
        correctAnswerIndex: 1,
        explanation: "Para Kiyosaki, um ativo é simplesmente algo que coloca dinheiro no seu bolso. Não importa o que os contadores dizem - se gera renda positiva para você, é um ativo."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "E qual é a definição simples de um PASSIVO?",
        options: [
          "Uma dívida que você tem",
          "Algo que tira dinheiro do seu bolso",
          "Algo que você não gosta",
          "Apenas empréstimos bancários"
        ],
        correctAnswerIndex: 1,
        explanation: "Um passivo é algo que tira dinheiro do seu bolso. Mesmo que seja algo que você 'possui', se está custando dinheiro mensalmente, é um passivo."
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: Sua casa própria é sempre um ativo.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso! Este é um dos pontos mais controversos de Kiyosaki. Sua casa própria é um passivo porque tira dinheiro do seu bolso (IPTU, manutenção, financiamento) sem gerar renda. Só seria ativo se você alugasse parte dela."
      },
      {
        id: 4,
        type: "scenario",
        question: "Maria compra um apartamento por R$ 200.000 e aluga por R$ 1.500/mês. Os custos mensais são R$ 800. Este imóvel é:",
        options: [
          "Um ativo, pois gera R$ 700 líquidos mensais",
          "Um passivo, pois foi financiado",
          "Nem ativo nem passivo",
          "Depende do valor de mercado"
        ],
        correctAnswerIndex: 0,
        explanation: "É um ativo porque coloca dinheiro no bolso da Maria (R$ 1.500 - R$ 800 = R$ 700 mensais). O fato de ter sido financiado não muda isso, desde que gere fluxo de caixa positivo."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "Por que Kiyosaki diz que a definição contábil de ativo está errada?",
        options: [
          "Porque contadores não entendem de dinheiro",
          "Porque foca no valor, não no fluxo de caixa",
          "Porque é muito complicada",
          "Porque foi criada pelos pobres"
        ],
        correctAnswerIndex: 1,
        explanation: "Kiyosaki critica a definição contábil porque ela foca no valor dos bens, não no fluxo de caixa que geram. Para ele, o que importa é se algo coloca ou tira dinheiro do seu bolso."
      },
      {
        id: 6,
        type: "drag_drop",
        question: "Classifique os itens abaixo como ATIVO ou PASSIVO:",
        items: [
          { text: "Ações que pagam dividendos", category: "ATIVO" },
          { text: "Carro financiado para uso pessoal", category: "PASSIVO" },
          { text: "Casa própria onde você mora", category: "PASSIVO" },
          { text: "Negócio que gera lucro", category: "ATIVO" },
          { text: "Cartão de crédito com saldo devedor", category: "PASSIVO" },
          { text: "Royalties de livro", category: "ATIVO" }
        ],
        correctAnswerIndex: 0, // Resposta correta para drag-and-drop é sempre 0
        explanation: "Lembre-se: ativo coloca dinheiro no bolso, passivo tira. Ações com dividendos, negócios lucrativos e royalties geram renda. Carro, casa própria e cartão geram gastos."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "Qual é o objetivo principal segundo a filosofia do pai rico?",
        options: [
          "Acumular muitos passivos",
          "Equilibrar ativos e passivos",
          "Adquirir ativos que comprem passivos",
          "Evitar qualquer tipo de dívida"
        ],
        correctAnswerIndex: 2,
        explanation: "O objetivo é adquirir ativos que gerem renda suficiente para comprar os passivos que você deseja, fazendo com que seus ativos paguem por seu estilo de vida."
      },
      {
        id: 8,
        type: "scenario",
        question: "João quer um carro de R$ 80.000. Seguindo a filosofia do pai rico, ele deveria:",
        options: [
          "Financiar o carro imediatamente",
          "Economizar até ter o dinheiro",
          "Comprar ativos que gerem renda para pagar pelo carro",
          "Desistir do carro"
        ],
        correctAnswerIndex: 2,
        explanation: "João deveria primeiro adquirir ativos que gerem renda suficiente para pagar pelo carro, assim o ativo paga pelo passivo e ele mantém sua base de ativos."
      },
      {
        id: 9,
        type: "true_false",
        question: "Verdadeiro ou Falso: Um bem que se valoriza mas não gera renda é considerado ativo por Kiyosaki.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Para Kiyosaki, se não gera fluxo de caixa positivo, não é ativo. A valorização é especulação - você só ganha se vender. O foco deve estar na renda gerada."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Qual é a chave para a liberdade financeira segundo Kiyosaki?",
        options: [
          "Ter um emprego bem remunerado",
          "Economizar muito dinheiro",
          "Ter renda de ativos maior que despesas",
          "Herdar dinheiro da família"
        ],
        correctAnswerIndex: 2,
        explanation: "A liberdade financeira acontece quando a renda gerada pelos seus ativos é maior que suas despesas mensais. Nesse ponto, você não precisa mais trabalhar pelo dinheiro."
      }
    ]
  },
  "q2_2": {
    title: "Exemplos Práticos de Ativos",
    trackId: 2,
    category: "Ativos vs Passivos",
    difficulty: "INICIANTE",
    description: "Identifique ativos reais que podem gerar renda para você.",
    icon: <TrendingUp />,
    color: "bg-green-100",
    questions: [
      {
        id: 1,
        type: "drag_drop",
        question: "Classifique os itens abaixo como ATIVO ou PASSIVO:",
        items: [
          { text: "Apartamento alugado para terceiros", category: "ATIVO" },
          { text: "Carro financiado para uso pessoal", category: "PASSIVO" },
          { text: "Ações que pagam dividendos", category: "ATIVO" },
          { text: "Casa própria onde você mora", category: "PASSIVO" },
          { text: "Curso online que você vende", category: "ATIVO" },
          { text: "Cartão de crédito com saldo devedor", category: "PASSIVO" }
        ],
        correctAnswerIndex: 0,
        explanation: "Lembre-se: ativo coloca dinheiro no bolso, passivo tira. O apartamento alugado e as ações geram renda. O carro e a casa própria geram gastos. O curso gera renda. O cartão gera juros e taxas."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "Qual destes é um exemplo de ativo que qualquer pessoa pode começar a construir?",
        options: [
          "Um blog que gera receita com publicidade",
          "Um carro do ano",
          "Uma TV de última geração",
          "Roupas de marca"
        ],
        correctAnswerIndex: 0,
        explanation: "Um blog que gera receita com publicidade é um ativo porque coloca dinheiro no seu bolso. Pode ser criado com baixo investimento inicial e gerar renda passiva ao longo do tempo."
      },
      {
        id: 3,
        type: "scenario",
        question: "Carlos tem R$ 50.000 e está decidindo entre: A) Comprar um carro novo, B) Investir em ações que pagam 8% ao ano de dividendos. Qual opção criaria um ativo?",
        options: [
          "Opção A",
          "Opção B",
          "Ambas",
          "Nenhuma"
        ],
        correctAnswerIndex: 1,
        explanation: "A opção B criaria um ativo, gerando aproximadamente R$ 4.000 anuais em dividendos. O carro seria um passivo, gerando gastos com combustível, manutenção, seguro e depreciação."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual é a característica principal de um ativo de qualidade?",
        options: [
          "Tem valor alto",
          "É bonito",
          "Gera fluxo de caixa positivo consistente",
          "É fácil de vender"
        ],
        correctAnswerIndex: 2,
        explanation: "Um ativo de qualidade gera fluxo de caixa positivo consistente ao longo do tempo. Não importa o valor ou aparência, mas sim sua capacidade de colocar dinheiro no seu bolso regularmente."
      },
      {
        id: 5,
        type: "true_false",
        question: "Verdadeiro ou Falso: Ações que não pagam dividendos não podem ser consideradas ativos.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Ações que se valorizam ao longo do tempo também podem ser ativos, especialmente se você as vende estrategicamente ou se a empresa reinveste lucros para crescer. O importante é gerar retorno positivo."
      },
      {
        id: 6,
        type: "scenario",
        question: "Ana compra uma máquina de lavar por R$ 2.000 e aluga para vizinhos por R$ 50/semana. Considerando custos de R$ 20/mês, esta máquina é:",
        options: [
          "Um passivo, pois custou dinheiro",
          "Um ativo, pois gera renda líquida de R$ 180/mês",
          "Nem ativo nem passivo",
          "Depende da marca da máquina"
        ],
        correctAnswerIndex: 1,
        explanation: "É um ativo porque gera renda líquida positiva: R$ 200/mês (R$ 50 x 4 semanas) - R$ 20 custos = R$ 180 líquidos mensais."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "Qual destes ativos oferece maior potencial de renda passiva?",
        options: [
          "Conta poupança",
          "Fundos imobiliários que pagam aluguéis mensais",
          "Ouro físico",
          "Coleção de arte"
        ],
        correctAnswerIndex: 1,
        explanation: "Fundos imobiliários oferecem renda passiva mensal através da distribuição de aluguéis, proporcionando fluxo de caixa regular sem necessidade de gestão ativa."
      },
      {
        id: 8,
        type: "true_false",
        question: "Verdadeiro ou Falso: Para ser considerado ativo, um investimento precisa gerar renda imediatamente.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Alguns ativos podem levar tempo para gerar renda (como um negócio em crescimento) ou podem gerar retorno através de valorização. O importante é o potencial de retorno positivo."
      },
      {
        id: 9,
        type: "scenario",
        question: "Pedro tem uma garagem vazia e está pensando em: A) Transformar em home office pessoal, B) Alugar como estacionamento. Qual opção cria um ativo?",
        options: [
          "Opção A",
          "Opção B",
          "Ambas",
          "Nenhuma"
        ],
        correctAnswerIndex: 1,
        explanation: "A opção B cria um ativo porque gera renda através do aluguel. A opção A, embora útil, não gera fluxo de caixa - seria mais um benefício pessoal."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Qual é a melhor estratégia para construir uma base sólida de ativos?",
        options: [
          "Comprar apenas um tipo de ativo",
          "Diversificar entre diferentes tipos de ativos",
          "Focar apenas em ativos caros",
          "Esperar ter muito dinheiro para começar"
        ],
        correctAnswerIndex: 1,
        explanation: "Diversificar entre diferentes tipos de ativos (ações, imóveis, negócios, etc.) reduz riscos e aumenta as chances de ter fluxo de caixa consistente de múltiplas fontes."
      }
    ]
  },
  "q2_3": {
    title: "A Armadilha da Casa Própria",
    trackId: 2,
    category: "Ativos vs Passivos",
    difficulty: "INTERMEDIARIO",
    description: "Por que Kiyosaki considera a casa própria um passivo e como pensar diferente sobre imóveis.",
    icon: <Building />,
    color: "bg-green-100",
    questions: [
      {
        id: 1,
        type: "scenario",
        question: "Carlos comprou uma casa de R$ 300.000 financiada. Paga R$ 1.800/mês de financiamento, R$ 200 de IPTU e R$ 300 de manutenção média. Por que esta casa é um passivo?",
        options: [
          "Porque foi financiada",
          "Porque está tirando R$ 2.300/mês do bolso dele",
          "Porque imóveis não valorizam",
          "Porque R$ 300.000 é muito caro"
        ],
        correctAnswerIndex: 1,
        explanation: "A casa é um passivo porque está tirando R$ 2.300 mensais do bolso do Carlos sem gerar nenhuma renda. Enquanto ele morar nela, continua sendo um passivo pelos custos mensais."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "Como Carlos poderia transformar sua situação imobiliária em um ativo?",
        options: [
          "Vender a casa imediatamente",
          "Comprar um imóvel para alugar em vez de morar",
          "Pintar a casa de outra cor",
          "Quitar o financiamento mais rápido"
        ],
        correctAnswerIndex: 1,
        explanation: "Se Carlos comprasse um imóvel para alugar (que gerasse renda maior que os custos), teria um ativo. Poderia continuar alugando onde mora e ter o imóvel trabalhando para ele."
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: Kiyosaki é contra a compra de imóveis em qualquer situação.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Kiyosaki não é contra imóveis, mas sim contra comprar a casa própria como primeiro investimento. Ele defende comprar imóveis que gerem renda (ativos) antes de comprar a casa própria (passivo)."
      },
      {
        id: 4,
        type: "scenario",
        question: "Marina paga R$ 1.200 de aluguel. Ela pode comprar uma casa com prestação de R$ 1.500 + R$ 300 de custos. Qual seria melhor?",
        options: [
          "Comprar a casa, pois está 'pagando para si mesma'",
          "Continuar alugando e investir a diferença em ativos",
          "Tanto faz",
          "Comprar sempre é melhor"
        ],
        correctAnswerIndex: 1,
        explanation: "Kiyosaki sugeriria continuar alugando e investir os R$ 600 de diferença (R$ 1.800 - R$ 1.200) em ativos que gerem renda. Assim ela constrói riqueza em vez de apenas patrimônio."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "Qual é o principal problema da casa própria como investimento segundo Kiyosaki?",
        options: [
          "Imóveis nunca se valorizam",
          "É muito caro",
          "Amarra capital sem gerar renda",
          "É difícil de vender"
        ],
        correctAnswerIndex: 2,
        explanation: "O principal problema é que a casa própria amarra uma grande quantidade de capital sem gerar renda. Esse dinheiro poderia estar investido em ativos que geram fluxo de caixa positivo."
      },
      {
        id: 6,
        type: "scenario",
        question: "Roberto tem R$ 100.000 de entrada. Pode: A) Comprar casa própria de R$ 400.000, B) Comprar 2 apartamentos de R$ 200.000 cada para alugar. Qual opção seguiria a filosofia do pai rico?",
        options: [
          "Opção A, ter casa própria é importante",
          "Opção B, gera renda e constrói patrimônio",
          "Tanto faz",
          "Nenhuma, deveria guardar o dinheiro"
        ],
        correctAnswerIndex: 1,
        explanation: "A opção B seguiria a filosofia do pai rico: os apartamentos geram renda mensal e ainda se valorizam. Roberto poderia usar essa renda para eventualmente comprar sua casa própria."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: A casa própria é o maior investimento da vida da maioria das pessoas.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro, e esse é exatamente o problema segundo Kiyosaki. As pessoas colocam a maior parte de seu patrimônio em algo que não gera renda, limitando sua capacidade de construir riqueza."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Como a casa própria poderia se tornar um ativo?",
        options: [
          "Nunca pode ser um ativo",
          "Alugando quartos ou parte da casa",
          "Apenas se for vendida",
          "Pintando de cores diferentes"
        ],
        correctAnswerIndex: 1,
        explanation: "A casa própria pode se tornar um ativo se gerar renda, como alugando quartos, criando um escritório para alugar, ou usando parte para um negócio que gere receita."
      },
      {
        id: 9,
        type: "scenario",
        question: "Lucia tem uma casa quitada avaliada em R$ 500.000. Ela poderia vendê-la e comprar 3 apartamentos para alugar. O pai rico aconselharia:",
        options: [
          "Manter a casa, está quitada",
          "Vender e comprar os apartamentos para gerar renda",
          "Vender e guardar o dinheiro",
          "Fazer um empréstimo sobre a casa"
        ],
        correctAnswerIndex: 1,
        explanation: "O pai rico consideraria vender a casa e comprar ativos que gerem renda. Os 3 apartamentos poderiam gerar renda suficiente para pagar aluguel e ainda sobrar dinheiro."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Qual é a ordem de prioridade que Kiyosaki sugere para imóveis?",
        options: [
          "Primeiro casa própria, depois investimentos",
          "Primeiro investimentos que gerem renda, depois casa própria",
          "Apenas investimentos, nunca casa própria",
          "Não importa a ordem"
        ],
        correctAnswerIndex: 1,
        explanation: "Kiyosaki sugere primeiro construir uma base de ativos que gerem renda suficiente para pagar pela casa própria, assim os ativos pagam pelo passivo."
      }
    ]
  },
  "q2_4": {
    title: "Construindo uma Coluna de Ativos",
    trackId: 2,
    category: "Ativos vs Passivos",
    difficulty: "INTERMEDIARIO",
    description: "Estratégias para construir uma base sólida de ativos geradores de renda.",
    icon: <Building />,
    color: "bg-green-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a estratégia principal para enriquecer segundo Kiyosaki?",
        options: [
          "Trabalhar mais horas",
          "Economizar mais dinheiro",
          "Adquirir ativos que geram renda passiva",
          "Investir apenas em imóveis"
        ],
        correctAnswerIndex: 2,
        explanation: "A estratégia principal é adquirir ativos que geram renda passiva. O objetivo é que, eventualmente, a renda dos seus ativos seja maior que suas despesas, alcançando a liberdade financeira."
      },
      {
        id: 2,
        type: "scenario",
        question: "Ana ganha R$ 5.000/mês e tem gastos de R$ 4.000. Ela quer aplicar os R$ 1.000 restantes. Qual opção seguiria melhor a filosofia do Pai Rico?",
        options: [
          "Guardar na poupança",
          "Comprar ações que pagam dividendos mensais",
          "Comprar um carro melhor",
          "Fazer uma viagem"
        ],
        correctAnswerIndex: 1,
        explanation: "Comprar ações que pagam dividendos seria a melhor opção, pois criaria um ativo gerador de renda passiva. Com o tempo, esses dividendos poderiam comprar mais ações, criando um ciclo de crescimento."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "Qual é o conceito de 'coluna de ativos' segundo Kiyosaki?",
        options: [
          "Uma lista de todos os bens que você possui",
          "Um conjunto de investimentos que geram renda passiva",
          "Apenas investimentos em imóveis",
          "Dinheiro guardado no banco"
        ],
        correctAnswerIndex: 1,
        explanation: "A coluna de ativos é um conjunto diversificado de investimentos que geram renda passiva consistente, formando a base da liberdade financeira."
      },
      {
        id: 4,
        type: "true_false",
        question: "Verdadeiro ou Falso: É melhor ter muitos ativos pequenos do que poucos ativos grandes.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. Diversificar com muitos ativos pequenos reduz riscos. Se um ativo tiver problemas, os outros continuam gerando renda. É o princípio da diversificação."
      },
      {
        id: 5,
        type: "scenario",
        question: "Bruno tem R$ 50.000 para investir. Qual estratégia seguiria melhor os princípios do pai rico?",
        options: [
          "Investir tudo em uma única ação",
          "Dividir entre ações, fundos imobiliários e renda fixa",
          "Comprar apenas ouro",
          "Deixar tudo na poupança"
        ],
        correctAnswerIndex: 1,
        explanation: "Dividir entre diferentes tipos de ativos (ações, fundos imobiliários, renda fixa) cria uma coluna de ativos diversificada, reduzindo riscos e aumentando as chances de renda consistente."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Quando você alcança a liberdade financeira segundo Kiyosaki?",
        options: [
          "Quando tem R$ 1 milhão",
          "Quando a renda dos ativos cobre todas as despesas",
          "Quando se aposenta",
          "Quando compra a casa própria"
        ],
        correctAnswerIndex: 1,
        explanation: "A liberdade financeira é alcançada quando a renda passiva dos seus ativos é suficiente para cobrir todas as suas despesas mensais, independentemente do valor total."
      },
      {
        id: 7,
        type: "scenario",
        question: "Carla tem despesas de R$ 3.000/mês e ativos que geram R$ 2.500/mês. Para alcançar liberdade financeira, ela precisa:",
        options: [
          "Reduzir gastos para R$ 2.500",
          "Aumentar renda dos ativos para R$ 3.000+",
          "Ambas as opções são válidas",
          "Conseguir um emprego melhor"
        ],
        correctAnswerIndex: 2,
        explanation: "Ambas as opções são válidas. Carla pode reduzir gastos, aumentar a renda dos ativos, ou fazer uma combinação das duas estratégias para alcançar a liberdade financeira."
      },
      {
        id: 8,
        type: "true_false",
        question: "Verdadeiro ou Falso: Segundo Kiyosaki, você deve reinvestir a renda dos ativos para acelerar o crescimento.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. Reinvestir a renda dos ativos acelera o crescimento através dos juros compostos. É como plantar sementes que geram mais árvores que produzem mais sementes."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Qual é a principal vantagem de ter múltiplas fontes de renda passiva?",
        options: [
          "Mais trabalho para gerenciar",
          "Segurança - se uma falhar, outras continuam",
          "Mais impostos para pagar",
          "Nenhuma vantagem específica"
        ],
        correctAnswerIndex: 1,
        explanation: "A principal vantagem é a segurança. Com múltiplas fontes de renda passiva, se uma falhar ou diminuir, as outras continuam gerando renda, protegendo sua estabilidade financeira."
      },
      {
        id: 10,
        type: "scenario",
        question: "Diego quer construir uma coluna de ativos mas só tem R$ 200/mês disponíveis. Qual seria o melhor primeiro passo?",
        options: [
          "Esperar juntar mais dinheiro",
          "Começar investindo em ações ou fundos com aportes mensais",
          "Comprar um imóvel",
          "Guardar na poupança até ter R$ 10.000"
        ],
        correctAnswerIndex: 1,
        explanation: "O melhor é começar imediatamente com aportes mensais em ações ou fundos. Mesmo R$ 200/mês, investidos consistentemente, podem se tornar uma quantia significativa ao longo do tempo devido aos juros compostos."
      }
    ]
  }
};
