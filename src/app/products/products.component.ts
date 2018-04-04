import { Component, OnInit } from '@angular/core';
import { worker } from 'cluster';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let container = document.querySelector('.container');


    //RESULTADO SEGÚN LA SELECCIÓN DEL USUARIO
    let muebles = document.querySelector('.muebles')
    let accesorios = document.querySelector('.accesorios')
    let electrodomesticos = document.querySelector('.electrodomesticos')
    let herramientas = document.querySelector('.herramientas')
    let industrias = document.querySelector('.industrias')
    let computacion = document.querySelector('.computacion')

    let menuProducts = document.querySelector('.menuProducts')
   
   
   
    fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC178483', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(function (respt) {
        return respt.json();
      })
      .then(function (data) {
        console.log(data);

        let container = document.querySelector('.container');
        container.innerHTML = '';
        for (let i = 0; i < data.results.length; i++) {
          let box = document.createElement('div');
          box.className = 'box';
          let title = document.createElement('div');
          title.className = 'title';
          let image = document.createElement('div');
          let price = document.createElement('div');
          price.className = 'price';
          
          title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
          let imageSRC = document.createElement('img');
          imageSRC.className = 'imageSRC';
          imageSRC.style.borderRadius = '0px 10px 0px 10px';
          imageSRC.style.border = '2px #0d68c2 solid';
          imageSRC.setAttribute('src', data.results[i].thumbnail)
          price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
          price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
          image.appendChild(imageSRC)
          box.appendChild(title)
          box.appendChild(image)
          box.appendChild(price)
          
          let button = document.createElement('button');
          button.textContent = 'Ver detalle';
          button.className = 'button';

          button.addEventListener('click', function(){
            //creamos la sección con el detalle del producto
            let seccion = document.createElement('section');
            seccion.className = 'detailContainer';
            //contenedor del detalle del producto
            let cajaProducto = document.createElement('div');
            cajaProducto.className = 'productBox';
            //div de la imágen del producto
            let cajaImagen = document.createElement('div');
            cajaImagen.className= 'imageBox';
            let imagenProducto = event.target.parentNode.children[0].parentNode.children[1].firstChild.getAttribute('src');
            //creamos la etiqueta img
            let showImagen = document.createElement('img');
            showImagen.setAttribute('src', imagenProducto);
            //div que contiene los detalles de texto
            let dataProduct = document.createElement('div');
            dataProduct.className= 'dataProduct';
            //titulo del producto
            let titleProduct = event.target.parentNode.firstChild.textContent;
            //descripción del producto
            let descriptionProduct = document.createElement('div');
            descriptionProduct.className= 'descriptionProduct';
            let parragraphDetail = document.createElement('p');
            let textDetail = document.createTextNode('Práctica y funcional en labores de construcción, el Esmeril Angular 4,5" 820W BDEG820 de Black & Decker es una herramienta eléctrica que permite cortar y desbastar materiales como el metal, concreto, cerámica, piedra y madera.');
            descriptionProduct.appendChild(parragraphDetail);
            parragraphDetail.appendChild(textDetail);
            //precio del producto
            let priceProduct = document.createElement('div');
            priceProduct.className= 'priceProduct';
            let showPrice = document.createElement('p');
            let priceDetail = event.target.parentNode.children[2].textContent;
            let textPrice = document.createTextNode(priceDetail);
            priceProduct.appendChild(showPrice);
            showPrice.appendChild(textPrice);
            //sugerencia maestros
            let workers = document.createElement('div');
            workers.className= 'suggestion';
            let titleWorker = document.createElement('h5');
            let textTitleWorker = document.createTextNode('Maestros disponibles');
            workers.appendChild(titleWorker);
            titleWorker.appendChild(textTitleWorker);
            //lista de maestros
            let listWorker = document.createElement('div');
            listWorker.className='listSuggestion';
            let blockWorker1 = document.createElement('p');
            let blockWorker2 = document.createElement('p');
            let worker1 = document.createTextNode('Maestro 1 ');
            let worker2 = document.createTextNode('Maestro 2 ');
            let worker3 = document.createTextNode('Maestro 3 ');
            listWorker.appendChild(blockWorker1);
            blockWorker1.appendChild(worker1);
            listWorker.appendChild(blockWorker2);
            blockWorker2.appendChild(worker2);
            listWorker.appendChild(worker3);
            //boton añadir
            let botones = document.createElement('div');
            let addButton = document.createElement('button');
            addButton.className= 'addButton';
            let textAdd = document.createTextNode('Añadir');
            botones.appendChild(addButton);
            addButton.appendChild(textAdd);
            //boton cerrar
            let botones2 = document.createElement('div');
            let buttonClouse = document.createElement('button');
            buttonClouse.className= 'addButton'
            buttonClouse.textContent = 'Cerrar';
            botones2.appendChild(buttonClouse);

            //apendeo de elementos principales 
            seccion.appendChild(cajaProducto);
            cajaProducto.appendChild(cajaImagen);
            cajaProducto.appendChild(dataProduct);
            cajaImagen.appendChild(showImagen);
            dataProduct.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)));
            dataProduct.appendChild(descriptionProduct);
            dataProduct.appendChild(priceProduct);
            dataProduct.appendChild(workers);
            dataProduct.appendChild(listWorker);
            dataProduct.appendChild(addButton);
            dataProduct.appendChild(botones2);
            
            let boxx = document.querySelector('.boxx');
            boxx.appendChild(seccion)
           
            container.style.display = 'none';
            buttonClouse.addEventListener('click', function(){
              container.style.display = 'flex';
              boxx.style.display = 'none';
              location.reload();

            })
            
          })

          box.appendChild(button);
          container.appendChild(box)

        }

      })


    muebles.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1574', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);


          let container = document.querySelector('.container');
          container.innerHTML = '';
          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
          let title = document.createElement('div');
          title.className = 'title';
          let image = document.createElement('div');
          let price = document.createElement('div');
          price.className = 'price';
          
          title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
          let imageSRC = document.createElement('img');
          imageSRC.className = 'imageSRC';
          imageSRC.style.borderRadius = '0px 10px 0px 10px';
          imageSRC.style.border = '2px #0d68c2 solid';
          imageSRC.setAttribute('src', data.results[i].thumbnail)
          price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
          price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
          image.appendChild(imageSRC)
          box.appendChild(title)
          box.appendChild(image)
          box.appendChild(price)
          
          let button = document.createElement('button');
          button.textContent = 'Ver detalle';
          button.className = 'button';

          button.addEventListener('click', function(){
            //creamos la sección con el detalle del producto
            let seccion = document.createElement('section');
            seccion.className = 'detailContainer';
            //contenedor del detalle del producto
            let cajaProducto = document.createElement('div');
            cajaProducto.className = 'productBox';
            //div de la imágen del producto
            let cajaImagen = document.createElement('div');
            cajaImagen.className= 'imageBox';
            let imagenProducto = event.target.parentNode.children[0].parentNode.children[1].firstChild.getAttribute('src');
            //creamos la etiqueta img
            let showImagen = document.createElement('img');
            showImagen.setAttribute('src', imagenProducto);
            //div que contiene los detalles de texto
            let dataProduct = document.createElement('div');
            dataProduct.className= 'dataProduct';
            //titulo del producto
            let titleProduct = event.target.parentNode.firstChild.textContent;
            //descripción del producto
            let descriptionProduct = document.createElement('div');
            descriptionProduct.className= 'descriptionProduct';
            let parragraphDetail = document.createElement('p');
            let textDetail = document.createTextNode('Práctica y funcional en labores de construcción, el Esmeril Angular 4,5" 820W BDEG820 de Black & Decker es una herramienta eléctrica que permite cortar y desbastar materiales como el metal, concreto, cerámica, piedra y madera.');
            descriptionProduct.appendChild(parragraphDetail);
            parragraphDetail.appendChild(textDetail);
            //precio del producto
            let priceProduct = document.createElement('div');
            priceProduct.className= 'priceProduct';
            let showPrice = document.createElement('p');
            let priceDetail = event.target.parentNode.children[2].textContent;
            let textPrice = document.createTextNode(priceDetail);
            priceProduct.appendChild(showPrice);
            showPrice.appendChild(textPrice);
            //sugerencia maestros
            let workers = document.createElement('div');
            workers.className= 'suggestion';
            let titleWorker = document.createElement('h5');
            let textTitleWorker = document.createTextNode('Maestros disponibles');
            workers.appendChild(titleWorker);
            titleWorker.appendChild(textTitleWorker);
            //lista de maestros
            let listWorker = document.createElement('div');
            listWorker.className='listSuggestion';
            let blockWorker1 = document.createElement('p');
            let blockWorker2 = document.createElement('p');
            let worker1 = document.createTextNode('Maestro 1 ');
            let worker2 = document.createTextNode('Maestro 2 ');
            let worker3 = document.createTextNode('Maestro 3 ');
            listWorker.appendChild(blockWorker1);
            blockWorker1.appendChild(worker1);
            listWorker.appendChild(blockWorker2);
            blockWorker2.appendChild(worker2);
            listWorker.appendChild(worker3);
            //boton añadir
            let botones = document.createElement('div');
            let addButton = document.createElement('button');
            addButton.className= 'addButton';
            let textAdd = document.createTextNode('Añadir');
            botones.appendChild(addButton);
            addButton.appendChild(textAdd);
            //boton cerrar
            let botones2 = document.createElement('div');
            let buttonClouse = document.createElement('button');
            buttonClouse.className= 'addButton'
            buttonClouse.textContent = 'Cerrar';
            botones2.appendChild(buttonClouse);

            //apendeo de elementos principales 
            seccion.appendChild(cajaProducto);
            cajaProducto.appendChild(cajaImagen);
            cajaProducto.appendChild(dataProduct);
            cajaImagen.appendChild(showImagen);
            dataProduct.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)));
            dataProduct.appendChild(descriptionProduct);
            dataProduct.appendChild(priceProduct);
            dataProduct.appendChild(workers);
            dataProduct.appendChild(listWorker);
            dataProduct.appendChild(addButton);
            dataProduct.appendChild(botones2);
            
            let boxx = document.querySelector('.boxx');
            boxx.appendChild(seccion)
           
            container.style.display = 'none';
            buttonClouse.addEventListener('click', function(){
              container.style.display = 'flex';
              boxx.style.display = 'none';
              location.reload();

              })
              
            })    
  
            box.appendChild(button);
            container.appendChild(box)
  
          }

        })    

    })

    accesorios.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1747', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            let box = document.createElement('div');
          box.className = 'box';
          let title = document.createElement('div');
          title.className = 'title';
          let image = document.createElement('div');
          let price = document.createElement('div');
          price.className = 'price';
          
          title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
          let imageSRC = document.createElement('img');
          imageSRC.className = 'imageSRC';
          imageSRC.style.borderRadius = '0px 10px 0px 10px';
          imageSRC.style.border = '2px #0d68c2 solid';
          imageSRC.setAttribute('src', data.results[i].thumbnail)
          price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
          price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
          image.appendChild(imageSRC)
          box.appendChild(title)
          box.appendChild(image)
          box.appendChild(price)
          
          let button = document.createElement('button');
          button.textContent = 'Ver detalle';
          button.className = 'button';

          button.addEventListener('click', function(){
            //creamos la sección con el detalle del producto
            let seccion = document.createElement('section');
            seccion.className = 'detailContainer';
            //contenedor del detalle del producto
            let cajaProducto = document.createElement('div');
            cajaProducto.className = 'productBox';
            //div de la imágen del producto
            let cajaImagen = document.createElement('div');
            cajaImagen.className= 'imageBox';
            let imagenProducto = event.target.parentNode.children[0].parentNode.children[1].firstChild.getAttribute('src');
            //creamos la etiqueta img
            let showImagen = document.createElement('img');
            showImagen.setAttribute('src', imagenProducto);
            //div que contiene los detalles de texto
            let dataProduct = document.createElement('div');
            dataProduct.className= 'dataProduct';
            //titulo del producto
            let titleProduct = event.target.parentNode.firstChild.textContent;
            //descripción del producto
            let descriptionProduct = document.createElement('div');
            descriptionProduct.className= 'descriptionProduct';
            let parragraphDetail = document.createElement('p');
            let textDetail = document.createTextNode('Práctica y funcional en labores de construcción, el Esmeril Angular 4,5" 820W BDEG820 de Black & Decker es una herramienta eléctrica que permite cortar y desbastar materiales como el metal, concreto, cerámica, piedra y madera.');
            descriptionProduct.appendChild(parragraphDetail);
            parragraphDetail.appendChild(textDetail);
            //precio del producto
            let priceProduct = document.createElement('div');
            priceProduct.className= 'priceProduct';
            let showPrice = document.createElement('p');
            let priceDetail = event.target.parentNode.children[2].textContent;
            let textPrice = document.createTextNode(priceDetail);
            priceProduct.appendChild(showPrice);
            showPrice.appendChild(textPrice);
            //sugerencia maestros
            let workers = document.createElement('div');
            workers.className= 'suggestion';
            let titleWorker = document.createElement('h5');
            let textTitleWorker = document.createTextNode('Maestros disponibles');
            workers.appendChild(titleWorker);
            titleWorker.appendChild(textTitleWorker);
            //lista de maestros
            let listWorker = document.createElement('div');
            listWorker.className='listSuggestion';
            let blockWorker1 = document.createElement('p');
            let blockWorker2 = document.createElement('p');
            let worker1 = document.createTextNode('Maestro 1 ');
            let worker2 = document.createTextNode('Maestro 2 ');
            let worker3 = document.createTextNode('Maestro 3 ');
            listWorker.appendChild(blockWorker1);
            blockWorker1.appendChild(worker1);
            listWorker.appendChild(blockWorker2);
            blockWorker2.appendChild(worker2);
            listWorker.appendChild(worker3);
            //boton añadir
            let botones = document.createElement('div');
            let addButton = document.createElement('button');
            addButton.className= 'addButton';
            let textAdd = document.createTextNode('Añadir');
            botones.appendChild(addButton);
            addButton.appendChild(textAdd);
            //boton cerrar
            let botones2 = document.createElement('div');
            let buttonClouse = document.createElement('button');
            buttonClouse.className= 'addButton'
            buttonClouse.textContent = 'Cerrar';
            botones2.appendChild(buttonClouse);

            //apendeo de elementos principales 
            seccion.appendChild(cajaProducto);
            cajaProducto.appendChild(cajaImagen);
            cajaProducto.appendChild(dataProduct);
            cajaImagen.appendChild(showImagen);
            dataProduct.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)));
            dataProduct.appendChild(descriptionProduct);
            dataProduct.appendChild(priceProduct);
            dataProduct.appendChild(workers);
            dataProduct.appendChild(listWorker);
            dataProduct.appendChild(addButton);
            dataProduct.appendChild(botones2);
            
            let boxx = document.querySelector('.boxx');
            boxx.appendChild(seccion)
           
            container.style.display = 'none';
            buttonClouse.addEventListener('click', function(){
              container.style.display = 'flex';
              boxx.style.display = 'none';
              location.reload();
              })
      
            })
         
  
            box.appendChild(button);
            container.appendChild(box)
  
          }    

        })
    })

    electrodomesticos.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC5726', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            let box = document.createElement('div');
          box.className = 'box';
          let title = document.createElement('div');
          title.className = 'title';
          let image = document.createElement('div');
          let price = document.createElement('div');
          price.className = 'price';
          
          title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
          let imageSRC = document.createElement('img');
          imageSRC.className = 'imageSRC';
          imageSRC.style.borderRadius = '0px 10px 0px 10px';
          imageSRC.style.border = '2px #0d68c2 solid';
          imageSRC.setAttribute('src', data.results[i].thumbnail)
          price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
          price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
          image.appendChild(imageSRC)
          box.appendChild(title)
          box.appendChild(image)
          box.appendChild(price)
          
          let button = document.createElement('button');
          button.textContent = 'Ver detalle';
          button.className = 'button';

          button.addEventListener('click', function(){
            //creamos la sección con el detalle del producto
            let seccion = document.createElement('section');
            seccion.className = 'detailContainer';
            //contenedor del detalle del producto
            let cajaProducto = document.createElement('div');
            cajaProducto.className = 'productBox';
            //div de la imágen del producto
            let cajaImagen = document.createElement('div');
            cajaImagen.className= 'imageBox';
            let imagenProducto = event.target.parentNode.children[0].parentNode.children[1].firstChild.getAttribute('src');
            //creamos la etiqueta img
            let showImagen = document.createElement('img');
            showImagen.setAttribute('src', imagenProducto);
            //div que contiene los detalles de texto
            let dataProduct = document.createElement('div');
            dataProduct.className= 'dataProduct';
            //titulo del producto
            let titleProduct = event.target.parentNode.firstChild.textContent;
            //descripción del producto
            let descriptionProduct = document.createElement('div');
            descriptionProduct.className= 'descriptionProduct';
            let parragraphDetail = document.createElement('p');
            let textDetail = document.createTextNode('Práctica y funcional en labores de construcción, el Esmeril Angular 4,5" 820W BDEG820 de Black & Decker es una herramienta eléctrica que permite cortar y desbastar materiales como el metal, concreto, cerámica, piedra y madera.');
            descriptionProduct.appendChild(parragraphDetail);
            parragraphDetail.appendChild(textDetail);
            //precio del producto
            let priceProduct = document.createElement('div');
            priceProduct.className= 'priceProduct';
            let showPrice = document.createElement('p');
            let priceDetail = event.target.parentNode.children[2].textContent;
            let textPrice = document.createTextNode(priceDetail);
            priceProduct.appendChild(showPrice);
            showPrice.appendChild(textPrice);
            //sugerencia maestros
            let workers = document.createElement('div');
            workers.className= 'suggestion';
            let titleWorker = document.createElement('h5');
            let textTitleWorker = document.createTextNode('Maestros disponibles');
            workers.appendChild(titleWorker);
            titleWorker.appendChild(textTitleWorker);
            //lista de maestros
            let listWorker = document.createElement('div');
            listWorker.className='listSuggestion';
            let blockWorker1 = document.createElement('p');
            let blockWorker2 = document.createElement('p');
            let worker1 = document.createTextNode('Maestro 1 ');
            let worker2 = document.createTextNode('Maestro 2 ');
            let worker3 = document.createTextNode('Maestro 3 ');
            listWorker.appendChild(blockWorker1);
            blockWorker1.appendChild(worker1);
            listWorker.appendChild(blockWorker2);
            blockWorker2.appendChild(worker2);
            listWorker.appendChild(worker3);
            //boton añadir
            let botones = document.createElement('div');
            let addButton = document.createElement('button');
            addButton.className= 'addButton';
            let textAdd = document.createTextNode('Añadir');
            botones.appendChild(addButton);
            addButton.appendChild(textAdd);
            //boton cerrar
            let botones2 = document.createElement('div');
            let buttonClouse = document.createElement('button');
            buttonClouse.className= 'addButton'
            buttonClouse.textContent = 'Cerrar';
            botones2.appendChild(buttonClouse);

            //apendeo de elementos principales 
            seccion.appendChild(cajaProducto);
            cajaProducto.appendChild(cajaImagen);
            cajaProducto.appendChild(dataProduct);
            cajaImagen.appendChild(showImagen);
            dataProduct.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)));
            dataProduct.appendChild(descriptionProduct);
            dataProduct.appendChild(priceProduct);
            dataProduct.appendChild(workers);
            dataProduct.appendChild(listWorker);
            dataProduct.appendChild(addButton);
            dataProduct.appendChild(botones2);
            
            let boxx = document.querySelector('.boxx');
            boxx.appendChild(seccion)
           
            container.style.display = 'none';
            buttonClouse.addEventListener('click', function(){
              container.style.display = 'flex';
              boxx.style.display = 'none';
              location.reload();
              })
              
            })

            box.appendChild(button);
            container.appendChild(box)

          }
            })
    })

    herramientas.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC178483', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            let box = document.createElement('div');
          box.className = 'box';
          let title = document.createElement('div');
          title.className = 'title';
          let image = document.createElement('div');
          let price = document.createElement('div');
          price.className = 'price';
          
          title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
          let imageSRC = document.createElement('img');
          imageSRC.className = 'imageSRC';
          imageSRC.style.borderRadius = '0px 10px 0px 10px';
          imageSRC.style.border = '2px #0d68c2 solid';
          imageSRC.setAttribute('src', data.results[i].thumbnail)
          price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
          price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
          image.appendChild(imageSRC)
          box.appendChild(title)
          box.appendChild(image)
          box.appendChild(price)
          
          let button = document.createElement('button');
          button.textContent = 'Ver detalle';
          button.className = 'button';

          button.addEventListener('click', function(){
            //creamos la sección con el detalle del producto
            let seccion = document.createElement('section');
            seccion.className = 'detailContainer';
            //contenedor del detalle del producto
            let cajaProducto = document.createElement('div');
            cajaProducto.className = 'productBox';
            //div de la imágen del producto
            let cajaImagen = document.createElement('div');
            cajaImagen.className= 'imageBox';
            let imagenProducto = event.target.parentNode.children[0].parentNode.children[1].firstChild.getAttribute('src');
            //creamos la etiqueta img
            let showImagen = document.createElement('img');
            showImagen.setAttribute('src', imagenProducto);
            //div que contiene los detalles de texto
            let dataProduct = document.createElement('div');
            dataProduct.className= 'dataProduct';
            //titulo del producto
            let titleProduct = event.target.parentNode.firstChild.textContent;
            //descripción del producto
            let descriptionProduct = document.createElement('div');
            descriptionProduct.className= 'descriptionProduct';
            let parragraphDetail = document.createElement('p');
            let textDetail = document.createTextNode('Práctica y funcional en labores de construcción, el Esmeril Angular 4,5" 820W BDEG820 de Black & Decker es una herramienta eléctrica que permite cortar y desbastar materiales como el metal, concreto, cerámica, piedra y madera.');
            descriptionProduct.appendChild(parragraphDetail);
            parragraphDetail.appendChild(textDetail);
            //precio del producto
            let priceProduct = document.createElement('div');
            priceProduct.className= 'priceProduct';
            let showPrice = document.createElement('p');
            let priceDetail = event.target.parentNode.children[2].textContent;
            let textPrice = document.createTextNode(priceDetail);
            priceProduct.appendChild(showPrice);
            showPrice.appendChild(textPrice);
            //sugerencia maestros
            let workers = document.createElement('div');
            workers.className= 'suggestion';
            let titleWorker = document.createElement('h5');
            let textTitleWorker = document.createTextNode('Maestros disponibles');
            workers.appendChild(titleWorker);
            titleWorker.appendChild(textTitleWorker);
            //lista de maestros
            let listWorker = document.createElement('div');
            listWorker.className='listSuggestion';
            let blockWorker1 = document.createElement('p');
            let blockWorker2 = document.createElement('p');
            let worker1 = document.createTextNode('Maestro 1 ');
            let worker2 = document.createTextNode('Maestro 2 ');
            let worker3 = document.createTextNode('Maestro 3 ');
            listWorker.appendChild(blockWorker1);
            blockWorker1.appendChild(worker1);
            listWorker.appendChild(blockWorker2);
            blockWorker2.appendChild(worker2);
            listWorker.appendChild(worker3);
            //boton añadir
            let botones = document.createElement('div');
            let addButton = document.createElement('button');
            addButton.className= 'addButton';
            let textAdd = document.createTextNode('Añadir');
            botones.appendChild(addButton);
            addButton.appendChild(textAdd);
            //boton cerrar
            let botones2 = document.createElement('div');
            let buttonClouse = document.createElement('button');
            buttonClouse.className= 'addButton'
            buttonClouse.textContent = 'Cerrar';
            botones2.appendChild(buttonClouse);

            //apendeo de elementos principales 
            seccion.appendChild(cajaProducto);
            cajaProducto.appendChild(cajaImagen);
            cajaProducto.appendChild(dataProduct);
            cajaImagen.appendChild(showImagen);
            dataProduct.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)));
            dataProduct.appendChild(descriptionProduct);
            dataProduct.appendChild(priceProduct);
            dataProduct.appendChild(workers);
            dataProduct.appendChild(listWorker);
            dataProduct.appendChild(addButton);
            dataProduct.appendChild(botones2);
            
            let boxx = document.querySelector('.boxx');
            boxx.appendChild(seccion)
           
            container.style.display = 'none';
            buttonClouse.addEventListener('click', function(){
              container.style.display = 'flex';
              boxx.style.display = 'none';
              location.reload();
              })
              
            })       
  
            box.appendChild(button);
            container.appendChild(box)
  
          }
          })
    })

    industrias.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1499', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            let box = document.createElement('div');
          box.className = 'box';
          let title = document.createElement('div');
          title.className = 'title';
          let image = document.createElement('div');
          let price = document.createElement('div');
          price.className = 'price';
          
          title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
          let imageSRC = document.createElement('img');
          imageSRC.className = 'imageSRC';
          imageSRC.style.borderRadius = '0px 10px 0px 10px';
          imageSRC.style.border = '2px #0d68c2 solid';
          imageSRC.setAttribute('src', data.results[i].thumbnail)
          price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
          price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
          image.appendChild(imageSRC)
          box.appendChild(title)
          box.appendChild(image)
          box.appendChild(price)
          
          let button = document.createElement('button');
          button.textContent = 'Ver detalle';
          button.className = 'button';

          button.addEventListener('click', function(){
            //creamos la sección con el detalle del producto
            let seccion = document.createElement('section');
            seccion.className = 'detailContainer';
            //contenedor del detalle del producto
            let cajaProducto = document.createElement('div');
            cajaProducto.className = 'productBox';
            //div de la imágen del producto
            let cajaImagen = document.createElement('div');
            cajaImagen.className= 'imageBox';
            let imagenProducto = event.target.parentNode.children[0].parentNode.children[1].firstChild.getAttribute('src');
            //creamos la etiqueta img
            let showImagen = document.createElement('img');
            showImagen.setAttribute('src', imagenProducto);
            //div que contiene los detalles de texto
            let dataProduct = document.createElement('div');
            dataProduct.className= 'dataProduct';
            //titulo del producto
            let titleProduct = event.target.parentNode.firstChild.textContent;
            //descripción del producto
            let descriptionProduct = document.createElement('div');
            descriptionProduct.className= 'descriptionProduct';
            let parragraphDetail = document.createElement('p');
            let textDetail = document.createTextNode('Práctica y funcional en labores de construcción, el Esmeril Angular 4,5" 820W BDEG820 de Black & Decker es una herramienta eléctrica que permite cortar y desbastar materiales como el metal, concreto, cerámica, piedra y madera.');
            descriptionProduct.appendChild(parragraphDetail);
            parragraphDetail.appendChild(textDetail);
            //precio del producto
            let priceProduct = document.createElement('div');
            priceProduct.className= 'priceProduct';
            let showPrice = document.createElement('p');
            let priceDetail = event.target.parentNode.children[2].textContent;
            let textPrice = document.createTextNode(priceDetail);
            priceProduct.appendChild(showPrice);
            showPrice.appendChild(textPrice);
            //sugerencia maestros
            let workers = document.createElement('div');
            workers.className= 'suggestion';
            let titleWorker = document.createElement('h5');
            let textTitleWorker = document.createTextNode('Maestros disponibles');
            workers.appendChild(titleWorker);
            titleWorker.appendChild(textTitleWorker);
            //lista de maestros
            let listWorker = document.createElement('div');
            listWorker.className='listSuggestion';
            let blockWorker1 = document.createElement('p');
            let blockWorker2 = document.createElement('p');
            let worker1 = document.createTextNode('Maestro 1 ');
            let worker2 = document.createTextNode('Maestro 2 ');
            let worker3 = document.createTextNode('Maestro 3 ');
            listWorker.appendChild(blockWorker1);
            blockWorker1.appendChild(worker1);
            listWorker.appendChild(blockWorker2);
            blockWorker2.appendChild(worker2);
            listWorker.appendChild(worker3);
            //boton añadir
            let botones = document.createElement('div');
            let addButton = document.createElement('button');
            addButton.className= 'addButton';
            let textAdd = document.createTextNode('Añadir');
            botones.appendChild(addButton);
            addButton.appendChild(textAdd);
            //boton cerrar
            let botones2 = document.createElement('div');
            let buttonClouse = document.createElement('button');
            buttonClouse.className= 'addButton'
            buttonClouse.textContent = 'Cerrar';
            botones2.appendChild(buttonClouse);

            //apendeo de elementos principales 
            seccion.appendChild(cajaProducto);
            cajaProducto.appendChild(cajaImagen);
            cajaProducto.appendChild(dataProduct);
            cajaImagen.appendChild(showImagen);
            dataProduct.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)));
            dataProduct.appendChild(descriptionProduct);
            dataProduct.appendChild(priceProduct);
            dataProduct.appendChild(workers);
            dataProduct.appendChild(listWorker);
            dataProduct.appendChild(addButton);
            dataProduct.appendChild(botones2);
            
            let boxx = document.querySelector('.boxx');
            boxx.appendChild(seccion)
           
            container.style.display = 'none';
            buttonClouse.addEventListener('click', function(){
              container.style.display = 'flex';
              boxx.style.display = 'none';
              location.reload();
              })
              
            })

            box.appendChild(button);
            container.appendChild(box)
  
          }
    
          })
    })

    computacion.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1648', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            let box = document.createElement('div');
          box.className = 'box';
          let title = document.createElement('div');
          title.className = 'title';
          let image = document.createElement('div');
          let price = document.createElement('div');
          price.className = 'price';
          
          title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
          let imageSRC = document.createElement('img');
          imageSRC.className = 'imageSRC';
          imageSRC.style.borderRadius = '0px 10px 0px 10px';
          imageSRC.style.border = '2px #0d68c2 solid';
          imageSRC.setAttribute('src', data.results[i].thumbnail)
          price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
          price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
          image.appendChild(imageSRC)
          box.appendChild(title)
          box.appendChild(image)
          box.appendChild(price)
          
          let button = document.createElement('button');
          button.textContent = 'Ver detalle';
          button.className = 'button';

          button.addEventListener('click', function(){
            //creamos la sección con el detalle del producto
            let seccion = document.createElement('section');
            seccion.className = 'detailContainer';
            //contenedor del detalle del producto
            let cajaProducto = document.createElement('div');
            cajaProducto.className = 'productBox';
            //div de la imágen del producto
            let cajaImagen = document.createElement('div');
            cajaImagen.className= 'imageBox';
            let imagenProducto = event.target.parentNode.children[0].parentNode.children[1].firstChild.getAttribute('src');
            //creamos la etiqueta img
            let showImagen = document.createElement('img');
            showImagen.setAttribute('src', imagenProducto);
            //div que contiene los detalles de texto
            let dataProduct = document.createElement('div');
            dataProduct.className= 'dataProduct';
            //titulo del producto
            let titleProduct = event.target.parentNode.firstChild.textContent;
            //descripción del producto
            let descriptionProduct = document.createElement('div');
            descriptionProduct.className= 'descriptionProduct';
            let parragraphDetail = document.createElement('p');
            let textDetail = document.createTextNode('Práctica y funcional en labores de construcción, el Esmeril Angular 4,5" 820W BDEG820 de Black & Decker es una herramienta eléctrica que permite cortar y desbastar materiales como el metal, concreto, cerámica, piedra y madera.');
            descriptionProduct.appendChild(parragraphDetail);
            parragraphDetail.appendChild(textDetail);
            //precio del producto
            let priceProduct = document.createElement('div');
            priceProduct.className= 'priceProduct';
            let showPrice = document.createElement('p');
            let priceDetail = event.target.parentNode.children[2].textContent;
            let textPrice = document.createTextNode(priceDetail);
            priceProduct.appendChild(showPrice);
            showPrice.appendChild(textPrice);
            //sugerencia maestros
            let workers = document.createElement('div');
            workers.className= 'suggestion';
            let titleWorker = document.createElement('h5');
            let textTitleWorker = document.createTextNode('Maestros disponibles');
            workers.appendChild(titleWorker);
            titleWorker.appendChild(textTitleWorker);
            //lista de maestros
            let listWorker = document.createElement('div');
            listWorker.className='listSuggestion';
            let blockWorker1 = document.createElement('p');
            let blockWorker2 = document.createElement('p');
            let worker1 = document.createTextNode('Maestro 1 ');
            let worker2 = document.createTextNode('Maestro 2 ');
            let worker3 = document.createTextNode('Maestro 3 ');
            listWorker.appendChild(blockWorker1);
            blockWorker1.appendChild(worker1);
            listWorker.appendChild(blockWorker2);
            blockWorker2.appendChild(worker2);
            listWorker.appendChild(worker3);
            //boton añadir
            let botones = document.createElement('div');
            let addButton = document.createElement('button');
            addButton.className= 'addButton';
            let textAdd = document.createTextNode('Añadir');
            botones.appendChild(addButton);
            addButton.appendChild(textAdd);
            //boton cerrar
            let botones2 = document.createElement('div');
            let buttonClouse = document.createElement('button');
            buttonClouse.className= 'addButton'
            buttonClouse.textContent = 'Cerrar';
            botones2.appendChild(buttonClouse);

            //apendeo de elementos principales 
            seccion.appendChild(cajaProducto);
            cajaProducto.appendChild(cajaImagen);
            cajaProducto.appendChild(dataProduct);
            cajaImagen.appendChild(showImagen);
            dataProduct.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)));
            dataProduct.appendChild(descriptionProduct);
            dataProduct.appendChild(priceProduct);
            dataProduct.appendChild(workers);
            dataProduct.appendChild(listWorker);
            dataProduct.appendChild(addButton);
            dataProduct.appendChild(botones2);
            
            let boxx = document.querySelector('.boxx');
            boxx.appendChild(seccion)
           
            container.style.display = 'none';
            buttonClouse.addEventListener('click', function(){
              container.style.display = 'flex';
              boxx.style.display = 'none';
              location.reload();
              })
  
              
            })

            box.appendChild(button);
            container.appendChild(box)
  
          }
            })
    })

  }

}

