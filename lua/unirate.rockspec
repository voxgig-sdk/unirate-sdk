package = "voxgig-sdk-unirate"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/unirate-sdk.git"
}
description = {
  summary = "Unirate SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["unirate_sdk"] = "unirate_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
