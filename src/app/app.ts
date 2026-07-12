import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User, users } from '../mock';
import { Pagiante } from './pagiante/pagiante';
import { HeaderListEntities } from './header-list-entities/header-list-entities';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Pagiante, HeaderListEntities],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {
  private readonly serviceHelper = inject(HelperService);

  readonly users = this.serviceHelper.users;
}
