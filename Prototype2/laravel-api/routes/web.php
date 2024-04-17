<?php

use Illuminate\Support\Facades\Route;

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

use Illuminate\Http\Request;

Route::post('coordinates', function (Request $request) {
    return response()->json([
        'message' => $request->message,
    ]);
});

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SessionsController;
use App\Http\Controllers\CsvController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CoordinatesTableController;
use App\Http\Controllers\TempHumidityTableController;
use App\Http\Controllers\TurtleController;
use App\Http\Controllers\ArticleController;

//THESE ARE THE LOGIN PAGE/SIGN UP
Route::get('/', function () {return redirect('sign-in');})->middleware('guest');
Route::get('sign-up', [RegisterController::class, 'create'])->middleware('guest')->name('register');
Route::post('sign-up', [RegisterController::class, 'store'])->middleware('guest');
Route::get('sign-in', [SessionsController::class, 'create'])->middleware('guest')->name('login');
Route::post('sign-in', [SessionsController::class, 'store'])->middleware('guest');
Route::post('verify', [SessionsController::class, 'show'])->middleware('guest');
Route::post('reset-password', [SessionsController::class, 'update'])->middleware('guest')->name('password.update');
Route::get('verify', function () {
	return view('sessions.password.verify');
})->middleware('guest')->name('verify');
Route::get('/reset-password/{token}', function ($token) {
	return view('sessions.password.reset', ['token' => $token]);
})->middleware('guest')->name('password.reset');


//THESE ARE PART OF THE DASHBOARD PAGE
Route::post('/upload', [CsvController::class, 'upload'])->name('upload');

Route::get('user-management', [UserController::class, 'index'])->middleware('guest')->name('user-management');
Route::get('user-management/create', [UserController::class, 'create'])->middleware('guest');
Route::post('user-management/create', [UserController::class, 'store'])->middleware('guest');
Route::get('user-management/{id}/edit', [UserController::class, 'edit'])->middleware('guest');
Route::put('user-management/{id}/edit', [UserController::class, 'update'])->middleware('guest');
Route::get('user-management/{id}/delete', [UserController::class, 'delete'])->middleware('guest');

Route::get('coordinates-table', [CoordinatesTableController::class, 'index'])->middleware('guest')->name('coordinates-table');
Route::get('coordinates-table/{Latitude}/{Longitude}/{Time}/edit', [CoordinatesTableController::class, 'edit'])->middleware('guest');
Route::put('coordinates-table/{Latitude}/{Longitude}/{Time}/edit', [CoordinatesTableController::class, 'update'])->middleware('guest');
Route::get('coordinates-table/{Latitude}/{Longitude}/{Time}/delete', [CoordinatesTableController::class, 'delete'])->middleware('guest');

Route::get('temphumidity-table', [TempHumidityTableController::class, 'index'])->middleware('guest')->name('temphumidity-table');
Route::get('temphumidity-table/create', [TempHumidityTableController::class, 'create'])->middleware('guest');
Route::post('temphumidity-table/create', [TempHumidityTableController::class, 'store'])->middleware('guest');
Route::get('temphumidity-table/{Temperature}/{Humidity}/{Time}/edit', [TempHumidityTableController::class, 'edit'])->middleware('guest');
Route::put('temphumidity-table/{Temperature}/{Humidity}/{Time}/edit', [TempHumidityTableController::class, 'update'])->middleware('guest');
Route::get('temphumidity-table/{Temperature}/{Humidity}/{Time}/delete', [TempHumidityTableController::class, 'delete'])->middleware('guest');

Route::get('turtle-table', [TurtleController::class, 'index'])->middleware('guest')->name('turtle-table');
Route::get('turtle-table/create', [TurtleController::class, 'create'])->middleware('guest');
Route::post('turtle-table/create', [TurtleController::class, 'store'])->middleware('guest');
Route::get('turtle-table/{TurtleID}/{Name}/{Species}/edit', [TurtleController::class, 'edit'])->middleware('guest');
Route::put('turtle-table/{TurtleID}/{Name}/{Species}/edit', [TurtleController::class, 'update'])->middleware('guest');
Route::get('turtle-table/{TurtleID}/{Name}/{Species}/delete', [TurtleController::class, 'delete'])->middleware('guest');

Route::get('articles-table', [ArticleController::class, 'index'])->middleware('guest')->name('articles-table');
Route::get('articles-table/{ID}/edit', [ArticleController::class, 'edit'])->middleware('guest');
Route::put('articles-table/{ID}/edit', [ArticleController::class, 'update'])->middleware('guest');
Route::get('articles-table/{ID}/delete', [ArticleController::class, 'delete'])->middleware('guest');

Route::group(['middleware' => 'guest'], function () {
	Route::get('static-sign-in', function () {
		return redirect('http://localhost:5173/Login');
	})->name('static-sign-in');
	Route::get('static-sign-up', function () {
		return redirect('http://localhost:5173/signup');
	})->name('static-sign-up');
	Route::post('sign-out', function () {
		return redirect('http://localhost:5173/Login');
	})->name('logout');
});
