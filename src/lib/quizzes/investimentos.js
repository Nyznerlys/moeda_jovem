import React from 'react';
import { TrendingUp, BarChart2, Coins } from 'lucide-react';

export const INVESTIMENTOS_QUIZZES = {
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
      },
      {
        id: 3,
        type: "scenario",
        question: "Pedro tem R$ 1.000 na poupança há 1 ano, rendendo 0,5% ao mês. A inflação foi de 8% no ano. O poder de compra do dinheiro dele:",
        options: [
          "Aumentou",
          "Diminuiu",
          "Ficou igual",
          "Não é possível saber"
        ],
        correctAnswerIndex: 1,
        explanation: "Diminuiu. A poupança rendeu cerca de 6% no ano (0,5% x 12), mas a inflação foi 8%. Isso significa que Pedro perdeu 2% do poder de compra."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual é o principal objetivo de investir?",
        options: [
          "Ficar rico rapidamente",
          "Preservar e aumentar o poder de compra ao longo do tempo",
          "Impressionar outras pessoas",
          "Complicar a vida financeira"
        ],
        correctAnswerIndex: 1,
        explanation: "O principal objetivo é preservar e aumentar o poder de compra ao longo do tempo, protegendo o dinheiro da inflação e fazendo-o crescer de forma consistente."
      },
      {
        id: 5,
        type: "drag_drop",
        question: "Classifique as opções abaixo em INVESTIMENTO ou ESPECULAÇÃO:",
        items: [
          { text: "Comprar ações para receber dividendos", category: "INVESTIMENTO" },
          { text: "Apostar na loteria", category: "ESPECULAÇÃO" },
          { text: "Comprar imóvel para alugar", category: "INVESTIMENTO" },
          { text: "Day trade sem conhecimento", category: "ESPECULAÇÃO" },
          { text: "Tesouro Direto", category: "INVESTIMENTO" },
          { text: "Criptomoedas sem estudo", category: "ESPECULAÇÃO" }
        ],
        explanation: "Investimento envolve análise, planejamento e foco no longo prazo. Especulação é baseada em sorte, emoção ou tentativas de ganhos rápidos sem fundamento."
      },
      {
        id: 6,
        type: "true_false",
        question: "Verdadeiro ou Falso: Investimentos sempre garantem lucro.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Investimentos envolvem riscos e não há garantia de lucro. Por isso é importante diversificar, estudar e investir apenas o que se pode perder."
      },
      {
        id: 7,
        type: "scenario",
        question: "Maria tem R$ 5.000 de reserva de emergência e R$ 2.000 extras. Ela deveria:",
        options: [
          "Investir tudo em ações",
          "Manter a reserva segura e investir os R$ 2.000 extras",
          "Colocar tudo na poupança",
          "Gastar os R$ 2.000 em compras"
        ],
        correctAnswerIndex: 1,
        explanation: "Maria deveria manter a reserva de emergência em aplicações seguras e líquidas, e investir os R$ 2.000 extras em opções que ofereçam melhor rentabilidade."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Qual é a importância da reserva de emergência antes de investir?",
        options: [
          "Não é importante",
          "Evita que você precise resgatar investimentos em momentos ruins",
          "É apenas para pessoas ricas",
          "Serve apenas para impressionar"
        ],
        correctAnswerIndex: 1,
        explanation: "A reserva de emergência evita que você precise resgatar investimentos em momentos de baixa ou pagar multas por resgate antecipado durante emergências."
      },
      {
        id: 9,
        type: "true_false",
        question: "Verdadeiro ou Falso: O melhor momento para começar a investir é quando você entender tudo sobre o mercado financeiro.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Você nunca saberá tudo sobre o mercado. O melhor momento é começar com o básico e ir aprendendo na prática, sempre com valores que pode perder."
      },
      {
        id: 10,
        type: "scenario",
        question: "João quer começar a investir mas tem medo de perder dinheiro. Qual seria o melhor conselho?",
        options: [
          "Não invista nunca",
          "Comece com investimentos conservadores e vá aprendendo",
          "Invista tudo em ações arriscadas",
          "Espere até não ter mais medo"
        ],
        correctAnswerIndex: 1,
        explanation: "O melhor conselho é começar com investimentos conservadores (como Tesouro Direto) e ir aprendendo gradualmente, aumentando o conhecimento e a tolerância ao risco."
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
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "Qual é a principal característica da renda fixa?",
        options: [
          "Retorno sempre alto",
          "Retorno previsível no momento da aplicação",
          "Sem risco algum",
          "Apenas para pessoas ricas"
        ],
        correctAnswerIndex: 1,
        explanation: "A principal característica da renda fixa é ter retorno previsível no momento da aplicação. Você sabe quanto vai receber e quando."
      },
      {
        id: 3,
        type: "scenario",
        question: "Ana tem perfil conservador e quer previsibilidade. Bruno tem perfil arrojado e aceita volatilidade por maiores retornos. Quem deveria focar mais em renda fixa?",
        options: [
          "Ana",
          "Bruno",
          "Ambos igualmente",
          "Nenhum dos dois"
        ],
        correctAnswerIndex: 0,
        explanation: "Ana deveria focar mais em renda fixa por ter perfil conservador e buscar previsibilidade. Bruno pode ter maior exposição à renda variável."
      },
      {
        id: 4,
        type: "true_false",
        question: "Verdadeiro ou Falso: Renda fixa significa que não há risco algum.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Renda fixa tem riscos menores, mas ainda existem riscos como inflação, crédito (calote) e liquidez. Nenhum investimento é 100% livre de risco."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "Por que a renda variável pode oferecer retornos maiores?",
        options: [
          "Porque é mais complicada",
          "Porque você assume mais riscos",
          "Porque é para pessoas inteligentes",
          "Porque o governo garante"
        ],
        correctAnswerIndex: 1,
        explanation: "A renda variável pode oferecer retornos maiores porque você assume mais riscos. Maior risco pode significar maior retorno, mas também maior possibilidade de perda."
      },
      {
        id: 6,
        type: "scenario",
        question: "Carlos tem R$ 10.000 para investir por 5 anos. Ele quer equilibrar segurança e rentabilidade. Qual seria uma boa estratégia?",
        options: [
          "100% renda fixa",
          "100% renda variável",
          "70% renda fixa, 30% renda variável",
          "50% em cada, mas tudo na poupança"
        ],
        correctAnswerIndex: 2,
        explanation: "Uma estratégia equilibrada seria 70% renda fixa (segurança) e 30% renda variável (potencial de maior retorno), adequada para o prazo de 5 anos."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: Jovens deveriam investir mais em renda variável que pessoas próximas da aposentadoria.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. Jovens têm mais tempo para recuperar perdas e se beneficiar do crescimento de longo prazo, enquanto pessoas próximas da aposentadoria precisam de mais segurança."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Qual é a principal vantagem da renda fixa?",
        options: [
          "Retornos altíssimos",
          "Previsibilidade e menor volatilidade",
          "Isenção total de impostos",
          "Liquidez imediata sempre"
        ],
        correctAnswerIndex: 1,
        explanation: "A principal vantagem da renda fixa é a previsibilidade e menor volatilidade, oferecendo mais tranquilidade para investidores conservadores."
      },
      {
        id: 9,
        type: "scenario",
        question: "Maria precisa do dinheiro em 6 meses para entrada de um apartamento. Onde ela deveria investir?",
        options: [
          "Ações de empresas promissoras",
          "Renda fixa com liquidez diária",
          "Fundos imobiliários",
          "Criptomoedas"
        ],
        correctAnswerIndex: 1,
        explanation: "Para prazo curto (6 meses), Maria deveria escolher renda fixa com liquidez diária, garantindo que terá o dinheiro disponível quando precisar."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Qual é a principal desvantagem da renda fixa em períodos de alta inflação?",
        options: [
          "Fica mais cara",
          "Pode perder poder de compra se o retorno for menor que a inflação",
          "Vira renda variável",
          "Não tem desvantagem"
        ],
        correctAnswerIndex: 1,
        explanation: "Em períodos de alta inflação, a renda fixa pode perder poder de compra se seus retornos forem menores que a inflação, corroendo o valor real do dinheiro."
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
      },
      {
        id: 3,
        type: "true_false",
        question: "Verdadeiro ou Falso: Nos juros compostos, você ganha juros sobre os juros já recebidos.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. Nos juros compostos, os juros ganhos são reinvestidos e passam a render juros também, criando um efeito exponencial de crescimento."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual é o fator mais importante para maximizar os juros compostos?",
        options: [
          "Investir uma grande quantia inicial",
          "Tempo - começar cedo",
          "Escolher apenas investimentos arriscados",
          "Resgatar os juros regularmente"
        ],
        correctAnswerIndex: 1,
        explanation: "O tempo é o fator mais importante. Começar cedo permite que os juros compostos trabalhem por mais tempo, multiplicando exponencialmente o resultado final."
      },
      {
        id: 5,
        type: "scenario",
        question: "Pedro, aos 25 anos, investe R$ 200/mês. João, aos 35 anos, investe R$ 400/mês. Ambos param aos 65 anos com 8% ao ano. Quem terá mais dinheiro?",
        options: [
          "João, pois investe o dobro por mês",
          "Pedro, pelo poder do tempo nos juros compostos",
          "Terão quantias iguais",
          "Impossível determinar"
        ],
        correctAnswerIndex: 1,
        explanation: "Pedro provavelmente terá mais dinheiro. Seus 40 anos de investimento (25 aos 65) superam os 30 anos de João (35 aos 65), mesmo investindo metade do valor mensal."
      },
      {
        id: 6,
        type: "true_false",
        question: "Verdadeiro ou Falso: É melhor investir R$ 1.000 de uma vez do que R$ 100 por mês durante 10 meses.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro, se você tem o dinheiro disponível. Investir R$ 1.000 de uma vez permite que todo o valor comece a render juros compostos imediatamente, maximizando o tempo de crescimento."
      },
      {
        id: 7,
        type: "multiple_choice",
        question: "Qual é a 'Regra dos 72' para juros compostos?",
        options: [
          "Investir por 72 anos",
          "Dividir 72 pela taxa de juros para saber em quantos anos o dinheiro dobra",
          "Investir R$ 72 por mês",
          "Não existe essa regra"
        ],
        correctAnswerIndex: 1,
        explanation: "A Regra dos 72 é uma fórmula simples: dividindo 72 pela taxa de juros anual, você descobre aproximadamente em quantos anos seu dinheiro dobrará."
      },
      {
        id: 8,
        type: "scenario",
        question: "Usando a Regra dos 72, se você investe a 12% ao ano, em quantos anos seu dinheiro dobra?",
        options: [
          "6 anos (72 ÷ 12)",
          "8 anos",
          "10 anos",
          "12 anos"
        ],
        correctAnswerIndex: 0,
        explanation: "Usando a Regra dos 72: 72 ÷ 12 = 6 anos. Com 12% ao ano de retorno, seu dinheiro dobrará aproximadamente a cada 6 anos."
      },
      {
        id: 9,
        type: "true_false",
        question: "Verdadeiro ou Falso: Para aproveitar os juros compostos, você deve resgatar os rendimentos regularmente.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Para aproveitar os juros compostos, você deve REINVESTIR os rendimentos, não resgatá-los. Assim os juros também passam a render juros."
      },
      {
        id: 10,
        type: "scenario",
        question: "Maria tem R$ 10.000 investidos a 8% ao ano. Se ela reinvestir todos os rendimentos, quanto terá em 20 anos?",
        options: [
          "R$ 26.000",
          "R$ 36.000",
          "Cerca de R$ 46.600",
          "R$ 50.000"
        ],
        correctAnswerIndex: 2,
        explanation: "Com juros compostos de 8% ao ano por 20 anos, R$ 10.000 se tornam aproximadamente R$ 46.600 (10.000 × 1,08²⁰). Isso é o poder dos juros compostos!"
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
      },
      {
        id: 3,
        type: "scenario",
        question: "João tem R$ 10.000 e quer diversificar. Qual seria uma boa estratégia?",
        options: [
          "R$ 10.000 em uma única ação",
          "R$ 5.000 em renda fixa, R$ 3.000 em ações, R$ 2.000 em fundos imobiliários",
          "R$ 10.000 na poupança",
          "R$ 10.000 em criptomoedas"
        ],
        correctAnswerIndex: 1,
        explanation: "A segunda opção oferece boa diversificação: renda fixa para estabilidade, ações para crescimento e fundos imobiliários para renda passiva e proteção contra inflação."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Qual é o principal benefício da diversificação?",
        options: [
          "Garantir lucros altos",
          "Reduzir riscos sem eliminar o potencial de retorno",
          "Complicar a carteira",
          "Aumentar os custos"
        ],
        correctAnswerIndex: 1,
        explanation: "O principal benefício é reduzir riscos sem eliminar o potencial de retorno. Se um investimento vai mal, outros podem compensar, suavizando a volatilidade da carteira."
      },
      {
        id: 5,
        type: "drag_drop",
        question: "Classifique as estratégias abaixo em BOA DIVERSIFICAÇÃO ou MÁ DIVERSIFICAÇÃO:",
        items: [
          { text: "Ações de diferentes setores", category: "BOA DIVERSIFICAÇÃO" },
          { text: "Apenas ações de bancos", category: "MÁ DIVERSIFICAÇÃO" },
          { text: "Renda fixa + ações + imóveis", category: "BOA DIVERSIFICAÇÃO" },
          { text: "Apenas Petrobras", category: "MÁ DIVERSIFICAÇÃO" },
          { text: "Investimentos nacionais e internacionais", category: "BOA DIVERSIFICAÇÃO" },
          { text: "Apenas criptomoedas", category: "MÁ DIVERSIFICAÇÃO" }
        ],
        explanation: "Boa diversificação espalha riscos entre diferentes ativos, setores e até países. Má diversificação concentra riscos em poucos ativos ou setores similares."
      },
      {
        id: 6,
        type: "true_false",
        question: "Verdadeiro ou Falso: Diversificar significa que você nunca terá perdas.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Diversificação reduz riscos, mas não elimina completamente a possibilidade de perdas. Em crises severas, quase todos os ativos podem cair juntos."
      },
      {
        id: 7,
        type: "scenario",
        question: "Maria investiu apenas em ações de empresas aéreas. Com a pandemia, todas caíram 70%. Qual lição sobre diversificação?",
        options: [
          "Ações são sempre ruins",
          "Não se deve concentrar em um único setor",
          "Pandemias são imprevisíveis",
          "Deveria ter vendido antes"
        ],
        correctAnswerIndex: 1,
        explanation: "A lição é não concentrar investimentos em um único setor. Se Maria tivesse diversificado entre diferentes setores, o impacto seria muito menor."
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "Qual é uma forma simples de diversificar para iniciantes?",
        options: [
          "Comprar ações individuais de 50 empresas",
          "Investir em fundos de índice (ETFs)",
          "Escolher apenas empresas famosas",
          "Investir apenas no exterior"
        ],
        correctAnswerIndex: 1,
        explanation: "Fundos de índice (ETFs) são uma forma simples de diversificar, pois com um único investimento você tem exposição a dezenas ou centenas de empresas diferentes."
      },
      {
        id: 9,
        type: "scenario",
        question: "Pedro tem R$ 1.000 por mês para investir. Como ele pode diversificar ao longo do tempo?",
        options: [
          "Investir tudo em um ativo diferente a cada mês",
          "Dividir mensalmente entre diferentes tipos de ativos",
          "Guardar até ter R$ 12.000 e então diversificar",
          "Investir apenas quando o mercado estiver em alta"
        ],
        correctAnswerIndex: 1,
        explanation: "Pedro pode dividir os R$ 1.000 mensalmente entre diferentes ativos (ex: R$ 500 renda fixa, R$ 300 ações, R$ 200 fundos imobiliários), construindo diversificação gradualmente."
      },
      {
        id: 10,
        type: "true_false",
        question: "Verdadeiro ou Falso: Diversificação geográfica (investir em diferentes países) também é importante.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 0,
        explanation: "Verdadeiro. Diversificação geográfica protege contra riscos específicos de um país (política, economia, moeda). Investir globalmente reduz a dependência de um único mercado."
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
      },
      {
        id: 3,
        type: "drag_drop",
        question: "Classifique as fontes abaixo em RENDA PASSIVA ou RENDA ATIVA:",
        items: [
          { text: "Dividendos de ações", category: "RENDA PASSIVA" },
          { text: "Salário de emprego", category: "RENDA ATIVA" },
          { text: "Aluguel de imóvel", category: "RENDA PASSIVA" },
          { text: "Freelance", category: "RENDA ATIVA" },
          { text: "Royalties de livro", category: "RENDA PASSIVA" },
          { text: "Consultoria", category: "RENDA ATIVA" }
        ],
        explanation: "Renda passiva não requer sua presença ativa para ser gerada. Renda ativa depende do seu trabalho direto - se você parar, a renda para."
      },
      {
        id: 4,
        type: "true_false",
        question: "Verdadeiro ou Falso: Renda passiva significa que você nunca precisou trabalhar para criá-la.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. Renda passiva geralmente requer trabalho inicial significativo (juntar dinheiro para investir, criar um produto, comprar imóvel) antes de se tornar passiva."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "Qual é a principal vantagem dos fundos imobiliários (FIIs) para renda passiva?",
        options: [
          "Rendimentos mensais sem precisar gerenciar imóveis",
          "Garantia de lucro",
          "Isenção total de impostos",
          "Apenas para pessoas ricas"
        ],
        correctAnswerIndex: 0,
        explanation: "Os FIIs oferecem rendimentos mensais (distribuição de aluguéis) sem que você precise comprar, gerenciar ou se preocupar com inquilinos de imóveis físicos."
      },
      {
        id: 6,
        type: "scenario",
        question: "Ana tem R$ 100.000 e quer maximizar renda passiva. Qual estratégia seria mais eficiente?",
        options: [
          "Tudo em poupança",
          "Diversificar entre FIIs, ações com bons dividendos e renda fixa",
          "Comprar apenas um imóvel",
          "Investir tudo em uma única ação"
        ],
        correctAnswerIndex: 1,
        explanation: "Diversificar entre FIIs (renda mensal), ações com bons dividendos e renda fixa oferece múltiplas fontes de renda passiva com riscos distribuídos."
      },
      {
        id: 7,
        type: "true_false",
        question: "Verdadeiro ou Falso: Para viver de renda passiva, você precisa de milhões de reais.",
        options: ["Verdadeiro", "Falso"],
        correctAnswerIndex: 1,
        explanation: "Falso. O valor necessário depende do seu padrão de vida. Com R$ 500.000-800.000 bem investidos, é possível gerar R$ 3.000-5.000 mensais de renda passiva."
      },
      {
        id: 8,
        type: "scenario",
        question: "Bruno tem R$ 50.000 e quer começar a construir renda passiva. Qual seria um bom primeiro passo?",
        options: [
          "Esperar ter mais dinheiro",
          "Investir em FIIs e ações que pagam dividendos",
          "Comprar um carro para alugar",
          "Deixar tudo na poupança"
        ],
        correctAnswerIndex: 1,
        explanation: "Bruno pode começar investindo em FIIs e ações que pagam dividendos. Com R$ 50.000, já é possível gerar algumas centenas de reais mensais e ir reinvestindo."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Qual é a estratégia mais eficiente para acelerar a construção de renda passiva?",
        options: [
          "Gastar toda a renda passiva recebida",
          "Reinvestir a renda passiva para comprar mais ativos",
          "Guardar a renda passiva na poupança",
          "Usar a renda passiva apenas para lazer"
        ],
        correctAnswerIndex: 1,
        explanation: "Reinvestir a renda passiva para comprar mais ativos acelera exponencialmente o crescimento. É como plantar sementes que geram árvores que produzem mais sementes."
      },
      {
        id: 10,
        type: "scenario",
        question: "Maria recebe R$ 500 mensais de dividendos e FIIs. Ela quer acelerar o crescimento da renda passiva. O que deveria fazer?",
        options: [
          "Gastar os R$ 500 em compras",
          "Reinvestir os R$ 500 em mais ativos geradores de renda",
          "Guardar os R$ 500 na conta corrente",
          "Usar apenas para emergências"
        ],
        correctAnswerIndex: 1,
        explanation: "Maria deveria reinvestir os R$ 500 em mais ativos geradores de renda. Isso aumentará sua renda passiva futura, criando um ciclo virtuoso de crescimento exponencial."
      }
    ]
  }
};