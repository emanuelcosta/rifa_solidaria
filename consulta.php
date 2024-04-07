<table>
    <thead>
    <tr>
            <th>ID</th>
            <th>Número</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Pago</th>
            <th>Ações</th>
        </tr>
    </thead>

    <tbody>
        <?php 
        include('App.php');
        $app = new App();
        foreach($app->getNumeros() as $numero){
        ?>
    <tr>
            <td><?= $numero['id'] ?></td>
            <td><?= $numero['numero'] ?></td>
            <td><?= $numero['nome'] ?></td>
            <td><?= $numero['telefone'] ?></td>
            <td><?= $numero['pago'] ?></td>
            <td><a href="editar.php?id=<?= $numero['id']?>">Editar</a></td>
        </tr>
        <?php } ?>
    </tbody>
</table>