const cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2019
    },
    {
        brand: "Ford",
        model: "Fiesta",
        year: 2014
    },
    {
        brand: "Renault",
        model: "Clio",
        year: 2010
    },
]

/* Criando uma função */
function displayCars() {
    //Variave
    const cardList = document.querySelector("#card-list")

    cars.forEach((car) => 
    {
        console.log(car)
        // Criamos um elemento div pelo JavaScript
        const cardDiv = document.createElement("div")
        // Criando uma classe css car
        cardDiv.classList.add("car")

        // Criando o modelo
        const cardModel = document.createElement("h2");
        cardModel.textContent = `${car.brand} ${car.model}`

        // Criando o Ano
        const cardYear = document.createElement("p")
        cardYear.textContent = `Ano ${car.year}`

        cardDiv.appendChild(cardModel)
        cardDiv.appendChild(cardYear)
        
        cardList.appendChild(cardDiv)




    })
}

// Chamar função 
displayCars()

