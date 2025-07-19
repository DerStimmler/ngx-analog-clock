import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAnalogClock } from 'ngx-analog-clock';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, interval } from 'rxjs';

@Component({
  selector: 'demo-home',
  imports: [CommonModule, NgxAnalogClock],
  templateUrl: './home.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected date = toSignal(interval(1000).pipe(map(() => new Date())), { initialValue: new Date() });
}
