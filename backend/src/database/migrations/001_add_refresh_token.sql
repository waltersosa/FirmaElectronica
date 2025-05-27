-- Añadir columnas para refresh token
ALTER TABLE users
ADD COLUMN refresh_token TEXT,
ADD COLUMN token_created_at TIMESTAMP;

-- Crear índice para búsquedas por refresh token
CREATE INDEX idx_users_refresh_token ON users(refresh_token); 