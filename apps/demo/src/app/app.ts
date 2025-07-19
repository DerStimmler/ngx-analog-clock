import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'demo-root',
  template: `<router-outlet></router-outlet>`,
  styles: `:host { @apply block h-full; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
