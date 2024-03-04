import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark!: boolean;
  constructor() {
    this.isDark =
      window.localStorage.getItem('darkMode') == 'false'
        ? false
        : true || window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleDarkMode(isDarkMode: boolean): void {
    this.isDark = isDarkMode;
    window.localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }
}
