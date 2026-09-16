# Unirate SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module UnirateFeatures
  def self.make_feature(name)
    case name
    when "base"
      UnirateBaseFeature.new
    when "ratelimit"
      UnirateRatelimitFeature.new
    when "retry"
      UnirateRetryFeature.new
    when "test"
      UnirateTestFeature.new
    when "timeout"
      UnirateTimeoutFeature.new
    else
      UnirateBaseFeature.new
    end
  end
end
