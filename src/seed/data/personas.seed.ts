import {v4 as uuid} from 'uuid'
import { Persona } from "src/personas/entities/persona.entity";

export const PERSONAS_SEED: Persona[] = [
    {
        id: uuid(),
        nombre: 'Juan',
        apellido: 'Perez',
        numDocumento: '31232312',
        telefono: '299-12345678',
        createdAt: 0,
        updatedAt: 0
    },
        {
        id: uuid(),
        nombre: 'Roberto',
        apellido: 'Bolaños',
        numDocumento: '3723132',
        telefono: '299-12345678',
        createdAt: 0,
        updatedAt: 0
    },
        {
        id: uuid(),
        nombre: 'Jessica',
        apellido: 'Cirio',
        numDocumento: '878322',
        telefono: '299-12345678',
        createdAt: 0,
        updatedAt: 0
    }
] 