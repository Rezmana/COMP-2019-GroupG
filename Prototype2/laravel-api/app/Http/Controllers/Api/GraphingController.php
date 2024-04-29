<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CoordinatesRequest;
use App\Models\Graphs;
use Illuminate\Http\Request;
use App\Http\Resources\CoordinatesResource;

class GraphingController extends Controller
{
    public function index(){
        $data = Graphs::all(); // Assume Data model exists
        return response()->json($data);
    }
}