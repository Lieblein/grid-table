export interface IFinancialIndicator {
    revenue: number | null;
    pgm: number | null;
    pgmPercent: number | null;
}

export interface IProject extends IFinancialIndicator {
    id: number;
    name: string;
}

export interface ICustomer extends IFinancialIndicator {
    id: number;
    name: string;
    projects: IProject[];
}

export interface IInvoice {
    id: number;
    signed: boolean;
    certificate_number: string | null;
    revenue: number;
    completion: number;
    end_date: string;
}
