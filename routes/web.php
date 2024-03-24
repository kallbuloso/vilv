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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/account', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('account');
Route::get('/editor', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('editor');

Route::group(['prefix' => 'child', 'as' => 'child.'], function () {
    Route::get('/child1', function () {
        return Inertia::render('Dashboard');
    })->name('child1');
    Route::get('/child2', function () {
        return Inertia::render('Dashboard');
    })->name('child2');
    Route::get('/child3', function () {
        return Inertia::render('Dashboard');
    })->name('child3');
});
Route::group(['prefix' => 'child2', 'as' => 'child2.'], function () {
    Route::get('/child1', function () {
        return Inertia::render('Dashboard');
    })->name('child1');
    Route::get('/child2', function () {
        return Inertia::render('Dashboard');
    })->name('child2');
    Route::get('/child3', function () {
        return Inertia::render('Dashboard');
    })->name('child3');
});
// Route::group(['middleware' => 'auth'], function () {
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     })->name('dashboard');
//     Route::get('/account', function () {
//         return Inertia::render('Dashboard');
//     })->name('account');
//     Route::get('/editor', function () {
//         return Inertia::render('Dashboard');
//     })->name('editor');
// });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
