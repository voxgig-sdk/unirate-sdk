# Unirate SDK utility: make_context
require_relative '../core/context'
module UnirateUtilities
  MakeContext = ->(ctxmap, basectx) {
    UnirateContext.new(ctxmap, basectx)
  }
end
