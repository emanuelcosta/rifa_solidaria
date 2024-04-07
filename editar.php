<?php
include('App.php');
$id = $_GET['id'];
$app = new App();
$numero = $app->get($id);
?>
<form action="update.php" method="post">
    <input name="id" value="<?= $numero['id'] ?>" type="hidden">

    <label for="numero">Número</label>
    <input name="numero" value="<?= $numero['numero'] ?>">

    <label for="nome">Nome</label>
    <input name="nome" value="<?= $numero['nome'] ?>">

    <label for="telefone">Telefone</label>
    <input name="telefone" value="<?= $numero['telefone'] ?>">

    <label for="pago">Pago?</label>
    <input name="pago" value="<?= $numero['pago'] ?>">

    <button type="submit">Salvar</button>

</form>