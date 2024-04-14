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
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('guest')->name('dashboard');
Route::post('/upload', [CsvController::class, 'upload'])->name('upload');
Route::post('sign-out', [SessionsController::class, 'destroy'])->middleware('guest')->name('logout');

Route::get('user-management', [UserController::class, 'index'])->middleware('guest')->name('user-management');
Route::get('user-management/create', [UserController::class, 'create'])->middleware('guest');
Route::post('user-management/create', [UserController::class, 'store'])->middleware('guest');
Route::get('user-management/{id}/edit', [UserController::class, 'edit'])->middleware('guest');
Route::put('user-management/{id}/edit', [UserController::class, 'update'])->middleware('guest');
Route::get('user-management/{id}/delete', [UserController::class, 'delete'])->middleware('guest');

Route::group(['middleware' => 'guest'], function () {
	Route::get('billing', function () {
		return view('pages.billing');
	})->name('billing');
	Route::get('tables', function () {
		return view('pages.tables');
	})->name('tables');
	Route::get('notifications', function () {
		return view('pages.notifications');
	})->name('notifications');
	Route::get('static-sign-in', function () {
		return view('pages.static-sign-in');
	})->name('static-sign-in');
	Route::get('static-sign-up', function () {
		return view('pages.static-sign-up');
	})->name('static-sign-up');
});
