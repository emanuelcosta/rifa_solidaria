<?php
// for ($i = 1; $i <= 160; $i++) {
//     $execucao = $pdo->prepare("INSERT INTO rifas_numeros(numero) VALUES(:numero)");
//     $execucao->execute([
//         ':numero' => $i
//     ]);
// }
class App{
    private $pdo;
    public function __construct()
    {
        $this->pdo = new Pdo('sqlite:database.db');
    }

    public function getNumeros(){
        $numeros = $this->pdo->prepare("SELECT * FROM rifas_numeros");
        $numeros->execute();
        return $numeros->fetchAll();
    }
}
