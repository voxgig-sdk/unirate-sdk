# Unirate SDK feature factory

from feature.base_feature import UnirateBaseFeature
from feature.test_feature import UnirateTestFeature


def _make_feature(name):
    features = {
        "base": lambda: UnirateBaseFeature(),
        "test": lambda: UnirateTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
