<?php

namespace App\Http\Controllers;

use App\Models\Coordinates;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;

class CsvController extends Controller
{
    public function upload(Request $request)
{
    $request->validate([
        'excel_file' => 'required|file|mimes:xlsx,xls',
    ]);

    $file = $request->file('excel_file');
    $spreadsheet = IOFactory::load($file);

    $worksheet = $spreadsheet->getActiveSheet();

    // Retrieve data from columns
    $longitudeColumn = $worksheet->rangeToArray('J1:J' . $worksheet->getHighestRow());
    $latitudeColumn = $worksheet->rangeToArray('K1:K' . $worksheet->getHighestRow());
    $timeColumn = $worksheet->rangeToArray('E1:E' . $worksheet->getHighestRow());
    $turtleIdColumn = $worksheet->rangeToArray('A1:A' . $worksheet->getHighestRow());

    // Process each row
for ($i = 1; $i < count($longitudeColumn); $i++) {
    // Check if a record with the same Longitude, Latitude, and TurtleID already exists
    $existingCoordinate = Coordinates::where('Longitude', $longitudeColumn[$i][0])
        ->where('Latitude', $latitudeColumn[$i][0])
        ->where('TurtleID', $turtleIdColumn[$i][0])
        ->first();

    if (!$existingCoordinate) {
        // Create new Coordinate instance and save it to the database
        $coordinates = new Coordinates;
        $coordinates->Longitude = $longitudeColumn[$i][0];
        $coordinates->Latitude = $latitudeColumn[$i][0];
        $coordinates->Time = \Carbon\Carbon::parse($timeColumn[$i][0]);
        $coordinates->TurtleID = $turtleIdColumn[$i][0];
        $coordinates->save();
    }
}

    return redirect()->back()->with('success', 'Data imported successfully.');
}
}


?>
