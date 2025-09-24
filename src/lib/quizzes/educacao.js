import React from 'react';
import { BookOpen, Lightbulb, User, TrendingUp } from 'lucide-react';

export const EDUCACAO_QUIZZES = {
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
      },
      {
        id: 3,
        type: "scenario",
        question: "João formou-se em administração há 10 anos e desde então não estudou mais sobre finanças. Ele reclama que não consegue investir bem. Qual seria o conselho?",
        options: [
          "Ele já sabe o suficiente da faculdade",
          "Deveria voltar a estudar e se atualizar",
          "Administração não tem nada a ver com finanças pessoais",
          "Deveria contratar alguém para investir por ele"
        ],
        correctAnswerIndex: 1,
        explanation: "João deveria voltar a estudar e se atualizar. O mundo financeiro mudou muito em 10 anos, e conhecimento desatualizado pode levar a decisões ruins de investimento."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Por que a educação financeira contínua é mais importante hoje do que no passado?",
        options: [
          "As pessoas ficaram mais burras",
          "O mundo financeiro muda mais rapidamente",
          "Não é mais importante",
          "Apenas para impressionar outros"
        ],
        correctAnswerIndex: 1,
        explanation: "O mundo financeiro muda muito mais rapidamente hoje. Novas tecnologias, produtos financeiros e regulamentações surgem constantemente, exigindo aprendizado contínuo."
      },
      {
        id: 5,
        type: "drag_drop",
        question: "Classifique as atitudes abaixo em MENTALIDADE RICA ou MENTALIDADE POBRE:",
        items: [
          { text: "Ler livros de finanças regularmente", category: "MENTALIDADE RICA" },
          { text: "Achar que já sabe tudo", category: "MENTALIDADE POBRE" },
          { text: "Participar de cursos e seminários", category: "MENTALIDADE RICA" },
          { text: "Evitar aprender coisas novas", category: "MENTALIDADE POBRE" },
          { text: "Buscar mentores", category: "MENTALIDADE RICA" },
          { text: "Ter medo de mudanças", category: "MENTALIDADE POBRE" }
        ],
        explanation: "Mentalidade rica busca conhecimento constantemente. Mentalidade pobre evita aprender e mudanças, preferindo ficar na zona de conforto."
      },
      {
        id: 6,
        type: "true_false",
        question: "Verdadeiro ou Falso: Pessoas inteligentes não precisam continuar estudando sobre finanças.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Inteligência não substitui conhecimento atualizado. Mesmo pessoas muito inteligentes precisam continuar aprendendo sobre as mudanças no mundo financeiro."
      },
      {
        id: 7,
        type: "scenario",
        question: "Maria é médica bem-sucedida mas perdeu dinheiro em investimentos ruins. Ela diz: 'Sou inteligente, por que não consigo investir bem?' A resposta seria:",
        options: [
          "Ela não é realmente inteligente",
          "Inteligência em uma área não garante sucesso em outra",
          "Médicos não sabem investir",
          "Ela deveria desistir de investir"
        ],
        correctAnswerIndex: 1,
        explanation: "Inteligência em uma área (medicina) não garante sucesso em outra (investimentos). Cada área requer conhecimento específico e atualizado."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Qual é o maior risco de parar de aprender sobre finanças?",
        options: [
          "Ficar entediado",
          "Tomar decisões baseadas em informações desatualizadas",
          "Gastar dinheiro com livros",
          "Não há risco"
        ],
        correctAnswerIndex: 1,
        explanation: "O maior risco é tomar decisões financeiras baseadas em informações desatualizadas, o que pode resultar em perdas significativas ou oportunidades perdidas."
      },
      {
        id: 9,
        type: "true_false",
        question: "Verdadeiro ou Falso: A educação financeira formal (faculdade) é suficiente para o sucesso financeiro.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. A educação formal raramente ensina finanças pessoais práticas. É necessário buscar educação financeira específica através de livros, cursos e experiência prática."
      },
      {
        id: 10,
        type: "scenario",
        question: "Carlos tem 50 anos e acha que é tarde demais para aprender sobre investimentos. Qual seria o melhor conselho?",
        options: [
          "Realmente é tarde demais",
          "Nunca é tarde para aprender e melhorar sua situação financeira",
          "Deveria ter aprendido aos 20 anos",
          "Pessoas de 50 anos não conseguem aprender"
        ],
        correctAnswerIndex: 1,
        explanation: "Nunca é tarde para aprender! Carlos ainda pode ter 15-20 anos ou mais de vida ativa, tempo suficiente para aplicar conhecimentos financeiros e melhorar significativamente sua situação."
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
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "Qual é a principal característica de uma fonte confiável de educação financeira?",
        options: [
          "Promete resultados rápidos",
          "Ensina princípios fundamentais e estratégias de longo prazo",
          "Custa muito caro",
          "É promovida por celebridades"
        ],
        correctAnswerIndex: 1,
        explanation: "Fontes confiáveis ensinam princípios fundamentais e estratégias de longo prazo, não prometem resultados rápidos ou milagrosos."
      },
      {
        id: 3,
        type: "scenario",
        question: "Ana viu um anúncio prometendo 'Como ficar rico em 30 dias com método secreto'. Ela deveria:",
        options: [
          "Comprar imediatamente",
          "Desconfiar e buscar fontes mais sérias",
          "Pedir opinião para amigos",
          "Tentar negociar o preço"
        ],
        correctAnswerIndex: 1,
        explanation: "Ana deveria desconfiar. Promessas de enriquecimento rápido com 'métodos secretos' são sinais claros de golpe ou informação de baixa qualidade."
      },
      {
        id: 4,
        type: "true_false",
        question: "Verdadeiro ou Falso: Informações gratuitas sobre finanças sempre são de baixa qualidade.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Existem muitas fontes gratuitas de alta qualidade, como livros em bibliotecas, canais educativos no YouTube, podcasts e artigos de instituições respeitadas."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "Qual é uma boa forma de verificar a credibilidade de um educador financeiro?",
        options: [
          "Ver quantos seguidores ele tem",
          "Verificar sua formação, experiência e histórico",
          "Conferir se ele é bonito",
          "Ver se ele tem carro caro"
        ],
        correctAnswerIndex: 1,
        explanation: "A credibilidade deve ser verificada através da formação, experiência profissional, histórico de resultados e reconhecimento por instituições sérias."
      },
      {
        id: 6,
        type: "scenario",
        question: "Bruno quer aprender sobre investimentos. Ele encontrou: A) Livro de Warren Buffett, B) Curso 'Fique rico em 1 semana', C) Canal do YouTube de economista respeitado. Quais são confiáveis?",
        options: [
          "Apenas A",
          "A e C",
          "Apenas B",
          "Todos são iguais"
        ],
        correctAnswerIndex: 1,
        explanation: "A e C são confiáveis. Warren Buffett é reconhecido mundialmente, e economistas respeitados oferecem conteúdo sério. A opção B é claramente duvidosa."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: É importante diversificar as fontes de educação financeira.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. Diversificar fontes (livros, cursos, podcasts, mentores) oferece diferentes perspectivas e evita vieses de uma única fonte."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Qual é a vantagem dos podcasts para educação financeira?",
        options: [
          "São sempre gratuitos",
          "Podem ser ouvidos durante outras atividades",
          "São mais confiáveis que livros",
          "Não requerem atenção"
        ],
        correctAnswerIndex: 1,
        explanation: "A principal vantagem dos podcasts é que podem ser ouvidos durante outras atividades (exercício, trânsito, trabalho doméstico), otimizando o tempo de aprendizado."
      },
      {
        id: 9,
        type: "scenario",
        question: "Maria tem pouco tempo livre mas quer continuar aprendendo sobre finanças. Qual seria a melhor estratégia?",
        options: [
          "Desistir de aprender",
          "Combinar podcasts, audiolivros e leitura rápida",
          "Apenas assistir TV",
          "Esperar ter mais tempo"
        ],
        correctAnswerIndex: 1,
        explanation: "Maria pode otimizar o tempo combinando podcasts durante atividades, audiolivros no trânsito e leitura rápida nos momentos livres."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Como identificar se um curso de finanças vale a pena?",
        options: [
          "Pelo preço alto",
          "Pelas promessas mirabolantes",
          "Pelo conteúdo programático, credenciais do instrutor e avaliações",
          "Pela quantidade de vendas"
        ],
        correctAnswerIndex: 2,
        explanation: "Um curso vale a pena quando tem conteúdo programático sólido, instrutor com credenciais verificáveis e boas avaliações de alunos anteriores."
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
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: Você deve se cercar apenas de pessoas que pensam exatamente como você sobre finanças.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. É importante ter diversidade de perspectivas. Pessoas com diferentes experiências e pontos de vista podem oferecer insights valiosos que você não consideraria sozinho."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Como encontrar um mentor financeiro?",
        options: [
          "Pagar muito dinheiro para alguém famoso",
          "Participar de grupos de investimento, eventos e oferecer valor em troca",
          "Apenas pedir para pessoas ricas",
          "Esperar que apareça naturalmente"
        ],
        correctAnswerIndex: 1,
        explanation: "Mentores são encontrados através de networking genuíno: participando de grupos, eventos, oferecendo valor e construindo relacionamentos baseados em interesse mútuo."
      },
      {
        id: 5,
        type: "scenario",
        question: "João quer se aproximar de um investidor bem-sucedido para aprender. Qual seria a melhor abordagem?",
        options: [
          "Pedir dinheiro emprestado",
          "Oferecer algo de valor em troca do conhecimento",
          "Apenas pedir conselhos sem dar nada em troca",
          "Tentar impressionar com mentiras"
        ],
        correctAnswerIndex: 1,
        explanation: "A melhor abordagem é oferecer algo de valor em troca: pode ser trabalho, pesquisa, conexões ou simplesmente demonstrar interesse genuíno e aplicar os conselhos recebidos."
      },
      {
        id: 6,
        type: "drag_drop",
        question: "Classifique as pessoas abaixo em BOM NETWORKING ou MAU NETWORKING para finanças:",
        items: [
          { text: "Investidores experientes", category: "BOM NETWORKING" },
          { text: "Pessoas que só reclamam de dinheiro", category: "MAU NETWORKING" },
          { text: "Empreendedores bem-sucedidos", category: "BOM NETWORKING" },
          { text: "Pessoas que vivem de esquemas", category: "MAU NETWORKING" },
          { text: "Educadores financeiros sérios", category: "BOM NETWORKING" },
          { text: "Pessoas que evitam falar de dinheiro", category: "MAU NETWORKING" }
        ],
        explanation: "Bom networking inclui pessoas com experiência real e mentalidade positiva sobre dinheiro. Mau networking inclui pessoas com mentalidade negativa ou envolvidas em esquemas duvidosos."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: Grupos de investimento online podem ser uma boa fonte de networking.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. Grupos online sérios podem ser excelentes para networking, desde que sejam bem moderados e focados em educação, não em esquemas ou especulação."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Qual é o principal benefício de participar de clubes de investimento?",
        options: [
          "Ganhar dinheiro rapidamente",
          "Aprender com experiências diversas e tomar decisões em grupo",
          "Impressionar outras pessoas",
          "Encontrar esquemas de enriquecimento"
        ],
        correctAnswerIndex: 1,
        explanation: "Clubes de investimento oferecem aprendizado através de experiências diversas, discussões educativas e tomada de decisões coletiva, reduzindo riscos individuais."
      },
      {
        id: 9,
        type: "scenario",
        question: "Ana participa de um grupo de investimento onde todos sempre concordam entre si e nunca questionam decisões. Isso é:",
        options: [
          "Perfeito, mostra harmonia",
          "Perigoso, pode indicar pensamento de grupo",
          "Normal em grupos pequenos",
          "Sinal de que são muito inteligentes"
        ],
        correctAnswerIndex: 1,
        explanation: "É perigoso. Pensamento de grupo pode levar a decisões ruins. Grupos saudáveis têm debates construtivos e questionamentos que melhoram as decisões."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Como manter relacionamentos de networking financeiro a longo prazo?",
        options: [
          "Apenas pedir favores",
          "Oferecer valor consistentemente e manter contato regular",
          "Encontrar apenas quando precisa de algo",
          "Competir com as pessoas do grupo"
        ],
        correctAnswerIndex: 1,
        explanation: "Relacionamentos duradouros são mantidos oferecendo valor consistentemente, compartilhando oportunidades, mantendo contato regular e sendo genuinamente interessado no sucesso dos outros."
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
      },
      {
        id: 3,
        type: "scenario",
        question: "Carlos aprendeu sobre investimentos em 2010 e desde então não se atualizou. Em 2024, ele quer voltar a investir. O que mudou que ele precisa saber?",
        options: [
          "Nada mudou, pode usar o mesmo conhecimento",
          "Surgiram novos produtos, regulamentações e tecnologias",
          "Apenas os preços mudaram",
          "Investimentos não existem mais"
        ],
        correctAnswerIndex: 1,
        explanation: "Muito mudou desde 2010: novos produtos (ETFs, FIIs, criptomoedas), mudanças regulatórias, novas tecnologias (apps de investimento), e diferentes cenários econômicos."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual é a melhor forma de se manter atualizado sobre mudanças econômicas?",
        options: [
          "Apenas assistir TV",
          "Diversificar fontes: jornais, sites especializados, podcasts",
          "Perguntar para amigos",
          "Ignorar as notícias"
        ],
        correctAnswerIndex: 1,
        explanation: "Diversificar fontes de informação oferece uma visão mais completa e menos enviesada das mudanças econômicas e suas implicações para investimentos."
      },
      {
        id: 5,
        type: "drag_drop",
        question: "Classifique as mudanças abaixo em IMPORTANTES ou MENOS RELEVANTES para acompanhar:",
        items: [
          { text: "Mudanças na taxa de juros", category: "IMPORTANTES" },
          { text: "Cor da roupa do presidente do BC", category: "MENOS RELEVANTES" },
          { text: "Novas regulamentações de investimento", category: "IMPORTANTES" },
          { text: "Fofocas sobre celebridades", category: "MENOS RELEVANTES" },
          { text: "Lançamento de novos produtos financeiros", category: "IMPORTANTES" },
          { text: "Resultados de reality shows", category: "MENOS RELEVANTES" }
        ],
        explanation: "É importante focar em mudanças que realmente afetam investimentos: taxas de juros, regulamentações, novos produtos. Informações irrelevantes apenas distraem."
      },
      {
        id: 6,
        type: "true_false",
        question: "Verdadeiro ou Falso: Você deve ajustar sua carteira de investimentos toda vez que há uma notícia econômica.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Ajustes constantes baseados em notícias diárias podem prejudicar os resultados. É melhor ter uma estratégia sólida e fazer ajustes apenas quando há mudanças estruturais significativas."
      },
      {
        id: 7,
        type: "scenario",
        question: "Maria lê que o Banco Central pode aumentar a taxa de juros. Como ela deveria reagir?",
        options: [
          "Vender todos os investimentos imediatamente",
          "Analisar como isso afeta sua estratégia de longo prazo",
          "Ignorar completamente",
          "Comprar mais ações"
        ],
        correctAnswerIndex: 1,
        explanation: "Maria deveria analisar como a mudança afeta sua estratégia de longo prazo. Aumentos na taxa de juros podem favorecer renda fixa e afetar ações, mas decisões devem ser ponderadas."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Com que frequência você deveria revisar seu portfólio de investimentos?",
        options: [
          "Diariamente",
          "Mensalmente para acompanhamento, trimestralmente para ajustes",
          "Apenas quando há crise",
          "Uma vez por década"
        ],
        correctAnswerIndex: 1,
        explanation: "O ideal é acompanhar mensalmente para estar ciente do desempenho, mas fazer ajustes apenas trimestralmente ou quando há mudanças significativas, evitando decisões emocionais."
      },
      {
        id: 9,
        type: "true_false",
        question: "Verdadeiro ou Falso: Tecnologias como inteligência artificial não afetam investimentos pessoais.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Tecnologias como IA estão revolucionando investimentos: robô-advisors, análises automatizadas, novos produtos financeiros. É importante entender essas mudanças."
      },
      {
        id: 10,
        type: "scenario",
        question: "João, de 45 anos, quer se manter atualizado mas tem pouco tempo. Qual seria a estratégia mais eficiente?",
        options: [
          "Desistir de se atualizar",
          "Focar em resumos semanais de fontes confiáveis e podcasts",
          "Ler todos os jornais diariamente",
          "Apenas seguir dicas de redes sociais"
        ],
        correctAnswerIndex: 1,
        explanation: "A estratégia mais eficiente é focar em resumos semanais de fontes confiáveis e podcasts, que oferecem informações condensadas e podem ser consumidos durante outras atividades."
      }
    ]
  }
};