# Sistema de Firmas Electrónicas

## Descripción
Sistema de gestión de firmas electrónicas desarrollado con React y Node.js. Actualmente en fase de desarrollo, comenzando con la implementación del sistema de autenticación.

## Tecnologías Principales

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion (para animaciones)
- React Router (para navegación)

### Backend
- Node.js
- Express
- JWT (JSON Web Tokens)
- Base de datos (configuración en progreso)

## Estructura del Proyecto

```
├── frontend/
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/         # Páginas principales
│   │   ├── services/      # Servicios API
│   │   ├── context/       # Contexto de la aplicación
│   │   └── assets/        # Recursos estáticos
│   └── public/            # Archivos públicos
│
└── backend/
    ├── src/
    │   ├── controllers/   # Controladores de la API
    │   ├── models/        # Modelos de datos
    │   ├── routes/        # Rutas de la API
    │   ├── middleware/    # Middleware
    │   └── config/        # Configuraciones
    └── database/          # Configuración de base de datos
```

## Características Implementadas

### Sistema de Autenticación
- Login de usuarios
- Registro de nuevos usuarios
- Protección de rutas
- Manejo de sesiones con JWT
- Validación de formularios
- Manejo de errores

## Próximas Características
- Sistema de firmas electrónicas
- Gestión de documentos
- Panel de administración
- Historial de firmas
- Notificaciones

## Requisitos del Sistema
- Node.js (versión 14 o superior)
- npm o yarn
- Navegador web moderno

## Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias del frontend:
```bash
cd frontend
npm install
```

3. Instalar dependencias del backend:
```bash
cd ../backend
npm install
```

4. Configurar variables de entorno:
   - Crear archivo `.env` en el directorio backend con el siguiente contenido:
   ```env
   # Configuración del servidor
   PORT=3000
   NODE_ENV=development

   # Configuración de la base de datos
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=firmas_db
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña

   # Configuración de JWT
   JWT_SECRET=tu_clave_secreta_muy_segura
   JWT_EXPIRES_IN=24h

   # Configuración de correo (opcional)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=tu_correo@gmail.com
   SMTP_PASS=tu_contraseña_de_aplicacion
   ```

   > ⚠️ **IMPORTANTE**: 
   > - Nunca subas el archivo `.env` al repositorio
   > - Mantén tus claves secretas seguras
   > - Usa valores diferentes para desarrollo y producción
   > - Para el `JWT_SECRET` usa una cadena larga y aleatoria
   > - Para Gmail, usa una "contraseña de aplicación" en lugar de tu contraseña normal

## Desarrollo

1. Iniciar el servidor de desarrollo frontend:
```bash
cd frontend
npm run dev
```

2. Iniciar el servidor backend:
```bash
cd backend
npm run dev
```

## Contribución
1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto
[Tu Nombre/Equipo] - [Tu Email]

## Estado del Proyecto
🚧 En desarrollo - Fase inicial (Sistema de autenticación) 