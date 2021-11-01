<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books=Book::all();
        return response()->json($books);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data=$request->all();
        $book= new Book();
        $book->title=json_decode($data['myform'],true)['title'];
        $book->author=json_decode($data['myform'],true)['author'];
        $book->price=json_decode($data['myform'],true)['price'];
        if($request->file('image')){
            $book->img = $request->file('image')->store('images');
        }
        $book->save();
        return response()->json('success');
        // return redirect()->route('offers.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book=Book::find($id);
        return response()->json($book);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data= $request->all();
       $book=Book::find($id);
       $book->title=json_decode($data['myform'],true)['title'];
        $book->author=json_decode($data['myform'],true)['author'];
         $book->price=json_decode($data['myform'],true)['price'];
        if($request->file('image')){
         $book->img = $request->file('image')->store('images');
         }
        $book->save();

        // $book->update($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   $book=Book::find($id);
        $book->delete();
    }
}
