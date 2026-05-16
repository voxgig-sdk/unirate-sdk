<?php
declare(strict_types=1);

// Unirate SDK utility: result_headers

class UnirateResultHeaders
{
    public static function call(UnirateContext $ctx): ?UnirateResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
