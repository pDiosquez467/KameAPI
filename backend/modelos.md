### 👤 Usuarios

| Campo                    | Tipo     | Clave     | Descripción                            |
|--------------------------|----------|-----------|----------------------------------------|
| `id`                     | INTEGER  | PK        | Identificador único del usuario        |
| `nombre`                 | TEXT     |           | Nombre del usuario                     |
| `dinero`                 | INTEGER  |           | Dinero disponible                      |
| `personaje_seleccionado` | DECIMAL  | FK        | Personaje seleccionado (referencia)    |

---

### 🧙‍♂️ Personajes

| Campo     | Tipo     | Clave     | Descripción                 |
|-----------|----------|-----------|-----------------------------|
| `id`      | INTEGER  | PK        | Identificador del personaje |
| `nombre`  | TEXT     |           | Nombre del personaje        |
| `ki`      | INTEGER  |           | Nivel de ki                 |
| `precio`  | DECIMAL  |           | Precio para desbloquear     |

---

### 🧩 Personajes desbloqueados

| Campo          | Tipo     | Clave     | Descripción                          |
|----------------|----------|-----------|--------------------------------------|
| `id_usuario`   | INTEGER  | PK, FK    | Usuario que desbloqueó el personaje |
| `id_personaje` | INTEGER  | PK, FK    | Personaje desbloqueado               |
