👤 Usuarios
───────────────
id                   PK
nombre               TEXT
dinero               NUMERIC / INTEGER
personaje_seleccionado   FK → Personajes(id)


🧙‍♂️ Personajes
───────────────
id                   PK
nombre               TEXT
ki                   INTEGER
precio               NUMERIC


🔓 Personajes_Desbloqueados
───────────────
id_usuario           FK → Usuarios(id)
id_personaje         FK → Personajes(id)
PK(id_usuario, id_personaje)