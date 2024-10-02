"use strict";
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
//funções usando paradigma funcional
function functionalReturnBio(id) {
    var _a;
    return (_a = lista.find((user) => user.id == id)) === null || _a === void 0 ? void 0 : _a.bio;
}
function functionalReturnName(id) {
    var _a;
    return (_a = lista.find((user) => user.id == id)) === null || _a === void 0 ? void 0 : _a.name;
}
function functionalDeleteItem(id) {
    return lista.filter((user) => user.id !== id);
}
function functionalChangeItem(id, bio, name) {
    return lista.map((pessoa) => pessoa.id === id ? Object.assign(Object.assign({}, pessoa), { name: name || pessoa.name, bio: bio || pessoa.bio }) : pessoa);
}
//funcões usando paradigma imperativo
function imperativeReturnBio(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id)
            return lista[i].bio;
    }
}
function imperativeReturnName(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id)
            return lista[i].name;
    }
}
function imperativeDeleteItem(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id)
            lista.splice(i, 1);
    }
    return lista;
}
function imperativeChangeItem(id, bio, name) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            if (bio)
                lista[i].bio = bio;
            else if (name)
                lista[i].name = name;
        }
    }
    return lista;
}
//# sourceMappingURL=searcharray.js.map