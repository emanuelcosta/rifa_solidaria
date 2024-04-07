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

    public function get($id){
        $numeros = $this->pdo->prepare("SELECT * FROM rifas_numeros where id = :id");
        $numeros->execute([
            ':id' => $id
        ]);
        return $numeros->fetch();
    }

    public function update($data){
        $numeros = $this->pdo->prepare("UPDATE rifas_numeros SET nome = :nome, telefone = :telefone, pago = :pago WHERE id = :id;");
        $numeros->execute([
            ':id' => $data['id'],
            ':nome' => $data['nome'],
            ':telefone' => $data['telefone'],
            ':pago' => $data['pago'],
        ]);
        return $numeros->rowCount();
    }
}
