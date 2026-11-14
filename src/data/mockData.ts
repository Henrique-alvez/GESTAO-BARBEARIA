import { 
  Client, 
  ServiceItem, 
  ProductItem, 
  Appointment, 
  Expense, 
  FinancialKPIs,
  CrmClientAlert
} from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  { id: 's1', name: 'Corte Degradê / Fade', price: 40, durationMinutes: 40, category: 'corte' },
  { id: 's2', name: 'Barba Terapia com Toalha Quente', price: 35, durationMinutes: 35, category: 'barba' },
  { id: 's3', name: 'Combo Moura Prime (Corte + Barba)', price: 70, durationMinutes: 60, category: 'combo' },
  { id: 's4', name: 'Sobrancelha na Navalha', price: 15, durationMinutes: 15, category: 'corte' },
  { id: 's5', name: 'Pezinho & Acabamento', price: 20, durationMinutes: 20, category: 'corte' },
  { id: 's6', name: 'Alisamento / Selagem Masculina', price: 80, durationMinutes: 60, category: 'quimica' },
  { id: 's7', name: 'Camuflagem de Grisalhos / Pigmentação', price: 45, durationMinutes: 30, category: 'quimica' }
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  { id: 'p1', name: 'Cerveja Heineken Long Neck 330ml', price: 12, category: 'bebida', stock: 24 },
  { id: 'p2', name: 'Cerveja Corona Extra 330ml', price: 14, category: 'bebida', stock: 18 },
  { id: 'p3', name: 'Refrigerante Lata 350ml', price: 7, category: 'bebida', stock: 32 },
  { id: 'p4', name: 'Água Mineral Crystal 500ml', price: 4, category: 'bebida', stock: 45 },
  { id: 'p5', name: 'Pomada Matte Efeito Seco 120g', price: 38, category: 'pomada', stock: 16 },
  { id: 'p6', name: 'Pomada Brilho Clássica 120g', price: 35, category: 'pomada', stock: 12 },
  { id: 'p7', name: 'Óleo Amadeirado para Barba 30ml', price: 42, category: 'cuidados', stock: 9 },
  { id: 'p8', name: 'Balas & Café Espresso Moído', price: 0, category: 'snack', stock: 100 }
];

// Data de hoje padrão para referência
export const getTodayStr = () => {
  const d = new Date();
  return d.toISOString().split('T')[0];
};

export const getOffsetDateStr = (daysAgo: number) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
};

