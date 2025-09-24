import React from 'react';
import { BookOpen, Target, TrendingUp, DollarSign, BarChart2, ShieldCheck, User, Trophy, Star, Award, Brain, Coins, PiggyBank, Building, Lightbulb, Calculator, CreditCard, Banknote, Wallet, TrendingDown, AlertTriangle, CheckCircle2, Crown, Medal, Zap, Gift } from 'lucide-react';

export const DEFAULT_USER_PROFILE = {
  name: 'Jovem Aprendiz',
  level: 1,
  xp: 0,
  coins: 100,
  streak: 0,
  completedTracks: [],
  achievements: [],
  completedQuizzes: {},
  weeklyChallenge: null,
  lastLoginDate: null,
  email: '',
  username: '',
};

export const DIFFICULTY_LEVELS = {
  INICIANTE: { name: 'Iniciante', color: 'bg-green-100 text-green-800', minLevel: 1 },
  INTERMEDIARIO: { name: 'Intermediário', color: 'bg-yellow-100 text-yellow-800', minLevel: 3 },
  AVANCADO: { name: 'Avançado', color: 'bg-red-100 text-red-800', minLevel: 5 }
};

export const ACHIEVEMENTS = [
  {
    id: 'first_quiz',
    title: 'Primeiro Passo',
    description: 'Complete seu primeiro quiz',
    icon: <Star className="w-6 h-6" />,
    condition: (profile) => Object.keys(profile.completedQuizzes || {}).length >= 1,
    xpReward: 50,
    coinReward: 25,
    rarity: 'comum'
  },
  {
    id: 'pai_rico_iniciante',
    title: 'Discípulo do Pai Rico',
    description: 'Complete 5 quizzes sobre mentalidade financeira',
    icon: <Brain className="w-6 h-6" />,
    condition: (profile) => {
      const mentalityQuizzes = ['q1_1', 'q1_2', 'q1_3', 'q2_1', 'q2_2'];
      return mentalityQuizzes.filter(id => profile.completedQuizzes?.[id]).length >= 5;
    },
    xpReward: 100,
    coinReward: 50,
    rarity: 'raro'
  },
  {
    id: 'babilonia_sabio',
    title: 'Sábio da Babilônia',
    description: 'Complete todos os quizzes sobre os ensinamentos babilônicos',
    icon: <Crown className="w-6 h-6" />,
    condition: (profile) => {
      const babylonQuizzes = ['q3_1', 'q3_2', 'q3_3', 'q4_1', 'q4_2'];
      return babylonQuizzes.every(id => profile.completedQuizzes?.[id]);
    },
    xpReward: 200,
    coinReward: 100,
    rarity: 'lendario'
  },
  {
    id: 'perfect_score',
    title: 'Pontuação Perfeita',
    description: 'Acerte todas as questões de um quiz',
    icon: <Award className="w-6 h-6" />,
    condition: (profile) => {
      const quizzes = profile.completedQuizzes || {};
      return Object.values(quizzes).some(quiz => quiz.score === quiz.totalQuestions);
    },
    xpReward: 75,
    coinReward: 40,
    rarity: 'raro'
  },
  {
    id: 'quiz_master',
    title: 'Mestre dos Quizzes',
    description: 'Complete 15 quizzes',
    icon: <Trophy className="w-6 h-6" />,
    condition: (profile) => Object.keys(profile.completedQuizzes || {}).length >= 15,
    xpReward: 150,
    coinReward: 75,
    rarity: 'epico'
  },
  {
    id: 'millionaire_mindset',
    title: 'Mentalidade Milionária',
    description: 'Complete todos os 30 quizzes',
    icon: <Medal className="w-6 h-6" />,
    condition: (profile) => Object.keys(profile.completedQuizzes || {}).length >= 30,
    xpReward: 500,
    coinReward: 250,
    rarity: 'lendario'
  },
  {
    id: 'streak_master',
    title: 'Consistência é Tudo',
    description: 'Mantenha uma sequência de 7 dias',
    icon: <Zap className="w-6 h-6" />,
    condition: (profile) => profile.streak >= 7,
    xpReward: 100,
    coinReward: 60,
    rarity: 'raro'
  },
  {
    id: 'level_champion',
    title: 'Campeão de Nível',
    description: 'Alcance o nível 10',
    icon: <TrendingUp className="w-6 h-6" />,
    condition: (profile) => profile.level >= 10,
    xpReward: 300,
    coinReward: 150,
    rarity: 'epico'
  }
];

