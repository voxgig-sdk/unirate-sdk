-- Unirate SDK error

local UnirateError = {}
UnirateError.__index = UnirateError


function UnirateError.new(code, msg, ctx)
  local self = setmetatable({}, UnirateError)
  self.is_sdk_error = true
  self.sdk = "Unirate"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function UnirateError:error()
  return self.msg
end


function UnirateError:__tostring()
  return self.msg
end


return UnirateError
