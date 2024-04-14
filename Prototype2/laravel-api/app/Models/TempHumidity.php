<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TempHumidity extends Model
{
    protected $table = 'temphumidity';
    protected $fillable = ['Temperature', 'Humidity', 'Time'];
    public $timestamps = false;
}
