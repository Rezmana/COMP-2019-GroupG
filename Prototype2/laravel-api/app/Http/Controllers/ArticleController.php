<?php

namespace App\Http\Controllers;

header('Access-Control-Allow-Origin: *');

use Illuminate\Http\Request;
use App\Models\Articles;

class ArticleController extends Controller 
// class ArticleController extends Controller
{
    public function index()
    // This function is used to get all the articles from the database and return the view of the articles-table page with the articles data.
    {
        $articles = Articles::get();
        return view('pages.articles-table.index', compact('articles'));
    }

    public function edit(int $ID)
    // This function is used to get the article with the given ID from the database and return the view of the articles-table edit page with the article data.
    {
        $article = Articles::where('ArticleID', $ID)->first();
        return view('pages.articles-table.edit', compact('article'));
    }

    public function update(Request $request, int $ID)
    // This function is used to update the article with the given ID in the database and redirect to the articles-table page.
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
    // This function is used to delete the article with the given ID from the database and redirect to the articles-table page.
    {
        Articles::where('ArticleID', $ID)->delete();

        return redirect('articles-table');
    }
}