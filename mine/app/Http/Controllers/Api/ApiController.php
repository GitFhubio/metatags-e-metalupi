<?php

namespace App\Http\Controllers\Api;

use App\Book;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    public function filtered($title = null){
        $books = Book::where('title','like', '%'.$title.'%')->get();
        return response()->json($books);
    }
}
