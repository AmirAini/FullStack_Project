<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
    use HasFactory;

    protected $table = 'step';
    protected $fillable = ['task', 'description', 'todolist_id'];

    public function todolist(){
        //parent
        return $this->belongsTo(Todolist::class);

    }

    //children
    public function todolistChild(){
        return $this->hasMany(User::class);
    }
}
