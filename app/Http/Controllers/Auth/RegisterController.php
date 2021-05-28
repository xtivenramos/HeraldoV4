<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function registro(Request $request){
        // dd($request->all());
        $validator = Validator::make($request->all(),[
            'nombre' => 'required',
            'correo' => 'required|unique:usuarios,correo',
            'telefono' => 'required',
            'direccion' => 'required',
            'usuario' => 'required|unique:usuarios,usuario',
            'contraseña' => 'required|min:6',
            'confirm_contraseña' => 'required_with:contraseña|same:contraseña|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'code' => 400,
                'data' => [],
                'message' => $validator->errors()->first()
            ], 200);
        }

        DB::beginTransaction();
        try {
            $newUsuario = new User();
            $newUsuario->nombre_completo = $request->nombre;
            $newUsuario->correo = $request->correo;
            $newUsuario->telefono = $request->telefono;
            $newUsuario->direccion = $request->direccion;
            $newUsuario->usuario = $request->usuario;
            $newUsuario->password = bcrypt($request->contraseña);
            $newUsuario->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'code' => 500,
                'data' => [],
                'message' => "Hubo un error al momento de realizar el registro, intentelo más tarde",
                'th' => $th->getMessage()
            ], 200);
        }

        return response()->json([
            'code' => 200,
            'data' => [],
            'message' => "Todo salió perfectamente"
        ], 200);
    }
}
