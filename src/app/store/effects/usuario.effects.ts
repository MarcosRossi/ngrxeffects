import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

import { of } from 'rxjs';
import * as actions from 'src/app/store/actions';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUser),
      mergeMap((action) =>
        this.usuarioService.getById(action.id).pipe(
          map((usuario) => actions.loadUserSuccess({ usuario })),
          catchError((err) => of(actions.loadUserError({ payload: err })))
        )
      )
    )
  );
}
