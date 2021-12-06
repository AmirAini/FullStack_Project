<?php

namespace Database\Seeders;

use App\Models\Todolist;
use Illuminate\Database\Seeder;

class TodolistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Todolist::create([
            'users_id' => '1',
            'task' => 'task 1',
            'description' => 'task description',
            'category' => 1,
        ]);
    }
}