export const INITIAL_CLIENTS: Client[] = [
  {
    id: 'c1',
    name: 'Rafael Oliveira',
    phone: '5535998112233',
    lastVisitDate: getTodayStr(),
    lastService: 'Combo Moura Prime (Corte + Barba)',
    totalVisits: 14,
    totalSpent: 1036,
    averageTicket: 74.00,
    notes: 'Prefere degradê navalhado bem baixo, toma cerveja Heineken.'
  },
  {
    id: 'c2',
    name: 'Lucas Mendes',
    phone: '5535997223344',
    lastVisitDate: getTodayStr(),
    lastService: 'Corte Degradê / Fade',
    totalVisits: 8,
    totalSpent: 540,
    averageTicket: 67.50,
    notes: 'Usa pomada matte efeito seco, sempre pontual.'
  },
  {
    id: 'c3',
    name: 'Gabriel Souza',
    phone: '5535991334455',
    lastVisitDate: getTodayStr(),
    lastService: 'Barba Terapia com Toalha Quente',
    totalVisits: 6,
    totalSpent: 252,
    averageTicket: 42.00,
    notes: 'Gosta de acabamento bem alinhado com navalha e óleo aromático.'
  },
  {
    id: 'c4',
    name: 'Mateus Ferreira',
    phone: '5535988445566',
    lastVisitDate: getOffsetDateStr(7),
    lastService: 'Corte Degradê / Fade',
    totalVisits: 5,
    totalSpent: 260,
    averageTicket: 52.00,
    notes: 'Cliente fiel, corta cabelo a cada 15 dias certinho.'
  },
  {
    id: 'c5',
    name: 'Bruno Carvalho',
    phone: '5535999556677',
    lastVisitDate: getOffsetDateStr(17),
    lastService: 'Combo Moura Prime (Corte + Barba)',
    totalVisits: 10,
    totalSpent: 750,
    averageTicket: 75.00,
    notes: 'Ciclo quinzenal. Já passou de 15 dias!'
  },
  {
    id: 'c6',
    name: 'Thiago Lima',
    phone: '5535996667788',
    lastVisitDate: getOffsetDateStr(23),
    lastService: 'Corte Degradê + Sobrancelha',
    totalVisits: 7,
    totalSpent: 385,
    averageTicket: 55.00,
    notes: 'Atendimento rápido no final da tarde.'
  },
  {
    id: 'c7',
    name: 'Rodrigo Nogueira',
    phone: '5535987778899',
    lastVisitDate: getOffsetDateStr(32),
    lastService: 'Corte Degradê / Fade',
    totalVisits: 4,
    totalSpent: 220,
    averageTicket: 55.00,
    notes: 'Mais de 30 dias sem visita! Potencial de reativação imediata.'
  },
  {
    id: 'c8',
    name: 'Marcos Vinicius',
    phone: '5535992889900',
    lastVisitDate: getOffsetDateStr(45),
    lastService: 'Combo Moura Prime + Pomada Matte',
    totalVisits: 11,
    totalSpent: 890,
    averageTicket: 80.90,
    notes: 'Cliente antigo em risco de abandono (45 dias ausente).'
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'a1',
    clientId: 'c1',
    clientName: 'Rafael Oliveira',
    clientPhone: '5535998112233',
    date: getTodayStr(),
    time: '09:00',
    barberName: 'Barbeiro Moura',
    status: 'finalizado',
    services: [
      { id: 's3', name: 'Combo Moura Prime (Corte + Barba)', price: 70, durationMinutes: 60, category: 'combo' }
    ],
    products: [
      { productId: 'p1', name: 'Cerveja Heineken Long Neck 330ml', price: 12, quantity: 1 }
    ],
    servicesTotal: 70,
    productsTotal: 12,
    totalAmount: 82,
    paymentMethod: 'pix',
    notes: 'Atendimento nota 10, pagou via chave PIX.',
    completedAt: '09:55'
  },
  {
    id: 'a2',
    clientId: 'c2',
    clientName: 'Lucas Mendes',
    clientPhone: '5535997223344',
    date: getTodayStr(),
    time: '10:30',
    barberName: 'Barbeiro Moura',
    status: 'finalizado',
    services: [
      { id: 's1', name: 'Corte Degradê / Fade', price: 40, durationMinutes: 40, category: 'corte' }
    ],
    products: [
      { productId: 'p5', name: 'Pomada Matte Efeito Seco 120g', price: 38, quantity: 1 }
    ],
    servicesTotal: 40,
    productsTotal: 38,
    totalAmount: 78,
    paymentMethod: 'credito',
    notes: 'Levou a pomada matte para finalizar em casa.',
    completedAt: '11:15'
  },
  {
    id: 'a3',
    clientId: 'c3',
    clientName: 'Gabriel Souza',
    clientPhone: '5535991334455',
    date: getTodayStr(),
    time: '13:30',
    barberName: 'Barbeiro Moura',
    status: 'finalizado',
    services: [
      { id: 's2', name: 'Barba Terapia com Toalha Quente', price: 35, durationMinutes: 35, category: 'barba' }
    ],
    products: [
      { productId: 'p3', name: 'Refrigerante Lata 350ml', price: 7, quantity: 1 }
    ],
    servicesTotal: 35,
    productsTotal: 7,
    totalAmount: 42,
    paymentMethod: 'dinheiro',
    notes: 'Pagou em dinheiro com troco certo.',
    completedAt: '14:10'
  },
  {
    id: 'a4',
    clientId: 'c4',
    clientName: 'Mateus Ferreira',
    clientPhone: '5535988445566',
    date: getTodayStr(),
    time: '15:30',
    barberName: 'Barbeiro Moura',
    status: 'em_atendimento',
    services: [
      { id: 's1', name: 'Corte Degradê / Fade', price: 40, durationMinutes: 40, category: 'corte' }
    ],
    products: [
      { productId: 'p2', name: 'Cerveja Corona Extra 330ml', price: 14, quantity: 1 }
    ],
    servicesTotal: 40,
    productsTotal: 14,
    totalAmount: 54,
    paymentMethod: 'pix',
    notes: 'Na cadeira cortando agora.'
  },
  {
    id: 'a5',
    clientId: 'c5',
    clientName: 'Bruno Carvalho',
    clientPhone: '5535999556677',
    date: getTodayStr(),
    time: '17:00',
    barberName: 'Barbeiro Moura',
    status: 'agendado',
    services: [
      { id: 's3', name: 'Combo Moura Prime (Corte + Barba)', price: 70, durationMinutes: 60, category: 'combo' }
    ],
    products: [],
    servicesTotal: 70,
    productsTotal: 0,
    totalAmount: 70,
    notes: 'Agendou pelo WhatsApp.'
  },
  {
    id: 'a6',
    clientId: 'c6',
    clientName: 'Thiago Lima',
    clientPhone: '5535996667788',
    date: getTodayStr(),
    time: '18:30',
    barberName: 'Barbeiro Moura',
    status: 'agendado',
    services: [
      { id: 's1', name: 'Corte Degradê / Fade', price: 40, durationMinutes: 40, category: 'corte' },
      { id: 's4', name: 'Sobrancelha na Navalha', price: 15, durationMinutes: 15, category: 'corte' }
    ],
    products: [],
    servicesTotal: 55,
    productsTotal: 0,
    totalAmount: 55,
    notes: 'Horário reservado para pós-expediente.'
  }
];

