<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TurtleData;

class TurtleController extends Controller 
{
    public function index()
    {
        $turtles = TurtleData::get();
        return view('pages.turtle-table.index', compact('turtles'));
    }

    public function create() 
    {
        return view('pages.turtle-table.create');
    }

    public function store(Request $request) 
    {
        $attributes = request()->validate([
            'TurtleID' => 'required|int',
            'Name' => 'required',
            'Species' => 'required'
        ]);

        TurtleData::create($attributes);

        return redirect('turtle-table');
    }

    public function edit(int $TurtleID, string $Name, string $Species)
    {
        $turtle = TurtleData::where('TurtleID', $TurtleID)->where('Name', $Name)->where('Species', $Species)->first();
        return view('pages.turtle-table.edit', compact('turtle'));
    }

    public function update(Request $request, int $TurtleID, string $Name, string $Species)
    {
        $attributes = request()->validate([
            'TurtleID' => 'required|int',
            'Name' => 'required',
            'Species' => 'required'
        ]);

        TurtleData::where('TurtleID', $TurtleID)->where('Name', $Name)->where('Species', $Species)->update($attributes);

        return redirect('turtle-table');
    }

    public function delete(int $TurtleID, string $Name, string $Species)
    {
        TurtleData::where('TurtleID', $TurtleID)->where('Name', $Name)->where('Species', $Species)->delete();

        return redirect('turtle-table');
    }
}