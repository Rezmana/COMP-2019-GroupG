<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;

class CsvController extends Controller
{
    public function upload(Request $request)
    {
        // // Initialize variables
        // $ninthColumn = [];
        // $tenthColumn = [];

        $request->validate([
            'excel_file' => 'required|file|mimes:xlsx,xls',
        ]);

        $file = $request->file('excel_file');
        $spreadsheet = IOFactory::load($file);

        $worksheet = $spreadsheet->getActiveSheet();
        // Retrieve data only if the file is successfully loaded
        $ninthColumn = $worksheet->rangeToArray('J1:J' . $worksheet->getHighestRow());
        $tenthColumn = $worksheet->rangeToArray('K1:K' . $worksheet->getHighestRow());

        return view('pages.tables', ['ninthColumn' => $ninthColumn, 'tenthColumn' => $tenthColumn]);
    }
}


?>
