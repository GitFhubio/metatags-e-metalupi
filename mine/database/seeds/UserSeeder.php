<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1=new User();
        $user1->name='Admin';
        $user1->email='admin@outlook.it';
        $user1->password = Hash::make('beinformatica');
        $user1->role ='admin';
        $user1->save();

        $user2=new User();
        $user2->name='Tim';
        $user2->email='Tim@outlook.it';
        $user2->password = Hash::make('beinformatica');
        $user2->save();

        $user3=new User();
        $user3->name='Vodafone';
        $user3->email='vodafone@outlook.it';
        $user3->password = Hash::make('beinformatica');
        $user3->save();

        $user4=new User();
        $user4->name='windtre';
        $user4->email='windtre@outlook.it';
        $user4->password = Hash::make('beinformatica');
        $user4->save();

    }

}
