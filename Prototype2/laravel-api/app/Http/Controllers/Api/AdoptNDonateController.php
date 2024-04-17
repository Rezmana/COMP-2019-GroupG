<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Donations;


class AdoptNDonateController extends Controller
{

    public function donate(Request $request)
    {
        // get request from frontend
        $username = $request->input('username');
        $donationAmountDouble = $request->input('donationAmount');
        $isAnonymously = $request->input('isAnonymously');

        // if anonymous, make userid null
        $userId = $isAnonymously ? 0 : DB::table('userlogin')->where('Username', $username)->value('UserID');

        // creat donation record
        $donations = new Donations();
        $donations->UserID = $userId;
        $donations->Time = now(); // set Time as current time
        $donations->DonationAmount = $donationAmountDouble;
        $donations->save();
    
        return response()->json(['message' => 'Donation recorded successfully']);
    }
    
    
    public function donors()
    {
        $donors = Donations::where('UserID', '!=', 0)
                           ->select('UserID', DB::raw('SUM(DonationAmount) as totalDonation'))
                           ->groupBy('UserID')
                           ->with('user')
                           ->orderByDesc('totalDonation')
                           ->get();// Use Associated query search data from userlogin table

        $rank = 1;
        foreach ($donors as $donor) {
            $donor->rank = $rank++;
        }
        return response()->json(['donors' => $donors]);
    }

    public function totalamount()
    {
        $totalAmount = Donations::sum('DonationAmount');

        return response()->json(['totalAmount' => $totalAmount]);
    }
    
}
