let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThis(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj); //A arrow function é mais forte que o bind
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);