# Proyecto de API de Tareas con SQLite

![GitHub](https://img.shields.io/badge/GitHub-Tareas%20Node-181717?style=flat-square&logo=github)

![JavaScript](https://img.shields.io/badge/JavaScript-%23323330?style=flat-square&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-%23339933?style=flat-square&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59?style=flat-square&logo=express)
![SQLite](https://img.shields.io/badge/SQLite-%2307405f?style=flat-square&logo=sqlite)

## Descripción

Este es un proyecto básico de API RESTful para gestionar tareas utilizando Node.js y SQLite como base de datos. La API permite crear, obtener, listar y eliminar tareas de una base de datos SQLite.

## Tecnologías utilizadas

![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![SQLite Badge](https://img.shields.io/badge/SQLite-07405f?style=for-the-badge&logo=sqlite&logoColor=white)
![Express.js Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL del repositorio>
   cd <directorio del repositorio>
   ```

2. Instala las dependencias del proyecto utilizando npm:

   ```bash
   npm install
   ```

3. Si aún no tienes SQLite instalado, sigue los pasos a continuación para instalarlo:

   - **Para Windows**:
     1. Ve a la página de descargas de SQLite: https://www.sqlite.org/download.html
     2. Descarga el archivo `sqlite-tools-win32-x86-*.zip`, extráelo y agrega el archivo `sqlite3.exe` a tu variable de entorno `PATH`.
   
   - **Para macOS**:
     Si usas **Homebrew**, puedes instalar SQLite con:
     ```bash
     brew install sqlite
     ```

   - **Para Linux**:
     Usa el siguiente comando para instalar SQLite en una distribución basada en Debian/Ubuntu:
     ```bash
     sudo apt-get install sqlite3
     ```

## Uso

1. Asegúrate de que **SQLite** esté instalado en tu máquina y de que el archivo `tareas.db` se cree automáticamente en la raíz del proyecto.

2. Para iniciar el servidor, ejecuta:

   ```bash
   node index.js
   ```

3. El servidor se ejecutará en `http://localhost:3000`.

## Rutas disponibles


- **GET /tareas**: Obtiene todas las tareas almacenadas en la base de datos.
  
- **POST /tareas**: Crea una nueva tarea. El cuerpo de la solicitud debe contener los siguientes parámetros en formato JSON:
  ```json
  {
      "titulo": "Nombre de la tarea",
      "descripcion": "Descripción de la tarea"
  }
  ```

- **GET /tareas/:id**: Obtiene una tarea específica por ID.

- **DELETE /tareas/:id**: Elimina una tarea específica por ID.

## Estructura del proyecto

```
proyecto-node/
├── node_modules/      # Dependencias instaladas por npm
├── src/               # Código fuente de la aplicación
│   ├── controllers/   # Controladores (lógica de negocio)
│   ├── database.js    # Conexión a la base de datos SQLite
│   ├── models/        # Modelos (interacción con la base de datos)
│   ├── routes/        # Definición de rutas
│   ├── middlewares/   # Middlewares
│   ├── tareas.db      # Tareas
│   └── index.js       # Punto de entrada principal (servidor)
├── .gitignore         # Archivos y carpetas que no se suben al repositorio
├── package.json       # Descripción del proyecto y dependencias
└── package-lock.json  # Versión exacta de las dependencias instaladas
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una rama con tu cambio (`git checkout -b feature/nueva-caracteristica`).
3. Haz commit de tus cambios (`git commit -am 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un **pull request**.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo **LICENSE**.
