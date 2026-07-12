import { Component, computed, effect, inject, input } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-pagiante',
  imports: [],
  templateUrl: './pagiante.html',
  styleUrl: './pagiante.less',
})
export class Pagiante {
  readonly limit = input(5);

  readonly serviceHelper = inject(HelperService);

  readonly currentPage = this.serviceHelper.currentPage;
  readonly totalPages = this.serviceHelper.totalPages;
  readonly totalCount = this.serviceHelper.totalCount;

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, index) => index + 1),
  );

  constructor() {
    effect(() => {
      this.serviceHelper.setLimit(this.limit());
    });
  }

  goToPage(page: number) {
    this.serviceHelper.setPage(page);
  }

  prevPage() {
    this.goToPage(this.currentPage() - 1);
  }

  nextPage() {
    this.goToPage(this.currentPage() + 1);
  }
}
