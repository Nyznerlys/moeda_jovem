
import React from 'react';

export const APOSENTADORIA_QUIZZES = {
  "q7_2": {
    title: "Planejamento de Aposentadoria",
    trackId: 3,
    category: "Planejamento de Longo Prazo", 
    difficulty: "AVANCADO",
    description: "Como garantir uma aposentadoria confortável.",
    icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })),
    color: "bg-orange-100",
    questions: [
      {
        id: 1,
        type: "scenario",
        question: "Pedro tem 25 anos e quer se aposentar aos 60 com R$ 10.000 mensais de renda passiva. Qual estratégia seria mais eficaz?",
        options: [
          "Confiar apenas na previdência social",
          "Começar a investir pequenas quantias mensalmente desde agora",
          "Esperar ganhar mais para começar a investir",
          "Comprar apenas imóveis"
        ],
        correctAnswerIndex: 1,
        explanation: "Começar cedo é fundamental devido ao poder dos juros compostos. Mesmo pequenas quantias investidas aos 25 anos podem se tornar grandes fortunas aos 60 anos."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "Qual é a regra geral para calcular quanto você precisa para se aposentar?",
        options: [
          "10 vezes sua renda anual",
          "25 vezes seus gastos anuais",
          "50 vezes sua renda mensal",
          "Não existe regra"
        ],
        correctAnswerIndex: 1,
        explanation: "A regra dos 25x sugere que você precisa de 25 vezes seus gastos anuais investidos para se aposentar, permitindo sacar 4% ao ano indefinidamente."
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: A previdência social será suficiente para uma aposentadoria confortável.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A previdência social oferece apenas uma renda básica. Para uma aposentadoria confortável, é necessário complementar com previdência privada e investimentos próprios."
      },
      {
        id: 4,
        type: "scenario",
        question: "Maria gasta R$ 5.000 por mês. Pela regra dos 25x, quanto ela precisa investido para se aposentar?",
        options: [
          "R$ 500.000",
          "R$ 1.000.000",
          "R$ 1.500.000",
          "R$ 2.000.000"
        ],
        correctAnswerIndex: 2,
        explanation: "Maria precisa de R$ 1.500.000 (R$ 5.000 × 12 meses × 25). Com esse valor investido, ela pode sacar 4% ao ano (R$ 60.000 ou R$ 5.000/mês) indefinidamente."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "Por que começar a investir para aposentadoria aos 20 anos é muito melhor que aos 40?",
        options: [
          "Pessoas de 20 anos ganham mais",
          "O poder dos juros compostos tem mais tempo para agir",
          "Investimentos eram melhores no passado",
          "Não faz diferença"
        ],
        correctAnswerIndex: 1,
        explanation: "Começar aos 20 anos dá 20 anos extras de juros compostos comparado a começar aos 40. Isso pode resultar em uma diferença de milhões de reais na aposentadoria."
      },
      {
        id: 6,
        type: "drag_drop",
        question: "Classifique as estratégias abaixo em EFICAZES ou INEFICAZES para aposentadoria:",
        items: [
          { text: "Investir mensalmente desde jovem", category: "EFICAZES" },
          { text: "Confiar apenas no INSS", category: "INEFICAZES" },
          { text: "Diversificar investimentos", category: "EFICAZES" },
          { text: "Guardar dinheiro apenas na poupança", category: "INEFICAZES" },
          { text: "Ter múltiplas fontes de renda", category: "EFICAZES" },
          { text: "Esperar herança", category: "INEFICAZES" }
        ],
        explanation: "Estratégias eficazes envolvem ação própria, diversificação e aproveitamento do tempo. Estratégias ineficazes dependem de terceiros ou oferecem retornos baixos."
      },
      {
        id: 7,
        type: "scenario",
        question: "João tem 45 anos e nunca investiu para aposentadoria. Ainda dá tempo?",
        options: [
          "Não, é tarde demais",
          "Sim, mas precisará investir valores maiores",
          "Apenas se herdar dinheiro",
          "Só se trabalhar até os 80"
        ],
        correctAnswerIndex: 1,
        explanation: "Ainda dá tempo, mas João precisará investir valores maiores mensalmente para compensar o tempo perdido. Começar tarde é melhor que nunca começar."
      },
      {
        id: 8,
        type: "true_false",
        question: "Verdadeiro ou Falso: Na aposentadoria, você deve investir apenas em renda fixa para ter segurança.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Mesmo na aposentadoria, é importante manter alguma exposição à renda variável para proteger contra inflação e manter o poder de compra ao longo dos anos."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Qual é a principal vantagem da previdência privada?",
        options: [
          "Rendimentos sempre altos",
          "Benefícios fiscais e disciplina de poupança",
          "Sem risco algum",
          "Liquidez imediata"
        ],
        correctAnswerIndex: 1,
        explanation: "A previdência privada oferece benefícios fiscais (dedução no IR) e cria disciplina de poupança de longo prazo, além de ser específica para aposentadoria."
      },
      {
        id: 10,
        type: "scenario",
        question: "Ana quer se aposentar em 20 anos com R$ 8.000 mensais. Assumindo 8% de retorno anual, quanto ela deve investir por mês?",
        options: [
          "R$ 1.000",
          "R$ 1.500", 
          "R$ 2.000",
          "R$ 2.500"
        ],
        correctAnswerIndex: 2,
        explanation: "Para gerar R$ 8.000 mensais (R$ 96.000 anuais), Ana precisa de cerca de R$ 2.400.000. Com 8% ao ano por 20 anos, ela precisa investir aproximadamente R$ 2.000 mensais."
      }
    ]
  }
};
