
import { Context } from './Context'


class UnirateError extends Error {

  isUnirateError = true

  sdk = 'Unirate'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  UnirateError
}

