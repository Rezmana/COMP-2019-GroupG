<?php

namespace App\Http\Controllers;

use App\Models\userLogin;
use Illuminate\Http\Request;

use DB;


class UserLoginController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return('userLogin');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return ("hello");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {        
        $request->validate([
            'Username' => 'required|string|max:255',
            'Password' => 'required|string|min:3',
        ]);
        
        $userLogin = userLogin::create($request->all());

        return response()->json(['message' => 'Data stored successfully', 'user' => $userLogin], 201);
        
        // $request->validate([
        //     'Username' => 'required|string|max:255',
        //     'Password' => 'required|string|min:3',
        // ]);

    
        // $affected = DB::table('userlogin')->insert([
        //     'username' => $request->input('username'),
        //     'password' => $request->input('password'),
        // ]);
    
        // if($affected){
        //     return response()->json(['message' => 'Data stored successfully'], 201);
        // } else {
        //     return response()->json(['message' => 'Error occurred while storing data'], 500);
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(userLogin $userLogin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(userLogin $userLogin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $userName)
    {
        $user = UserLogin::where('Username', $userName)->first(); // Fetch the user object

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Update the user's password attribute with the new value
        $user->password = $request->input('Password');
        $user->save(); // Save the changes to the database

        return response()->json(['message' => 'User updated successfully', 'data' => $user], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($username)
// {
//     $userlogin = UserLogin::where('Username', $username)->first();

//     if (!$userlogin) {
//         return response()->json(['message' => 'User not found'], 404);
//     }

//     $userlogin->delete();

//     return response()->json(['message' => 'User deleted successfully'], 200);
// }
    {
        $userlogin = UserLogin::where('Username', $username);
        if(!$userlogin){
            // $userlogin->delete();
            return response()->json(['message' => 'Data not found'], 404);
        }
        else{
            $userlogin->delete();
            return response()->json(['message' => 'Data deleted successfully'], 200);
        }
    }
}
