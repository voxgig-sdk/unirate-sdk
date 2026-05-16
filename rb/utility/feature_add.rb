# Unirate SDK utility: feature_add
module UnirateUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
