<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::controller(ProfileController::class)->prefix('profile')->as('profile.')->group(function () {
        Route::get('/{id}/edit', 'edit')->name('edit');
        Route::put('{request}/{id}', 'update')->name('update');
        Route::delete('/{id}', 'destroy')->name('destroy');
    });

    // Exemplo de rota com prefixo e nome
    /*
    Route::group(['middleware' => 'auth', 'prefix' => 'child', 'as' => 'child.'], function () {
        Route::get('/child1', function () {
            return Inertia::render('Dashboard');
        })->name('child1');
    // na rota: route('child.child1')
    // no navegador: http://localhost:8000/child/child1
    });
    */
});

// exemplo de rota para notificação
Route::post('/notify/{type}', function ($type) {
    return back()->toast('Notificação do servidor =)', $type);
});

require __DIR__ . '/auth.php';
