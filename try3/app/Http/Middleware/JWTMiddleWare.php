<?php

namespace App\Http\Middleware;
use JWTAuth;
use Closure;
use Exception;
use Illuminate\Http\Request;

class JWTMiddleWare
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try{
            $user = JWTAuth::parseToken()->authenticate();
        }
        catch (Exception $e){
            if ($e instanceof \TymonJWTAuth\Exceptions\TokenInvalidException){
                return response()->json(['status'=>'Token is Invalid']);
            } else if ($e instanceof \TymonJWTAuth\Exceptions\TokenExpiredExeption) {
                return response()->json(['status'=>'Token is Expired']);
            } else {
                return response()->json(['status'=>'Authorization Token not found']);
            }
        }
        return $next($request);
    }
}
