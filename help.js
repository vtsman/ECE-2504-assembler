/**
 * Created by Spencer on 12/11/15.
 */
var examples = {
    "LDI": "//"
};

var exp = {
    "LDI": 'LDI, or load immediate allows one to store a constant number between 0 and 7 in a register. LDI is often used to initialize registers for ' +
    'an operation like <span class="code black">jmp</span>.',
    "INC": "INC, or increment, accepts "
};

var desc = {
    "LDI": 'R[DR]←zf OP; PC ← PC +1'
};

var syntax = {
    "LDI": "destination register, operator"
};

asmctrl.controller('HelpController', function($scope, $sce, func){

    $scope.getExp = function(){
        return $sce.trustAsHtml(exp[func]);
    };
    
    $scope.getDesc = function(){
        return $sce.trustAsHtml(desc[func]);
    };

    $scope.getSchema = function(){
        /*var schema = argTypes[instructions[func.toUpperCase()].type];
        var erargs = [];
        for(var key in schema.args){
            switch(schema.args[key]){
                case "reg": erargs.push("register"); break;
                case "op": erargs.push("operator"); break;
                case "addr": erargs.push("offset"); break;
            }
        }
        return func + " " + erargs.join(" ");*/
        return func + " " + syntax[func];
    };

    $scope.openTab = function(){
        asm.selectTab(asm.createTab(func, examples[func]));
        modalInstance.close();
    }

    $scope.inst = func;
    $scope.opcode = instructions[func].opcode
});

function openHelp(helpFunc){
    modalInstance = modal.open({
        animation: true,
        templateUrl: 'help_modal.html',
        controller: "HelpController",
        size: 'lg',
        resolve: {
            func: function(){
                return helpFunc;
            }
        }
    });
}
