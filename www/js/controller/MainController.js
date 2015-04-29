document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}
function alertDismissed() {
    // do something
}
app.controller('MainController',
['$scope', function ($scope) {
    $scope.title = 'Produtos';
    $scope.tarefas = [
        { text: "Requeijão", done: false},
        { text:"Manteiga", done: false},
        { text: "Leite do Gabriel", done: false },
        { text: "Água de Coco", done: false },
        { text: "Carne", done: false },
        { text: "Frango", done: false },
        { text: "Pão Integral", done: false }
    ]   
    $scope.vibrateNotify = function() {
        navigator.notification.vibrate(500);
    };
    $scope.beepNotify = function() {
        navigator.notification.beep(1);
    };
    $scope.MsgFinal = function(){
        navigator.notification.alert(
            'Você comprou todos os itens da lista.',
            alertDismissed,
            'Lista de Compras',
            'Feito!'
        );
    };
    $scope.TarefasRestantes = function () {
        var count = 0;
        angular.forEach($scope.tarefas, function (tarefa) {
            count += tarefa.done ? 0 : 1;
        });
        if (count > 0) {
            var texto = "Faltam "+ count +" produtos para completar a lista.";
        } else {
            var texto = "Todos os produtos comprados";
             $scope.vibrateNotify();
             $scope.beepNotify();
             $scope.MsgFinal();
        }
        return texto;
    }

    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
    $scope.products =
	[
		{
		    name: 'Refrigerador / Geladeira Electrolux Frost Free DF36A Branco 310L',
		    price: 1480,
		    pubdate: 'Cod.(1000)',
		    cover: 'img/1000.png',
		    likes: 0,
		    dislikes: 0,
		    btnComprar: 'img/botao-quero-comprar.png'
		},
		{
		    name: 'Fogão de Piso Continental 5 Bocas Calore Inox Queimador Super Chama e Forno com 97 Litros',
		    price: 1050,
		    //pubdate: new Date('2013', '08', '01'),
		    pubdate: 'Cod.(1001)',
		    cover: 'img/1001.jpg',
		    likes: 0,
		    dislikes: 0,
		    btnComprar: 'img/botao-quero-comprar.png'
		},
		{
		    name: 'Micro-ondas Brastemp Clean BMC20 20 Litros Cinza',
		    price: 330,
		    pubdate: 'Cod.(1002)',
		    cover: 'img/1002.png',
		    likes: 0,
		    dislikes: 0,
		    btnComprar: 'img/botao-quero-comprar.png'
		},
		{
		    name: 'Lavadora de Roupas Brastemp Ative 9Kg BWL09 Branca',
		    price: 1180,
		    pubdate: 'Cod.(1003)',
		    cover: 'img/1003.jpg',
		    likes: 0,
		    dislikes: 0,
		    btnComprar: 'img/botao-quero-comprar.png'
		}
	]
}]);