// Typed models for the Unirate SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Commodity {
}

export interface CommodityLoadMatch {
  amount?: number
  api_key: any
  date?: any
  format?: any
  from?: any
  to?: any
  end_date?: any
  start_date?: any
  symbol?: any

  // Selects a custom action instead of the plain load:
  //   'convert' | 'rate' | 'symbol'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Currency {
}

export interface CurrencyLoadMatch {
  amount?: number
  api_key: any
  format?: any
  from?: any
  to?: any
}

export interface HistoricalCurrency {
}

export interface HistoricalCurrencyLoadMatch {
  amount?: number
  api_key: any
  base?: any
  currency?: any
  end_date?: any
  format?: any
  start_date?: any
  date?: any
  from?: any
  to?: any
}

export interface VatRate {
}

export interface VatRateLoadMatch {
  api_key: any
  country?: any
  format?: any
}

