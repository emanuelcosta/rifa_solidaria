<?php
include('App.php');
$app = new App();
try{
$data = $_POST;
$update = $app->update([
    'id' => $data['id'],
    'nome' => $data['nome'],
    'telefone' => $data['telefone'],
    'pago' => $data['pago']
]);

if($update == 0){
    throw new \Exception('Não foi possível alterar ponto.');
}

header('Location: consulta.php');

}catch(\Exception $e){
    
    echo "Não foi possível alterar ponto.".$e->getMessage();
}