export const INITIAL_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'Aluguel do Salão Comercial',
    category: 'imovel',
    type: 'fixo',
    recurrence: 'mensal',
    amount: 1800.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e2',
    description: 'Energia Elétrica / Ar Condicionado',
    category: 'energia',
    type: 'fixo',
    recurrence: 'mensal',
    amount: 450.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e3',
    description: 'Internet Fibra Óptica 600 Mega',
    category: 'internet',
    type: 'fixo',
    recurrence: 'mensal',
    amount: 120.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e4',
    description: 'Conta de Água e Saneamento',
    category: 'agua',
    type: 'fixo',
    recurrence: 'mensal',
    amount: 85.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e5',
    description: 'Honorários do Contador',
    category: 'servicos',
    type: 'fixo',
    recurrence: 'mensal',
    amount: 250.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e6',
    description: 'Taxa / Aluguel de Maquininha & Sistema',
    category: 'servicos',
    type: 'fixo',
    recurrence: 'mensal',
    amount: 79.90,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e7',
    description: 'Lâminas Descartáveis & Golas Higiênicas',
    category: 'descartaveis',
    type: 'variavel',
    recurrence: 'mensal',
    amount: 140.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e8',
    description: 'Café em Grãos & Balas de Cortesia',
    category: 'cafe_cortesia',
    type: 'variavel',
    recurrence: 'mensal',
    amount: 95.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e9',
    description: 'Pomadas e Shampoos de Uso na Bancada',
    category: 'produtos',
    type: 'variavel',
    recurrence: 'mensal',
    amount: 260.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e10',
    description: 'Material de Limpeza e Álcool 70%',
    category: 'limpeza',
    type: 'variavel',
    recurrence: 'mensal',
    amount: 65.00,
    isPaid: true,
    date: getTodayStr()
  },
  {
    id: 'e11',
    description: 'Reposição Diária de Gelo & Frigobar Hoje',
    category: 'produtos',
    type: 'variavel',
    recurrence: 'diario',
    amount: 35.00,
    isPaid: true,
    date: getTodayStr()
  }
];

