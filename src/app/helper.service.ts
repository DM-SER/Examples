import { Injectable, computed, signal } from '@angular/core';
import { RoleAccess, StatusUser, User, users } from '../mock';

export enum SortBy {
  ASC = 'ASC',
  DESC = 'DESC',
}

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private readonly searchQuery = signal('');
  private readonly statusFilter = signal<StatusUser | null>(null);
  private readonly roleAccessFilter = signal<RoleAccess | null>(null);
  private readonly sortBy = signal<SortBy>(SortBy.ASC);

  readonly currentPage = signal(1);
  readonly pageLimit = signal(5);

  readonly filteredUsers = computed(() => {
    let result = [...users];

    const search = this.searchQuery().trim().toLowerCase();
    if (search) {
      result = result.filter((user) => user.name.toLowerCase().includes(search));
    }

    const status = this.statusFilter();
    if (status) {
      result = result.filter((user) => user.status === status);
    }

    const roleAccess = this.roleAccessFilter();
    if (roleAccess) {
      result = result.filter((user) => user.roleAccess === roleAccess);
    }

    const sort = this.sortBy();
    result.sort((a, b) => {
      if (sort === SortBy.ASC) {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    });

    return result;
  });

  readonly totalCount = computed(() => this.filteredUsers().length);

  readonly totalPages = computed(() => {
    const total = this.totalCount();
    if (total === 0) {
      return 1;
    }

    return Math.ceil(total / this.pageLimit());
  });

  readonly users = computed(() => {
    const filtered = this.filteredUsers();
    const limit = this.pageLimit();
    const start = (this.currentPage() - 1) * limit;

    return filtered.slice(start, start + limit);
  });

  onSearch(value: string) {
    this.searchQuery.set(value);
    this.resetPage();
  }

  onSort(value: SortBy) {
    this.sortBy.set(value);
    this.resetPage();
  }

  onFilterForStatus(value: StatusUser | '') {
    this.statusFilter.set(value || null);
    this.resetPage();
  }

  onFilterForRoleAccess(value: RoleAccess | '') {
    this.roleAccessFilter.set(value || null);
    this.resetPage();
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages()) {
      return;
    }

    this.currentPage.set(page);
  }

  setLimit(limit: number) {
    if (limit <= 0) {
      return;
    }

    const prevLimit = this.pageLimit();
    this.pageLimit.set(limit);

    if (prevLimit !== limit) {
      this.resetPage();
    }
  }

  getUserById(id: number): User | undefined {
    return users.find((user) => user.id === id);
  }

  private resetPage() {
    this.currentPage.set(1);
  }
}
