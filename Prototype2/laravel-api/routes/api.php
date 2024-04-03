<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CoordinatesController;
use App\Http\Controllers\Api\GraphingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('user', function (Request $request) {
// Route::apiResource('HomePage', CoordinatesController::class);

Route::get('/getCoordinates', [CoordinatesController::class, 'index']);

//Added by LB to get the graph data
Route::get('/getGraphData', [GraphingController::class, 'index']);

