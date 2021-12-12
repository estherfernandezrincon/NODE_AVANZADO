## Aplicacion de compra-venta de Anuncios

Una vez clonado el repositorio ejecutar npm init para instalar las dependencias

Trabajamos con variables de entorno. Instalamos:

```
npm install dotenv
```

Copia el archivo .env.example en uno .env y pon tus credenciales

Cargar el script de la base de datos con el comando:

```
npm run install_db
```

Una vez borrada la base de datos y cargado los anuncios predefinidos, ejecutar el siguiente comando para arrancarla:

```
npm install cross-env y a continuación
npm run dev
```

### Arrancamos nuestro microservicio

Carpeta microservice archivo conversionImage.js

Ya podemos abrir nuestro navegador y poner la url: localhost:3001.
Nuestra aplicación ya está arrancada.

Para hacer peticiones , abrimos postman. Si no lo tenemos instalado, la descagamos en:

```
www.postman.com/download
```

Nos creamos una cuenta. \
Desde My Workspaces, seleccionamos:

url: http://localhost:3001
*GET url Send => para obtener la lista de Anuncios desde las vistas\
*GET url/api/misAnuncios => obtenemos los anuncios \
*GET Podemos usar los metodos POST y/o PUT para grabar nuevos anuncios y/o modificarlos.\
*Podemos pasarle filtros en la url con metodo GET: nombre, tags,precio,venta

\*Para autenticarnos:
POST a url/api/login: le pasamos email y contraseña en el body desde form-urlencoded.
Obtenemos un token.
POST a url/api/misAnuncios: le pasamos el token desde hearders
Una vez hecho ya podemos subir anuncios desde form-data.
Nos creará un thumbnail de la imagen subida en la carpeta thumbnails.

### Para que nuestra aplicación funcione en varios idiomas, instalamos i18n:

```
npm install i18n
```

### Descargamos libreria bcrypt para evitar ataques de contraseña

```
npm install bcrypt
```

### Instalamos connect-mongo para guardar la sesion en caso se caiga la conexion

```
nom install connect-mongo
```

### instalamos jimp para reducir imagen

```
npm install --save jimp
```

### utilizamos cote para el microservicio

```
npm i cote
```

control C para parar la aplicación.
