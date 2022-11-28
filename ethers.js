import { Alchemy } from 'alchemy-sdk';

const alchemy = new Alchemy();

alchemy.core.getTokenBalances('vitalik.eth').then(
  console.log
);