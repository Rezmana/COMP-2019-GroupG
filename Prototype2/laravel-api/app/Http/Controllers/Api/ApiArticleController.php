<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Articles;
use App\Http\Controllers\Controller;


class ApiArticleController extends Controller 
{
    public function index()
    {
        $data = Articles::all(); // Assume Data model exists
        return response()->json($data);
    }
}