<?php
declare(strict_types=1);

// Unirate SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class UnirateMakeContext
{
    public static function call(array $ctxmap, ?UnirateContext $basectx): UnirateContext
    {
        return new UnirateContext($ctxmap, $basectx);
    }
}
