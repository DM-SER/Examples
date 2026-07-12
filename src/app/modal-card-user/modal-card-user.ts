import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../helper.service';
import { User } from '../../mock';

@Component({
  selector: 'app-modal-card-user',
  imports: [],
  templateUrl: './modal-card-user.html',
  styleUrl: './modal-card-user.less',
})
export class ModalCardUser implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly router = inject(Router);
  readonly serviceHelper = inject(HelperService);

  readonly userInfo = signal<User | undefined>(undefined);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userInfo.set(this.serviceHelper.getUserById(id));
  }

  close() {
    this.router.navigate(['/']);
  }
}
