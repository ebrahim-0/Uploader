import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ThemeService } from './Services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Uploader';

  ngOnInit() {
    initFlowbite();
  }

  constructor(private _ThemeService: ThemeService) {}

  @HostBinding('class.dark') get mode() {
    return this._ThemeService.isDark;
  }
}
