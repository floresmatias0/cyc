import"./css/index.css";import habitacion from"./assets/images/habitacion.jpg";import cocina from"./assets/images/cocina.jpg";import entrada from"./assets/images/entrada.jpg";import home from"./assets/images/home.png";import pin from"./assets/images/pin.png";let lugares=[{img:habitacion,price:"U$S 50.000",title:"Cañitas",size:"2,3 y 4 ambientes",location:"Italia 2131, San Miguel"},{img:cocina,price:"U$S 50.000",title:"Cañitas",size:"2,3 y 4 ambientes",location:"Italia 2131, San Miguel"},{img:entrada,price:"U$S 50.000",title:"Cañitas",size:"2,3 y 4 ambientes",location:"Italia 2131, San Miguel"}],container=document.getElementById("locationCards"),showLocations=()=>{let i='<div class="card">';lugares.forEach((n=>{i+=`\n        <ul>\n            <li class="contentImage">\n                <img \n                    class="imgPoster" \n                    src=${n.img} \n                    alt="poster" \n                />\n            </li>\n            <li class="price"><strong>Venta</strong> - ${n.price}</li>\n            <li class="title"><h3>${n.title}</h3></li>\n            <li class="size">\n                <img \n                    src=${home} \n                    alt="home" \n                    width="14px"\n                />  ${n.size}\n            </li>\n            <li class="location">\n                <img \n                    src=${pin} \n                    alt="location" \n                    width="14px"\n                />  ${n.location}\n            </li>\n            <button> Más información </button>\n        </ul>\n        `})),i+="</div>",container.innerHTML+=i};showLocations();