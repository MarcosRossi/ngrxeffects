import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/index';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
  id: string;
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioinitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

// tslint:disable-next-line: variable-name
const _usuarioReducer = createReducer(
  usuarioinitialState,
  on(actions.loadUser, (state, { id }) => ({
    ...state,
    loading: true,
    id,
  })),

  on(actions.loadUserSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
  })),

  on(actions.loadUserError, (state, { payload }) => ({
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

export function usuarioReducer(state: UsuarioState, action: Action) {
  return _usuarioReducer(state, action);
}
