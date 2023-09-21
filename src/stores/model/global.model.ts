import { Action, Thunk, action, persist, thunk } from 'easy-peasy';
import { Injections } from '../injections';
import { storageEngine } from '../storage-engine';

export interface Page {
  title: string;
  subTitle: string;
}

export interface GlobalModel {
  hasProgress: boolean;
  page: Page;

  // Actions
  setProgress: Action<GlobalModel, boolean>;
  setPage: Action<GlobalModel, Page>;

  // Thunk
  findProgress: Thunk<GlobalModel, void, Injections>;
  startProgress: Thunk<GlobalModel, void, Injections>;
}

const globalModel: GlobalModel = {
  hasProgress: false,
  page: { title: 'Main title', subTitle: 'Sub title' },

  // Actions
  setProgress: action((state, payload: boolean) => {
    state.hasProgress = payload;
  }),
  setPage: action((state, payload: Page) => {
    state.page = payload;
  }),

  // Thunks
  findProgress: thunk(async (actions, _, { injections }) => {
    const { globalService } = injections;
    const value = await globalService.findProgress();
    actions.setProgress(value);
  }),
  startProgress: thunk(async (actions, _, { injections }) => {
    const { globalService } = injections;
    await globalService.startProgress();
    actions.setProgress(true);
  }),
};

export default persist(globalModel, {
  storage: storageEngine,
  allow: ['hasProgress'],
});
