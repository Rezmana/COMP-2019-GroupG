<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donations extends Model
{
    public $timestamps = false;

    protected $table = 'donations';

    public function user()
    {
        return $this->belongsTo(UserLogin::class, 'UserID', 'UserID');
    }

}
