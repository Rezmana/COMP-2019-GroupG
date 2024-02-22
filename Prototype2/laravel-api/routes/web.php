<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CoordinatesController;
use App\Http\Controllers\Api\UserDataController;
use App\Http\Controllers\UserLoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('coordinates', function (Request $request) {
    return response()->json([
        'message' => $request->message,
    ]);
});

// Route::get('getCoordinates', [UserLoginController::class, 'index']);
// Route::post('storeUserLogin', [UserLoginController::class, 'store']);
