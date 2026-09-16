

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


describe('CurrencyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when UNIRATE_TEST_LIVE=TRUE.
  afterEach(liveDelay('UNIRATE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UnirateSDK.test()
    const ent = testsdk.Currency()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.UNIRATE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'currency.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"currency","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"amount","orig":"amount","reqd":false,"type":"`$NUMBER`","index$":0},{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"from","orig":"from","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"to","orig":"to","reqd":true,"type":"`$ANY`","index$":4}]},"contract":{"id":"GET /api/convert","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"convertCurrency\",\"parameters\":[{\"description\":\"API key for authentication\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"default\":\"USD\",\"description\":\"Source currency code\",\"in\":\"query\",\"name\":\"from\",\"type\":\"string\"},{\"description\":\"Target currency code\",\"in\":\"query\",\"name\":\"to\",\"required\":true,\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Currency converted successfully\"},\"400\":{\"description\":\"Invalid request parameters\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"404\":{\"description\":\"Currency not found\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/convert","segments":[{"lit":"api"},{"lit":"convert"}],"select":{"exist":["amount","api_key","format","from","to"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"amount","orig":"amount","reqd":false,"type":"`$NUMBER`","index$":0},{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"from","orig":"from","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"to","orig":"to","reqd":false,"type":"`$ANY`","index$":4}]},"contract":{"id":"GET /api/rates","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"getRates\",\"parameters\":[{\"description\":\"API key for authentication\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"default\":\"USD\",\"description\":\"Base currency code\",\"in\":\"query\",\"name\":\"from\",\"type\":\"string\"},{\"description\":\"Target currency code\",\"in\":\"query\",\"name\":\"to\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Exchange rates retrieved successfully\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"404\":{\"description\":\"Currency not found\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/rates","segments":[{"lit":"api"},{"lit":"rates"}],"select":{"exist":["amount","api_key","format","from","to"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /api/currencies","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"listCurrencies\",\"parameters\":[{\"description\":\"API key for authentication\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"A list of available currencies\"},\"401\":{\"description\":\"Missing or invalid API key\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/currencies","segments":[{"lit":"api"},{"lit":"currencies"}],"select":{"exist":["api_key","format"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"currency","name__orig":"currency","Name":"Currency","name_":"currency","name-":"currency","NAME":"CURRENCY","index$":1}, {"active":true,"entity":"currency","key$":"BasicCurrencyFlow","kind":"basic","name":"BasicCurrencyFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"currency_ref01","srcdatavar":"currency_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-currency_ref01"}}],"index$":0}]}, 'Currency')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let currency_ref01_data = Object.values(setup.data.existing.currency)[0] as any

    // LOAD
    const currency_ref01_ent = client.Currency()
    const currency_ref01_match_dt0: any = {}
    const currency_ref01_data_dt0 = (await currency_ref01_ent.load(currency_ref01_match_dt0)).data()
    assert(null != currency_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/currency/CurrencyTestData.json')

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
    ['currency01','currency02','currency03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'UNIRATE_TEST_CURRENCY_ENTID': idmap,
    'UNIRATE_TEST_LIVE': 'FALSE',
    'UNIRATE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['UNIRATE_TEST_CURRENCY_ENTID']

  const live = 'TRUE' === env.UNIRATE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['UNIRATE_TEST_CURRENCY_ENTID']
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
  