export const LEARNING_TRACKS = [
  {
    id: 1,
    title: "Mentalidade Financeira",
    description: "Desenvolva a mentalidade dos ricos baseada nos ensinamentos de Robert Kiyosaki",
    icon: <Brain className="w-8 h-8" />,
    color: "bg-purple-100",
    borderColor: "border-purple-500",
    lessons: 10,
    xp: 300,
    difficulty: 'INICIANTE',
    quizzes: ['q1_1', 'q1_2', 'q1_3', 'q1_4', 'q1_5']
  },
  {
    id: 2,
    title: "Ativos vs Passivos",
    description: "Aprenda a diferença fundamental entre ativos e passivos",
    icon: <BarChart2 className="w-8 h-8" />,
    color: "bg-green-100",
    borderColor: "border-green-500",
    lessons: 8,
    xp: 250,
    difficulty: 'INICIANTE',
    quizzes: ['q2_1', 'q2_2', 'q2_3', 'q2_4']
  },
  {
    id: 3,
    title: "Sabedoria da Babilônia",
    description: "Os segredos milenares de construção de riqueza",
    icon: <Building className="w-8 h-8" />,
    color: "bg-yellow-100",
    borderColor: "border-yellow-500",
    lessons: 12,
    xp: 400,
    difficulty: 'INTERMEDIARIO',
    quizzes: ['q3_1', 'q3_2', 'q3_3', 'q3_4', 'q3_5', 'q3_6']
  },
  {
    id: 4,
    title: "Controle de Gastos",
    description: "Domine suas despesas e viva abaixo de suas possibilidades",
    icon: <Wallet className="w-8 h-8" />,
    color: "bg-blue-100",
    borderColor: "border-blue-500",
    lessons: 6,
    xp: 200,
    difficulty: 'INICIANTE',
    quizzes: ['q4_1', 'q4_2', 'q4_3']
  },
  {
    id: 5,
    title: "Investimentos e Renda Passiva",
    description: "Construa fluxos de renda que trabalham para você",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-indigo-100",
    borderColor: "border-indigo-500",
    lessons: 15,
    xp: 500,
    difficulty: 'INTERMEDIARIO',
    quizzes: ['q5_1', 'q5_2', 'q5_3', 'q5_4', 'q5_5']
  },
  {
    id: 6,
    title: "Educação Financeira Contínua",
    description: "A importância do aprendizado constante em finanças",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-pink-100",
    borderColor: "border-pink-500",
    lessons: 8,
    xp: 300,
    difficulty: 'AVANCADO',
    quizzes: ['q6_1', 'q6_2', 'q6_3', 'q6_4']
  }
];

