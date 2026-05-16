package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCommodityEntityFunc func(client *UnirateSDK, entopts map[string]any) UnirateEntity

var NewCurrencyEntityFunc func(client *UnirateSDK, entopts map[string]any) UnirateEntity

var NewHistoricalCurrencyEntityFunc func(client *UnirateSDK, entopts map[string]any) UnirateEntity

var NewVatRateEntityFunc func(client *UnirateSDK, entopts map[string]any) UnirateEntity

