# Unirate SDK

Convert currencies, query precious-metal prices, and look up EU VAT rates from one REST API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About UniRate API

[UniRate API](https://unirateapi.com/) is a REST service that bundles foreign-exchange, cryptocurrency, precious-metals and EU VAT data behind a single endpoint surface at `https://api.unirateapi.com`. Authentication is by API key passed as the `api_key` query parameter.

What you get from the API:

- Live and historical exchange rates across roughly 170 fiat currencies and 420+ cryptocurrencies (forex history from 1999, crypto from 2009).
- Currency conversion for arbitrary amounts and pairs.
- Spot prices for Gold, Silver, Platinum and Palladium (precious-metals data on the Pro tier, history reaching back to 1968).
- EU-style VAT rates for around 120 countries.

Operational notes: the free tier is rate-limited (around 30 requests/minute and 200 requests/day at the time of writing); the Pro tier raises the daily cap substantially and unlocks the commodities endpoints. Endpoints follow a `/api/...` path convention (for example `/api/rates`, `/api/convert`, `/api/currencies`, `/api/historical/rates`, `/api/historical/timeseries`, `/api/commodities/rates`).

## Try it

**TypeScript**
```bash
npm install unirate
```

**Python**
```bash
pip install unirate-sdk
```

**PHP**
```bash
composer require voxgig/unirate-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/unirate-sdk/go
```

**Ruby**
```bash
gem install unirate-sdk
```

**Lua**
```bash
luarocks install unirate-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { UnirateSDK } from 'unirate'

const client = new UnirateSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o unirate-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "unirate": {
      "command": "/abs/path/to/unirate-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Commodity** | Precious-metal spot prices (Gold, Silver, Platinum, Palladium); exposed via `/api/commodities/rates` on the Pro tier. | `/api/commodities/historical/rates` |
| **Currency** | The catalogue of supported fiat and cryptocurrency codes together with current exchange-rate and conversion operations against `/api/currencies`, `/api/rates` and `/api/convert`. | `/api/convert` |
| **HistoricalCurrency** | Past exchange rates for a single date or a date range, served from `/api/historical/rates` and `/api/historical/timeseries` (forex history from 1999). | `/api/historical/timeseries` |
| **VatRate** | EU-style value-added-tax rates covering roughly 120 countries, available to free-tier callers. | `/api/vat/rates` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from unirate_sdk import UnirateSDK

client = UnirateSDK({})


# Load a specific commodity
commodity, err = client.Commodity(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'unirate_sdk.php';

$client = new UnirateSDK([]);


// Load a specific commodity
[$commodity, $err] = $client->Commodity(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/unirate-sdk/go"

client := sdk.NewUnirateSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Unirate_sdk"

client = UnirateSDK.new({})


# Load a specific commodity
commodity, err = client.Commodity(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("unirate_sdk")

local client = sdk.new({})


-- Load a specific commodity
local commodity, err = client:Commodity(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = UnirateSDK.test()
const result = await client.Commodity().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = UnirateSDK.test(None, None)
result, err = client.Commodity(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = UnirateSDK::test(null, null);
[$result, $err] = $client->Commodity(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Commodity(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = UnirateSDK.test(nil, nil)
result, err = client.Commodity(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Commodity(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the UniRate API

- Upstream: [https://unirateapi.com/](https://unirateapi.com/)
- API docs: [https://unirateapi.com/apidocs/](https://unirateapi.com/apidocs/)

- UniRateAPI publishes its data "as is" for informational purposes — see the [terms page](https://unirateapi.com/) for the binding text.
- Redistribution of the raw rate data is not permitted.
- An API key is required; usage is governed by the per-plan rate limits set by UniRateAPI.
- This SDK wraps the public HTTP API; it does not grant any additional rights to the underlying data.

---

Generated from the UniRate API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
