import { UnirateEntityBase } from '../UnirateEntityBase';
import type { UnirateSDK } from '../UnirateSDK';
import type { Control } from '../types';
import type { Commodity, CommodityLoadMatch } from '../UnirateTypes';
declare class CommodityEntity extends UnirateEntityBase<Commodity> {
    constructor(client: UnirateSDK, entopts: any);
    make(this: CommodityEntity): CommodityEntity;
    load(this: any, reqmatch?: CommodityLoadMatch, ctrl?: Control): Promise<CommodityEntity>;
}
export { CommodityEntity };
