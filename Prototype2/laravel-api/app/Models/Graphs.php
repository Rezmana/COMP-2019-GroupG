<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Graphs extends Model
{
    protected $table = 'temphumidity';
    protected $fillable = ['humidity', 'temp', 'time'];
}