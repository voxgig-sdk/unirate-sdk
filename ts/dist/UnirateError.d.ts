import { Context } from './Context';
declare class UnirateError extends Error {
    isUnirateError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { UnirateError };
