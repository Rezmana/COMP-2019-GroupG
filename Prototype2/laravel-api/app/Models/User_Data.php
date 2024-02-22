<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_Data extends Model
{

    // use HasFactory;
    protected $table = 'user__data';

    protected $fillable = ['UserID','FirstName','Surname', 'Email', 'TurtleID'];

}
