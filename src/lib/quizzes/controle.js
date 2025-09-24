import React from 'react';
import { Calculator, BarChart2, TrendingDown } from 'lucide-react';

export const CONTROLE_QUIZZES = {
  "q4_1": {
    title: "Orçamento Pessoal Inteligente",
    trackId: 4,
    category: "Controle de Gastos",
    difficulty: "INICIANTE",
    description: "Como criar e manter um orçamento que realmente funciona.",
    icon: <Calculator />,
    color: "bg-blue-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é o primeiro passo para criar um orçamento eficaz?",
        options: [
          "Cortar todos os gastos supérfluos",
          "Anotar todas as receitas e despesas por pelo menos um mês",
          "Definir metas de economia",
          "Abrir uma conta poupança"
        ],
        correctAnswerIndex: 1,
        explanation: "O primeiro passo é conhecer exatamente para onde seu dinheiro está indo. Anote todas as receitas e despesas por pelo menos um mês para ter uma visão real dos seus hábitos financeiros."
      },
      {
        id: 2,
        type: "drag_drop",
        question: "Classifique os gastos abaixo em NECESSÁRIOS ou SUPÉRFLUOS:",
        items: [
          { text: "Aluguel", category: "NECESSÁRIOS" },
          { text: "Alimentação básica", category: "NECESSÁRIOS" },
          { text: "Netflix", category: "SUPÉRFLUOS" },
          { text: "Transporte para trabalho", category: "NECESSÁRIOS" },
          { text: "Roupas de marca", category: "SUPÉRFLUOS" },
          { text: "Plano de saúde", category: "NECESSÁRIOS" }
        ],
        explanation: "Gastos necessários são essenciais para sobrevivência e trabalho. Supérfluos são desejos que, embora prazerosos, podem ser cortados ou reduzidos se necessário."
      },
      {
        id: 3,
        type: "scenario",
        question: "Maria ganha R$ 3.000 e tem os seguintes gastos: aluguel R$ 900, alimentação R$ 600, transporte R$ 300, lazer R$ 400, roupas R$ 300, outros R$ 500. Total: R$ 3.000. Qual o problema?",
        options: [
          "Não há problema, está equilibrado",
          "Não sobra dinheiro para poupança",
          "Ela gasta pouco",
          "Deveria gastar mais"
        ],
        correctAnswerIndex: 1,
        explanation: "O problema é que não sobra nada para poupança. Um orçamento saudável deve incluir pelo menos 10-20% para poupança e investimentos."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual é a regra básica para um orçamento sustentável?",
        options: [
          "Gastar tudo que ganha",
          "Receitas > Despesas",
          "Receitas = Despesas",
          "Despesas > Receitas"
        ],
        correctAnswerIndex: 1,
        explanation: "A regra básica é que as receitas devem ser maiores que as despesas, deixando sempre uma margem para poupança e emergências."
      },
      {
        id: 5,
        type: "true_false",
        question: "Verdadeiro ou Falso: Um orçamento deve ser rígido e nunca pode ser alterado.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Um orçamento deve ser flexível e revisado regularmente. Mudanças na vida (aumento salarial, novos gastos) exigem ajustes no orçamento."
      },
      {
        id: 6,
        type: "scenario",
        question: "João fez um orçamento mas sempre estoura os limites. Qual seria a melhor estratégia?",
        options: [
          "Desistir do orçamento",
          "Revisar o orçamento e torná-lo mais realista",
          "Ignorar os estouros",
          "Fazer um orçamento ainda mais rígido"
        ],
        correctAnswerIndex: 1,
        explanation: "A melhor estratégia é revisar o orçamento e torná-lo mais realista. Orçamentos muito restritivos são difíceis de seguir e acabam sendo abandonados."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "Com que frequência você deve revisar seu orçamento?",
        options: [
          "Uma vez por ano",
          "Mensalmente",
          "Apenas quando há problemas",
          "Nunca"
        ],
        correctAnswerIndex: 1,
        explanation: "O orçamento deve ser revisado mensalmente para acompanhar se está sendo seguido e fazer ajustes necessários baseados na realidade dos gastos."
      },
      {
        id: 8,
        type: "scenario",
        question: "Ana quer incluir uma reserva de emergência no orçamento. Quanto ela deveria destinar mensalmente se ganha R$ 4.000?",
        options: [
          "R$ 100 (2,5%)",
          "R$ 200 (5%)",
          "R$ 400 (10%)",
          "R$ 800 (20%)"
        ],
        correctAnswerIndex: 2,
        explanation: "O ideal é destinar pelo menos 10% da renda para poupança/emergência. R$ 400 (10% de R$ 4.000) seria um valor adequado para começar a construir uma reserva."
      },
      {
        id: 9,
        type: "true_false",
        question: "Verdadeiro ou Falso: Pequenos gastos diários (cafezinho, lanche) não precisam entrar no orçamento.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Pequenos gastos diários podem somar valores significativos ao final do mês. Um cafezinho de R$ 5 por dia resulta em R$ 150 mensais."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Qual é o principal benefício de ter um orçamento bem estruturado?",
        options: [
          "Gastar menos dinheiro",
          "Ter controle e consciência sobre suas finanças",
          "Impressionar outras pessoas",
          "Complicar a vida financeira"
        ],
        correctAnswerIndex: 1,
        explanation: "O principal benefício é ter controle e consciência sobre suas finanças, sabendo exatamente para onde vai seu dinheiro e podendo tomar decisões mais inteligentes."
      }
    ]
  },
  "q4_2": {
    title: "A Regra 50/30/20",
    trackId: 4,
    category: "Controle de Gastos",
    difficulty: "INICIANTE",
    description: "Uma fórmula simples para distribuir sua renda de forma inteligente.",
    icon: <BarChart2 />,
    color: "bg-blue-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Na regra 50/30/20, o que representa cada porcentagem?",
        options: [
          "50% necessidades, 30% desejos, 20% poupança/investimentos",
          "50% poupança, 30% necessidades, 20% desejos",
          "50% desejos, 30% poupança, 20% necessidades",
          "50% investimentos, 30% gastos, 20% reserva"
        ],
        correctAnswerIndex: 0,
        explanation: "A regra 50/30/20 sugere: 50% para necessidades (moradia, alimentação, transporte), 30% para desejos (lazer, hobbies), e 20% para poupança e investimentos."
      },
      {
        id: 2,
        type: "scenario",
        question: "Marina ganha R$ 4.000 por mês. Seguindo a regra 50/30/20, quanto ela deveria destinar para poupança/investimentos?",
        options: [
          "R$ 400",
          "R$ 600",
          "R$ 800",
          "R$ 1.000"
        ],
        correctAnswerIndex: 2,
        explanation: "20% de R$ 4.000 = R$ 800. Este valor deveria ser destinado para poupança e investimentos mensalmente."
      },
      {
        id: 3,
        type: "drag_drop",
        question: "Classifique os gastos abaixo nas categorias da regra 50/30/20:",
        items: [
          { text: "Aluguel", category: "50% NECESSIDADES" },
          { text: "Cinema", category: "30% DESEJOS" },
          { text: "Supermercado", category: "50% NECESSIDADES" },
          { text: "Investimentos", category: "20% POUPANÇA" },
          { text: "Restaurante", category: "30% DESEJOS" },
          { text: "Transporte trabalho", category: "50% NECESSIDADES" }
        ],
        explanation: "Necessidades (50%): gastos essenciais como moradia, alimentação básica, transporte. Desejos (30%): entretenimento, restaurantes. Poupança (20%): investimentos e reservas."
      },
      {
        id: 4,
        type: "true_false",
        question: "Verdadeiro ou Falso: A regra 50/30/20 deve ser seguida rigidamente por todas as pessoas.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A regra 50/30/20 é um guia geral. Pessoas com rendas muito baixas podem precisar de mais que 50% para necessidades, enquanto outras podem poupar mais que 20%."
      },
      {
        id: 5,
        type: "scenario",
        question: "Carlos ganha R$ 2.000 e seus gastos essenciais são R$ 1.400 (70%). Como ele pode aplicar a regra 50/30/20?",
        options: [
          "Não pode aplicar, ganha pouco demais",
          "Deve reduzir gastos essenciais ou aumentar renda",
          "Pode adaptar para 70/20/10",
          "Deve ignorar a regra completamente"
        ],
        correctAnswerIndex: 2,
        explanation: "Carlos pode adaptar a regra para sua realidade: 70% necessidades, 20% desejos, 10% poupança. O importante é sempre destinar algo para poupança, mesmo que menos que 20%."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Qual é a principal vantagem da regra 50/30/20?",
        options: [
          "Garantir que você ficará rico",
          "Equilibrar necessidades, prazeres e futuro financeiro",
          "Eliminar todos os gastos supérfluos",
          "Complicar o orçamento"
        ],
        correctAnswerIndex: 1,
        explanation: "A principal vantagem é equilibrar necessidades atuais, prazeres (qualidade de vida) e futuro financeiro, criando um orçamento sustentável e realista."
      },
      {
        id: 7,
        type: "scenario",
        question: "Ana ganha R$ 5.000 e consegue viver bem com R$ 2.000 de necessidades. Como ela pode otimizar a regra 50/30/20?",
        options: [
          "Gastar R$ 2.500 em necessidades para seguir a regra",
          "Manter R$ 2.000 em necessidades e aumentar poupança para 40%",
          "Gastar mais em desejos",
          "Seguir exatamente 50/30/20"
        ],
        correctAnswerIndex: 1,
        explanation: "Ana pode otimizar mantendo os R$ 2.000 em necessidades (40%) e aumentando a poupança para 40%, mantendo 20% para desejos. Isso acelera sua construção de riqueza."
      },
      {
        id: 8,
        type: "true_false",
        question: "Verdadeiro ou Falso: Na categoria 'desejos' da regra 50/30/20, você pode gastar com qualquer coisa.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. A categoria 'desejos' é para sua qualidade de vida e prazeres pessoais. Desde que esteja dentro do limite de 30%, você tem liberdade para escolher como usar esse dinheiro."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "O que fazer se seus gastos com necessidades ultrapassam 50% da renda?",
        options: [
          "Desistir da regra 50/30/20",
          "Revisar o que realmente é necessidade vs desejo",
          "Buscar formas de aumentar a renda",
          "Todas as anteriores"
        ],
        correctAnswerIndex: 3,
        explanation: "Todas as opções são válidas: revisar se todos os gastos são realmente necessários, buscar aumentar a renda, ou adaptar a regra para sua realidade atual."
      },
      {
        id: 10,
        type: "scenario",
        question: "Pedro segue a regra 50/30/20 há 6 meses. Ele quer comprar um carro que custa R$ 30.000. Qual seria a abordagem mais inteligente?",
        options: [
          "Financiar o carro imediatamente",
          "Usar parte da categoria 'desejos' para juntar dinheiro ao longo do tempo",
          "Parar de poupar para comprar o carro",
          "Usar toda a poupança acumulada"
        ],
        correctAnswerIndex: 1,
        explanation: "A abordagem mais inteligente seria usar parte da categoria 'desejos' para juntar dinheiro ao longo do tempo, mantendo a disciplina de poupança e evitando dívidas desnecessárias."
      }
    ]
  },
  "q4_3": {
    title: "Eliminando Gastos Desnecessários",
    trackId: 4,
    category: "Controle de Gastos",
    difficulty: "INTERMEDIARIO",
    description: "Estratégias práticas para reduzir gastos sem perder qualidade de vida.",
    icon: <TrendingDown />,
    color: "bg-blue-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a melhor estratégia para reduzir gastos com alimentação?",
        options: [
          "Parar de comer fora completamente",
          "Planejar refeições e fazer lista de compras",
          "Comprar apenas produtos em promoção",
          "Comer apenas miojo"
        ],
        correctAnswerIndex: 1,
        explanation: "Planejar refeições e fazer lista de compras evita desperdício, compras por impulso e garante alimentação saudável gastando menos. É uma estratégia sustentável a longo prazo."
      },
      {
        id: 2,
        type: "scenario",
        question: "João gasta R$ 300/mês em aplicativos de streaming (Netflix, Spotify, Amazon Prime, etc.) mas usa apenas 2 regularmente. Qual seria a melhor ação?",
        options: [
          "Manter todos para ter opções",
          "Cancelar os que não usa e economizar cerca de R$ 150/mês",
          "Cancelar todos os serviços",
          "Assinar mais serviços para ter mais entretenimento"
        ],
        correctAnswerIndex: 1,
        explanation: "Cancelar serviços não utilizados é uma forma simples de economizar sem impactar a qualidade de vida. R$ 150 economizados mensalmente podem ser direcionados para investimentos."
      },
      {
        id: 3,
        type: "drag_drop",
        question: "Classifique as estratégias abaixo em EFICAZES ou PREJUDICIAIS para reduzir gastos:",
        items: [
          { text: "Fazer lista de compras", category: "EFICAZES" },
          { text: "Cortar toda diversão", category: "PREJUDICIAIS" },
          { text: "Comparar preços", category: "EFICAZES" },
          { text: "Eliminar alimentação saudável", category: "PREJUDICIAIS" },
          { text: "Cancelar serviços não usados", category: "EFICAZES" },
          { text: "Nunca mais sair de casa", category: "PREJUDICIAIS" }
        ],
        explanation: "Estratégias eficazes mantêm qualidade de vida enquanto reduzem gastos. Estratégias prejudiciais podem economizar dinheiro mas comprometem saúde, relacionamentos ou bem-estar."
      },
      {
        id: 4,
        type: "true_false",
        question: "Verdadeiro ou Falso: Para economizar dinheiro, você deve cortar todos os gastos com entretenimento.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Cortar todo entretenimento é insustentável e pode levar ao abandono do orçamento. O ideal é encontrar formas mais baratas de se divertir, não eliminar completamente."
      },
      {
        id: 5,
        type: "scenario",
        question: "Maria gasta R$ 200/mês em cafés na rua. Ela quer economizar mas adora café. Qual seria a melhor estratégia?",
        options: [
          "Parar de tomar café completamente",
          "Fazer café em casa e levar em garrafa térmica",
          "Continuar gastando R$ 200",
          "Tomar apenas água"
        ],
        correctAnswerIndex: 1,
        explanation: "Fazer café em casa e levar em garrafa térmica mantém o prazer do café mas reduz drasticamente o custo. É uma solução prática e sustentável."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Qual é o conceito de 'lifestyle inflation' (inflação do estilo de vida)?",
        options: [
          "Quando os preços sobem",
          "Quando você aumenta gastos proporcionalmente ao aumento de renda",
          "Quando você fica mais velho",
          "Quando você muda de cidade"
        ],
        correctAnswerIndex: 1,
        explanation: "Lifestyle inflation é quando você aumenta seus gastos proporcionalmente ao aumento de renda, mantendo a mesma taxa de poupança ou até reduzindo-a."
      },
      {
        id: 7,
        type: "scenario",
        question: "Carlos recebeu um aumento de R$ 1.000. Antes ganhava R$ 4.000 e poupava R$ 400. Para evitar lifestyle inflation, ele deveria:",
        options: [
          "Gastar os R$ 1.000 extras em luxos",
          "Manter o padrão de vida e poupar R$ 1.400",
          "Aumentar gastos para R$ 4.500 e poupar R$ 500",
          "Parar de poupar e gastar tudo"
        ],
        correctAnswerIndex: 1,
        explanation: "Para evitar lifestyle inflation, Carlos deveria manter seu padrão de vida atual e direcionar a maior parte do aumento (ou todo) para poupança e investimentos."
      },
      {
        id: 8,
        type: "true_false",
        question: "Verdadeiro ou Falso: Comprar produtos de marca sempre é um gasto desnecessário.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Alguns produtos de marca podem ter melhor qualidade e durar mais, sendo mais econômicos a longo prazo. O importante é avaliar custo-benefício, não apenas o preço inicial."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Qual é a regra dos 24 horas para controlar gastos impulsivos?",
        options: [
          "Comprar tudo em 24 horas",
          "Esperar 24 horas antes de compras não essenciais",
          "Fazer compras apenas às 24h",
          "Gastar apenas R$ 24 por dia"
        ],
        correctAnswerIndex: 1,
        explanation: "A regra dos 24 horas sugere esperar pelo menos um dia antes de fazer compras não essenciais. Isso ajuda a distinguir entre desejos momentâneos e necessidades reais."
      },
      {
        id: 10,
        type: "scenario",
        question: "Ana quer economizar R$ 500/mês sem comprometer qualidade de vida. Qual seria a melhor abordagem?",
        options: [
          "Cortar R$ 500 de uma categoria só",
          "Cortar R$ 50-100 de várias categorias diferentes",
          "Parar de se divertir completamente",
          "Não é possível economizar sem comprometer qualidade"
        ],
        correctAnswerIndex: 1,
        explanation: "A melhor abordagem é fazer pequenos cortes em várias categorias (R$ 50-100 cada). Isso é menos perceptível no dia a dia e mais sustentável que cortes drásticos em uma área só."
      }
    ]
  }
};