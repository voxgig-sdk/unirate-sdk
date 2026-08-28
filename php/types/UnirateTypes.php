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

/** Request payload for Commodity#load. */
class CommodityLoadMatch
{
    public ?float $amount = null;
    public mixed $api_key;
    public mixed $date = null;
    public mixed $format = null;
    public mixed $from = null;
    public mixed $to = null;
    public mixed $end_date = null;
    public mixed $start_date = null;
    public mixed $symbol = null;
}

/** Currency entity data model. */
class Currency
{
}

/** Request payload for Currency#load. */
class CurrencyLoadMatch
{
    public ?float $amount = null;
    public mixed $api_key;
    public mixed $format = null;
    public mixed $from = null;
    public mixed $to = null;
}

/** HistoricalCurrency entity data model. */
class HistoricalCurrency
{
}

/** Request payload for HistoricalCurrency#load. */
class HistoricalCurrencyLoadMatch
{
    public ?float $amount = null;
    public mixed $api_key;
    public mixed $base = null;
    public mixed $currency = null;
    public mixed $end_date = null;
    public mixed $format = null;
    public mixed $start_date = null;
    public mixed $date = null;
    public mixed $from = null;
    public mixed $to = null;
}

/** VatRate entity data model. */
class VatRate
{
}

/** Request payload for VatRate#load. */
class VatRateLoadMatch
{
    public mixed $api_key;
    public mixed $country = null;
    public mixed $format = null;
}

