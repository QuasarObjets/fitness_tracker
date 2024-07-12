# Fitness Tracker - Aplicación Web

Este proyecto es una aplicación web para rastrear actividades de fitness, establecer metas y monitorear el progreso. Utiliza el stack MERN (MongoDB, Express, React y Node.js) para el desarrollo.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas y archivos:

```
fitness_tracker
├── mobile
│   ├── src
│   │   ├── components
│   │   │   └── index.js
│   │   ├── screens
│   │   │   └── HomeScreen.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── web
│   ├── src
│   │   ├── app
│   │   │   ├── App.js
│   │   │   └── index.js
│   │   ├── models
│   │   │   └── user.js
│   │   ├── routes
│   │   │   └── userRoutes.js
│   │   └── server.js
│   ├── package.json
│   ├── README.md
│   └── .env
└── README.md
```

## Carpeta `web`

La carpeta `web` contiene los archivos relacionados con la aplicación web.

- `src/app/App.js`: Este archivo exporta un componente `App` que es el punto de entrada de la aplicación web. Configura las rutas y componentes principales.
- `src/app/index.js`: Este archivo inicia la aplicación web y renderiza el componente principal.
- `src/models/user.js`: Este archivo exporta un modelo `User` que define la estructura de datos para un usuario.
- `src/routes/userRoutes.js`: Este archivo exporta las rutas relacionadas con los usuarios de la aplicación web.
- `src/server.js`: Este archivo configura y arranca el servidor web.
- `package.json`: Este archivo es el archivo de configuración de npm para la aplicación web. Lista las dependencias y scripts del proyecto.
- `README.md`: Este archivo contiene la documentación para la aplicación web.
- `.env`: Este archivo es un archivo de configuración que contiene variables de entorno para la aplicación web.

## Carpeta `mobile`

La carpeta `mobile` contiene los archivos relacionados con la aplicación móvil.

- `src/components/index.js`: Este archivo exporta un componente `Index` que se utiliza para agrupar los componentes de la aplicación móvil.
- `src/screens/HomeScreen.js`: Este archivo exporta un componente `HomeScreen` que muestra la pantalla principal de la aplicación móvil.
- `src/App.js`: Este archivo es el punto de entrada de la aplicación móvil. Crea una instancia de la aplicación React Native y configura las rutas y componentes.
- `src/index.js`: Este archivo inicia la aplicación React Native y renderiza el componente principal.
- `package.json`: Este archivo es el archivo de configuración de npm para la aplicación móvil. Lista las dependencias y scripts del proyecto.
- `README.md`: Este archivo contiene la documentación para la aplicación móvil.

## Archivo raíz

- `README.md`: Este archivo contiene la documentación general del proyecto.

Este archivo es generado automáticamente y puede ser modificado según sea necesario.

**Nota:** Este archivo es dejado en blanco intencionalmente.