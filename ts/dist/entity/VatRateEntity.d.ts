import { UnirateEntityBase } from '../UnirateEntityBase';
import type { UnirateSDK } from '../UnirateSDK';
import type { Control } from '../types';
import type { VatRate, VatRateLoadMatch } from '../UnirateTypes';
declare class VatRateEntity extends UnirateEntityBase<VatRate> {
    constructor(client: UnirateSDK, entopts: any);
    make(this: VatRateEntity): VatRateEntity;
    load(this: any, reqmatch?: VatRateLoadMatch, ctrl?: Control): Promise<VatRateEntity>;
}
export { VatRateEntity };
