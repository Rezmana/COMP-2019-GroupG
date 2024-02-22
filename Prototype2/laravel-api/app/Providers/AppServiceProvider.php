<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Cache\NullStore;
use Cache;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \URL::forceScheme('http');
        Cache::extend('none', function ($app) {
            return Cache::repository(new NullStore);
        });
    }
}
