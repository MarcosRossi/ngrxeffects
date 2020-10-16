import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import { Usuario } from 'src/app/models/usuario.model';
import { loadUsers } from '../../store/actions/usuarios.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit, OnDestroy {
  usuarios: Usuario[];
  loading = false;
  error: any;
  userSubs$: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());

    this.userSubs$ = this.store
      .select('usuarios')
      .subscribe(({ users, loading, error }) => {
        this.usuarios = users;
        this.loading = loading;
        this.error = error;
      });
  }

  ngOnDestroy(): void {
    this.userSubs$.unsubscribe();
  }
}
