## Cómo Ejecutar el Proyecto

Sigue estos pasos para poner el proyecto en funcionamiento en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

*   **Node.js:** Versión 14 o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
*   **npm:** Generalmente viene incluido con Node.js. Puedes verificarlo con `npm -v`. Si usas Yarn o pnpm, ajusta los comandos correspondientes.
*   **PostgreSQL:** El sistema de base de datos. Asegúrate de tenerlo instalado y funcionando. Puedes descargarlo desde [postgresql.org](https://www.postgresql.org/download/).

### Configuración y Ejecución

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_TU_REPOSITORIO>
    cd <NOMBRE_DE_LA_CARPETA_PRINCIPAL_DEL_PROYECTO>
    ```

2.  **Configura y ejecuta el Backend:**
    *   Abre una terminal y navega al directorio del backend:
        ```bash
        cd backend
        ```
    *   Instala las dependencias:
        ```bash
        npm install
        ```
    *   **Configuración de la base de datos (PostgreSQL):**
        *   Asegúrate de que tu servidor de PostgreSQL esté corriendo.
        *   Crea la base de datos necesaria para el proyecto. (Si tienes un nombre específico para la DB o un script para crearla, menciónalo aquí).
        *   Configura las credenciales de conexión a la base de datos en el archivo de configuración correspondiente del backend (ej. un archivo `.env`).
        *   Ejecuta las migraciones para configurar las tablas de la base de datos. (Si tienes un comando específico para migraciones, como `npm run migrate`, inclúyelo).
        ```bash
        # La base de datos de este proyecto se llama: login_db
        ```
    *   Inicia el servidor de desarrollo del backend:
        ```bash
        npm run dev
        ```
    *   El backend debería estar corriendo en `http://localhost:3000` (o el puerto que hayas configurado).

3.  **Configura y ejecuta el Frontend:**
    *   Abre una **nueva terminal** y navega al directorio raíz del proyecto si no estás allí.
    *   Navega al directorio del frontend:
        ```bash
        cd frontend
        ```
    *   Instala las dependencias:
        ```bash
        npm install
        ```
    *   Inicia la aplicación de desarrollo:
        ```bash
        npm run dev
        ```
    *   El frontend debería estar accesible en `http://localhost:5173` (o el puerto que Vite asigne).

Una vez que ambos, el backend y el frontend, estén ejecutándose, podrás acceder a la aplicación a través de la URL del frontend en tu navegador.
