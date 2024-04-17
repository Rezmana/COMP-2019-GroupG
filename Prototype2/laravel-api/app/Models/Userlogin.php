<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLogin extends Model
{

    public $timestamps = false;

    protected $table = 'userlogin';

    //Had to add to fill the form in user-management/create
    protected $fillable = [
        'UserID',
        'Username',
        'Password',
        'Email'
    ];

}