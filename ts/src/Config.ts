
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Unirate',
        slug: "unirate",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.unirateapi.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      commodity: {
      },

      currency: {
      },

      historical_currency: {
      },

      vat_rate: {
      },

    }
  }


  entity = {
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
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/commodities/historical/rates",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "commodities"
                },
                {
                  "lit": "historical"
                },
                {
                  "lit": "rates"
                }
              ],
              "select": {
                "exist": [
                  "amount",
                  "api_key",
                  "date",
                  "format",
                  "from",
                  "to"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "commodities",
                "historical",
                "rates"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "symbol",
                    "orig": "symbol",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/commodities/historical/timeseries",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "commodities"
                },
                {
                  "lit": "historical"
                },
                {
                  "lit": "timeseries"
                }
              ],
              "select": {
                "exist": [
                  "amount",
                  "api_key",
                  "end_date",
                  "format",
                  "start_date",
                  "symbol"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "commodities",
                "historical",
                "timeseries"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/commodities/convert",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "commodities"
                },
                {
                  "lit": "convert"
                }
              ],
              "select": {
                "$action": "convert",
                "exist": [
                  "amount",
                  "api_key",
                  "format",
                  "from",
                  "to"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "commodities",
                "convert"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/commodities/rates",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "commodities"
                },
                {
                  "lit": "rates"
                }
              ],
              "select": {
                "$action": "rate",
                "exist": [
                  "amount",
                  "api_key",
                  "format",
                  "from",
                  "to"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "commodities",
                "rates"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/commodities/symbols",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "commodities"
                },
                {
                  "lit": "symbols"
                }
              ],
              "select": {
                "$action": "symbol",
                "exist": [
                  "api_key",
                  "format"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "commodities",
                "symbols"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "reqd": true,
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/convert",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "convert"
                }
              ],
              "select": {
                "exist": [
                  "amount",
                  "api_key",
                  "format",
                  "from",
                  "to"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "convert"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/rates",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "rates"
                }
              ],
              "select": {
                "exist": [
                  "amount",
                  "api_key",
                  "format",
                  "from",
                  "to"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "rates"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/currencies",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "currencies"
                }
              ],
              "select": {
                "exist": [
                  "api_key",
                  "format"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "currencies"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "base",
                    "orig": "base",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "currency",
                    "orig": "currency",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": true,
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/historical/timeseries",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "historical"
                },
                {
                  "lit": "timeseries"
                }
              ],
              "select": {
                "exist": [
                  "amount",
                  "api_key",
                  "base",
                  "currency",
                  "end_date",
                  "format",
                  "start_date"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "historical",
                "timeseries"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/historical/rates",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "historical"
                },
                {
                  "lit": "rates"
                }
              ],
              "select": {
                "exist": [
                  "amount",
                  "api_key",
                  "date",
                  "format",
                  "from",
                  "to"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "historical",
                "rates"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/historical/limits",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "historical"
                },
                {
                  "lit": "limits"
                }
              ],
              "select": {
                "exist": [
                  "api_key",
                  "format"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "historical",
                "limits"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "country",
                    "orig": "country",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/vat/rates",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "vat"
                },
                {
                  "lit": "rates"
                }
              ],
              "select": {
                "exist": [
                  "api_key",
                  "country",
                  "format"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "vat",
                "rates"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

