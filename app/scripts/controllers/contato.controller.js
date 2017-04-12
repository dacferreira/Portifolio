  'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:ContatoController
 * @description
 * # ContatoController
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('ContatoController', function (firebase) {
    var vm = this;
    vm.contatoFeito = false;
    vm.erroMensagemDeContato = false;
    
     var limparCampos = function(){
            vm.contatoFeito = true;
            vm.Nome = "";
            vm.Email = "";
            vm.Assunto = "";
            vm.Mensagem = "";            
     };

     vm.enviarMensagem = function () {
           var data = {
               nome: vm.Nome,
               email: vm.Email,
               assunto: vm.Assunto ? vm.Assunto : "",
               mensagem: vm.Mensagem,
           };
           vm.teste = data;
           if (vm.Nome && vm.Email && vm.Mensagem) {
               firebase.database().ref().child('Contato').push(data)
                   .then(function () {
                        limparCampos();                       
                   })
                   .catch(function () {
                       vm.erroMensagemDeContato = true;
                   });
           }
        };
    
    });