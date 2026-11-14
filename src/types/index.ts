export type PaymentMethod = 'pix' | 'credito' | 'debito' | 'dinheiro';

export type AppointmentStatus = 'agendado' | 'em_atendimento' | 'finalizado' | 'cancelado';

export type ExpenseType = 'fixo' | 'variavel';

export type ExpenseRecurrence = 'mensal' | 'diario' | 'unico';

export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  durationMinutes: number;
  category: 'corte' | 'barba' | 'combo' | 'quimica' | 'outro';
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  category: 'bebida' | 'pomada' | 'cuidados' | 'snack';
  stock: number;
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  lastVisitDate: string; // YYYY-MM-DD
  lastService: string;
  totalVisits: number;
  totalSpent: number;
  averageTicket: number;
  notes?: string;
  lastContactDate?: string;
}

export interface AppointmentProduct {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Appointment {
  id: string;
  clientId: string;
  clientName: string;
  clientPhone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  barberName: string;
  status: AppointmentStatus;
  services: ServiceItem[];
  products: AppointmentProduct[];
  servicesTotal: number;
  productsTotal: number;
  totalAmount: number;
  paymentMethod?: PaymentMethod;
  notes?: string;
  completedAt?: string;
}

export interface Expense {
  id: string;
  description: string;
  category: 'imovel' | 'energia' | 'internet' | 'agua' | 'servicos' | 'produtos' | 'descartaveis' | 'cafe_cortesia' | 'limpeza' | 'outro';
  type: ExpenseType;
  recurrence: ExpenseRecurrence;
  amount: number;
  isPaid: boolean;
  date: string; // YYYY-MM-DD
}

export interface FinancialKPIs {
  revenueToday: number;
  expenseToday: number;
  netProfitToday: number;
  revenueWeek: number;
  revenueMonth: number;
  averageTicket: number;
  monthlyFixedCost: number;
  monthlyVariableCost: number;
  dailyOperatingCost: number;
  totalAppointmentsToday: number;
  completedAppointmentsToday: number;
}

export interface CrmClientAlert {
  client: Client;
  daysSinceLastVisit: number;
  status: 'em_dia' | 'atencao_15' | 'lembrete_30' | 'critico_45';
  suggestedMessage: string;
}
