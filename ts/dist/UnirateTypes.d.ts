export interface Commodity {
}
export interface CommodityLoadMatch {
    amount?: number;
    api_key: any;
    date?: any;
    format?: any;
    from?: any;
    to?: any;
    end_date?: any;
    start_date?: any;
    symbol?: any;
    $action?: string;
    [action: string]: any;
}
export interface Currency {
}
export interface CurrencyLoadMatch {
    amount?: number;
    api_key: any;
    format?: any;
    from?: any;
    to?: any;
}
export interface HistoricalCurrency {
}
export interface HistoricalCurrencyLoadMatch {
    amount?: number;
    api_key: any;
    base?: any;
    currency?: any;
    end_date?: any;
    format?: any;
    start_date?: any;
    date?: any;
    from?: any;
    to?: any;
}
export interface VatRate {
}
export interface VatRateLoadMatch {
    api_key: any;
    country?: any;
    format?: any;
}
