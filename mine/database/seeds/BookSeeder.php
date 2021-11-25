<?php

use App\Book;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
    // for ($i=0; $i < 4 ; $i++) {
    //     $book= new Book();
    //     $book->title=$faker->word();
    //     $book->author=$faker->word();
    //     $book->price= number_format(rand(100, 1000) / 100, 2);
    //   $book->save();
    // }
     $book1= new Book();
     $book1->user_id=2;
     $book1->title="La compagnia dei celestini";
    $book1->author="Stefano Benni";
    $book1->price=9.99;
    $book1->img="images/f5TTwD5HFt36Rb1zsMhm3lNVGPzBuLDa2GQPo6tD.jpg";
    $book1->save();

    $book2= new Book();
    $book2->user_id=2;
    $book2->title="Il trono di spade";
   $book2->author="G.R.R Martin";
   $book2->price=29.99;
   $book2->img="images/0gplJIpjmFyStrPXsHCufE4ReKEhJ09u23s0uXUO.jpg";
   $book2->save();

   $book3= new Book();
   $book3->user_id=3;
   $book3->title="Il ladro di merendine";
  $book3->author="A.Camilleri";
  $book3->price=12.99;
  $book3->img="images/OAPxLRnujvUPDJYxGHXEJTJXpUpN97avQe6SigOn.jpg";
  $book3->save();
    }
}
