import { server } from '@config/config';

export function parseAPIVersion(version: number) {
  return server.API_URI!!.replace('$v', `v${version}`);
}

const Pallet = 4;
const Caixa = 5;
const chão = 6;
export const permiteSubcontainer = {
  1: [Pallet, Caixa, chão],
  2: [Pallet, Caixa, chão],
  3: [Pallet, Caixa, chão],
  4: [Caixa],
  6: [Pallet, Caixa],
};
