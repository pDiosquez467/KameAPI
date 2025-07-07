-- CreateTable
CREATE TABLE "Personajes_desbloqueados" (
    "id_usuario" INTEGER NOT NULL,
    "id_personaje" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Personajes_desbloqueados_id_usuario_id_personaje_key" ON "Personajes_desbloqueados"("id_usuario", "id_personaje");

-- AddForeignKey
ALTER TABLE "Personajes_desbloqueados" ADD CONSTRAINT "Personajes_desbloqueados_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personajes_desbloqueados" ADD CONSTRAINT "Personajes_desbloqueados_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
