import { Plot } from 'src/plots/entities/plot.entity';
import { v4 as uuid } from 'uuid';

export const PLOTS_SEED: Plot[] = [
  {
    id: uuid(),
    numero_lote: 1,
    frente: 10,
    fondo: 20,
    titular: 'Mariano Vergara',
    // createdAt: 0,
    // updatedAt: 0,
  },
  {
    id: uuid(),
    numero_lote: 2,
    frente: 20,
    fondo: 30,
    titular: 'Juan Manuel Mariqueo',
    // createdAt: 0,
    // updatedAt: 0,
  },
  {
    id: uuid(),
    numero_lote: 3,
    frente: 30,
    fondo: 40,
    titular: 'Lucas Castel',
    // createdAt: 0,
    // updatedAt: 0,
  },
];
