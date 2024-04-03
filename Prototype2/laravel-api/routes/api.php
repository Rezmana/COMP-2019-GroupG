<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CoordinatesController;

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
Route::get('/getCoordinates/{id}', [CoordinatesController::class, 'show']);
