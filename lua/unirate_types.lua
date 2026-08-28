-- Typed models for the Unirate SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Commodity

---@class CommodityLoadMatch
---@field amount? number
---@field api_key any
---@field date? any
---@field format? any
---@field from? any
---@field to? any
---@field end_date? any
---@field start_date? any
---@field symbol? any

---@class Currency

---@class CurrencyLoadMatch
---@field amount? number
---@field api_key any
---@field format? any
---@field from? any
---@field to? any

---@class HistoricalCurrency

---@class HistoricalCurrencyLoadMatch
---@field amount? number
---@field api_key any
---@field base? any
---@field currency? any
---@field end_date? any
---@field format? any
---@field start_date? any
---@field date? any
---@field from? any
---@field to? any

---@class VatRate

---@class VatRateLoadMatch
---@field api_key any
---@field country? any
---@field format? any

local M = {}

return M
