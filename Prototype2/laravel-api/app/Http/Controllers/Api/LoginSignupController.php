<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Userlogin;

class LoginSignupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    //  returning specific data from the database and displaying.

    public function login(Request $request)
    {
        $name = $request->username;
        $password = $request->password;

        // error_log(var_export($request->session()->all(), true));
        
        if (!$name || !$password) {
            return response()->json(['res'=>'Username, password and email are required']);
        }
        
        // search adminlogin table
        $admin = DB::table('adminlogin')->where('Username', $name)->where('Password', $password)->first();
        
        // search userlogin table
        // $user = DB::table('userlogin')->where('Username', $name)->where('Password', $password)->first();
        // $user = Userlogin::where('Username', $name)->where('Password', $password)->first();

        error_log("...........................................................................");

        $attributes = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        error_log("...........................................................................");

        error_log(var_export($attributes, true));

        if (! auth()->attempt($attributes)) {
            error_log("HERE");
            return response()->json(['res' => 'Username or Password is wrong', 'code' => 400]);
        }

        error_log(var_export($request, true));
        
        error_log("VALIDATED");
        
        $request->session()->regenerate();

        return redirect('/dashboard');

        // if ($admin) {
        //     $token = $name . 'admin_token';
        //     return response()->json(['res' => 'Login Successful', 'token' => $token, 'role' => 'admin']);
        // } elseif ($user) {
        //     $token = $name . 'user_token';
        //     if (! auth()->attempt(['username'=>$name, 'password'=>$password])) {
        //         error_log("Did not login");
        //     }
        //     return redirect('/dashboard');
        //     // return response()->json(['res' => 'Login Successful', 'token' => $token, 'role' => 'user']);
        // } else {
        //     return response()->json(['res' => 'Username or Password is wrong', 'code' => 400]);
        // }
    }
    
    // Signup
    public function signup(Request $request) {
        $name = $request->username;
        $password = $request->password;
        $email = $request->email;
        
        if(!$name || !$password || !$email){
            return response()->json(['res' => 'Username, password and email are required']);
        }
        
        // search db
        $res = DB::table('userlogin')->where('Username', $name)->first();
        if($res){
            return response()->json(['res' => 'This account is already existed', 'code' => 400]);
        }

        $user = new Userlogin();
        $user->Username = $name;
        $user->Password = $password;
        $user->Email = $email;
        $user->save();
        
        
        // construct user data
        // $data = [
        //     'Username' => $name,
        //     'Password' => $password,
        //     'Email' => $email,
        // ];
        
        // // insert user data
        // $res = DB::table('userlogin')->insert($data);
        // if($res){
        //     $key = 'tZSsrbtNplgiEEGAUwYLNDcZfDGMkZEMATWwFynwMzUwVSWwORroxCro';
        //     $token = "$name$key";
        //     return response()->json(['res' => 'Signup Successful', 'code' => 200, 'token' => $token]);
        // }
    }
    

}