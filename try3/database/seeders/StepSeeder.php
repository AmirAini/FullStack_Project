<?php

namespace Database\Seeders;

use App\Models\Step;
use Illuminate\Database\Seeder;

class StepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Step::create([
            'todolist_id' => '1', 
            'task' => 'step 1',
            'description' => 'pray', 
            'category'=>1,
        ]);

        Step::create([
            'todolist_id' => '1', 
            'task' => 'step 2',
            'description' => 'pray harder', 
            'category'=>1,
        ]);

        Step::create([
            'todolist_id' => '1', 
            'task' => 'step 3',
            'description' => 'pray harder', 
            'category'=>1,
        ]);
    }
}
