<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Userlogin;

class UserController extends Controller 
{
    public function index()
    {
        $users = Userlogin::get();
        return view('pages.user-management.index', compact('users'));
    }

    public function create() 
    {
        return view('pages.user-management.create');
    }

    public function store(Request $request) 
    {
        $attributes = request()->validate([
            'Username' => 'required|max:255',
            'Password' => 'required|max:255',
            'Email' => 'required|email'
        ]);

        Userlogin::create($attributes);

        return redirect('user-management');
    }

    public function edit(int $id)
    {
        $user = Userlogin::where('UserID', $id)->first();
        return view('pages.user-management.edit', compact('user'));
    }

    public function update(Request $request, int $id)
    {
        $attributes = request()->validate([
            'UserID' => 'required',
            'Username' => 'required|max:255',
            'Email' => 'required|email'
        ]);

        Userlogin::where('UserID', $id)->update($attributes);

        return redirect('user-management');
    }

    public function delete(int $id)
    {
        Userlogin::where('UserID', $id)->delete();

        return redirect('user-management');
    }
}