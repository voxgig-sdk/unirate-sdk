import { CommodityEntity } from './entity/CommodityEntity';
import { CurrencyEntity } from './entity/CurrencyEntity';
import { HistoricalCurrencyEntity } from './entity/HistoricalCurrencyEntity';
import { VatRateEntity } from './entity/VatRateEntity';
export type * from './UnirateTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { UnirateEntityBase } from './UnirateEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class UnirateSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Commodity(entopts?: Record<string, any>): CommodityEntity;
    Currency(entopts?: Record<string, any>): CurrencyEntity;
    HistoricalCurrency(entopts?: Record<string, any>): HistoricalCurrencyEntity;
    VatRate(entopts?: Record<string, any>): VatRateEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): UnirateSDK;
    tester(testopts?: any, sdkopts?: any): UnirateSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof UnirateSDK;
export { stdutil, config, BaseFeature, UnirateEntityBase, UnirateSDK, SDK, };
