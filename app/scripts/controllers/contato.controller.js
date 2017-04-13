  'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:ContatoController
 * @description
 * # ContatoController
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('ContatoController', function ($scope, firebase) {
    var vm = this;
    vm.contatoFeito = false;
    vm.erroMensagemDeContato = false;
    
     var limparCampos = function(){
         $scope.$apply(function(){
            vm.contatoFeito = true;
            vm.Nome = "";
            vm.Email = "";
            vm.Assunto = "";
            vm.Mensagem = "";
         });       
     };
     var mensagensDeErro = function(){
        $scope.$apply(function(){
            vm.erroMensagemDeContato = true;
        });
     };

     vm.enviarMensagem = function () {

         vm.campoNomeNaoPreenchido = false;
         vm.campoEmailNaoPreenchido = false;
         //vm.campoEmailInvalido = false;
         vm.campoMensagemNaoPreenchido = false;

         if(!vm.Nome)
         {
             vm.campoNomeNaoPreenchido = true;
             return;
         }
         if(!vm.Email)
         {
             vm.campoEmailNaoPreenchido = true;
             return;
         }
         if(!vm.Mensagem)
         {
             vm.campoMensagemNaoPreenchido = true;
             return;
         }
           var data = {
               nome: vm.Nome,
               email: vm.Email,
               assunto: vm.Assunto ? vm.Assunto : "",
               mensagem: vm.Mensagem,
           };
           
           if (vm.Nome && vm.Email && vm.Mensagem) {
               firebase.database().ref().child('Contato').push(data)
                   .then(function () {
                        limparCampos();                       
                   })
                   .catch(function () {
                       mensagensDeErro();
                   });
           }
        };
    
    });