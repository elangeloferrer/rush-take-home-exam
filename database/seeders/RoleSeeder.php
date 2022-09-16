<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'title' => 'Admin',
            'description' => 'Admin Account',
            'code' => 1,
        ]);

        Role::create([
            'title' => 'User',
            'description' => 'Normal Account',
            'code' => 2,
        ]);
    }
}
