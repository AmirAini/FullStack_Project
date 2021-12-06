<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Traits\JsonTrait;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    use JsonTrait;
    //

    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        //if validation not met (first)
        if ($validator->fails()) {
            return $this->jsonResponse(
                $validator->errors(),
                'Invalid Input Parameters',
                422); //!client side error
            
        }

        //no token
        if (!$token = JWTAuth::attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    //!Create user
    public function register(Request $request){
        $validator = Validator::make($request->all(),
        [
            'name' => 'required|min:4',
            'email'=> 'required|email',
            'password'=>'required'
        ]);

        //if validation register fail
        if ($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    //! Logout
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }

    //!refresh token
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    //!userProfile
    public function userProfile() {
        return response()->json(auth()->user());
    }



    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

}