export const QUIZZES_DATA = {
  // TRILHA 1: MENTALIDADE FINANCEIRA
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
        question: "Por que Kiyosaki diz que 'A' students work for 'C' students?",
        options: [
          "Estudantes nota A são preguiçosos",
          "Estudantes nota C são mais inteligentes",
          "O sistema educacional não ensina inteligência financeira",
          "Notas não importam na vida real"
        ],
        correctAnswerIndex: 2,
        explanation: "Kiyosaki argumenta que o sistema educacional tradicional não ensina inteligência financeira. Estudantes com notas medianas que aprendem sobre dinheiro e negócios frequentemente se tornam empregadores dos estudantes nota A."
      },
      {
        id: 2,
        type: "scenario",
        question: "João tirou notas excelentes na escola e conseguiu um bom emprego. Pedro teve notas medianas, mas aprendeu sobre investimentos e abriu um negócio. Após 10 anos, quem provavelmente está em melhor situação financeira segundo a filosofia do Pai Rico?",
        options: [
          "João, porque tem um emprego estável",
          "Pedro, porque desenvolveu inteligência financeira",
          "Ambos estão na mesma situação",
          "Impossível determinar"
        ],
        correctAnswerIndex: 1,
        explanation: "Segundo a filosofia do Pai Rico, Pedro provavelmente está melhor porque desenvolveu inteligência financeira e criou ativos (seu negócio) que geram renda. João, apesar do bom emprego, ainda troca tempo por dinheiro."
      }
    ]
  },
  "q1_3": {
    title: "Trabalhando pelo Dinheiro vs Dinheiro Trabalhando",
    trackId: 1,
    category: "Mentalidade Financeira",
    difficulty: "INICIANTE",
    description: "Compreenda a diferença fundamental entre ser empregado e ser investidor.",
    icon: <Coins />,
    color: "bg-purple-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a principal característica de quem 'trabalha pelo dinheiro'?",
        options: [
          "Troca tempo por dinheiro diretamente",
          "Investe em ações",
          "Tem múltiplas fontes de renda",
          "É dono de empresas"
        ],
        correctAnswerIndex: 0,
        explanation: "Quem trabalha pelo dinheiro troca diretamente seu tempo por dinheiro. Se parar de trabalhar, a renda para. É o modelo tradicional de emprego."
      },
      {
        id: 2,
        type: "drag_drop",
        question: "Classifique as situações abaixo em 'Trabalhando pelo Dinheiro' ou 'Dinheiro Trabalhando':",
        items: [
          { text: "Salário mensal de R$ 3.000", category: "Trabalhando pelo Dinheiro" },
          { text: "Dividendos de ações", category: "Dinheiro Trabalhando" },
          { text: "Freelance por hora", category: "Trabalhando pelo Dinheiro" },
          { text: "Aluguel de imóvel", category: "Dinheiro Trabalhando" }
        ],
        explanation: "Salário e freelance exigem sua presença ativa para gerar renda. Dividendos e aluguéis são rendas passivas - o dinheiro trabalha para você mesmo quando você não está trabalhando ativamente."
      }
    ]
  },
  "q1_4": {
    title: "O Poder das Corporações",
    trackId: 1,
    category: "Mentalidade Financeira",
    difficulty: "INTERMEDIARIO",
    description: "Entenda por que os ricos usam corporações e você também deveria aprender sobre elas.",
    icon: <Building />,
    color: "bg-purple-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Segundo Kiyosaki, qual é uma das principais vantagens de ter uma corporação?",
        options: [
          "Pagar menos impostos legalmente",
          "Trabalhar menos horas",
          "Ter mais funcionários",
          "Ganhar mais dinheiro automaticamente"
        ],
        correctAnswerIndex: 0,
        explanation: "Uma das principais vantagens das corporações é a possibilidade de deduzir despesas antes de pagar impostos, resultando em menor carga tributária legal. Pessoas físicas pagam impostos primeiro e gastam depois."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: Apenas pessoas muito ricas podem se beneficiar de ter uma corporação.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Mesmo pequenos empreendedores podem se beneficiar das vantagens fiscais e de proteção patrimonial que uma corporação oferece. O importante é entender como funciona e buscar orientação adequada."
      }
    ]
  },
  "q1_5": {
    title: "Superando o Medo e a Ganância",
    trackId: 1,
    category: "Mentalidade Financeira",
    difficulty: "INTERMEDIARIO",
    description: "Como controlar as emoções que sabotam suas decisões financeiras.",
    icon: <AlertTriangle />,
    color: "bg-purple-100",
    questions: [
      {
        id: 1,
        type: "scenario",
        question: "Maria tem R$ 10.000 guardados e está com medo de investir na bolsa. Segundo os ensinamentos do Pai Rico, qual seria a melhor abordagem?",
        options: [
          "Não investir, pois o medo indica perigo real",
          "Investir tudo de uma vez para superar o medo",
          "Estudar sobre investimentos e começar com pequenas quantias",
          "Deixar o dinheiro na poupança para sempre"
        ],
        correctAnswerIndex: 2,
        explanation: "O pai rico ensinava que o medo deve ser reconhecido, mas não deve paralisar. A solução é educação financeira: estudar, aprender e começar com pequenos investimentos para ganhar experiência e confiança."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "O que Kiyosaki quer dizer com 'pagar a si mesmo primeiro'?",
        options: [
          "Comprar coisas para si antes de pagar as contas",
          "Investir em ativos antes de pagar despesas não essenciais",
          "Guardar dinheiro em conta corrente",
          "Gastar com lazer antes de qualquer coisa"
        ],
        correctAnswerIndex: 1,
        explanation: "'Pagar a si mesmo primeiro' significa destinar uma parte da renda para investimentos em ativos antes de pagar despesas não essenciais. É priorizar seu futuro financeiro."
      }
    ]
  },

  // TRILHA 2: ATIVOS VS PASSIVOS
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
          { text: "Cartão de crédito", category: "PASSIVO" }
        ],
        explanation: "Lembre-se: ativo coloca dinheiro no bolso, passivo tira. O apartamento alugado e as ações geram renda. O carro e a casa própria geram gastos. O curso gera renda. O cartão gera juros e taxas."
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
        question: "Carlos comprou uma casa de R$ 300.000 financiada. Paga R$ 1.800/mês de financiamento, R$ 200 de IPTU e R$ 300 de manutenção média. Segundo Kiyosaki, por que esta casa é um passivo?",
        options: [
          "Porque foi financiada",
          "Porque está tirando R$ 2.300/mês do bolso dele",
          "Porque imóveis não valorizam",
          "Porque R$ 300.000 é muito caro"
        ],
        correctAnswerIndex: 1,
        explanation: "A casa é um passivo porque está tirando R$ 2.300 mensais do bolso do Carlos sem gerar nenhuma renda. Mesmo que valorize, enquanto ele morar nela, continua sendo um passivo pelos custos mensais."
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
      }
    ]
  },

  // TRILHA 3: SABEDORIA DA BABILÔNIA
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
      }
    ]
  },

  // TRILHA 4: CONTROLE DE GASTOS
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
      }
    ]
  },

  // TRILHA 5: INVESTIMENTOS E RENDA PASSIVA
  "q5_1": {
    title: "Introdução aos Investimentos",
    trackId: 5,
    category: "Investimentos e Renda Passiva",
    difficulty: "INICIANTE",
    description: "Primeiros passos no mundo dos investimentos.",
    icon: <TrendingUp />,
    color: "bg-indigo-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a diferença principal entre poupança e investimento?",
        options: [
          "Poupança é mais segura, investimento é mais arriscado",
          "Poupança tem rendimento fixo baixo, investimentos podem render mais",
          "Não há diferença",
          "Poupança é para ricos, investimento para pobres"
        ],
        correctAnswerIndex: 1,
        explanation: "A poupança oferece segurança mas rendimento baixo (muitas vezes abaixo da inflação). Investimentos podem oferecer rendimentos maiores, mas com diferentes níveis de risco."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: É necessário ter muito dinheiro para começar a investir.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso! Hoje é possível começar a investir com valores baixos, até mesmo R$ 30 em alguns fundos ou R$ 100 em ações. O importante é começar e aprender."
      }
    ]
  },
  "q5_2": {
    title: "Renda Fixa vs Renda Variável",
    trackId: 5,
    category: "Investimentos e Renda Passiva",
    difficulty: "INTERMEDIARIO",
    description: "Entenda as diferenças entre os principais tipos de investimento.",
    icon: <BarChart2 />,
    color: "bg-indigo-100",
    questions: [
      {
        id: 1,
        type: "drag_drop",
        question: "Classifique os investimentos abaixo em RENDA FIXA ou RENDA VARIÁVEL:",
        items: [
          { text: "Tesouro Direto", category: "RENDA FIXA" },
          { text: "Ações", category: "RENDA VARIÁVEL" },
          { text: "CDB", category: "RENDA FIXA" },
          { text: "Fundos Imobiliários", category: "RENDA VARIÁVEL" },
          { text: "LCI/LCA", category: "RENDA FIXA" },
          { text: "Criptomoedas", category: "RENDA VARIÁVEL" }
        ],
        explanation: "Renda fixa tem retorno previsível (Tesouro, CDB, LCI/LCA). Renda variável tem retorno que varia com o mercado (ações, fundos imobiliários, criptomoedas)."
      }
    ]
  },
  "q5_3": {
    title: "O Poder dos Juros Compostos",
    trackId: 5,
    category: "Investimentos e Renda Passiva",
    difficulty: "INTERMEDIARIO",
    description: "Como os juros compostos podem multiplicar sua riqueza ao longo do tempo.",
    icon: <TrendingUp />,
    color: "bg-indigo-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Einstein supostamente chamou os juros compostos de:",
        options: [
          "A oitava maravilha do mundo",
          "A força mais poderosa do universo",
          "O segredo dos ricos",
          "Todas as anteriores"
        ],
        correctAnswerIndex: 3,
        explanation: "Einstein realmente reconheceu o poder dos juros compostos, chamando-os de várias formas impressionantes. É o conceito de 'juros sobre juros' que faz pequenas quantias se tornarem fortunas ao longo do tempo."
      },
      {
        id: 2,
        type: "scenario",
        question: "Ana investe R$ 100 por mês a 10% ao ano por 30 anos. Aproximadamente quanto ela terá no final?",
        options: [
          "R$ 36.000 (apenas o que depositou)",
          "R$ 50.000",
          "R$ 100.000",
          "R$ 200.000 ou mais"
        ],
        correctAnswerIndex: 3,
        explanation: "Com juros compostos de 10% ao ano, Ana teria mais de R$ 200.000! Ela depositou apenas R$ 36.000 (R$ 100 x 12 meses x 30 anos), mas os juros compostos multiplicaram esse valor."
      }
    ]
  },
  "q5_4": {
    title: "Diversificação de Investimentos",
    trackId: 5,
    category: "Investimentos e Renda Passiva",
    difficulty: "INTERMEDIARIO",
    description: "Por que não colocar todos os ovos na mesma cesta.",
    icon: <BarChart2 />,
    color: "bg-indigo-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "O que significa diversificar investimentos?",
        options: [
          "Investir apenas em ações",
          "Espalhar investimentos em diferentes tipos de ativos",
          "Investir apenas em renda fixa",
          "Comprar muitas ações da mesma empresa"
        ],
        correctAnswerIndex: 1,
        explanation: "Diversificar significa espalhar seus investimentos em diferentes tipos de ativos (ações, renda fixa, imóveis, etc.) para reduzir riscos. Se um setor vai mal, outros podem compensar."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: É melhor investir tudo em uma única ação que você 'tem certeza' que vai subir.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso! Nunca temos certeza absoluta sobre investimentos. Concentrar tudo em uma única ação é extremamente arriscado. Mesmo grandes empresas podem ter problemas inesperados."
      }
    ]
  },
  "q5_5": {
    title: "Construindo Renda Passiva",
    trackId: 5,
    category: "Investimentos e Renda Passiva",
    difficulty: "AVANCADO",
    description: "Estratégias para criar fontes de renda que trabalham para você.",
    icon: <Coins />,
    color: "bg-indigo-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a melhor definição de renda passiva?",
        options: [
          "Dinheiro que você ganha sem trabalhar",
          "Renda que continua chegando mesmo quando você não está trabalhando ativamente",
          "Apenas dividendos de ações",
          "Dinheiro fácil"
        ],
        correctAnswerIndex: 1,
        explanation: "Renda passiva é aquela que continua chegando mesmo quando você não está trabalhando ativamente para gerá-la. Pode vir de dividendos, aluguéis, royalties, etc."
      },
      {
        id: 2,
        type: "scenario",
        question: "Carlos quer gerar R$ 3.000 mensais de renda passiva através de dividendos. Se conseguir um yield médio de 6% ao ano, quanto precisa investir?",
        options: [
          "R$ 100.000",
          "R$ 300.000",
          "R$ 600.000",
          "R$ 1.000.000"
        ],
        correctAnswerIndex: 2,
        explanation: "Para gerar R$ 3.000 mensais (R$ 36.000 anuais) com 6% de yield, Carlos precisa de R$ 600.000 investidos (R$ 36.000 ÷ 0,06 = R$ 600.000)."
      }
    ]
  },

  // TRILHA 6: EDUCAÇÃO FINANCEIRA CONTÍNUA
  "q6_1": {
    title: "A Importância do Aprendizado Contínuo",
    trackId: 6,
    category: "Educação Financeira Contínua",
    difficulty: "INTERMEDIARIO",
    description: "Por que parar de aprender é o maior erro financeiro que você pode cometer.",
    icon: <BookOpen />,
    color: "bg-pink-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Segundo Kiyosaki, qual é a diferença entre pessoas ricas e pobres em relação ao aprendizado?",
        options: [
          "Ricos param de estudar após a faculdade",
          "Pobres estudam mais que os ricos",
          "Ricos continuam aprendendo sobre dinheiro a vida toda",
          "Não há diferença"
        ],
        correctAnswerIndex: 2,
        explanation: "Kiyosaki enfatiza que os ricos nunca param de aprender sobre dinheiro, investimentos e negócios. Eles veem a educação financeira como um processo contínuo, não algo que termina na escola."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: Ler um livro sobre finanças por ano é suficiente para manter-se atualizado.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso! O mundo financeiro muda constantemente. Novas oportunidades, regulamentações e estratégias surgem frequentemente. É importante manter-se atualizado através de leitura regular, cursos e networking."
      }
    ]
  },
  "q6_2": {
    title: "Fontes de Educação Financeira",
    trackId: 6,
    category: "Educação Financeira Contínua",
    difficulty: "INTERMEDIARIO",
    description: "Onde e como continuar aprendendo sobre finanças.",
    icon: <Lightbulb />,
    color: "bg-pink-100",
    questions: [
      {
        id: 1,
        type: "drag_drop",
        question: "Classifique as fontes abaixo em CONFIÁVEIS ou DUVIDOSAS para educação financeira:",
        items: [
          { text: "Livros de autores reconhecidos", category: "CONFIÁVEIS" },
          { text: "Dicas de 'enriquecimento rápido' no Instagram", category: "DUVIDOSAS" },
          { text: "Cursos de instituições financeiras sérias", category: "CONFIÁVEIS" },
          { text: "Esquemas de pirâmide", category: "DUVIDOSAS" },
          { text: "Canais educativos no YouTube", category: "CONFIÁVEIS" },
          { text: "Promessas de 'fórmulas secretas'", category: "DUVIDOSAS" }
        ],
        explanation: "Fontes confiáveis são transparentes, educativas e não prometem milagres. Desconfie de qualquer coisa que prometa enriquecimento rápido ou fórmulas secretas."
      }
    ]
  },
  "q6_3": {
    title: "Networking e Mentoria Financeira",
    trackId: 6,
    category: "Educação Financeira Contínua",
    difficulty: "AVANCADO",
    description: "A importância de se cercar de pessoas financeiramente inteligentes.",
    icon: <User />,
    color: "bg-pink-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Segundo Kiyosaki, por que é importante ter mentores financeiros?",
        options: [
          "Para copiar exatamente o que eles fazem",
          "Para aprender com a experiência deles e evitar erros",
          "Para pedir dinheiro emprestado",
          "Para impressionar outras pessoas"
        ],
        correctAnswerIndex: 1,
        explanation: "Mentores financeiros podem compartilhar experiências valiosas, ajudar a evitar erros custosos e acelerar seu aprendizado. Eles já passaram pelos desafios que você está enfrentando."
      },
      {
        id: 2,
        type: "scenario",
        question: "Maria quer aprender sobre investimentos imobiliários. Qual seria a melhor abordagem segundo os princípios de educação contínua?",
        options: [
          "Comprar o primeiro imóvel que encontrar",
          "Ler livros, fazer cursos e conversar com investidores experientes",
          "Apenas assistir vídeos no YouTube",
          "Pedir opinião para amigos que nunca investiram"
        ],
        correctAnswerIndex: 1,
        explanation: "A melhor abordagem combina múltiplas fontes de aprendizado: livros para teoria, cursos para conhecimento estruturado e networking com investidores experientes para insights práticos."
      }
    ]
  },
  "q6_4": {
    title: "Mantendo-se Atualizado no Mundo Financeiro",
    trackId: 6,
    category: "Educação Financeira Contínua",
    difficulty: "AVANCADO",
    description: "Como acompanhar as mudanças constantes no mercado financeiro.",
    icon: <TrendingUp />,
    color: "bg-pink-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é a melhor frequência para revisar e ajustar sua estratégia financeira?",
        options: [
          "Uma vez na vida",
          "A cada 10 anos",
          "Anualmente, ou quando houver mudanças significativas",
          "Diariamente"
        ],
        correctAnswerIndex: 2,
        explanation: "É recomendado revisar sua estratégia financeira pelo menos anualmente, ou sempre que houver mudanças significativas na sua vida (novo emprego, casamento, filhos, etc.) ou no cenário econômico."
      },
      {
        id: 2,
        type: "true_false",
        question: "Verdadeiro ou Falso: Uma vez que você aprende sobre investimentos, não precisa mais se atualizar.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso! O mercado financeiro está em constante evolução. Novas modalidades de investimento surgem, regulamentações mudam, e o cenário econômico se transforma. A educação financeira deve ser contínua."
      }
    ]
  },

  // QUIZZES ADICIONAIS PARA COMPLETAR 30
  "q7_1": {
    title: "Dívida Boa vs Dívida Ruim",
    trackId: 2,
    category: "Gestão de Dívidas",
    difficulty: "INTERMEDIARIO",
    description: "Nem toda dívida é ruim - aprenda a diferença.",
    icon: <CreditCard />,
    color: "bg-red-100",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Qual é um exemplo de 'dívida boa' segundo Kiyosaki?",
        options: [
          "Financiamento de carro para uso pessoal",
          "Cartão de crédito para compras supérfluas",
          "Financiamento de imóvel para aluguel",
          "Empréstimo para viagem"
        ],
        correctAnswerIndex: 2,
        explanation: "Dívida boa é aquela que gera renda ou se valoriza ao longo do tempo. Um imóvel para aluguel pode gerar renda mensal e ainda se valorizar, pagando a si mesmo."
      }
    ]
  },
  "q7_2": {
    title: "Planejamento de Aposentadoria",
    trackId: 3,
    category: "Planejamento de Longo Prazo",
    difficulty: "AVANCADO",
    description: "Como garantir uma aposentadoria confortável.",
    icon: <PiggyBank />,
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
      }
    ]
  },
  "q7_3": {
    title: "Empreendedorismo e Negócios",
    trackId: 1,
    category: "Mentalidade Empreendedora",
    difficulty: "AVANCADO",
    description: "Como pensar como um empresário, não como um empregado.",
    icon: <Building />,
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
      }
    ]
  }
};

