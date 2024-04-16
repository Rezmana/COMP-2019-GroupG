<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TempHumidity;

class TempHumidityTableController extends Controller 
{
    public function index()
    {
        $temphumids = TempHumidity::get();
        return view('pages.temphumidity-table.index', compact('temphumids'));
    }

    public function create() 
    {
        return view('pages.temphumidity-table.create');
    }

    public function store(Request $request) 
    {
        $attributes = request()->validate([
            'Temperature' => 'required|int',
            'Humidity' => 'required|int',
            'Time' => 'required|date_format:Y-m-d H:i:s'
        ]);

        TempHumidity::create($attributes);

        return redirect('temphumidity-table');
    }

    public function edit(int $Temperature, int $Humidity, string $Time)
    {
        $temphumid = TempHumidity::where('Temperature', $Temperature)->where('Humidity', $Humidity)->where('Time', $Time)->first();
        return view('pages.temphumidity-table.edit', compact('temphumid'));
    }

    public function update(Request $request, int $Temperature, int $Humidity, string $Time)
    {
        $attributes = request()->validate([
            'Temperature' => 'required|int',
            'Humidity' => 'required|int',
            'Time' => 'required|date_format:Y-m-d H:i:s'
        ]);

        TempHumidity::where('Temperature', $Temperature)->where('Humidity', $Humidity)->where('Time', $Time)->update($attributes);

        return redirect('temphumidity-table');
    }

    public function delete(int $Temperature, int $Humidity, string $Time)
    {
        TempHumidity::where('Temperature', $Temperature)->where('Humidity', $Humidity)->where('Time', $Time)->delete();

        return redirect('temphumidity-table');
    }
}