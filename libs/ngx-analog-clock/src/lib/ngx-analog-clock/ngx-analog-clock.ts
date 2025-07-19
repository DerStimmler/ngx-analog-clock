import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ngx-analog-clock',
  imports: [CommonModule],
  templateUrl: './ngx-analog-clock.html',
  styleUrl: './ngx-analog-clock.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxAnalogClock {}
