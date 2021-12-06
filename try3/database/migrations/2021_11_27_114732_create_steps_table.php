<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('step', function (Blueprint $table) {
            $table->id();
            
            //foriegn key
            $table->unsignedBigInteger('todolist_id');
            
            $table->string('task');
            $table->text('description');
            $table->integer('category');
            $table->timestamps();

            
            //Reference
            $table->foreign('todolist_id')->references('id')->on('todolist');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('step');
    }
}
