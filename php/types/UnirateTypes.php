<?php
declare(strict_types=1);

// Typed models for the Unirate SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Commodity entity data model. */
class Commodity
{
}

/** Match filter for Commodity#load (any subset of Commodity fields). */
class CommodityLoadMatch
{
}

/** Currency entity data model. */
class Currency
{
}

/** Match filter for Currency#load (any subset of Currency fields). */
class CurrencyLoadMatch
{
}

/** HistoricalCurrency entity data model. */
class HistoricalCurrency
{
}

/** Match filter for HistoricalCurrency#load (any subset of HistoricalCurrency fields). */
class HistoricalCurrencyLoadMatch
{
}

/** VatRate entity data model. */
class VatRate
{
}

/** Match filter for VatRate#load (any subset of VatRate fields). */
class VatRateLoadMatch
{
}

