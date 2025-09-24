
import React from 'react';

export const EMPREENDEDORISMO_QUIZZES = {
  "q7_3": {
    title: "Empreendedorismo e Negócios",
    trackId: 1,
    category: "Mentalidade Empreendedora",
    difficulty: "AVANCADO", 
    description: "Como pensar como um empresário, não como um empregado.",
    icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z' })),
    color: "bg-purple-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a principal diferença entre ser empregado e ser empresário segundo Kiyosaki?",
        options: [
          "Empresários ganham mais dinheiro",
          "Empregados trabalham para o sistema, empresários criam sistemas",
          "Empresários são mais inteligentes",
          "Não há diferença"
        ],
        correctAnswerIndex: 1,
        explanation: "A diferença está na mentalidade: empregados trabalham dentro de sistemas criados por outros, enquanto empresários criam sistemas que trabalham para eles."
      },
      {
        id: 2,
        type: "scenario",
        question: "Carlos é dentista e ganha R$ 15.000/mês, mas se parar de trabalhar, a renda para. Como ele pode pensar como empresário?",
        options: [
          "Continuar sendo apenas dentista",
          "Criar uma clínica com outros dentistas trabalhando para ele",
          "Trabalhar mais horas",
          "Cobrar mais caro"
        ],
        correctAnswerIndex: 1,
        explanation: "Carlos pode criar um sistema (clínica com outros dentistas) que gera renda mesmo quando ele não está trabalhando diretamente. Isso é pensar como empresário."
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: Para ser empresário, você precisa ter uma ideia completamente nova e revolucionária.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Muitos negócios bem-sucedidos são melhorias de ideias existentes ou aplicação de conceitos conhecidos em novos mercados. Execução é mais importante que originalidade."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Segundo Kiyosaki, qual é a habilidade mais importante para um empresário?",
        options: [
          "Conhecimento técnico",
          "Vendas e marketing",
          "Contabilidade",
          "Programação"
        ],
        correctAnswerIndex: 1,
        explanation: "Kiyosaki considera vendas e marketing as habilidades mais importantes, pois sem clientes, não há negócio. Você pode terceirizar outras funções, mas precisa saber vender."
      },
      {
        id: 5,
        type: "drag_drop",
        question: "Classifique as características abaixo em MENTALIDADE DE EMPREGADO ou MENTALIDADE DE EMPRESÁRIO:",
        items: [
          { text: "Busca segurança", category: "MENTALIDADE DE EMPREGADO" },
          { text: "Assume riscos calculados", category: "MENTALIDADE DE EMPRESÁRIO" },
          { text: "Quer salário fixo", category: "MENTALIDADE DE EMPREGADO" },
          { text: "Cria sistemas", category: "MENTALIDADE DE EMPRESÁRIO" },
          { text: "Evita responsabilidades", category: "MENTALIDADE DE EMPREGADO" },
          { text: "Busca oportunidades", category: "MENTALIDADE DE EMPRESÁRIO" }
        ],
        explanation: "Mentalidade de empregado busca segurança e previsibilidade. Mentalidade de empresário aceita riscos em troca de maior potencial de retorno e liberdade."
      },
      {
        id: 6,
        type: "scenario",
        question: "Maria tem uma ideia de negócio mas tem medo de deixar o emprego. O que Kiyosaki aconselharia?",
        options: [
          "Deixar o emprego imediatamente",
          "Nunca deixar a segurança do emprego",
          "Começar o negócio como side business primeiro",
          "Esquecer a ideia"
        ],
        correctAnswerIndex: 2,
        explanation: "Kiyosaki aconselharia começar como side business, mantendo o emprego até o negócio gerar renda suficiente. Isso reduz riscos enquanto constrói o empreendimento."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: Empresários bem-sucedidos nunca falham.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Falhas são parte do processo empreendedor. Empresários bem-sucedidos aprendem com falhas e as veem como educação, não como fracasso definitivo."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Qual é a diferença entre ser autônomo e ser empresário?",
        options: [
          "Não há diferença",
          "Autônomo trabalha no negócio, empresário trabalha sobre o negócio",
          "Empresários ganham mais",
          "Autônomos são mais livres"
        ],
        correctAnswerIndex: 1,
        explanation: "Autônomos trabalham no negócio (se param, o negócio para). Empresários criam sistemas que funcionam sem sua presença constante, trabalhando sobre o negócio."
      },
      {
        id: 9,
        type: "scenario",
        question: "João tem uma padaria e trabalha 12 horas por dia nela. Como ele pode se tornar mais empresário e menos autônomo?",
        options: [
          "Trabalhar 16 horas por dia",
          "Treinar funcionários e criar sistemas para operar sem ele",
          "Fechar a padaria",
          "Fazer tudo sozinho para economizar"
        ],
        correctAnswerIndex: 1,
        explanation: "João deve treinar funcionários competentes e criar sistemas (procedimentos, controles) que permitam à padaria funcionar bem mesmo quando ele não está presente."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Segundo Kiyosaki, qual é o objetivo final de construir um negócio?",
        options: [
          "Trabalhar mais",
          "Ter mais funcionários",
          "Criar liberdade financeira e de tempo",
          "Ficar famoso"
        ],
        correctAnswerIndex: 2,
        explanation: "O objetivo final é criar liberdade financeira e de tempo. Um negócio bem estruturado deve gerar renda e funcionar sem depender totalmente da presença do dono."
      }
    ]
  }
};
