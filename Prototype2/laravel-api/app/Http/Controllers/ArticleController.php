<?php

namespace App\Http\Controllers;

header('Access-Control-Allow-Origin: *');

use Illuminate\Http\Request;
use App\Models\Articles;

class ArticleController extends Controller 
{
    public function index()
    {
        $articles = Articles::get();
        return view('pages.articles-table.index', compact('articles'));
    }

    public function edit(int $ID)
    {
        $article = Articles::where('ArticleID', $ID)->first();
        return view('pages.articles-table.edit', compact('article'));
    }

    public function update(Request $request, int $ID)
    {
        $attributes = request()->validate([
            'Title' => 'required',
            'Description' => 'required',
            'URL' => 'required'
        ]);

        Articles::where('ArticleID', $ID)->update($attributes);

        return redirect('articles-table');
    }

    public function delete(int $ID)
    {
        Articles::where('ArticleID', $ID)->delete();

        return redirect('articles-table');
    }
}