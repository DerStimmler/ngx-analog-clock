import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgxAnalogClock } from 'ngx-analog-clock';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, interval } from 'rxjs';
import { NgxRippleComponent } from '@omnedia/ngx-ripple';

@Component({
  selector: 'demo-home',
  imports: [NgxAnalogClock, NgxRippleComponent],
  templateUrl: './home.html',
  styles: `
    ::ng-deep main { @apply !max-w-[unset] !p-0;}
    :host { @apply overflow-hidden h-full;}
    :host ::ng-deep .om-ripple-background { transform: scale(4); }
    :host ::ng-deep om-ripple .om-ripple { @apply overflow-visible; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected date = toSignal(interval(1000).pipe(map(() => new Date())), { initialValue: new Date() });
}
