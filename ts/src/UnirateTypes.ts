// Typed models for the Unirate SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Commodity {
}

export interface CommodityLoadMatch {

  // Selects a custom action instead of the plain load:
  //   'convert' | 'rate' | 'symbol'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Currency {
}

export interface CurrencyLoadMatch {
}

export interface HistoricalCurrency {
}

export interface HistoricalCurrencyLoadMatch {
}

export interface VatRate {
}

export interface VatRateLoadMatch {
}

