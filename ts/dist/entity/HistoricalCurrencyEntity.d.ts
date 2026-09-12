import { UnirateEntityBase } from '../UnirateEntityBase';
import type { UnirateSDK } from '../UnirateSDK';
import type { Control } from '../types';
import type { HistoricalCurrency, HistoricalCurrencyLoadMatch } from '../UnirateTypes';
declare class HistoricalCurrencyEntity extends UnirateEntityBase<HistoricalCurrency> {
    constructor(client: UnirateSDK, entopts: any);
    make(this: HistoricalCurrencyEntity): HistoricalCurrencyEntity;
    load(this: any, reqmatch?: HistoricalCurrencyLoadMatch, ctrl?: Control): Promise<HistoricalCurrencyEntity>;
}
export { HistoricalCurrencyEntity };
