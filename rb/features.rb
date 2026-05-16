# Unirate SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module UnirateFeatures
  def self.make_feature(name)
    case name
    when "base"
      UnirateBaseFeature.new
    when "test"
      UnirateTestFeature.new
    else
      UnirateBaseFeature.new
    end
  end
end
