<?php

namespace App\Http\Controllers;

use App\Models\User_Data;
use Illuminate\Http\Request;

class UserDataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         
        $data = User_Data::all(); // Assume Data model exists
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // $request->validate([
        //     'name' => 'required|max:32',
        //     'email' => 'required:email',
        // ]);
        // $user_data = new User_Data;
        // $user_data->name = $request->input('Surname');
        // $user_data->email = $request->input('Email');
        // $user_data->Save();
        User_Data::create($request->all());

        return ('Data Stored Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(User_Data $user_Data)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User_Data $user_Data)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User_Data $user_Data)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User_Data $user_Data)
    {
        //
    }
}
