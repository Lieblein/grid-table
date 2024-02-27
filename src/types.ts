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
