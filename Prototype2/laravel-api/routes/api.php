<?php

// use App\Http\Controllers\Api\UserDataController;
use App\Http\Controllers\UserDataController;
use App\Http\Controllers\UserLoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CoordinatesController;
// use App\Http\Controllers\Api\UserLoginController;


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

Route::get('getCoordinates', [CoordinatesController::class, 'index']);

Route::post('storeUserData', [UserDataController::class, 'store']);

Route::post('/storeUserDetails', [UserDataController::class, 'store']);

// Route::post('storeUserLogin', [UserLoginController::class, 'store']);
Route::match(['get', 'post'], 'storeUserLogin', [UserLoginController::class, 'store']);
Route::match(['get', 'post', 'delete'], '/deleteUserLogin/{Username}', [UserLoginController::class, 'destroy']);
Route::match(['get', 'post', 'put'], '/updateUserLogin/{Username}', [UserLoginController::class, 'update']);
// Route::any('storeUserLogin', [UserLoginController::class, 'store']);