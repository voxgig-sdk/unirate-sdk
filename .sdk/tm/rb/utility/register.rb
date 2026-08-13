# Unirate SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

UnirateUtility.registrar = ->(u) {
  u.clean = UnirateUtilities::Clean
  u.done = UnirateUtilities::Done
  u.make_error = UnirateUtilities::MakeError
  u.feature_add = UnirateUtilities::FeatureAdd
  u.feature_hook = UnirateUtilities::FeatureHook
  u.feature_init = UnirateUtilities::FeatureInit
  u.fetcher = UnirateUtilities::Fetcher
  u.make_fetch_def = UnirateUtilities::MakeFetchDef
  u.make_context = UnirateUtilities::MakeContext
  u.make_options = UnirateUtilities::MakeOptions
  u.make_request = UnirateUtilities::MakeRequest
  u.make_response = UnirateUtilities::MakeResponse
  u.make_result = UnirateUtilities::MakeResult
  u.make_point = UnirateUtilities::MakePoint
  u.make_spec = UnirateUtilities::MakeSpec
  u.make_url = UnirateUtilities::MakeUrl
  u.param = UnirateUtilities::Param
  u.prepare_auth = UnirateUtilities::PrepareAuth
  u.prepare_body = UnirateUtilities::PrepareBody
  u.prepare_headers = UnirateUtilities::PrepareHeaders
  u.prepare_method = UnirateUtilities::PrepareMethod
  u.prepare_params = UnirateUtilities::PrepareParams
  u.prepare_path = UnirateUtilities::PreparePath
  u.prepare_query = UnirateUtilities::PrepareQuery
  u.graphql_body = UnirateUtilities::GraphqlBody
  u.graphql_errors = UnirateUtilities::GraphqlErrors
  u.result_basic = UnirateUtilities::ResultBasic
  u.result_body = UnirateUtilities::ResultBody
  u.result_headers = UnirateUtilities::ResultHeaders
  u.transform_request = UnirateUtilities::TransformRequest
  u.transform_response = UnirateUtilities::TransformResponse
}
