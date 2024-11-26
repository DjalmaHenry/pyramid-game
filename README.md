# 🏔️ The Pyramid Game

**The Pyramid Game** é um jogo educacional interativo no qual os jogadores avançam pelos níveis de uma pirâmide, respondendo corretamente a perguntas relacionadas a uma temática escolhida. Cada nível aumenta em dificuldade, desafiando o jogador a aprender e se divertir ao mesmo tempo. O jogo combina progressão visual com feedback imediato e celebrações ao concluir todos os níveis.

---

## 🚀 Recursos

- **Estrutura de Níveis:**
  - Pirâmide com três níveis de dificuldade: **Easy**, **Medium** e **Hard**.
- **Sistema de Pontuação:**
  - Ganha-se **100 pontos** por resposta correta.
- **Feedback Visual:**
  - Cada nível desbloqueado revela uma imagem representativa da resposta.
- **Animação de Confetes:**
  - Ao completar todos os níveis, uma celebração com confetes é exibida.
- **Responsividade:**
  - Interface otimizada para desktop, tablets e dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build moderna e rápida.
- **TypeScript**: Adiciona tipos ao JavaScript, aumentando a segurança no código.
- **Tailwind CSS**: Framework CSS utilitário para estilização eficiente.
- **react-confetti**: Para animação de confetes.

---

## 📂 Estrutura do Projeto

```plaintext
pyramid-game/
├── public/
│   ├── images/
│   │   ├── cow.png         # Imagem para o nível Easy
│   │   ├── sheep.png       # Imagem para o nível Medium
│   │   ├── pig.png         # Imagem para o nível Hard
├── src/
│   ├── components/
│   │   ├── Pyramid.tsx        # Lógica e renderização da pirâmide
│   │   ├── PyramidSection.tsx # Gerencia cada nível da pirâmide
│   ├── styles/                # Arquivos de estilo adicionais (se aplicável)
│   ├── App.tsx                # Componente principal do aplicativo
│   ├── main.tsx               # Ponto de entrada do React
├── vite.config.ts             # Configuração do Vite
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto
```
---

## 📦 Instalação e Execução

### 1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/pyramid-game.git
cd pyramid-game
```

2. Instale o Vite:

Se você ainda não possui o Vite instalado globalmente, faça isso com:

```bash
npm install -g create-vite
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Acesse no navegador:

```
http://localhost:3000
```
obs.: a porta pode variar, dependendo da disponibilidade.

---

## 🎮 Como Jogar

1. O jogador começa no **primeiro nível** da pirâmide.
2. Leia a **dica** fornecida no nível selecionado.
3. Digite a resposta no campo de texto e pressione **Enter** para enviar.
4. Respostas corretas:
   - **Desbloqueiam o próximo nível.**
   - **Revelam uma imagem temática do nível.**
   - **Adicionam 100 pontos à pontuação do jogador.**
5. Complete todos os níveis da pirâmide para ver a **animação de confetes**, que celebra a vitória.

---

## ✨ Funcionalidades

- **Progressão por Níveis:**
  - Cada nível da pirâmide é desbloqueado ao responder corretamente à dica fornecida.
- **Imagens Representativas:**
  - Respostas corretas revelam imagens temáticas associadas à resposta.
- **Sistema de Pontuação:**
  - O jogador acumula 100 pontos por nível concluído com sucesso.
- **Animação de Confetes:**
  - Celebra o sucesso ao completar todos os níveis.
- **Feedback Visual:**
  - Atualização visual clara e animada para indicar progresso.
- **Respostas Exatas:**
  - Apenas respostas exatas são aceitas, incentivando a precisão.