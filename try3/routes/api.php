<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\StepController;
use App\Http\Controllers\StepsController;
use App\Http\Controllers\TodolistController;

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

//!To generate the documents you need to generate the scribe
Route::post('/register',[ApiController::class, 'register']);
Route::post('/login', [ApiController::class, 'login']);



//!After login
Route::group([
    'middleware' => 'auth.jwt',],function(){
        Route::post('/logout', [ApiController::class, 'logout']);
        Route::post('/todolist', [TodolistController::class, 'store']);
        Route::put('/todolist/{$id}', [TodolistController::class, 'update']);
        Route::delete('/todolist/{$id}',[TodolistController::class, 'destroy']);
        
        Route::post('/step', [StepController::class, 'store']);
        Route::put('/step/{$id}', [StepController::class, 'update']);
        Route::delete('/step/{$id}',[SteplistController::class, 'destroy']);
    });


   
    





// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    //     return $request->user();
    // });
    
    Route::get('/get/todolist/{todo_id}', [TodolistController::class, 'show']);
    Route::get('/todolist/{id}', [TodolistController::class, 'index']);
    Route::resource('/todolist', TodolistController::class);
    Route::get('/step/{id}',[StepController::class, 'index']);
    Route::resource('/step', StepController::class);
    
    Route::post('/step', [StepController::class, 'store']);
