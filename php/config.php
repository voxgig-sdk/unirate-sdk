<?php
declare(strict_types=1);

// Unirate SDK configuration

class UnirateConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Unirate",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.unirateapi.com",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "commodity" => [],
                    "currency" => [],
                    "historical_currency" => [],
                    "vat_rate" => [],
                ],
            ],
            "entity" => [
        'commodity' => [
          'fields' => [],
          'name' => 'commodity',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'date',
                        'orig' => 'date',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'to',
                        'orig' => 'to',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/commodities/historical/rates',
                  'parts' => [
                    'api',
                    'commodities',
                    'historical',
                    'rates',
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'api_key',
                      'date',
                      'format',
                      'from',
                      'to',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/commodities/historical/timeseries',
                  'parts' => [
                    'api',
                    'commodities',
                    'historical',
                    'timeseries',
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'api_key',
                      'end_date',
                      'format',
                      'start_date',
                      'symbol',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'to',
                        'orig' => 'to',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/commodities/convert',
                  'parts' => [
                    'api',
                    'commodities',
                    'convert',
                  ],
                  'select' => [
                    '$action' => 'convert',
                    'exist' => [
                      'amount',
                      'api_key',
                      'format',
                      'from',
                      'to',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'to',
                        'orig' => 'to',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/commodities/rates',
                  'parts' => [
                    'api',
                    'commodities',
                    'rates',
                  ],
                  'select' => [
                    '$action' => 'rate',
                    'exist' => [
                      'amount',
                      'api_key',
                      'format',
                      'from',
                      'to',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 3,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/commodities/symbols',
                  'parts' => [
                    'api',
                    'commodities',
                    'symbols',
                  ],
                  'select' => [
                    '$action' => 'symbol',
                    'exist' => [
                      'api_key',
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 4,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'currency' => [
          'fields' => [],
          'name' => 'currency',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'to',
                        'orig' => 'to',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/convert',
                  'parts' => [
                    'api',
                    'convert',
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'api_key',
                      'format',
                      'from',
                      'to',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'to',
                        'orig' => 'to',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/rates',
                  'parts' => [
                    'api',
                    'rates',
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'api_key',
                      'format',
                      'from',
                      'to',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/currencies',
                  'parts' => [
                    'api',
                    'currencies',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key',
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'historical_currency' => [
          'fields' => [],
          'name' => 'historical_currency',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'base',
                        'orig' => 'base',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'currency',
                        'orig' => 'currency',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/historical/timeseries',
                  'parts' => [
                    'api',
                    'historical',
                    'timeseries',
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'api_key',
                      'base',
                      'currency',
                      'end_date',
                      'format',
                      'start_date',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'date',
                        'orig' => 'date',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'to',
                        'orig' => 'to',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/historical/rates',
                  'parts' => [
                    'api',
                    'historical',
                    'rates',
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'api_key',
                      'date',
                      'format',
                      'from',
                      'to',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/historical/limits',
                  'parts' => [
                    'api',
                    'historical',
                    'limits',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key',
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'vat_rate' => [
          'fields' => [],
          'name' => 'vat_rate',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'country',
                        'orig' => 'country',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/vat/rates',
                  'parts' => [
                    'api',
                    'vat',
                    'rates',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key',
                      'country',
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return UnirateFeatures::make_feature($name);
    }
}
