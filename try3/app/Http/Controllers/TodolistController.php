<?php

namespace App\Http\Controllers;

use App\Models\Todolist;
use App\Models\User;
use Illuminate\Http\Request;
use PDO;

class TodolistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $id)
    {
        //!call all
        // $userID = User::where('id',$request->id)->first();
        return Todolist::where('users_id',$id)->get();
        // return Todolist::get();
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
        $todolist = new Todolist;
        $todolist->users_id = $request->users_id;
        $todolist->task = $request->task;
        $todolist->description = $request->description;
        $todolist->category = $request->category;
        $todolist->save();
        return response()->json([
            "message" => "todolist Added."
        ], 201);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($todo_id)
    {
        //
        // return Todolist::find($id, $todo_id);
        return Todolist::where('id',$todo_id)->get();
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

        Todolist::whereId($id)->update([
            'task'=>$request->task,
            'description'=>$request->description,
            'category'=>$request->category,
        ]);
    }
    //     if (Todolist::where($id)->exists()) {
    //         $todolist = Todolist::find($id);
    //         $todolist->users_id = is_null($request->users_id) ? $todolist->users_id : $request->users_id;
    //         $todolist->task = is_null($request->task) ? $todolist->task : $request->task;
    //         $todolist->category = is_null($request->category) ? $todolist->category : $request->category;
    //         $todolist->description = is_null($request->description) ? $todolist->description : $request->description;
    //         $todolist->save();
    //         return response()->json([
    //             "message" => "todolist Updated."
    //         ], 404);
    //     }else{
    //         return response()->json([
    //             "message" => "todolist Not Found."
    //         ], 404);
    //     }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Todolist::whereId($id)->delete();
    }
}
