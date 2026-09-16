

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


describe('VatRateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when UNIRATE_TEST_LIVE=TRUE.
  afterEach(liveDelay('UNIRATE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UnirateSDK.test()
    const ent = testsdk.VatRate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.UNIRATE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'vat_rate.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"vat_rate","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"country","orig":"country","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /api/vat/rates","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"getVatRates\",\"parameters\":[{\"description\":\"API key for authentication\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"description\":\"Two-letter country code (e.g., DE, FR)\",\"in\":\"query\",\"name\":\"country\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"VAT rates retrieved successfully\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"404\":{\"description\":\"No VAT rates found for specified country\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/vat/rates","segments":[{"lit":"api"},{"lit":"vat"},{"lit":"rates"}],"select":{"exist":["api_key","country","format"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"vat_rate","name__orig":"vat_rate","Name":"VatRate","name_":"vat_rate","name-":"vat-rate","NAME":"VAT_RATE","index$":3}, {"active":true,"entity":"vat_rate","key$":"BasicVatRateFlow","kind":"basic","name":"BasicVatRateFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"vat_rate_ref01","srcdatavar":"vat_rate_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-vat_rate_ref01"}}],"index$":0}]}, 'VatRate')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let vat_rate_ref01_data = Object.values(setup.data.existing.vat_rate)[0] as any

    // LOAD
    const vat_rate_ref01_ent = client.VatRate()
    const vat_rate_ref01_match_dt0: any = {}
    const vat_rate_ref01_data_dt0 = (await vat_rate_ref01_ent.load(vat_rate_ref01_match_dt0)).data()
    assert(null != vat_rate_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/vat_rate/VatRateTestData.json')

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
    ['vat_rate01','vat_rate02','vat_rate03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'UNIRATE_TEST_VAT_RATE_ENTID': idmap,
    'UNIRATE_TEST_LIVE': 'FALSE',
    'UNIRATE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['UNIRATE_TEST_VAT_RATE_ENTID']

  const live = 'TRUE' === env.UNIRATE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['UNIRATE_TEST_VAT_RATE_ENTID']
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
  
