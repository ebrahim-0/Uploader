import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../Services/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isDark!: boolean;

  constructor(private _ThemeService: ThemeService) {}

  ngOnInit(): void {
    this.isDark = this._ThemeService.isDark;
  }

  toggleDarkMode() {
    this._ThemeService.toggleDarkMode(!this.isDark);
    this.isDark = this._ThemeService.isDark;
  }
}
