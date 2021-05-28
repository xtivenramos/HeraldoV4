<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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
    /* public function __construct()
    {
        $this->middleware('guest')->except('logout');
    } */

    public function isLogged(Request $request)
    {
        // dd("SI");
        if(Auth::check())
        {
            return response()->json([
                'code' => 200,
                'data' => Auth::user()->nombre_completo,
                'message' => "El usuario se encuentra logeado"
            ], 200);
        }else{
            return response()->json([
                'code' => 500,
                'data' => null,
                'message' => "No se encuentra logeado"
            ], 200);
        }
    }

    public function login(Request $request)
    {
        
        $validator = Validator::make($request->all(),[
            'usuario' => 'required|exists:usuarios,usuario',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'code' => 400,
                'data' => [],
                'message' => $validator->errors()->first()
            ], 200);
        }

        $credentials = $request->only('usuario', 'password');
        if(Auth::attempt($credentials))
        {
            $token = User::where('usuario', $request->usuario)->first();
            
            // dd($token->token);
            return response()->json([
                'code' => 200,
                'data' => $token->createToken('MyApp')->accessToken,
                'message' => "Logeo realizado correctamente"
            ], 200);
        }else{
            return response()->json([
                'code' => 400,
                'data' => [],
                'message' => 'Credenciales incorrectas'
            ], 200);
        }
    }

    public function logout()
    {
        if(Auth::check())
        {
            Auth::logout();
            return response()->json([
                'code' => 200,
                'data' => [],
                'message' => 'Desconectado correctamente'
            ], 200);
        }else{
            return response()->json([
                'code' => 400,
                'data' => [],
                'message' => 'Error'
            ], 200);
        }
    }

}
