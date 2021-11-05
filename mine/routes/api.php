<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/books', 'Api\ApiController@books');
// ['prefix' => 'v1'] , la rotta diventerebbe api/v1
Route::group(['middleware' => 'CORS'], function () {
    Route::resource('users', UserController::class);
    Route::resource('bookz', 'BookController', ['except' => ['index','create','show']]);
});

Route::resource('bookz', 'BookController', ['only' => ['index','create','show']]);
Route::get('/books/{title?}', 'Api\ApiController@filtered');
Route::get('/my-books/{userId?}', 'Api\ApiController@ownBooks');

Route::group(['middleware' => 'CORS'], function(){
    Route::resource('users', UserController::class);
    Route::post('/login', 'Auth\LoginController@login');
    Route::post('/register', 'Auth\RegisterController@postRegister');
});

