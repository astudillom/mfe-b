import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-page-one',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './page-one.html',
  styleUrl: './page-one.scss'
})
export class PageOne {

  constructor(private readonly router: Router) { }
  goToPageTwo() {
    this.router.navigate(['/mfeb/page-two']);
  }
}
