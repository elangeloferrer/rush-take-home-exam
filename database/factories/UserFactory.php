<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $fname = $this->faker->firstName();
        $lname = $this->faker->lastName();
        $username = strtolower($fname . '.' . $lname);
        $emails = array('example.org', 'example.net', 'hotline.org', 'hotline.net');
        $randKey = array_rand($emails);
        return [
            'fname' => $fname,
            'lname' => $lname,
            'address' => $this->faker->address(),
            'post_code' => $this->faker->numberBetween($min = 111, $max = 999),
            'phone_number' => $this->faker->phoneNumber(),
            'email' => $username . $this->faker->numberBetween($min = 1, $max = 1000) . '@' . $emails[$randKey],
            'email_verified_at' => now(),
            'username' => str_replace(' ', '', $username),
            'password' => 'password', // password
            'remember_token' => Str::random(10),
            'role' => 2,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
