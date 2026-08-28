# Typed models for the Unirate SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Commodity(TypedDict):
    pass


class CommodityLoadMatchRequired(TypedDict):
    api_key: Any


class CommodityLoadMatch(CommodityLoadMatchRequired, total=False):
    amount: float
    date: Any
    format: Any
    to: Any
    end_date: Any
    start_date: Any
    symbol: Any


class Currency(TypedDict):
    pass


class CurrencyLoadMatchRequired(TypedDict):
    api_key: Any


class CurrencyLoadMatch(CurrencyLoadMatchRequired, total=False):
    amount: float
    format: Any
    to: Any


class HistoricalCurrency(TypedDict):
    pass


class HistoricalCurrencyLoadMatchRequired(TypedDict):
    api_key: Any


class HistoricalCurrencyLoadMatch(HistoricalCurrencyLoadMatchRequired, total=False):
    amount: float
    base: Any
    currency: Any
    end_date: Any
    format: Any
    start_date: Any
    date: Any
    to: Any


class VatRate(TypedDict):
    pass


class VatRateLoadMatchRequired(TypedDict):
    api_key: Any


class VatRateLoadMatch(VatRateLoadMatchRequired, total=False):
    country: Any
    format: Any
