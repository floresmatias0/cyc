let lugares = [
    {   
        img : "assets/images/habitacion.jpg",
        price: "U$S 50.000",
        title: "Cañitas",
        size: "2,3 y 4 ambientes",
        location: "Italia 2131, San Miguel"
    },
    {   
        img : "assets/images/cocina.jpg",
        price: "U$S 50.000",
        title: "Cañitas",
        size: "2,3 y 4 ambientes",
        location: "Italia 2131, San Miguel"
    },
    {   
        img : "assets/images/entrada.jpg",
        price: "U$S 50.000",
        title: "Cañitas",
        size: "2,3 y 4 ambientes",
        location: "Italia 2131, San Miguel"
    }
];

let container = document.getElementById("locationCards");

let showLocations = () => {
    let newContainer = `<div class="card">`

    lugares.forEach(element => {

        newContainer+=`
        <ul>
            <li class="contentImage">
                <img 
                    class="imgPoster" 
                    src=${element.img} 
                    alt="poster" 
                />
            </li>
            <li class="price"><strong>Venta</strong> - ${element.price}</li>
            <li class="title"><h3>${element.title}</h3></li>
            <li class="size">
                <img 
                    src="assets/images/home.png" 
                    alt="home" 
                    width="14px"
                />  ${element.size}
            </li>
            <li class="location">
                <img 
                    src="assets/images/pin.png" 
                    alt="location" 
                    width="14px"
                />  ${element.location}
            </li>
            <button> Más información </button>
        </ul>
        `;
    });

    newContainer += `</div>`

    container.innerHTML += newContainer; 
    // container.innerHTML = join(
    //     newContainer
    // ); 


}

showLocations();