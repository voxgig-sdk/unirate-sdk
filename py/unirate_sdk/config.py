# Unirate SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Unirate",
            "slug": "unirate",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.unirateapi.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "commodity": {},
                "currency": {},
                "historical_currency": {},
                "vat_rate": {},
            },
        },
        "entity": {
      "commodity": {
        "fields": [],
        "name": "commodity",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/commodities/historical/rates",
                "parts": [
                  "api",
                  "commodities",
                  "historical",
                  "rates",
                ],
                "select": {
                  "exist": [
                    "amount",
                    "api_key",
                    "date",
                    "format",
                    "from",
                    "to",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "symbol",
                      "orig": "symbol",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/commodities/historical/timeseries",
                "parts": [
                  "api",
                  "commodities",
                  "historical",
                  "timeseries",
                ],
                "select": {
                  "exist": [
                    "amount",
                    "api_key",
                    "end_date",
                    "format",
                    "start_date",
                    "symbol",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/commodities/convert",
                "parts": [
                  "api",
                  "commodities",
                  "convert",
                ],
                "select": {
                  "$action": "convert",
                  "exist": [
                    "amount",
                    "api_key",
                    "format",
                    "from",
                    "to",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/commodities/rates",
                "parts": [
                  "api",
                  "commodities",
                  "rates",
                ],
                "select": {
                  "$action": "rate",
                  "exist": [
                    "amount",
                    "api_key",
                    "format",
                    "from",
                    "to",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/commodities/symbols",
                "parts": [
                  "api",
                  "commodities",
                  "symbols",
                ],
                "select": {
                  "$action": "symbol",
                  "exist": [
                    "api_key",
                    "format",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "currency": {
        "fields": [],
        "name": "currency",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/convert",
                "parts": [
                  "api",
                  "convert",
                ],
                "select": {
                  "exist": [
                    "amount",
                    "api_key",
                    "format",
                    "from",
                    "to",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/rates",
                "parts": [
                  "api",
                  "rates",
                ],
                "select": {
                  "exist": [
                    "amount",
                    "api_key",
                    "format",
                    "from",
                    "to",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/currencies",
                "parts": [
                  "api",
                  "currencies",
                ],
                "select": {
                  "exist": [
                    "api_key",
                    "format",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "historical_currency": {
        "fields": [],
        "name": "historical_currency",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "base",
                      "orig": "base",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "currency",
                      "orig": "currency",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/historical/timeseries",
                "parts": [
                  "api",
                  "historical",
                  "timeseries",
                ],
                "select": {
                  "exist": [
                    "amount",
                    "api_key",
                    "base",
                    "currency",
                    "end_date",
                    "format",
                    "start_date",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/historical/rates",
                "parts": [
                  "api",
                  "historical",
                  "rates",
                ],
                "select": {
                  "exist": [
                    "amount",
                    "api_key",
                    "date",
                    "format",
                    "from",
                    "to",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/historical/limits",
                "parts": [
                  "api",
                  "historical",
                  "limits",
                ],
                "select": {
                  "exist": [
                    "api_key",
                    "format",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "vat_rate": {
        "fields": [],
        "name": "vat_rate",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "country",
                      "orig": "country",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/vat/rates",
                "parts": [
                  "api",
                  "vat",
                  "rates",
                ],
                "select": {
                  "exist": [
                    "api_key",
                    "country",
                    "format",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
