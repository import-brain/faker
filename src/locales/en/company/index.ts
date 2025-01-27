import type { CompanyDefinitions } from '../../../definitions';
import adjective from './adjective';
import bs_adjective from './bs_adjective';
import bs_noun from './bs_noun';
import bs_verb from './bs_verb';
import descriptor from './descriptor';
import name from './name';
import noun from './noun';
import suffix from './suffix';

const company = {
  bs_adjective,
  bs_noun,
  bs_verb,

  adjective,
  descriptor,
  noun,

  suffix,

  name,
} as CompanyDefinitions;

export default company;
