<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Articles extends Model
// class Articles extends Model 
{
    protected $table = 'articles';
    protected $fillable = ['ArticleID', 'Title', 'Description', 'URL'];
    public $timestamps = false;
}
