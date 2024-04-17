<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TurtleData extends Model
{

    public $timestamps = false;

    protected $table = 'turtledata';

    //Had to add to fill the form in user-management/create
    protected $fillable = [
        'TurtleID',
        'Name',
        'Species'
    ];

}