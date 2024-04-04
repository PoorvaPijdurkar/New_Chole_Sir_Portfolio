import { Component } from '@angular/core';

@Component({
  selector: 'jhi-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  scrollToTop():void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
