function eliminarVenta(id) {
    id=parseInt(id);
    let endPoint = '' + id;
    fetch(endPoint, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    alert("Venta eliminada");
    location.reload();
}

function mostrarVentas(){
    let sales = document.getElementById("ventas");
    let endPoint = '';
    sales.innerHTML = '';
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            sales.innerHTML += `
                    <tr>
                        <br>
                        <td><b>Identificador: </b> ${element.name_seller}</td>
                        <br>
                        <td><b>Nombre del Vendedor: </b> ${element.name_client}</td>
                        <br>
                        <td><b>Nombre del Cliente: </b> ${element.name_product}</td>
                        <br>
                        <td><b>Nombre del Producto: </b> ${element.price}</td>
                        <br>
                        <td><b>Precio: </b> ${element.date}</td>
                        <br>
                        <td><b>Fecha Compra: </b> ${element.}</td>
                        <br>
                        <td><button class="btn deep-orange darken-2" type="submit" onclick="eliminarVenta(${element.id})">Eliminar</button></td>
                        <br>
                    </tr>
            `;
        });
    });
}

function llenarTabla() {
    fetch('http://127.0.0.1:8000/api/sales')
      .then(response => response.json())
      .then(data => {
        const tabla = document.getElementById('tabla-ventas');
  
        data.forEach(venta => {
          const fila = document.createElement('tr');
  
          const celdaname_seller = document.createElement('td');
          celdaname_seller.textContent = venta.name_seller;
          fila.appendChild(celdaname_seller);
  
          const celdaname_client = document.createElement('td');
          celdaname_client.textContent = venta.name_client;
          fila.appendChild(celdaname_client);
  
          const celdaname_product = document.createElement('td');
          celdaname_product.textContent = venta.name_product;
          fila.appendChild(celdaname_product);

          const celdaprice = document.createElement('td');
          celdaprice.textContent = venta.price;
          fila.appendChild(celdaprice);
  
          const celdadate = document.createElement('td');
          celdadate.textContent = venta.date;
          fila.appendChild(celdadate);

          tabla.appendChild(fila);
        });
      })
      .catch(error => console.error(error));
  }