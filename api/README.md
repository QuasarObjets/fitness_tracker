# API de la aplicación de fitness

Esta API es responsable de manejar las operaciones relacionadas con las actividades de fitness, establecer metas y monitorear el progreso de los usuarios.

## Estructura de archivos

- `src/controllers/usuarioController.js`: Este archivo contiene los controladores para manejar las operaciones relacionadas con los usuarios.
- `src/models/usuarioModel.js`: Este archivo define el modelo de usuario en la base de datos MongoDB.
- `src/routes/usuarioRoutes.js`: Este archivo define las rutas para las operaciones relacionadas con los usuarios.
- `src/app.js`: Este archivo es el punto de entrada de la aplicación Express.
- `package.json`: Este archivo es el archivo de configuración de npm.

## Variables de entorno

Asegúrate de configurar las siguientes variables de entorno en el archivo `.env`:

- `MONGODB_URI`: La URL de conexión a la base de datos MongoDB.

## Instalación

1. Clona este repositorio.
2. Navega hasta la carpeta `api`.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Ejecuta el comando `npm start` para iniciar el servidor.

## Documentación de la API

Puedes encontrar la documentación completa de la API en [este enlace](/mi-app-fitness/api/README.md).
```

Recuerda que este archivo debe estar ubicado en la carpeta `/mi-app-fitness/api/`.