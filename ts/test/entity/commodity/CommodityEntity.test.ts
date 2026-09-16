

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { UnirateSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CommodityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when UNIRATE_TEST_LIVE=TRUE.
  afterEach(liveDelay('UNIRATE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UnirateSDK.test()
    const ent = testsdk.Commodity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.UNIRATE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'commodity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"commodity","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"amount","orig":"amount","reqd":false,"type":"`$NUMBER`","index$":0},{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"date","orig":"date","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"from","orig":"from","reqd":false,"type":"`$ANY`","index$":4},{"active":true,"kind":"query","name":"to","orig":"to","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"GET /api/commodities/historical/rates","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"getHistoricalCommodityRates\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"description\":\"Date in YYYY-MM-DD format\",\"in\":\"query\",\"name\":\"date\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"default\":\"USD\",\"description\":\"Base symbol\",\"in\":\"query\",\"name\":\"from\",\"type\":\"string\"},{\"description\":\"Target symbol\",\"in\":\"query\",\"name\":\"to\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Historical commodity prices retrieved successfully\"},\"400\":{\"description\":\"Invalid date format\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/commodities/historical/rates","segments":[{"lit":"api"},{"lit":"commodities"},{"lit":"historical"},{"lit":"rates"}],"select":{"exist":["amount","api_key","date","format","from","to"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"amount","orig":"amount","reqd":false,"type":"`$NUMBER`","index$":0},{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"end_date","orig":"end_date","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"start_date","orig":"start_date","reqd":true,"type":"`$ANY`","index$":4},{"active":true,"kind":"query","name":"symbol","orig":"symbol","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"GET /api/commodities/historical/timeseries","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"getCommodityTimeSeries\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"description\":\"Start date in YYYY-MM-DD format\",\"in\":\"query\",\"name\":\"start_date\",\"required\":true,\"type\":\"string\"},{\"description\":\"End date in YYYY-MM-DD format\",\"in\":\"query\",\"name\":\"end_date\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to multiply prices by\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"description\":\"Comma-separated list of commodity symbols\",\"in\":\"query\",\"name\":\"symbols\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Time series data retrieved successfully\"},\"400\":{\"description\":\"Invalid parameters or date range exceeds 5 years\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/commodities/historical/timeseries","segments":[{"lit":"api"},{"lit":"commodities"},{"lit":"historical"},{"lit":"timeseries"}],"select":{"exist":["amount","api_key","end_date","format","start_date","symbol"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"amount","orig":"amount","reqd":false,"type":"`$NUMBER`"},{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`"},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`"},{"active":true,"kind":"query","name":"from","orig":"from","reqd":false,"type":"`$ANY`"},{"active":true,"kind":"query","name":"to","orig":"to","reqd":false,"type":"`$ANY`"}]},"contract":{"id":"GET /api/commodities/convert","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"convertCommodity\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"default\":\"USD\",\"description\":\"Source symbol\",\"in\":\"query\",\"name\":\"from\",\"type\":\"string\"},{\"description\":\"Target symbol\",\"in\":\"query\",\"name\":\"to\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Conversion completed successfully\"},\"400\":{\"description\":\"Invalid amount or conversion failed\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/commodities/convert","segments":[{"lit":"api"},{"lit":"commodities"},{"lit":"convert"}],"select":{"$action":"convert","exist":["amount","api_key","format","from","to"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"amount","orig":"amount","reqd":false,"type":"`$NUMBER`"},{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`"},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`"},{"active":true,"kind":"query","name":"from","orig":"from","reqd":false,"type":"`$ANY`"},{"active":true,"kind":"query","name":"to","orig":"to","reqd":false,"type":"`$ANY`"}]},"contract":{"id":"GET /api/commodities/rates","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"getCommodityRates\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"default\":\"USD\",\"description\":\"Base symbol\",\"in\":\"query\",\"name\":\"from\",\"type\":\"string\"},{\"description\":\"Target symbol\",\"in\":\"query\",\"name\":\"to\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Commodity prices retrieved successfully\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"},\"404\":{\"description\":\"Symbol not found\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/commodities/rates","segments":[{"lit":"api"},{"lit":"commodities"},{"lit":"rates"}],"select":{"$action":"rate","exist":["amount","api_key","format","from","to"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`"},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`"}]},"contract":{"id":"GET /api/commodities/symbols","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"listCommoditySymbols\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"A list of available commodity symbols\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/commodities/symbols","segments":[{"lit":"api"},{"lit":"commodities"},{"lit":"symbols"}],"select":{"$action":"symbol","exist":["api_key","format"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"commodity","name__orig":"commodity","Name":"Commodity","name_":"commodity","name-":"commodity","NAME":"COMMODITY","index$":0}, {"active":true,"entity":"commodity","key$":"BasicCommodityFlow","kind":"basic","name":"BasicCommodityFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"commodity_ref01","srcdatavar":"commodity_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-commodity_ref01"}}],"index$":0}]}, 'Commodity')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let commodity_ref01_data = Object.values(setup.data.existing.commodity)[0] as any

    // LOAD
    const commodity_ref01_ent = client.Commodity()
    const commodity_ref01_match_dt0: any = {}
    const commodity_ref01_data_dt0 = (await commodity_ref01_ent.load(commodity_ref01_match_dt0)).data()
    assert(null != commodity_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/commodity/CommodityTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = UnirateSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['commodity01','commodity02','commodity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'UNIRATE_TEST_COMMODITY_ENTID': idmap,
    'UNIRATE_TEST_LIVE': 'FALSE',
    'UNIRATE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['UNIRATE_TEST_COMMODITY_ENTID']

  const live = 'TRUE' === env.UNIRATE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['UNIRATE_TEST_COMMODITY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new UnirateSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.UNIRATE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
