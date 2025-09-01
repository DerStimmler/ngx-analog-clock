import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgxAnalogClock } from 'ngx-analog-clock';
import { interval, map } from 'rxjs';

@Component({
  selector: 'demo-showcase',
  imports: [CommonModule, NgxAnalogClock],
  templateUrl: './showcase.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Showcase {
  protected date = toSignal(interval(1000).pipe(map(() => new Date())), { initialValue: new Date() });
}
