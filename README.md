# 💈 Barbearia Moura - Sistema Completo de Gestão Operacional & CRM

Sistema web completo de gestão operacional e financeira desenvolvido para a **Barbearia Moura**, com **React 18**, **Tailwind CSS**, **Lucide Icons**, autenticação administrativa com login e senha, sincronização em tempo real com **Supabase (PostgreSQL na Nuvem)** e responsividade total para celulares e notebooks.

---

## 🚀 Como Acessar o Sistema

Basta abrir o arquivo **`gestao.html`** (ou **`index.html`**, que redireciona automaticamente) em qualquer navegador web moderno:

- **Celular (Smartphone):** Abra no Google Chrome, Safari ou adicione à tela de início como Web App (PWA).
- **Notebook / Desktop:** Abra com duplo clique no arquivo `gestao.html` ou execute via servidor local.

---

## 🔐 Acesso Seguro com Login e Senha

O acesso ao sistema é protegido por tela de autenticação administrativa:
`
- **Manter conectado:** Opção para salvar a sessão no aparelho (celular ou computador) para não precisar redigitar a senha a cada abertura.
- **Alteração de Senha:** Você pode alterar a senha a qualquer momento na aba **Configurações & Metas** &gt; **Segurança & Senha de Acesso**.
- **Botão Sair (Logout):** Disponível no menu lateral no notebook e na barra superior/gaveta no celular.

---

## ☁️ Banco de Dados Supabase (PostgreSQL na Nuvem)

O sistema conta com integração nativa e em tempo real com o **Supabase**:

### Como conectar ao Supabase em 4 passos rápidos:
1. Crie uma conta gratuita em [supabase.com](https://supabase.com) e crie um novo projeto.
2. Acesse o menu **SQL Editor** no painel do Supabase, clique em "+ New query", copie e execute todo o conteúdo do arquivo **`supabase_schema.sql`** presente na pasta da barbearia.
3. No Supabase, vá em **Project Settings** &gt; **API**, copie a **Project URL** e a chave pública **Anon Key**, abra o sistema em **Configurações** &gt; **Banco de Dados Supabase** e cole-as lá.
4. Clique em **"Testar Conexão"** e pronto! O sistema exibirá o selo 🟢 **Supabase Nuvem Ativo**.

> 💡 **Modo Resiliente (Offline-First):** Mesmo sem internet ou antes de configurar o Supabase, o sistema continua funcionando perfeitamente gravando e mantendo todos os dados em cache seguro local (`localStorage`) no navegador!

---

## 📱 Otimização Completa para Celular e Notebook

- **No Celular (Smartphones):**
  * **Barra de Navegação Inferior Fixa:** Acesso rápido com o polegar para *Início (Dashboard)*, *Agenda*, *CRM*, e *Menu Mais*.
  * **Botão Central Elevado (+):** Botão circular de destaque para abrir uma Nova Comanda instantaneamente com 1 toque.
  * **Menu Gaveta Lateral (Hamburger):** Gaveta retrátil suave com atalhos de fechamento de caixa, status do Supabase e saída do sistema.
  * **Modais Adaptados para Toque:** Abertura fluida no formato Bottom Sheet com botões de ação fixos para salvar comanda sem que o teclado virtual atrapalhe.
- **No Notebook e Desktop:**
  * **Sidebar Lateral Fixa:** Visão executiva completa com resumo do caixa ao vivo, status da nuvem e navegação categorizada.
  * **Grids Amplos:** Dashboards em 4 colunas com gráficos de ocupação, ranking de serviços e fluxo de caixa detalhado.

---

## 🌟 Módulos do Sistema de Gestão (`gestao.html`)

### 1. 📊 Dashboard Financeiro (Caixa & Lucratividade)
- **KPIs em Destaque**:
  * **Faturamento do Dia**: Total de entradas em serviços e consumo de produtos hoje.
  * **Saídas / Custo Diário**: Custos fixos proporcionais + despesas diretas do dia.
  * **Lucro Líquido do Dia**: Margem de lucro em tempo real (Receitas - Despesas).
  * **Faturamento da Semana** e **Faturamento do Mês**.
  * **Ticket Médio Geral**: Média de faturamento por cliente.
- **Gráfico de Fluxo de Caixa**: Comparativo visual dos últimos 7 dias (Receitas x Custos).
- **Calculadora de Custo Operacional**:
  * Cadastre todos os custos: aluguel, energia, água, internet, contador, maquininha, lâminas, descartáveis, café, balas e produtos de bancada.
  * Cálculo dinâmico do **Custo Diário para abrir a barbearia** e meta de breakeven (quantos atendimentos são necessários por dia para pagar as contas).

### 2. 📅 Agenda Inteligente & Comandas de Atendimento
- **Controle de Atendimento do Dia**: Filtros por status (*Todos, Agendado, Em Atendimento, Finalizado*).
- **Comanda Integrada de Alto Desempenho**:
  * Seleção de cliente ou cadastro rápido de novo cliente.
  * Seleção múltipla de serviços (Corte Degradê, Barba Terapia, Combo Moura Prime, Sobrancelha, etc.).
  * **Consumo de Bebidas & Extras**: Seletor de quantidade de Cerveja Heineken, Corona, Refrigerante, Água e Pomadas Matte.
  * **Cálculo Automático**: Subtotal de serviços + Subtotal de produtos = Total a cobrar em tempo real.
  * Formas de pagamento: PIX, Cartão de Crédito, Cartão de Débito, Dinheiro.
  * Baixa no caixa e atualização automática do histórico do cliente e ticket médio.

### 3. 🎯 CRM de Retorno & Fidelização (Reativação no WhatsApp)
- **Painel de Frequência Inteligente**:
  * Detecta automaticamente quantos dias se passaram desde a última visita de cada cliente.
  * Alertas configuráveis: *Atenção (15+ dias)*, *Lembrete Ideal (25-30 dias)* e *Crítico / Risco de Abandono (40+ dias)*.
- **Disparo Direto para o WhatsApp com 1 Clique**:
  * Gera uma mensagem humanizada personalizada com o primeiro nome do cliente, dias de ausência e último serviço realizado.
  * Permite editar o texto antes de abrir o WhatsApp Web ou aplicativo no celular.
  * Registra a data do último contato para acompanhamento.

### 4. 🖨️ Fechamento Diário de Caixa
- Espelho de fechamento diário com discriminação por modalidade de pagamento (PIX, Dinheiro de Gaveta, Cartão de Crédito e Débito).
- Layout otimizado para impressão e geração de PDF.

### 5. 💾 Persistência de Dados & Backup
- O sistema salva todas as comandas, novos clientes e despesas tanto no `localStorage` quanto no **Supabase**.
- Exportação e importação manual em arquivo `.json` para segurança total.
- Botão **"Restaurar Demonstração Original"** caso queira resetar para a base de teste.

---

## 🛠️ Estrutura Técnica de Arquivos

```
barbearia/
├── gestao.html               # Aplicação Principal de Gestão (React + Tailwind + Lucide Icons)
├── index.html                # Ponto de entrada padrão (redireciona para gestao.html)
├── supabase_schema.sql       # Script SQL para criação de tabelas e RLS no Supabase
├── package.json              # Configurações do projeto e dependências Vite/React
├── assets/
│   └── img/logo.svg          # Logotipo vetorial oficial da Barbearia Moura
└── src/
    ├── types/index.ts        # Tipagens TypeScript completas
    └── data/mockData.ts      # Dados mockados realistas e regras financeiras
```
