import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers } from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { loadUsersSuccess, loadUsersError } from '../actions/usuarios.actions';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usuarioService.getAll().pipe(
          map((users) => loadUsersSuccess({ usuarios: users })),
          catchError((err) => of(loadUsersError({ payload: err })))
        )
      )
    )
  );
}
