<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/home', function () {
    return redirect()->route('home');
});

// Auth::routes();

Route::get('/login', [HomeController::class, 'login'])->name('login');

Route::get('/register', [HomeController::class, 'registro'])->name('register');

Route::post('logout',[Auth\LoginController::class, 'logout'])->name('logout');

Route::prefix('administracion')->group(function () {
    Route::get('/', [Admin\NoticiasController::class, 'index'])->name('admin.index');
    Route::get('/create', [Admin\NoticiasController::class, 'index'])->name('admin.create');
    Route::get('/show', [Admin\NoticiasController::class, 'index'])->name('admin.show');
});

// Route::post