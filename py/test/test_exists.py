# ProjectName SDK exists test

import pytest
from unirate_sdk import UnirateSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = UnirateSDK.test(None, None)
        assert testsdk is not None
