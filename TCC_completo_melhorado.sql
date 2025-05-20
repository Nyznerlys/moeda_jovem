
-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS moeda_jovem;
USE moeda_jovem;

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de quizzes
CREATE TABLE IF NOT EXISTS quizzes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de perguntas
CREATE TABLE IF NOT EXISTS perguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT NOT NULL,
    enunciado TEXT NOT NULL,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Tabela de alternativas
CREATE TABLE IF NOT EXISTS alternativas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pergunta_id INT NOT NULL,
    texto TEXT NOT NULL,
    correta BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (pergunta_id) REFERENCES perguntas(id) ON DELETE CASCADE
);

-- Tabela de respostas
CREATE TABLE IF NOT EXISTS respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    quiz_id INT NOT NULL,
    acertos INT NOT NULL,
    total_perguntas INT NOT NULL,
    data_resposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Tabela de estatísticas
CREATE TABLE IF NOT EXISTS estatisticas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    media FLOAT NOT NULL,
    total_quizzes INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabela de tentativas (opcional)
CREATE TABLE IF NOT EXISTS tentativas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    quiz_id INT NOT NULL,
    data_tentativa TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);

-- Índices para performance
CREATE INDEX idx_respostas_usuario_id ON respostas(usuario_id);
CREATE INDEX idx_respostas_quiz_id ON respostas(quiz_id);
CREATE INDEX idx_estatisticas_usuario_id ON estatisticas(usuario_id);
CREATE INDEX idx_perguntas_quiz_id ON perguntas(quiz_id);
CREATE INDEX idx_alternativas_pergunta_id ON alternativas(pergunta_id);
CREATE INDEX idx_tentativas_usuario_id ON tentativas(usuario_id);
CREATE INDEX idx_tentativas_quiz_id ON tentativas(quiz_id);
