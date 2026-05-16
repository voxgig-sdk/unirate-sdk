<?php
declare(strict_types=1);

// Unirate SDK utility: prepare_body

class UniratePrepareBody
{
    public static function call(UnirateContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
