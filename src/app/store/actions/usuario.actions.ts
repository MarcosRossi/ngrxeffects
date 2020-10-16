import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const loadUser = createAction(
  '[Usuario] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[Usuario] Load User Success',
  props<{ usuario: Usuario }>()
);

export const loadUserError = createAction(
  '[Usuario] Load User Error',
  props<{ payload: any }>()
);
