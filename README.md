## Aplicacion de compra-venta de Anuncios
Una vez clonado el repositorio ejecutar npm init para instalar las dependencias

Cargar el script de la base de datos con el comando:
```sh
npm run install_db
```

Una vez borrada la base de datos y cargado los anuncios predefinidos, ejecutar el siguiente comando para arrancarla:
```sh
npm install cross-env y a continuación
npm run dev 
```

Ya podemos abrir nuestro navegador y poner la url: localhost:3001.
Nuestra aplicación ya está arrancada.

Para hacer peticiones , abrimos postman. Si no lo tenemos instalado, la descagamos en:
```sh
www.postman.com/download
```
Nos creamos una cuenta. \
Desde My Workspaces, seleccionamos:

*GET url Send => para obtener la lista de Anuncios desde las vistas\
*GET url/api/misAnuncios => obtenemos los anuncios \
*GET Podemos usar los metodos POST y/o PUT para grabar nuevos anuncios y/o modificarlos.\
*Podemos pasarle filtros en la url con metodo GET: nombre, tags,precio,venta 



control C para parar la aplicación.
