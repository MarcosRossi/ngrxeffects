import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/index';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosinitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

// tslint:disable-next-line: variable-name
const _usuariosReducer = createReducer(
  usuariosinitialState,
  on(actions.loadUsers, (state) => ({ ...state, loading: true })),

  on(actions.loadUsersSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
  })),
  on(actions.loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usuariosReducer(state: UsuariosState, action: Action) {
  return _usuariosReducer(state, action);
}
