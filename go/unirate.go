package voxgiguniratesdk

import (
	"github.com/voxgig-sdk/unirate-sdk/go/core"
	"github.com/voxgig-sdk/unirate-sdk/go/entity"
	"github.com/voxgig-sdk/unirate-sdk/go/feature"
	_ "github.com/voxgig-sdk/unirate-sdk/go/utility"
)

// Type aliases preserve external API.
type UnirateSDK = core.UnirateSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type UnirateEntity = core.UnirateEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type UnirateError = core.UnirateError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCommodityEntityFunc = func(client *core.UnirateSDK, entopts map[string]any) core.UnirateEntity {
		return entity.NewCommodityEntity(client, entopts)
	}
	core.NewCurrencyEntityFunc = func(client *core.UnirateSDK, entopts map[string]any) core.UnirateEntity {
		return entity.NewCurrencyEntity(client, entopts)
	}
	core.NewHistoricalCurrencyEntityFunc = func(client *core.UnirateSDK, entopts map[string]any) core.UnirateEntity {
		return entity.NewHistoricalCurrencyEntity(client, entopts)
	}
	core.NewVatRateEntityFunc = func(client *core.UnirateSDK, entopts map[string]any) core.UnirateEntity {
		return entity.NewVatRateEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewUnirateSDK = core.NewUnirateSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewUnirateSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *UnirateSDK  { return NewUnirateSDK(nil) }
func Test() *UnirateSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
