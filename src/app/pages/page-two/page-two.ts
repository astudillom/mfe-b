import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-page-two',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss'
})
export class PageTwo {
  constructor(private readonly router: Router) { }

  goToMFEAHome() {
    this.router.navigate(['/mfea']);
  }

  goToMFEAPageOne() {
    this.router.navigate(['/mfea/page-one']);
  }
}
