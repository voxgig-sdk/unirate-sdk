<?php
declare(strict_types=1);

// Unirate SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

UnirateUtility::setRegistrar(function (UnirateUtility $u): void {
    $u->clean = [UnirateClean::class, 'call'];
    $u->done = [UnirateDone::class, 'call'];
    $u->make_error = [UnirateMakeError::class, 'call'];
    $u->feature_add = [UnirateFeatureAdd::class, 'call'];
    $u->feature_hook = [UnirateFeatureHook::class, 'call'];
    $u->feature_init = [UnirateFeatureInit::class, 'call'];
    $u->fetcher = [UnirateFetcher::class, 'call'];
    $u->make_fetch_def = [UnirateMakeFetchDef::class, 'call'];
    $u->make_context = [UnirateMakeContext::class, 'call'];
    $u->make_options = [UnirateMakeOptions::class, 'call'];
    $u->make_request = [UnirateMakeRequest::class, 'call'];
    $u->make_response = [UnirateMakeResponse::class, 'call'];
    $u->make_result = [UnirateMakeResult::class, 'call'];
    $u->make_point = [UnirateMakePoint::class, 'call'];
    $u->make_spec = [UnirateMakeSpec::class, 'call'];
    $u->make_url = [UnirateMakeUrl::class, 'call'];
    $u->param = [UnirateParam::class, 'call'];
    $u->prepare_auth = [UniratePrepareAuth::class, 'call'];
    $u->prepare_body = [UniratePrepareBody::class, 'call'];
    $u->prepare_headers = [UniratePrepareHeaders::class, 'call'];
    $u->prepare_method = [UniratePrepareMethod::class, 'call'];
    $u->prepare_params = [UniratePrepareParams::class, 'call'];
    $u->prepare_path = [UniratePreparePath::class, 'call'];
    $u->prepare_query = [UniratePrepareQuery::class, 'call'];
    $u->result_basic = [UnirateResultBasic::class, 'call'];
    $u->result_body = [UnirateResultBody::class, 'call'];
    $u->result_headers = [UnirateResultHeaders::class, 'call'];
    $u->transform_request = [UnirateTransformRequest::class, 'call'];
    $u->transform_response = [UnirateTransformResponse::class, 'call'];
});
