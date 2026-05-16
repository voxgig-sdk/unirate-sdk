<?php
declare(strict_types=1);

// Unirate SDK base feature

class UnirateBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(UnirateContext $ctx, array $options): void {}
    public function PostConstruct(UnirateContext $ctx): void {}
    public function PostConstructEntity(UnirateContext $ctx): void {}
    public function SetData(UnirateContext $ctx): void {}
    public function GetData(UnirateContext $ctx): void {}
    public function GetMatch(UnirateContext $ctx): void {}
    public function SetMatch(UnirateContext $ctx): void {}
    public function PrePoint(UnirateContext $ctx): void {}
    public function PreSpec(UnirateContext $ctx): void {}
    public function PreRequest(UnirateContext $ctx): void {}
    public function PreResponse(UnirateContext $ctx): void {}
    public function PreResult(UnirateContext $ctx): void {}
    public function PreDone(UnirateContext $ctx): void {}
    public function PreUnexpected(UnirateContext $ctx): void {}
}
