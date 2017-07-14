<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
	//fix MassAssignmentException in tinker
	protected $fillable = ['message'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
