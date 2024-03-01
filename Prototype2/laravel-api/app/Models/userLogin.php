<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userLogin extends Model
{
    public $timestamps = false;

    protected $table = 'userlogin';

    protected $primaryKey = 'UserID';

    protected $fillable = ['Username', 'Password'];
}
