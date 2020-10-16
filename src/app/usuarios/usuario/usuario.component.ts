import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  user: Usuario;
  loading: false;
  error: any;
  userSubs$: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) =>
      this.store.dispatch(loadUser({ id }))
    );

    this.userSubs$ = this.store
      .select('usuario')
      .subscribe(({ user, loading, error }) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.userSubs$.unsubscribe();
  }
}
