# Libros - Server

## Descripción

Este es un servidor desarrollado con Express que proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en una base de datos de libros.

## Instalación

1. Clona este repositorio:

```
git clone https://github.com/Kaostiko/Server_Books.git
```

2. Instala las dependencias:

```
npm install
```

## Uso

Para ejecutar el servidor en modo de desarrollo, utiliza el siguiente comando:

```
npm run dev
```

Una vez que el servidor esté en funcionamiento, puedes acceder a los siguientes endpoints:

- **POST /books**: Crea un nuevo libro.
- **GET /books**: Obtiene todos los libros.
- **GET /books/:bookId**: Obtiene un libro específico por su ID.
- **PUT /books/:bookId**: Actualiza un libro existente por su ID.
- **DELETE /books/:bookId**: Elimina un libro existente por su ID.

Todos los endpoints esperan y devuelven datos en formato JSON.

## Tecnologías utilizadas

- Express: Framework web para Node.js.
- Firebase: Plataforma de desarrollo de aplicaciones móviles y web.
- Firebase Admin SDK: SDK de administración de Firebase para Node.js.
- Cors: Middleware de Express para habilitar el acceso a recursos de otros dominios.
- Dotenv: Módulo de dependencia cero que carga variables de entorno desde un archivo `.env` en `process.env`.

## Autor

Carlos Morán
