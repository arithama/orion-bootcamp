let lista = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  },
];

//funções usando paradigma funcional

function functionalReturnBio(id: number) {
  return lista.find((user) => user.id == id)?.bio;
}

function functionalReturnName(id: number) {
  return lista.find((user) => user.id == id)?.name;
}

function functionalDeleteItem(id: number) {
  return lista.filter((user) => user.id !== id);
}

function functionalChangeItem(id: number, bio?: string, name?: string) {
  return lista.map((pessoa) =>
    pessoa.id === id
      ? { ...pessoa, name: name || pessoa.name, bio: bio || pessoa.bio }
      : pessoa
  );
}

//funcões usando paradigma imperativo

function imperativeReturnBio(id: number) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) return lista[i].bio;
  }
}

function imperativeReturnName(id: number) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) return lista[i].name;
  }
}

function imperativeDeleteItem(id: number) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) lista.splice(i, 1);
  }
  return lista;
}

function imperativeChangeItem(id: number, bio?: string, name?: string) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      if (bio) lista[i].bio = bio;
      if (name) lista[i].name = name;
    }
  }
  return lista;
}

function populateTable() {
  clearTable();
  const tableElement = document.getElementById("table");
  if (!tableElement) {
    throw new Error("Table element not found");
  }
  let tableBody = tableElement.getElementsByTagName("tbody")[0];
  if (!tableBody) {
    tableBody = document.createElement("tbody");
    tableElement.appendChild(tableBody);
  }
  lista.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.bio}</td>
                                <td><button onclick="deleteIt(${user.id})">Delete</button></td>
                                <td><button onclick="editIt(${user.id})">Edit</button></td>
                        `;
    tableBody.appendChild(row);
  });
}

(window as any).deleteIt = function (id: number): void {
  imperativeDeleteItem(id);
  clearTable();
  populateTable();
};

(window as any).editIt = function (id: number): void {
  const name = prompt("Enter new name:") || undefined;
  const bio = prompt("Enter new bio:") || undefined;
  imperativeChangeItem(id, bio, name);
  clearTable();
  populateTable();
};

function clearTable(): void {
  const tableElement = document.getElementById("table");
  if (tableElement) {
    const tableBody = tableElement.getElementsByTagName("tbody")[0];
    if (tableBody) {
      tableBody.innerHTML = "";
    }
  }
}

populateTable();
