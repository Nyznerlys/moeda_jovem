
import React from 'react';
import { Brain, Lightbulb } from 'lucide-react';

export const MENTALIDADE_QUIZZES = {
  "q1_1": {
    title: "A Diferença Entre Pai Rico e Pai Pobre",
    trackId: 1,
    category: "Mentalidade Financeira",
    difficulty: "INICIANTE",
    description: "Entenda as diferenças fundamentais de mentalidade entre ricos e pobres segundo Robert Kiyosaki.",
    icon: <Brain />,
    color: "bg-purple-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Segundo Robert Kiyosaki, qual é a principal diferença entre a mentalidade do pai rico e do pai pobre?",
        options: [
          "O pai rico tinha mais dinheiro desde o nascimento",
          "O pai rico pensava em como fazer o dinheiro trabalhar para ele",
          "O pai pobre era menos inteligente",
          "O pai rico teve mais sorte na vida"
        ],
        correctAnswerIndex: 1,
        explanation: "A principal diferença está na mentalidade: o pai rico ensinava como fazer o dinheiro trabalhar para você, enquanto o pai pobre acreditava em trabalhar pelo dinheiro. É uma questão de educação financeira, não de sorte ou inteligência."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: Segundo Kiyosaki, 'trabalhe duro, economize dinheiro e não se endivide' é um conselho financeiro adequado para os tempos modernos.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Kiyosaki argumenta que esse conselho tradicional (do pai pobre) não funciona no mundo moderno. Em vez disso, ele defende aprender sobre dinheiro, investimentos e como fazer o dinheiro trabalhar para você."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "O que o 'pai rico' dizia sobre o medo e o dinheiro?",
        options: [
          "O medo deve ser evitado a todo custo",
          "O medo é um sinal para parar de investir",
          "O medo e a ganância devem ser usados a seu favor",
          "Apenas pessoas corajosas ficam ricas"
        ],
        correctAnswerIndex: 2,
        explanation: "O pai rico ensinava que o medo e a ganância são emoções naturais que todos sentem. O segredo é usar essas emoções a seu favor, não deixar que elas controlem suas decisões financeiras."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual frase melhor representa a filosofia do pai rico sobre trabalho?",
        options: [
          "Trabalhe duro para conseguir um emprego seguro",
          "Trabalhe para aprender, não apenas pelo dinheiro",
          "Trabalhe o máximo de horas possível",
          "Trabalhe apenas quando precisar de dinheiro"
        ],
        correctAnswerIndex: 1,
        explanation: "O pai rico enfatizava trabalhar para aprender novas habilidades, especialmente vendas e marketing, que são fundamentais para o sucesso financeiro, em vez de apenas trabalhar pelo salário."
      },
      {
        id: 5,
        type: "scenario",
        question: "João tem duas ofertas de emprego: uma paga R$ 5.000/mês em uma empresa estável, outra paga R$ 3.000/mês mas oferece experiência em vendas e gestão. Qual o pai rico escolheria?",
        options: [
          "A primeira, pelo salário maior",
          "A segunda, pela experiência valiosa",
          "Nenhuma das duas",
          "Dependeria apenas do dinheiro"
        ],
        correctAnswerIndex: 1,
        explanation: "O pai rico escolheria a segunda opção porque valoriza o aprendizado e as habilidades que podem gerar riqueza a longo prazo, mesmo que o salário inicial seja menor."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Segundo Kiyosaki, qual é o maior ativo de uma pessoa?",
        options: [
          "Sua casa",
          "Sua conta bancária",
          "Sua mente",
          "Seu carro"
        ],
        correctAnswerIndex: 2,
        explanation: "Para Kiyosaki, a mente é o maior ativo porque é ela que cria todos os outros ativos. Uma mente bem treinada pode criar riqueza, enquanto uma mente não treinada pode destruí-la."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: O pai rico acreditava que os impostos são apenas para os pobres e classe média.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. O pai rico ensinava que os ricos conhecem as leis tributárias e usam corporações e investimentos para minimizar legalmente seus impostos, enquanto empregados pagam as maiores taxas."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Qual é a principal lição sobre dinheiro que o pai rico ensinou?",
        options: [
          "Dinheiro é a raiz de todos os males",
          "Dinheiro não traz felicidade",
          "A falta de dinheiro é a raiz de todos os males",
          "Dinheiro não é importante"
        ],
        correctAnswerIndex: 2,
        explanation: "O pai rico ensinava que a falta de dinheiro, não o dinheiro em si, é que causa problemas. Ter dinheiro oferece opções e liberdade para fazer escolhas."
      },
      {
        id: 9,
        type: "scenario",
        question: "Maria quer comprar um carro novo de R$ 50.000. O pai rico aconselharia:",
        options: [
          "Financie o carro para ter liquidez",
          "Primeiro compre ativos que paguem pelo carro",
          "Use toda a poupança para comprar à vista",
          "Não compre nunca"
        ],
        correctAnswerIndex: 1,
        explanation: "O pai rico ensinaria a primeiro adquirir ativos que gerem renda suficiente para pagar pelo carro, assim o ativo paga pelo passivo."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Por que o pai rico dizia 'os ricos não trabalham pelo dinheiro'?",
        options: [
          "Porque eles são preguiçosos",
          "Porque eles fazem o dinheiro trabalhar para eles",
          "Porque eles nasceram ricos",
          "Porque eles não precisam de dinheiro"
        ],
        correctAnswerIndex: 1,
        explanation: "Os ricos fazem o dinheiro trabalhar para eles através de investimentos e ativos que geram renda passiva, em vez de trocar tempo por dinheiro como os empregados fazem."
      }
    ]
  },
  "q1_2": {
    title: "Educação Financeira vs Educação Tradicional",
    trackId: 1,
    category: "Mentalidade Financeira",
    difficulty: "INICIANTE",
    description: "Por que a educação financeira é mais importante que notas altas na escola.",
    icon: <Lightbulb />,
    color: "bg-purple-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Por que Kiyosaki diz que 'Alunos nota A trabalham para alunos nota C'?",
        options: [
          "Alunos nota A são preguiçosos",
          "Alunos nota C são mais inteligentes",
          "O sistema educacional não ensina inteligência financeira",
          "Notas não importam na vida real"
        ],
        correctAnswerIndex: 2,
        explanation: "Kiyosaki argumenta que o sistema educacional tradicional não ensina inteligência financeira. Alunos com notas medianas que aprendem sobre dinheiro e negócios frequentemente se tornam empregadores dos alunos nota A."
      },
      {
        id: 2,
        type: "scenario",
        question: "João tirou notas excelentes e conseguiu um bom emprego. Pedro teve notas medianas, mas aprendeu sobre investimentos e abriu um negócio. Após 10 anos, quem provavelmente está melhor financeiramente?",
        options: [
          "João, porque tem um emprego estável",
          "Pedro, porque desenvolveu inteligência financeira",
          "Ambos estão na mesma situação",
          "Impossível determinar"
        ],
        correctAnswerIndex: 1,
        explanation: "Segundo a filosofia do Pai Rico, Pedro provavelmente está melhor porque desenvolveu inteligência financeira e criou ativos (seu negócio) que geram renda. João, apesar do bom emprego, ainda troca tempo por dinheiro."
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "Qual habilidade o pai rico considerava mais importante que as notas escolares?",
        options: [
          "Habilidade de vender",
          "Habilidade de memorizar",
          "Habilidade de obedecer",
          "Habilidade de calcular"
        ],
        correctAnswerIndex: 0,
        explanation: "O pai rico considerava a habilidade de vender como a mais importante, pois vendas = renda. Ele dizia que todos estão vendendo algo, seja um produto, serviço ou suas habilidades como empregado."
      },
      {
        id: 4,
        type: "true_false",
        question: "Verdadeiro ou Falso: Segundo Kiyosaki, a escola prepara as pessoas para serem empregados, não empregadores.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. Kiyosaki argumenta que o sistema educacional foi projetado para criar empregados obedientes e especializados, não empreendedores ou investidores."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "O que o pai rico dizia sobre especialização?",
        options: [
          "Especialize-se em uma área apenas",
          "Saiba um pouco de tudo",
          "Especialização é para insetos",
          "Foque apenas em sua profissão"
        ],
        correctAnswerIndex: 1,
        explanation: "O pai rico acreditava em saber um pouco de muitas áreas importantes para os negócios: contabilidade, investimentos, marketing, direito, etc. Ele dizia que especialização é para empregados."
      },
      {
        id: 6,
        type: "scenario",
        question: "Ana é engenheira e ganha bem, mas não sabe nada sobre investimentos. Qual deveria ser sua prioridade?",
        options: [
          "Focar apenas em sua carreira de engenharia",
          "Aprender sobre educação financeira",
          "Fazer outro curso superior",
          "Pedir aumento no trabalho"
        ],
        correctAnswerIndex: 1,
        explanation: "O pai rico diria que Ana deveria aprender sobre educação financeira para fazer seu dinheiro trabalhar para ela, não apenas depender de sua carreira."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "Por que o pai rico dizia que 'Alunos nota B acabam trabalhando para o governo'?",
        options: [
          "Porque são menos inteligentes",
          "Porque buscam segurança e estabilidade",
          "Porque não conseguem empregos melhores",
          "Porque o governo paga melhor"
        ],
        correctAnswerIndex: 1,
        explanation: "Alunos 'B' geralmente buscam segurança e estabilidade, características valorizadas em empregos governamentais, mas que limitam o potencial de riqueza."
      },
      {
        id: 8,
        type: "true_false",
        question: "Verdadeiro ou Falso: O pai rico acreditava que inteligência acadêmica e inteligência financeira são a mesma coisa.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. O pai rico distinguia claramente entre inteligência acadêmica (notas) e inteligência financeira (capacidade de fazer dinheiro). Uma pessoa pode ter uma sem a outra."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Qual conselho o pai rico daria a um jovem sobre educação?",
        options: [
          "Pare de estudar e comece a trabalhar",
          "Foque apenas nas melhores notas",
          "Estude, mas também aprenda sobre dinheiro",
          "A educação formal não serve para nada"
        ],
        correctAnswerIndex: 2,
        explanation: "O pai rico não era contra a educação formal, mas enfatizava a importância de também aprender sobre dinheiro, investimentos e negócios."
      },
      {
        id: 10,
        type: "scenario",
        question: "Carlos tem PhD em física e trabalha em uma universidade. Ele reclama que não consegue enriquecer. O pai rico diria:",
        options: [
          "Você precisa de mais diplomas",
          "Você precisa de educação financeira",
          "Física não dá dinheiro",
          "Mude de profissão"
        ],
        correctAnswerIndex: 1,
        explanation: "O pai rico diria que Carlos precisa de educação financeira para aprender a fazer seu dinheiro trabalhar para ele, independentemente de sua profissão."
      }
    ]
  }
};
