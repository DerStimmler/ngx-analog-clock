import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'demo-root',
  template: `<router-outlet />`,
  styles: `:host { @apply block h-full min-h-svh; }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}
