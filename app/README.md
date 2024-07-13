# Mi App Fitness

Este proyecto es una aplicación móvil para rastrear actividades de fitness, establecer metas y monitorear el progreso.

## Estructura del proyecto

El proyecto tiene la siguiente estructura de archivos:

En la carpeta `api`:
- `api/src/controllers/usuarioController.js`: Este archivo exporta un controlador llamado `usuarioController` que contiene métodos para manejar las operaciones relacionadas con los usuarios, como crear, actualizar y eliminar usuarios.
- `api/src/models/usuarioModel.js`: Este archivo exporta un modelo llamado `usuarioModel` que define la estructura y las validaciones para el objeto de usuario en la base de datos MongoDB.
- `api/src/routes/usuarioRoutes.js`: Este archivo exporta un enrutador llamado `usuarioRoutes` que define las rutas para las operaciones relacionadas con los usuarios, como `/usuarios` para obtener todos los usuarios y `/usuarios/:id` para obtener un usuario específico.
- `api/src/app.js`: Este archivo es el punto de entrada de la aplicación Express. Configura el servidor Express, establece las rutas y se conecta a la base de datos MongoDB.
- `api/package.json`: Este archivo es el archivo de configuración de npm. Lista las dependencias y scripts para el proyecto de la API.
- `api/README.md`: Este archivo contiene la documentación para la API.
- `api/.env`: Este archivo contiene las variables de entorno para la configuración de la API, como la URL de la base de datos MongoDB.

En la carpeta `app`:
- `app/src/components/BarraProgreso.js`: Este archivo exporta un componente llamado `BarraProgreso` que muestra una barra de progreso para el seguimiento del progreso de las metas de fitness.
- `app/src/screens/Inicio.js`: Este archivo exporta un componente llamado `Inicio` que muestra la pantalla de inicio de la aplicación, donde se pueden ver las actividades de fitness registradas.
- `app/src/screens/Metas.js`: Este archivo exporta un componente llamado `Metas` que muestra la pantalla de metas de la aplicación, donde se pueden establecer y monitorear las metas de fitness.
- `app/src/App.js`: Este archivo es el punto de entrada de la aplicación React Native. Configura la navegación y muestra las pantallas principales de la aplicación.
- `app/src/config/Configuracion.js`: Este archivo exporta un objeto de configuración llamado `Configuracion` que contiene la configuración de la aplicación, como la URL de la API.
- `app/package.json`: Este archivo es el archivo de configuración de npm. Lista las dependencias y scripts para el proyecto de la aplicación móvil.
- `app/README.md`: Este archivo contiene la documentación para la aplicación móvil.
- `app/app.json`: Este archivo es el archivo de configuración de la aplicación React Native. Contiene información sobre la aplicación, como el nombre y la versión.

En la raíz del proyecto:
- `README.md`: Este archivo contiene la documentación general del proyecto, incluyendo información sobre las carpetas y las rutas.
- `.gitignore`: Este archivo especifica los archivos y carpetas que deben ser ignorados por Git durante el control de versiones.
```

Recuerda que puedes agregar más detalles y contenido a los archivos README.md según sea necesario.