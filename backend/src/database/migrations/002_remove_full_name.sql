-- Eliminar la columna full_name de la tabla users
ALTER TABLE users
DROP COLUMN full_name;

-- Eliminar el índice si existe (opcional, dependiendo de si se creó un índice para full_name)
-- DROP INDEX idx_users_full_name; 