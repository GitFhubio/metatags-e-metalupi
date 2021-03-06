<?php

namespace App\Http\Controllers\Auth;

use App\Book;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest')->except('logout');
    }
        public function login(Request $request){
    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required',
    ],
    [ 'email.required' => 'Please Enter Your Email',
    'password.required' => 'Please Enter Your Password',

    ]);
    switch($request->email){
       case 'admin@outlook.it':
        $role='admin';
        break;
       default:
       $role='user';
    }

    // $currentId=User::where('email',$request->email)->first()->id; // o Auth id che già ho a sto punto
    if ($validator->fails()) {
        $message = ['errors' => $validator->errors()];
                return  Response::json($message, 202);
    } else {
        $credentials = $request->only('email', 'password');
        try {
            $token = JWTAuth::attempt($credentials);
            if ($token) {
                $message = ['success' => $token];
                return Response::json(["token" => $token, "role"=>$role, "id"=>Auth::id()], 200);
            } else {
                $message = ['errors' => "Invalid credentials"];
                return  Response::json($message, 202);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
    }
}


}
