
import React from 'react';

export const DIVIDAS_QUIZZES = {
  "q7_1": {
    title: "Dívida Boa vs Dívida Ruim",
    trackId: 2,
    category: "Gestão de Dívidas",
    difficulty: "INTERMEDIARIO",
    description: "Nem toda dívida é ruim - aprenda a diferença.",
    icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' })),
    color: "bg-red-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é um exemplo de 'dívida boa' segundo Kiyosaki?",
        options: [
          "Financiamento de carro para uso pessoal",
          "Cartão de crédito para compras supérfluos",
          "Financiamento de imóvel para aluguel",
          "Empréstimo para viagem"
        ],
        correctAnswerIndex: 2,
        explanation: "Dívida boa é aquela que gera renda ou se valoriza ao longo do tempo. Um imóvel para aluguel pode gerar renda mensal e ainda se valorizar, pagando a si mesmo."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: Toda dívida deve ser evitada a qualquer custo.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Dívidas que geram renda ou se valorizam (dívidas boas) podem ser ferramentas poderosas para construir riqueza, desde que usadas com inteligência."
      },
      {
        id: 3,
        type: "scenario",
        question: "Pedro pode: A) Financiar um carro de R$ 50.000 para uso pessoal, B) Financiar um imóvel de R$ 200.000 para alugar por R$ 1.500/mês. Qual é dívida boa?",
        options: [
          "Opção A",
          "Opção B", 
          "Ambas",
          "Nenhuma"
        ],
        correctAnswerIndex: 1,
        explanation: "A opção B é dívida boa porque o imóvel gera renda mensal que pode pagar o financiamento. O carro é dívida ruim porque só gera gastos (combustível, manutenção, depreciação)."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual é a principal característica de uma dívida ruim?",
        options: [
          "Tem juros altos",
          "Tira dinheiro do seu bolso sem gerar renda",
          "É de banco",
          "É grande"
        ],
        correctAnswerIndex: 1,
        explanation: "Dívida ruim é aquela que tira dinheiro do seu bolso mensalmente sem gerar renda em troca. Exemplos: financiamento de carro pessoal, cartão de crédito para consumo."
      },
      {
        id: 5,
        type: "drag_drop",
        question: "Classifique as dívidas abaixo em BOA ou RUIM:",
        items: [
          { text: "Financiamento de casa para morar", category: "RUIM" },
          { text: "Empréstimo para comprar ações", category: "BOA" },
          { text: "Cartão de crédito para viagem", category: "RUIM" },
          { text: "Financiamento de equipamento para negócio", category: "BOA" },
          { text: "Empréstimo para curso que aumenta renda", category: "BOA" },
          { text: "Financiamento de moto para lazer", category: "RUIM" }
        ],
        explanation: "Dívidas boas geram renda ou aumentam sua capacidade de ganhar. Dívidas ruins são para consumo ou ativos que se depreciam."
      },
      {
        id: 6,
        type: "scenario",
        question: "Ana tem R$ 100.000 de dívidas: R$ 60.000 de financiamento de apartamento para alugar e R$ 40.000 de cartão de crédito. Qual deveria priorizar para quitar?",
        options: [
          "O financiamento, pois é maior",
          "O cartão de crédito, pois é dívida ruim",
          "Tanto faz",
          "Não quitar nenhuma"
        ],
        correctAnswerIndex: 1,
        explanation: "Ana deveria priorizar quitar o cartão de crédito (dívida ruim) que só gera gastos. O financiamento do apartamento é dívida boa se a renda do aluguel cobre as parcelas."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: Pessoas ricas evitam qualquer tipo de dívida.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Pessoas ricas frequentemente usam dívidas boas (alavancagem) para multiplicar seus investimentos e acelerar a construção de riqueza."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "O que é alavancagem financeira?",
        options: [
          "Evitar qualquer dívida",
          "Usar dinheiro emprestado para investir e multiplicar retornos",
          "Ter muitas dívidas ruins",
          "Trabalhar com alavancas"
        ],
        correctAnswerIndex: 1,
        explanation: "Alavancagem é usar dinheiro emprestado para investir, multiplicando tanto os potenciais retornos quanto os riscos. É uma ferramenta poderosa quando usada com conhecimento."
      },
      {
        id: 9,
        type: "scenario",
        question: "Carlos pode pegar empréstimo a 8% ao ano para investir em algo que rende 12% ao ano. Isso é:",
        options: [
          "Sempre uma má ideia",
          "Pode ser boa estratégia se ele entende os riscos",
          "Impossível de acontecer",
          "Apenas para pessoas ricas"
        ],
        correctAnswerIndex: 1,
        explanation: "Pode ser boa estratégia se Carlos entende os riscos. A diferença de 4% (12% - 8%) pode gerar lucro, mas ele precisa considerar riscos de volatilidade e capacidade de pagamento."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Antes de assumir qualquer dívida, você deve sempre:",
        options: [
          "Pedir opinião para amigos",
          "Analisar se ela gera renda ou valorização",
          "Escolher a de menor valor",
          "Evitar completamente"
        ],
        correctAnswerIndex: 1,
        explanation: "Sempre analise se a dívida gera renda, valorização ou aumenta sua capacidade de ganhar dinheiro. Se não, provavelmente é dívida ruim que deve ser evitada."
      }
    ]
  }
};
