<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NoticiasController extends Controller
{
    public function index()
    {
        return view('system.Admin.index');
    }

    public function create()
    {
        return view('system.Admin.create');
    }

    public function show()
    {
        return view('system.Admin.show')
    }
}
