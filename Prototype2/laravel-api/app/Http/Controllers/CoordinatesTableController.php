<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coordinates;

class CoordinatesTableController extends Controller 
{
    public function index()
    {
        $coordinates = Coordinates::get();
        return view('pages.coordinates-table.index', compact('coordinates'));
    }

    // public function create() 
    // {
    //     return view('user-management.create');
    // }

    // public function store(Request $request) 
    // {
    //     $attributes = request()->validate([
    //         'Username' => 'required|max:255',
    //         'Password' => 'required|max:255',
    //         'Email' => 'required|email'
    //     ]);

    //     Userlogin::create($attributes);

    //     return redirect('user-management');
    // }

    public function edit(float $Latitude, float $Longitude, string $Time)
    {
        $coordinate = Coordinates::where('Latitude', $Latitude)->where('Longitude', $Longitude)->where('Time', $Time)->first();
        error_log(var_export($coordinate, true));
        return view('pages.coordinates-table.edit', compact('coordinate'));
    }

    public function update(Request $request, float $Latitude, float $Longitude, string $Time)
    {
        $attributes = request()->validate([
            'Latitude' => 'required|numeric',
            'Longitude' => 'required|numeric',
            'Time' => 'required|date_format:Y-m-d H:i:s'
        ]);

        Coordinates::where('Latitude', $Latitude)->where('Longitude', $Longitude)->where('Time', $Time)->update($attributes);

        return redirect('coordinates-table');
    }

    public function delete(float $Latitude, float $Longitude, string $Time)
    {
        Coordinates::where('Latitude', $Latitude)->where('Longitude', $Longitude)->where('Time', $Time)->delete();

        return redirect('coordinates-table');
    }
}