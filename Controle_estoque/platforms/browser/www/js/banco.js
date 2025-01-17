// banco
var db = window.openDatabase("Database", "1.0", "cadastro", 2000000);
db.transaction(createDB, errorDB, sucessDB);
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    db.transaction(createDB, errorDB, sucessDB);
}

function errorDB(err) {
    alert("Erro: " + err);
}

function sucessDB() {
}

//criação de tabela
function createDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS cadastro (id INTEGER PRIMARY KEY, nome VARCHAR(500), descricao VARCHAR(500), quantidade NUM(3), preco NUM(5))');
}

// comando de inserir dados no banco
function cadastro_insert() {
    db.transaction(cadastro_insert_db, errorDB, sucessDB);
}

function cadastro_insert_db(tx) {
    var nome = $("#nome_produto").val();
    var descricao = $("#desc_produto").val();
    var quantidade = $("#quant_produto").val();
    var preco = $("#preco_produto").val();

    tx.executeSql('INSERT INTO cadastro (nome, descricao, quantidade, preco) VALUES ("' + nome + '", "' + descricao + '", "' + quantidade + '", "' + preco + '")');
}

function cadastro_view() {
    db.transaction(cadastro_view_db, errorDB, sucessDB);
}

//função mostrar dados - visualizar
function cadastro_view() {
    db.transaction(cadastro_view_db, errorDB, sucessDB);
}

function cadastro_view_db(tx) {
    tx.executeSql('SELECT * FROM cadastro', [], cadastro_view_data, errorDB);
}

function cadastro_view_data(tx, results) {
    $("#produto_lista").empty();
    var len = results.rows.length;

    for (var i = 0; i < len; i++) {
        $("#produto_lista").append("<tr class='produto_item_lista' id='produto_item_" + results.rows.item(i).id + "'>" +
            "<td><h3>" + results.rows.item(i).nome + "</h3></td>" +
            "</tr>");
    }

}

//função de voltar tela
function voltar() {
    window.location.assign("index.html");
}


// codigo completo do estoque
/*for (var i = 0; i < len; i++) {
        $("#Estoque_select").append("<div id='item_" + results.rows.item(i).id + "'>" +
            "<strong><h2>" + results.rows.item(i).nome + "</h2></strong>" +
            "Descrição: <label class='text-grey'>" + results.rows.item(i).descricao + "<label>" +
            "Quantidade: <label class='text-grey'>" + results.rows.item(i).quantidade + "</label>" +
            "Preço: <label class='text-grey'>" + results.rows.item(i).preco + "</label>" +
            "<button class='orange icon-text small' style='margin-left: 130px;'>" +
            "<i class='icon ion-navicon-round'></i><a href='#' style='color: white;'> Detalhes</a>" +
            "</button>" +
            "</div>");
    } */