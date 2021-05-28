<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNoticiasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('noticias', function (Blueprint $table) {
            $table->bigIncrements('idNoticia');
            $table->string('nombre');
            $table->string('descripcion');
            $table->string('periodista');
            $table->boolean('visible')->default(1);
            $table->string('fecha_creacion');
            $table->string('hora_noticia');
            $table->string('categoria');
            $table->longText('imagen');
            $table->longText('resumen');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('noticias');
    }
}
