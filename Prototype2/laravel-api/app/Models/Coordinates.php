<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coordinates extends Model
{
    protected $table = 'coordinates';
    protected $fillable = ['latitude', 'longitude', 'TurtleID', 'Time'];
    public $timestamps = false;
    protected $casts = [
        'latitude' => 'float',
        'longitude' => 'float',
    ];
}
