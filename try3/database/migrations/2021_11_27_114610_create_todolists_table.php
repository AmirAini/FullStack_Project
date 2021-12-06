<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodolistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todolist', function (Blueprint $table) {
            $table->id();
            
            //Foriegn Key
            $table->unsignedBigInteger('users_id');

            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('task');
            $table->text('description');
            $table->integer('category');
            $table->timestamps();

            //Reference
            $table->foreign('users_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todolists');
    }
}
