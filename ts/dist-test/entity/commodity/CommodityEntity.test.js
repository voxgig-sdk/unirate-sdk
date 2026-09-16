"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CommodityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when UNIRATE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('UNIRATE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.UnirateSDK.test();
        const ent = testsdk.Commodity();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.UNIRATE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'commodity.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "commodity", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "amount", "orig": "amount", "reqd": false, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "kind": "query", "name": "api_key", "orig": "api_key", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "date", "orig": "date", "reqd": true, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "from", "orig": "from", "reqd": false, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "query", "name": "to", "orig": "to", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "GET /api/commodities/historical/rates", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"getHistoricalCommodityRates\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"description\":\"Date in YYYY-MM-DD format\",\"in\":\"query\",\"name\":\"date\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"default\":\"USD\",\"description\":\"Base symbol\",\"in\":\"query\",\"name\":\"from\",\"type\":\"string\"},{\"description\":\"Target symbol\",\"in\":\"query\",\"name\":\"to\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Historical commodity prices retrieved successfully\"},\"400\":{\"description\":\"Invalid date format\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/commodities/historical/rates", "segments": [{ "lit": "api" }, { "lit": "commodities" }, { "lit": "historical" }, { "lit": "rates" }], "select": { "exist": ["amount", "api_key", "date", "format", "from", "to"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "amount", "orig": "amount", "reqd": false, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "kind": "query", "name": "api_key", "orig": "api_key", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "end_date", "orig": "end_date", "reqd": true, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "start_date", "orig": "start_date", "reqd": true, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "query", "name": "symbol", "orig": "symbol", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "GET /api/commodities/historical/timeseries", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"getCommodityTimeSeries\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"description\":\"Start date in YYYY-MM-DD format\",\"in\":\"query\",\"name\":\"start_date\",\"required\":true,\"type\":\"string\"},{\"description\":\"End date in YYYY-MM-DD format\",\"in\":\"query\",\"name\":\"end_date\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to multiply prices by\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"description\":\"Comma-separated list of commodity symbols\",\"in\":\"query\",\"name\":\"symbols\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Time series data retrieved successfully\"},\"400\":{\"description\":\"Invalid parameters or date range exceeds 5 years\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/commodities/historical/timeseries", "segments": [{ "lit": "api" }, { "lit": "commodities" }, { "lit": "historical" }, { "lit": "timeseries" }], "select": { "exist": ["amount", "api_key", "end_date", "format", "start_date", "symbol"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "amount", "orig": "amount", "reqd": false, "type": "`$NUMBER`" }, { "active": true, "kind": "query", "name": "api_key", "orig": "api_key", "reqd": true, "type": "`$ANY`" }, { "active": true, "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$ANY`" }, { "active": true, "kind": "query", "name": "from", "orig": "from", "reqd": false, "type": "`$ANY`" }, { "active": true, "kind": "query", "name": "to", "orig": "to", "reqd": false, "type": "`$ANY`" }] }, "contract": { "id": "GET /api/commodities/convert", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"convertCommodity\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"default\":\"USD\",\"description\":\"Source symbol\",\"in\":\"query\",\"name\":\"from\",\"type\":\"string\"},{\"description\":\"Target symbol\",\"in\":\"query\",\"name\":\"to\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Conversion completed successfully\"},\"400\":{\"description\":\"Invalid amount or conversion failed\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/commodities/convert", "segments": [{ "lit": "api" }, { "lit": "commodities" }, { "lit": "convert" }], "select": { "$action": "convert", "exist": ["amount", "api_key", "format", "from", "to"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "amount", "orig": "amount", "reqd": false, "type": "`$NUMBER`" }, { "active": true, "kind": "query", "name": "api_key", "orig": "api_key", "reqd": true, "type": "`$ANY`" }, { "active": true, "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$ANY`" }, { "active": true, "kind": "query", "name": "from", "orig": "from", "reqd": false, "type": "`$ANY`" }, { "active": true, "kind": "query", "name": "to", "orig": "to", "reqd": false, "type": "`$ANY`" }] }, "contract": { "id": "GET /api/commodities/rates", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"getCommodityRates\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"type\":\"number\"},{\"default\":\"USD\",\"description\":\"Base symbol\",\"in\":\"query\",\"name\":\"from\",\"type\":\"string\"},{\"description\":\"Target symbol\",\"in\":\"query\",\"name\":\"to\",\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Commodity prices retrieved successfully\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"},\"404\":{\"description\":\"Symbol not found\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/commodities/rates", "segments": [{ "lit": "api" }, { "lit": "commodities" }, { "lit": "rates" }], "select": { "$action": "rate", "exist": ["amount", "api_key", "format", "from", "to"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "api_key", "orig": "api_key", "reqd": true, "type": "`$ANY`" }, { "active": true, "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$ANY`" }] }, "contract": { "id": "GET /api/commodities/symbols", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"listCommoditySymbols\",\"parameters\":[{\"description\":\"API key for authentication (Pro tier)\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"type\":\"string\"},{\"default\":\"json\",\"description\":\"Response format\",\"enum\":[\"json\",\"xml\",\"csv\",\"tsv\"],\"in\":\"query\",\"name\":\"format\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"A list of available commodity symbols\"},\"401\":{\"description\":\"Missing or invalid API key\"},\"403\":{\"description\":\"Pro subscription required\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/commodities/symbols", "segments": [{ "lit": "api" }, { "lit": "commodities" }, { "lit": "symbols" }], "select": { "$action": "symbol", "exist": ["api_key", "format"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "commodity", "name__orig": "commodity", "Name": "Commodity", "name_": "commodity", "name-": "commodity", "NAME": "COMMODITY", "index$": 0 }, { "active": true, "entity": "commodity", "key$": "BasicCommodityFlow", "kind": "basic", "name": "BasicCommodityFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "commodity_ref01", "srcdatavar": "commodity_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-commodity_ref01" } }], "index$": 0 }] }, 'Commodity');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let commodity_ref01_data = Object.values(setup.data.existing.commodity)[0];
        // LOAD
        const commodity_ref01_ent = client.Commodity();
        const commodity_ref01_match_dt0 = {};
        const commodity_ref01_data_dt0 = (await commodity_ref01_ent.load(commodity_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != commodity_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/commodity/CommodityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.UnirateSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['commodity01', 'commodity02', 'commodity03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'UNIRATE_TEST_COMMODITY_ENTID': idmap,
        'UNIRATE_TEST_LIVE': 'FALSE',
        'UNIRATE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['UNIRATE_TEST_COMMODITY_ENTID'];
    const live = 'TRUE' === env.UNIRATE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['UNIRATE_TEST_COMMODITY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.UnirateSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=CommodityEntity.test.js.map