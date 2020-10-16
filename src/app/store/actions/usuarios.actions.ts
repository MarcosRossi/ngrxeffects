import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const loadUsers = createAction('[Usuarios] Load Users');
export const loadUsersSuccess = createAction(
  '[Usuarios] Load Users Success',
  props<{ usuarios: Usuario[] }>()
);

export const loadUsersError = createAction(
  '[Usuarios] Load Users Error',
  props<{ payload: any }>()
);
