<?php
declare(strict_types=1);

// Unirate SDK utility: result_body

class UnirateResultBody
{
    public static function call(UnirateContext $ctx): ?UnirateResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
