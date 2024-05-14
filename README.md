# GlobalThink Technology S.A.
# Prueba Técnica: Desarrollo Backend con TypeScript y Node.js

Este repositorio contiene el código fuente de una API REST para gestionar usuarios, desarrollada como parte de una prueba técnica de desarrollo backend utilizando TypeScript y Node.js.

## Objetivo

El objetivo de esta prueba técnica es evaluar las habilidades del candidato en el desarrollo backend utilizando TypeScript y Node.js. Se espera que el candidato demuestre conocimientos en el diseño de API REST, manipulación de datos y manejo de errores.

## Instrucciones

### 1. Configuración del Proyecto

- Crea un nuevo proyecto de Node.js con TypeScript.
- Configura un archivo de configuración de TypeScript (`tsconfig.json`).
- Utiliza npm o yarn para gestionar las dependencias del proyecto.

### 2. API REST de Usuarios

Diseña una API REST para gestionar usuarios con las siguientes operaciones:

- Crear un nuevo usuario.
- Obtener la lista de usuarios.
- Obtener los detalles de un usuario por su ID.
- Actualizar la información de un usuario por su ID.
- Eliminar un usuario por su ID.
- Utiliza un almacenamiento en memoria para los datos de usuario.

### 3. Modelo de Usuario

Crea un modelo de usuario con al menos los siguientes campos: `id`, `nombre`, `correo electrónico`, `edad`.

### 4. Validaciones

Implementa validaciones para asegurarte de que los campos requeridos estén presentes al crear y actualizar un usuario. Asegúrate de que el correo electrónico sea único para cada usuario.

### 5. Manejo de Errores

Implementa un manejo adecuado de errores para todas las operaciones. Proporciona respuestas JSON significativas en caso de errores.

### 6. Documentación

Documenta la API utilizando comentarios en el código o una herramienta como Swagger. Proporciona ejemplos de uso para cada endpoint.

### 7. Pruebas Unitarias

Escribe pruebas unitarias para al menos una operación CRUD utilizando Jest o cualquier otra herramienta de prueba de su elección.

## Entrega

### 1. Código Fuente

- **Repositorio Público:** [Enlace al Repositorio](#)
- **Dockerfile:** Se espera la entrega de un Dockerfile que contenga todas las configuraciones necesarias para construir y ejecutar el servicio en un contenedor Docker de manera eficiente.

### 2. Documentación

Se incluye cualquier documentación necesaria para comprender y ejecutar el proyecto.
[text](http://localhost:3000/api/users/swagger-ui/)

### 3. Pruebas Unitarias

Se incluyen los scripts y resultados de las pruebas unitarias realizadas.

## Evaluación

Se evaluará la calidad del código, la organización del proyecto, la implementación correcta de la lógica de negocio, el manejo de errores, la documentación y la cobertura de las pruebas unitarias.

Recuerda proporcionar comentarios en el código para explicar decisiones importantes.
