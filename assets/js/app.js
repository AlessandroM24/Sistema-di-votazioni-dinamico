class Progetto {
    constructor(nomeProgetto) {
        this._nomeProgetto = nomeProgetto;
        this._voti = 0;
    }

    aumentaVoto() {
        this._voti++;
        aggiornaInterfaccia();
    }

    get nomeProgetto() {
        return this._nomeProgetto;
    }

    get voti() {
        return this._voti;
    }
}

const elencoProgetti = [
    new Progetto("Progetto 1"),
    new Progetto("Progetto 2"),
    new Progetto("Progetto 3")
];

function aggiornaInterfaccia() {
    elencoProgetti.sort((a, b) => b.voti - a.voti);
    const listaProgetti = document.getElementById("listaProgetti");
    listaProgetti.innerHTML = "";

    for (let i = 0; i < elencoProgetti.length; i++) {
        const progetto = elencoProgetti[i];
        const elemLista = document.createElement("li");
        elemLista.textContent = `${progetto.nomeProgetto}: ${progetto.voti} voti `;
        listaProgetti.appendChild(elemLista);

        const pulsante = document.createElement("button");
        pulsante.textContent = "Aumenta voto";
        pulsante.addEventListener("click", () => {
            progetto.aumentaVoto();
        });
        elemLista.appendChild(pulsante);
    }
}

aggiornaInterfaccia();