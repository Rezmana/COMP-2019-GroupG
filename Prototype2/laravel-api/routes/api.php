<?php

use App\Http\Controllers\Api\CoordinatesController;
use App\Http\Controllers\Api\LoginSignupController;
use App\Http\Controllers\Api\AdoptNDonateController;
use App\Http\Controllers\Api\ApiArticleController;
use App\Http\Controllers\Api\GraphingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Api Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Api routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your Api!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('user', function (Request $request) {
// Route::apiResource('HomePage', CoordinatesController::class);S

Route::get('/getCoordinates', [CoordinatesController::class, 'index']);

Route::get('/article', [ApiArticleController::class, 'index']);

Route::get('/getGraphData', [GraphingController::class, 'index']);

Route::post('/login', [LoginSignupController::class, 'login']);
Route::post('/signup', [LoginSignupController::class, 'signup']);

Route::post('/donate', [AdoptNDonateController::class, 'donate']);
Route::get('/donors', [AdoptNDonateController::class, 'donors']);
Route::get('/totalamount', [AdoptNDonateController::class, 'totalamount']);