<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\UsersModel;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    //post method
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' =>'required',
            'address' =>'required',
            'phone' =>'required',
            'email' =>'required',
            'password' =>'required',
            'role_id' =>'required',
            'image' =>'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all(), 400]);
        } 
        $user = new UsersModel();
        $user->name = $request->name;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->role_id = $request->role_id;
        $user->image = $request->image;
        $user->save();
    }
}
