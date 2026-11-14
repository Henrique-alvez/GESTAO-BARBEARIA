-- ============================================================================
-- SCRIPT DE CRIAÇÃO DO BANCO DE DADOS SUPABASE - BARBEARIA MOURA
-- ============================================================================
-- Instruções:
-- 1. Acesse seu painel do Supabase (https://supabase.com/dashboard)
-- 2. Selecione seu projeto e vá em "SQL Editor" (no menu lateral esquerdo)
-- 3. Clique em "+ New query", cole todo este código e clique em "RUN"
-- 4. Copie a URL do Projeto e a chave Anon Key em "Project Settings" -> "API"
-- 5. Cole no painel do Sistema de Gestão em "Configurações" -> "Conexão Supabase"
-- ============================================================================

-- 1. TABELA DE CLIENTES (CRM)
CREATE TABLE IF NOT EXISTS public.clients (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    last_visit_date TEXT,
    last_service TEXT,
    total_visits INTEGER DEFAULT 1,
    total_spent NUMERIC(10,2) DEFAULT 0.00,
    average_ticket NUMERIC(10,2) DEFAULT 0.00,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TABELA DE AGENDAMENTOS E COMANDAS
CREATE TABLE IF NOT EXISTS public.appointments (
    id TEXT PRIMARY KEY,
    client_id TEXT,
    client_name TEXT NOT NULL,
    client_phone TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    barber_name TEXT DEFAULT 'Barbeiro Moura',
    status TEXT NOT NULL DEFAULT 'agendado', -- 'agendado', 'em_atendimento', 'finalizado'
    services JSONB DEFAULT '[]'::jsonb,
    products JSONB DEFAULT '[]'::jsonb,
    services_total NUMERIC(10,2) DEFAULT 0.00,
    products_total NUMERIC(10,2) DEFAULT 0.00,
    total_amount NUMERIC(10,2) DEFAULT 0.00,
    payment_method TEXT DEFAULT 'pix', -- 'pix', 'credito', 'debito', 'dinheiro'
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TABELA DE CUSTOS E DESPESAS (CALCULADORA DE CUSTOS)
CREATE TABLE IF NOT EXISTS public.expenses (
    id TEXT PRIMARY KEY,
    description TEXT NOT NULL,
    category TEXT NOT NULL, -- 'imovel', 'energia', 'internet', 'agua', 'servicos', 'descartaveis', 'produtos', 'limpeza', etc.
    type TEXT NOT NULL DEFAULT 'fixo', -- 'fixo', 'variavel'
    recurrence TEXT NOT NULL DEFAULT 'mensal', -- 'mensal', 'diario', 'unico'
    amount NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    is_paid BOOLEAN DEFAULT true,
    date TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. TABELA DE SERVIÇOS DO CATÁLOGO
CREATE TABLE IF NOT EXISTS public.services (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    duration_minutes INTEGER DEFAULT 30,
    category TEXT DEFAULT 'corte', -- 'corte', 'barba', 'combo', 'quimica'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. TABELA DE PRODUTOS E FRIGOBAR (ESTOQUE)
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    category TEXT DEFAULT 'bebida', -- 'bebida', 'pomada', 'cuidados', 'snack'
    stock INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. TABELA DE CONFIGURAÇÕES E METAS DA BARBEARIA
CREATE TABLE IF NOT EXISTS public.barbershop_settings (
    id TEXT PRIMARY KEY DEFAULT 'default',
    barbershop_name TEXT DEFAULT 'Barbearia Moura',
    barber_pix_key TEXT DEFAULT 'contato@barbeariamoura.com.br',
    admin_password TEXT DEFAULT 'moura123',
    monthly_revenue_goal NUMERIC(10,2) DEFAULT 12000.00,
    daily_appointment_goal INTEGER DEFAULT 14,
    target_average_ticket NUMERIC(10,2) DEFAULT 60.00,
    working_days_per_month INTEGER DEFAULT 26,
    custom_logo TEXT DEFAULT 'assets/img/logo.svg',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ============================================================================
-- HABILITAR SEGURANÇA (ROW LEVEL SECURITY) COM POLÍTICAS DE ACESSO PÚBLICO
-- Permite que sua chave pública 'anon' leia e escreva dados
-- ============================================================================

ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.barbershop_settings ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso total para o app com chave anon
DROP POLICY IF EXISTS "Acesso total aos clientes" ON public.clients;
CREATE POLICY "Acesso total aos clientes" ON public.clients FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso total aos agendamentos" ON public.appointments;
CREATE POLICY "Acesso total aos agendamentos" ON public.appointments FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso total as despesas" ON public.expenses;
CREATE POLICY "Acesso total as despesas" ON public.expenses FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso total aos servicos" ON public.services;
CREATE POLICY "Acesso total aos servicos" ON public.services FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso total aos produtos" ON public.products;
CREATE POLICY "Acesso total aos produtos" ON public.products FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso total as configuracoes" ON public.barbershop_settings;
CREATE POLICY "Acesso total as configuracoes" ON public.barbershop_settings FOR ALL USING (true) WITH CHECK (true);

-- ============================================================================
-- CARGA DE DADOS INICIAIS (SEED DATA)
-- ============================================================================

INSERT INTO public.services (id, name, price, duration_minutes, category)
VALUES
    ('s1', 'Corte Degradê / Fade', 40.00, 40, 'corte'),
    ('s2', 'Barba Terapia com Toalha Quente', 35.00, 35, 'barba'),
    ('s3', 'Combo Moura Prime (Corte + Barba)', 70.00, 60, 'combo'),
    ('s4', 'Sobrancelha na Navalha', 15.00, 15, 'corte'),
    ('s5', 'Pezinho & Acabamento', 20.00, 20, 'corte'),
    ('s6', 'Alisamento / Selagem Masculina', 80.00, 60, 'quimica'),
    ('s7', 'Camuflagem de Grisalhos / Pigmentação', 45.00, 30, 'quimica')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.products (id, name, price, category, stock)
VALUES
    ('p1', 'Cerveja Heineken Long Neck 330ml', 12.00, 'bebida', 24),
    ('p2', 'Cerveja Corona Extra 330ml', 14.00, 'bebida', 18),
    ('p3', 'Refrigerante Lata 350ml', 7.00, 'bebida', 32),
    ('p4', 'Água Mineral Crystal 500ml', 4.00, 'bebida', 45),
    ('p5', 'Pomada Matte Efeito Seco 120g', 38.00, 'pomada', 16),
    ('p6', 'Pomada Brilho Clássica 120g', 35.00, 'pomada', 12),
    ('p7', 'Óleo Amadeirado para Barba 30ml', 42.00, 'cuidados', 9),
    ('p8', 'Balas & Café Espresso Moído', 0.00, 'snack', 100)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.expenses (id, description, category, type, recurrence, amount, is_paid, date)
VALUES
    ('e1', 'Aluguel do Salão Comercial', 'imovel', 'fixo', 'mensal', 1800.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e2', 'Energia Elétrica / Ar Condicionado', 'energia', 'fixo', 'mensal', 450.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e3', 'Internet Fibra 600 Mega', 'internet', 'fixo', 'mensal', 120.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e4', 'Conta de Água e Saneamento', 'agua', 'fixo', 'mensal', 85.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e5', 'Honorários do Contador', 'servicos', 'fixo', 'mensal', 250.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e6', 'Maquininha de Cartão & Sistema', 'servicos', 'fixo', 'mensal', 79.90, true, to_char(now(), 'YYYY-MM-DD')),
    ('e7', 'Lâminas Descartáveis & Golas Higiênicas', 'descartaveis', 'variavel', 'mensal', 140.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e8', 'Café em Grãos & Balas de Cortesia', 'cafe_cortesia', 'variavel', 'mensal', 95.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e9', 'Pomadas e Shampoos de Bancada', 'produtos', 'variavel', 'mensal', 260.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e10', 'Material de Limpeza e Álcool', 'limpeza', 'variavel', 'mensal', 65.00, true, to_char(now(), 'YYYY-MM-DD')),
    ('e11', 'Reposição Diária de Gelo & Frigobar', 'produtos', 'variavel', 'diario', 35.00, true, to_char(now(), 'YYYY-MM-DD'))
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.barbershop_settings (id, barbershop_name, barber_pix_key, admin_password, monthly_revenue_goal, daily_appointment_goal, target_average_ticket, working_days_per_month)
VALUES ('default', 'Barbearia Moura', 'contato@barbeariamoura.com.br', 'moura123', 12000.00, 14, 60.00, 26)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.clients (id, name, phone, last_visit_date, last_service, total_visits, total_spent, average_ticket, notes)
VALUES
    ('c1', 'Rafael Oliveira', '5535998112233', to_char(now(), 'YYYY-MM-DD'), 'Combo Moura Prime (Corte + Barba)', 14, 1036.00, 74.00, 'Prefere degradê navalhado bem baixo, toma cerveja Heineken.'),
    ('c2', 'Lucas Mendes', '5535997223344', to_char(now(), 'YYYY-MM-DD'), 'Corte Degradê / Fade', 8, 540.00, 67.50, 'Usa pomada matte efeito seco, sempre pontual.'),
    ('c3', 'Gabriel Souza', '5535991334455', to_char(now(), 'YYYY-MM-DD'), 'Barba Terapia com Toalha Quente', 6, 252.00, 42.00, 'Gosta de acabamento bem alinhado com navalha e óleo aromático.'),
    ('c4', 'Mateus Ferreira', '5535988445566', to_char(now() - interval '7 days', 'YYYY-MM-DD'), 'Corte Degradê / Fade', 5, 260.00, 52.00, 'Cliente fiel, corta cabelo a cada 15 dias certinho.'),
    ('c5', 'Bruno Carvalho', '5535999556677', to_char(now() - interval '17 days', 'YYYY-MM-DD'), 'Combo Moura Prime (Corte + Barba)', 10, 750.00, 75.00, 'Ciclo quinzenal. Já passou de 15 dias!')
ON CONFLICT (id) DO NOTHING;
