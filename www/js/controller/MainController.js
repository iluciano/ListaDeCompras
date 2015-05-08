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
}]);