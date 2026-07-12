import { Component, inject } from '@angular/core';
import { HelperService, SortBy } from '../helper.service';
import { RoleAccess, StatusUser } from '../../mock';
import { enumToArray } from '../helper-file';

@Component({
  selector: 'app-header-list-entities',
  imports: [],
  templateUrl: './header-list-entities.html',
  styleUrl: './header-list-entities.less',
})
export class HeaderListEntities {
  readonly serviceHelper = inject(HelperService);

  readonly sortBy = enumToArray(SortBy);
  readonly status = enumToArray(StatusUser);
  readonly roleAccess = enumToArray(RoleAccess);

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.serviceHelper.onSearch(value);
  }

  onSort(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    this.serviceHelper.onSort(value as SortBy);
  }

  onFilterForStatus(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    this.serviceHelper.onFilterForStatus(value as StatusUser | '');
  }

  onFilterForRoleAccess(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    this.serviceHelper.onFilterForRoleAccess(value as RoleAccess | '');
  }
}
