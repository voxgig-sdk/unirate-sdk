// Typed models for the Unirate SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/unirate-sdk/go/core"
)

// Commodity is the typed data model for the commodity entity.
type Commodity struct {
}

// CommodityLoadMatch is the typed request payload for Commodity.LoadTyped.
type CommodityLoadMatch struct {
	Amount *float64 `json:"amount,omitempty"`
	ApiKey any `json:"api_key"`
	Date *any `json:"date,omitempty"`
	Format *any `json:"format,omitempty"`
	From *any `json:"from,omitempty"`
	To *any `json:"to,omitempty"`
	EndDate *any `json:"end_date,omitempty"`
	StartDate *any `json:"start_date,omitempty"`
	Symbol *any `json:"symbol,omitempty"`
}

// Currency is the typed data model for the currency entity.
type Currency struct {
}

// CurrencyLoadMatch is the typed request payload for Currency.LoadTyped.
type CurrencyLoadMatch struct {
	Amount *float64 `json:"amount,omitempty"`
	ApiKey any `json:"api_key"`
	Format *any `json:"format,omitempty"`
	From *any `json:"from,omitempty"`
	To *any `json:"to,omitempty"`
}

// HistoricalCurrency is the typed data model for the historical_currency entity.
type HistoricalCurrency struct {
}

// HistoricalCurrencyLoadMatch is the typed request payload for HistoricalCurrency.LoadTyped.
type HistoricalCurrencyLoadMatch struct {
	Amount *float64 `json:"amount,omitempty"`
	ApiKey any `json:"api_key"`
	Base *any `json:"base,omitempty"`
	Currency *any `json:"currency,omitempty"`
	EndDate *any `json:"end_date,omitempty"`
	Format *any `json:"format,omitempty"`
	StartDate *any `json:"start_date,omitempty"`
	Date *any `json:"date,omitempty"`
	From *any `json:"from,omitempty"`
	To *any `json:"to,omitempty"`
}

// VatRate is the typed data model for the vat_rate entity.
type VatRate struct {
}

// VatRateLoadMatch is the typed request payload for VatRate.LoadTyped.
type VatRateLoadMatch struct {
	ApiKey any `json:"api_key"`
	Country *any `json:"country,omitempty"`
	Format *any `json:"format,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