export const getNextUnlockedQuizzes = (userProfile) => {
  const completedQuizzes = userProfile.completedQuizzes || {};
  const allQuizzes = Object.entries(QUIZZES_DATA).map(([id, data]) => ({ id, ...data }));
  
  // Sistema de desbloqueio progressivo
  const completedCount = Object.keys(completedQuizzes).length;
  
  // Iniciante: primeiros 10 quizzes sempre disponíveis
  const beginnerQuizzes = allQuizzes.filter(quiz => 
    DIFFICULTY_LEVELS[quiz.difficulty].minLevel <= 1
  );
  
  // Intermediário: desbloqueado após 5 quizzes
  const intermediateQuizzes = allQuizzes.filter(quiz => 
    DIFFICULTY_LEVELS[quiz.difficulty].minLevel <= 3 && completedCount >= 5
  );
  
  // Avançado: desbloqueado após 15 quizzes
  const advancedQuizzes = allQuizzes.filter(quiz => 
    DIFFICULTY_LEVELS[quiz.difficulty].minLevel <= 5 && completedCount >= 15
  );
  
  const availableQuizzes = [...beginnerQuizzes, ...intermediateQuizzes, ...advancedQuizzes];
  const uncompletedQuizzes = availableQuizzes.filter(quiz => !completedQuizzes[quiz.id]);
  
  return uncompletedQuizzes.slice(0, 6); // Mostra próximos 6 quizzes disponíveis
};

export const getWeeklyChallenge = () => {
  const challenges = [
    {
      id: 'week_1',
      title: 'Desafio do Décimo',
      description: 'Guarde pelo menos 10% de tudo que ganhar esta semana',
      xpReward: 100,
      coinReward: 50
    },
    {
      id: 'week_2',
      title: 'Caçador de Gastos',
      description: 'Identifique e elimine 3 gastos desnecessários',
      xpReward: 80,
      coinReward: 40
    },
    {
      id: 'week_3',
      title: 'Estudante Dedicado',
      description: 'Complete 3 quizzes esta semana',
      xpReward: 120,
      coinReward: 60
    }
  ];
  
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % challenges.length;
  return challenges[weekNumber];
};

export const NAV_ITEMS = [
  { path: "/catalogo-quizzes", label: "Quizzes", icon: <BookOpen /> },
  { path: "/perfil", label: "Perfil", icon: <User /> },
  { path: "/sobre", label: "Sobre", icon: <ShieldCheck /> },
];