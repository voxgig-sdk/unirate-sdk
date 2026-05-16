<?php
declare(strict_types=1);

// Unirate SDK utility: feature_add

class UnirateFeatureAdd
{
    public static function call(UnirateContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
