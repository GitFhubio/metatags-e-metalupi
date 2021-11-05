<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
  protected $fillable = ['user_id','title','price','author','img'];

  public function user(){
    return $this->belongsTo('App\User');
}
}

