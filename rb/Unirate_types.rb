# frozen_string_literal: true

# Typed models for the Unirate SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Commodity entity data model.
class Commodity
end

# Request payload for Commodity#load.
#
# @!attribute [rw] amount
#   @return [Float, nil]
#
# @!attribute [rw] api_key
#   @return [Object]
#
# @!attribute [rw] date
#   @return [Object, nil]
#
# @!attribute [rw] format
#   @return [Object, nil]
#
# @!attribute [rw] from
#   @return [Object, nil]
#
# @!attribute [rw] to
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [Object, nil]
#
# @!attribute [rw] start_date
#   @return [Object, nil]
#
# @!attribute [rw] symbol
#   @return [Object, nil]
CommodityLoadMatch = Struct.new(
  :amount,
  :api_key,
  :date,
  :format,
  :from,
  :to,
  :end_date,
  :start_date,
  :symbol,
  keyword_init: true
)

# Currency entity data model.
class Currency
end

# Request payload for Currency#load.
#
# @!attribute [rw] amount
#   @return [Float, nil]
#
# @!attribute [rw] api_key
#   @return [Object]
#
# @!attribute [rw] format
#   @return [Object, nil]
#
# @!attribute [rw] from
#   @return [Object, nil]
#
# @!attribute [rw] to
#   @return [Object, nil]
CurrencyLoadMatch = Struct.new(
  :amount,
  :api_key,
  :format,
  :from,
  :to,
  keyword_init: true
)

# HistoricalCurrency entity data model.
class HistoricalCurrency
end

# Request payload for HistoricalCurrency#load.
#
# @!attribute [rw] amount
#   @return [Float, nil]
#
# @!attribute [rw] api_key
#   @return [Object]
#
# @!attribute [rw] base
#   @return [Object, nil]
#
# @!attribute [rw] currency
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [Object, nil]
#
# @!attribute [rw] format
#   @return [Object, nil]
#
# @!attribute [rw] start_date
#   @return [Object, nil]
#
# @!attribute [rw] date
#   @return [Object, nil]
#
# @!attribute [rw] from
#   @return [Object, nil]
#
# @!attribute [rw] to
#   @return [Object, nil]
HistoricalCurrencyLoadMatch = Struct.new(
  :amount,
  :api_key,
  :base,
  :currency,
  :end_date,
  :format,
  :start_date,
  :date,
  :from,
  :to,
  keyword_init: true
)

# VatRate entity data model.
class VatRate
end

# Request payload for VatRate#load.
#
# @!attribute [rw] api_key
#   @return [Object]
#
# @!attribute [rw] country
#   @return [Object, nil]
#
# @!attribute [rw] format
#   @return [Object, nil]
VatRateLoadMatch = Struct.new(
  :api_key,
  :country,
  :format,
  keyword_init: true
)

