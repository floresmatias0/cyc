import "./css/index.css";
import home from "./assets/images/home.png";
import pin from "./assets/images/pin.png";
import habitacion from "./assets/images/habitacion.jpg";
import cocina from "./assets/images/cocina.jpg";
import entrada from "./assets/images/entrada.jpg";

let lugares = [
    {   
        img : habitacion,
        price: "U$S 50.000",
        title: "Cañitas",
        size: "2,3 y 4 ambientes",
        location: "Italia 2131, San Miguel"
    },
    {   
        img : cocina,
        price: "U$S 50.000",
        title: "Cañitas",
        size: "2,3 y 4 ambientes",
        location: "Italia 2131, San Miguel"
    },
    {   
        img : entrada,
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
                    src=${home} 
                    alt="home" 
                    width="14px"
                />  ${element.size}
            </li>
            <li class="location">
                <img 
                    src=${pin} 
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

}

showLocations();