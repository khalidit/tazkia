import { Action, Thunk, action, thunk } from 'easy-peasy';
import Tazkia from '../../domains/tazkia/Tazkia';
import { Injections } from '../injections';

export interface TazkiaModel {
  isLoaded: boolean;
  item: Tazkia;

  // Actions
  load: Action<TazkiaModel, Tazkia>;

  // Thunk
  find: Thunk<TazkiaModel, void, Injections>;
  createOrUpdate: Thunk<TazkiaModel, Tazkia, Injections>;
}

export const tazkiaModel: TazkiaModel = {
  isLoaded: false,
  item: { id: 0, step1: [], step2: [], step3: [] },

  // Actions
  load: action((state, payload: Tazkia) => {
    state.item = payload;
    state.isLoaded = true;
  }),

  // Thunks
  find: thunk(async (actions, _void, { injections }) => {
    const { tazkiaService } = injections;
    const item = await tazkiaService.find();
    actions.load(item);
  }),
  createOrUpdate: thunk(async (actions, payload: Tazkia, { injections }) => {
    const { tazkiaService } = injections;
    const item = await tazkiaService.createOrUpdate(payload);
    actions.load(item);
  }),
};
