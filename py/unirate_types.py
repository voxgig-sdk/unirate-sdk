# Typed models for the Unirate SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Commodity:
    pass


@dataclass
class CommodityLoadMatch:
    pass


@dataclass
class Currency:
    pass


@dataclass
class CurrencyLoadMatch:
    pass


@dataclass
class HistoricalCurrency:
    pass


@dataclass
class HistoricalCurrencyLoadMatch:
    pass


@dataclass
class VatRate:
    pass


@dataclass
class VatRateLoadMatch:
    pass

