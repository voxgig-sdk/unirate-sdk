<?php
declare(strict_types=1);

// Unirate SDK exists test

require_once __DIR__ . '/../unirate_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = UnirateSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
