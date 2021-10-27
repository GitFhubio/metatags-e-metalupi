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
    for ($i=0; $i < 4 ; $i++) {
        $book= new Book();
        $book->title=$faker->word();
        $book->author=$faker->word();
        $book->price= number_format(rand(100, 1000) / 100, 2);
      $book->save();
    }
    }
}
