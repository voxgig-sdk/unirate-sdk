# Unirate SDK configuration

module UnirateConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Unirate",
        "slug" => "unirate",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://api.unirateapi.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "commodity" => {},
          "currency" => {},
          "historical_currency" => {},
          "vat_rate" => {},
        },
      },
      "entity" => {
        "commodity" => {
          "fields" => [],
          "name" => "commodity",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/commodities/historical/rates",
                  "parts" => [
                    "api",
                    "commodities",
                    "historical",
                    "rates",
                  ],
                  "select" => {
                    "exist" => [
                      "amount",
                      "api_key",
                      "date",
                      "format",
                      "from",
                      "to",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "end_date",
                        "orig" => "end_date",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "start_date",
                        "orig" => "start_date",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "symbol",
                        "orig" => "symbol",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/commodities/historical/timeseries",
                  "parts" => [
                    "api",
                    "commodities",
                    "historical",
                    "timeseries",
                  ],
                  "select" => {
                    "exist" => [
                      "amount",
                      "api_key",
                      "end_date",
                      "format",
                      "start_date",
                      "symbol",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/commodities/convert",
                  "parts" => [
                    "api",
                    "commodities",
                    "convert",
                  ],
                  "select" => {
                    "$action" => "convert",
                    "exist" => [
                      "amount",
                      "api_key",
                      "format",
                      "from",
                      "to",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/commodities/rates",
                  "parts" => [
                    "api",
                    "commodities",
                    "rates",
                  ],
                  "select" => {
                    "$action" => "rate",
                    "exist" => [
                      "amount",
                      "api_key",
                      "format",
                      "from",
                      "to",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/commodities/symbols",
                  "parts" => [
                    "api",
                    "commodities",
                    "symbols",
                  ],
                  "select" => {
                    "$action" => "symbol",
                    "exist" => [
                      "api_key",
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "currency" => {
          "fields" => [],
          "name" => "currency",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "to",
                        "orig" => "to",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/convert",
                  "parts" => [
                    "api",
                    "convert",
                  ],
                  "select" => {
                    "exist" => [
                      "amount",
                      "api_key",
                      "format",
                      "from",
                      "to",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/rates",
                  "parts" => [
                    "api",
                    "rates",
                  ],
                  "select" => {
                    "exist" => [
                      "amount",
                      "api_key",
                      "format",
                      "from",
                      "to",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/currencies",
                  "parts" => [
                    "api",
                    "currencies",
                  ],
                  "select" => {
                    "exist" => [
                      "api_key",
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "historical_currency" => {
          "fields" => [],
          "name" => "historical_currency",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "base",
                        "orig" => "base",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "currency",
                        "orig" => "currency",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "end_date",
                        "orig" => "end_date",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "start_date",
                        "orig" => "start_date",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/historical/timeseries",
                  "parts" => [
                    "api",
                    "historical",
                    "timeseries",
                  ],
                  "select" => {
                    "exist" => [
                      "amount",
                      "api_key",
                      "base",
                      "currency",
                      "end_date",
                      "format",
                      "start_date",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/historical/rates",
                  "parts" => [
                    "api",
                    "historical",
                    "rates",
                  ],
                  "select" => {
                    "exist" => [
                      "amount",
                      "api_key",
                      "date",
                      "format",
                      "from",
                      "to",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/historical/limits",
                  "parts" => [
                    "api",
                    "historical",
                    "limits",
                  ],
                  "select" => {
                    "exist" => [
                      "api_key",
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "vat_rate" => {
          "fields" => [],
          "name" => "vat_rate",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "api_key",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "country",
                        "orig" => "country",
                        "type" => "`$ANY`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/vat/rates",
                  "parts" => [
                    "api",
                    "vat",
                    "rates",
                  ],
                  "select" => {
                    "exist" => [
                      "api_key",
                      "country",
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    UnirateFeatures.make_feature(name)
  end
end
