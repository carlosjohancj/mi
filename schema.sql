-- schema.sql
CREATE TABLE IF NOT EXISTS Usuarios (
    id INTEGER PRIMARY KEY,
    nombre TEXT, UNIQUE
    pass TEXT, UNIQUE
    email TEXT, UNIQUE
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);