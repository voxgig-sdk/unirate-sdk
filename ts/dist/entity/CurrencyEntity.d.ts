import { UnirateEntityBase } from '../UnirateEntityBase';
import type { UnirateSDK } from '../UnirateSDK';
import type { Control } from '../types';
import type { Currency, CurrencyLoadMatch } from '../UnirateTypes';
declare class CurrencyEntity extends UnirateEntityBase<Currency> {
    constructor(client: UnirateSDK, entopts: any);
    make(this: CurrencyEntity): CurrencyEntity;
    load(this: any, reqmatch?: CurrencyLoadMatch, ctrl?: Control): Promise<CurrencyEntity>;
}
export { CurrencyEntity };
