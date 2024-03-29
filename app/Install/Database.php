<?php

namespace App\Install;

use DotenvEditor;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class Database
{
    /**
     * @param $data
     */
    public function setup($data)
    {
        $this->checkDatabaseConnection($data);
        $this->setEnvVariables($data);
        $this->migrateDatabase();
    }

    /**
     * @param $data
     */
    private function checkDatabaseConnection($data)
    {
        $this->setupDatabaseConnectionConfig($data);
        DB::connection('mysql')->reconnect();
        DB::connection('mysql')->getPdo();
    }

    /**
     * @param $data
     */
    private function setupDatabaseConnectionConfig($data)
    {
        config([
            'database.default' => 'mysql',
            'database.connections.mysql.host' => $data['host'],
            'database.connections.mysql.port' => $data['port'],
            'database.connections.mysql.database' => $data['database'],
            'database.connections.mysql.username' => $data['username'],
            'database.connections.mysql.password' => $data['password'],
        ]);

    }

    /**
     * @param $data
     */
    private function setEnvVariables($data)
    {
        $env = DotenvEditor::load();
        $env->setKey('DB_HOST', $data['host']);
        $env->setKey('DB_PORT', $data['port']);
        $env->setKey('DB_DATABASE', $data['database']);
        $env->setKey('DB_USERNAME', $data['username']);
        $env->setKey('DB_PASSWORD', $data['password']);

        $env->save();
    }

    private function migrateDatabase()
    {
        Artisan::call('migrate');
        Artisan::call('storage:link');
        Artisan::call('cache:clear');
        Artisan::call('view:clear');
        Artisan::call('db:seed');

    }
}