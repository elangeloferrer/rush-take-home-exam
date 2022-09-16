<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fname' => 'required|alpha',
            'lname' => 'required|alpha',
            'address' => 'required|string',
            'post_code' => 'required|integer',
            'role' => 'required|integer',
            'phone_number' => 'required|string',
            'email' => 'required|email|unique:users',
            'username' => 'required|string',
            'password' => 'required|string|confirmed|min:6',
        ];
    }
}
