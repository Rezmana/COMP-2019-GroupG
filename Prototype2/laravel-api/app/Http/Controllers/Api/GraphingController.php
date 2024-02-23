<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CoordinatesRequest;
use App\Models\Graphs;
use Illuminate\Http\Request;
use App\Http\Resources\CoordinatesResource;

class GraphingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     return CoordinatesResource::collection(Coordinates::all());
    // }
    // public function store(CoordinatesRequest $request)
    // {
    //     $company = Coordinates::create($request->validated());
    //     return new CoordinatesResource($company);
    // }
    // public function show(Coordinates $company)
    // {
    //     return new CoordinatesResource($company);
    // }
    // public function update(CoordinatesRequest $request, Coordinates $company)
    // {
    //     $company->update($request->validated());
    //     return new CoordinatesRequest($company->toArray());
    // }
    // public function destroy(Coordinates $company)
    // {
    //     $company->delete();
    //     return response()->noContent();
    // }


    public function index(){
        $data = Graphs::all(); // Assume Data model exists
        return response()->json($data);
    }

    public function update(CoordinatesRequest $request, Coordinates $company)
    {
        $company->update($request->validated());
        return new CoordinatesRequest($company->toArray());
    }

    public function store(CoordinatesRequest $request)
    {
        $company = Graphs::create($request->validated());
        return new CoordinatesResource($company);
    }

    //  returning specific data from the database and displaying.
        // public function index()
        // {
        //     $users = DB::table('users')->select('id','name','email')->get();
    
        //     return view('some-view')->with('users', $users);
        // }
        
}