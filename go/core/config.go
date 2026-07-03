package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Unirate",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.unirateapi.com",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"commodity": map[string]any{},
				"currency": map[string]any{},
				"historical_currency": map[string]any{},
				"vat_rate": map[string]any{},
			},
		},
		"entity": map[string]any{
			"commodity": map[string]any{
				"fields": []any{},
				"name": "commodity",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/commodities/historical/rates",
								"parts": []any{
									"api",
									"commodities",
									"historical",
									"rates",
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"api_key",
										"date",
										"format",
										"from",
										"to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "symbol",
											"orig": "symbol",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/commodities/historical/timeseries",
								"parts": []any{
									"api",
									"commodities",
									"historical",
									"timeseries",
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"api_key",
										"end_date",
										"format",
										"start_date",
										"symbol",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/commodities/convert",
								"parts": []any{
									"api",
									"commodities",
									"convert",
								},
								"select": map[string]any{
									"$action": "convert",
									"exist": []any{
										"amount",
										"api_key",
										"format",
										"from",
										"to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/commodities/rates",
								"parts": []any{
									"api",
									"commodities",
									"rates",
								},
								"select": map[string]any{
									"$action": "rate",
									"exist": []any{
										"amount",
										"api_key",
										"format",
										"from",
										"to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 3,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/commodities/symbols",
								"parts": []any{
									"api",
									"commodities",
									"symbols",
								},
								"select": map[string]any{
									"$action": "symbol",
									"exist": []any{
										"api_key",
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 4,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"currency": map[string]any{
				"fields": []any{},
				"name": "currency",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/convert",
								"parts": []any{
									"api",
									"convert",
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"api_key",
										"format",
										"from",
										"to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/rates",
								"parts": []any{
									"api",
									"rates",
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"api_key",
										"format",
										"from",
										"to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/currencies",
								"parts": []any{
									"api",
									"currencies",
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 2,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"historical_currency": map[string]any{
				"fields": []any{},
				"name": "historical_currency",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "base",
											"orig": "base",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "currency",
											"orig": "currency",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/historical/timeseries",
								"parts": []any{
									"api",
									"historical",
									"timeseries",
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"api_key",
										"base",
										"currency",
										"end_date",
										"format",
										"start_date",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/historical/rates",
								"parts": []any{
									"api",
									"historical",
									"rates",
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"api_key",
										"date",
										"format",
										"from",
										"to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/historical/limits",
								"parts": []any{
									"api",
									"historical",
									"limits",
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 2,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"vat_rate": map[string]any{
				"fields": []any{},
				"name": "vat_rate",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "country",
											"orig": "country",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
								"method": "GET",
								"orig": "/api/vat/rates",
								"parts": []any{
									"api",
									"vat",
									"rates",
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"country",
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
