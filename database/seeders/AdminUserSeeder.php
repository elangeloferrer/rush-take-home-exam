<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'fname' => 'I am',
            'lname' => 'Admin',
            'address' => 'Metro, Manila',
            'post_code' => 000,
            'phone_number' => '09999999999',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'username' => 'admin',
            'password' => 'password', // password
            'remember_token' => Str::random(10),
            'role' => 1
        ]);
    }
}