// Funções de Apoio e Cálculos
export const formatBRL = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const getDaysDifference = (fromDateStr: string, toDateStr: string = getTodayStr()): number => {
  const from = new Date(fromDateStr);
  const to = new Date(toDateStr);
  const diffTime = Math.abs(to.getTime() - from.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

export const computeFinancials = (
  appointments: Appointment[], 
  expenses: Expense[]
): FinancialKPIs => {
  const todayStr = getTodayStr();

  // Faturamento hoje (apenas finalizados e em atendimento faturados)
  const todayAppointments = appointments.filter(a => a.date === todayStr);
  const completedToday = todayAppointments.filter(a => a.status === 'finalizado' || a.status === 'em_atendimento');
  
  const revenueToday = completedToday.reduce((sum, a) => sum + a.totalAmount, 0);

  // Custos mensais
  const monthlyFixedCost = expenses
    .filter(e => e.type === 'fixo' && e.recurrence === 'mensal')
    .reduce((sum, e) => sum + e.amount, 0);

  const monthlyVariableCost = expenses
    .filter(e => e.type === 'variavel' && e.recurrence === 'mensal')
    .reduce((sum, e) => sum + e.amount, 0);

  // Custo operacional diário = (Custos Mensais / 26 dias úteis) + despesas diárias
  const dailyFixedProportional = monthlyFixedCost / 26;
  const dailyVariableProportional = monthlyVariableCost / 26;
  const directDailyExpenses = expenses
    .filter(e => e.recurrence === 'diario' && e.date === todayStr)
    .reduce((sum, e) => sum + e.amount, 0);

  const dailyOperatingCost = dailyFixedProportional + dailyVariableProportional + directDailyExpenses;
  const expenseToday = dailyOperatingCost;
  const netProfitToday = revenueToday - expenseToday;

  // Faturamento acumulado da semana (estimado com atendimentos mockados + histórico)
  const revenueWeek = revenueToday + 1680.00; // Base realista semanal

  // Faturamento acumulado do mês
  const revenueMonth = revenueToday + 7450.00; // Base realista mensal

  // Ticket Médio Geral
  const totalCompleted = appointments.filter(a => a.status === 'finalizado');
  const averageTicket = totalCompleted.length > 0 
    ? totalCompleted.reduce((sum, a) => sum + a.totalAmount, 0) / totalCompleted.length
    : 65.00;

  return {
    revenueToday,
    expenseToday,
    netProfitToday,
    revenueWeek,
    revenueMonth,
    averageTicket,
    monthlyFixedCost,
    monthlyVariableCost,
    dailyOperatingCost,
    totalAppointmentsToday: todayAppointments.length,
    completedAppointmentsToday: completedToday.length
  };
};

export const computeCrmAlerts = (clients: Client[], thresholdDays: number = 15): CrmClientAlert[] => {
  const todayStr = getTodayStr();

  return clients.map(client => {
    const daysSince = getDaysDifference(client.lastVisitDate, todayStr);
    
    let status: CrmClientAlert['status'] = 'em_dia';
    if (daysSince >= 40) {
      status = 'critico_45';
    } else if (daysSince >= 25) {
      status = 'lembrete_30';
    } else if (daysSince >= thresholdDays) {
      status = 'atencao_15';
    }

    const suggestedMessage = `Fala ${client.name.split(' ')[0]}! Tudo certo, meu amigo? Barbearia Moura aqui! 💈\n\nNotamos que já fazem ${daysSince} dias desde a sua última visita para fazer ${client.lastService}.\n\nSeu visual merece estar sempre alinhado e no padrão de respeito! Que tal já garantir seu horário para esta semana?\n\nResponda aqui para reservarmos seu melhor horário! 👊`;

    return {
      client,
      daysSinceLastVisit: daysSince,
      status,
      suggestedMessage
    };
  }).sort((a, b) => b.daysSinceLastVisit - a.daysSinceLastVisit);
};
