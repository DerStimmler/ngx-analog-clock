import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxAnalogClock } from 'ngx-analog-clock';
import { interval, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'demo-playground',
  imports: [CommonModule, NgxAnalogClock, FormsModule, RouterModule, NgxAnalogClock],
  templateUrl: './playground.html',
  styles: `:host { @apply grid h-full; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Playground {
  private interval = toSignal(interval(1000).pipe(map(() => new Date())), { initialValue: new Date() });

  // Custom time settings
  protected useRealTime = signal<boolean>(true);
  protected customTime = signal<Date | null>(null);

  // Computed date that uses either real-time or custom time
  protected date = computed(() => {
    if (this.useRealTime()) {
      return this.interval();
    } else {
      return this.customTime() || new Date();
    }
  });

  // Clock display options
  protected showHourHand = signal<boolean>(true);
  protected showMinuteHand = signal<boolean>(true);
  protected showSecondHand = signal<boolean>(true);
  protected showHourMarkers = signal<boolean>(true);
  protected showMinuteMarkers = signal<boolean>(true);
  protected showClockNumbers = signal<boolean>(true);
  protected showBezel = signal<boolean>(true);

  // Animation properties
  protected transitionDuration = signal<string>('0.5s');
  protected transitionFunction = signal<string>('cubic-bezier(0.4, 2, 0.3, 1)');

  // Size properties
  protected bezelThickness = signal<string>('3px');
  protected pivotThickness = signal<string>('12px');
  protected hourHandThickness = signal<string>('9px');
  protected hourHandLength = signal<string>('60%');
  protected minuteHandThickness = signal<string>('6px');
  protected minuteHandLength = signal<string>('90%');
  protected secondHandThickness = signal<string>('3px');
  protected secondHandLength = signal<string>('97%');

  // Color properties
  protected pivotColor = signal<string>('#ff0000');
  protected hourHandColor = signal<string>('#0000ff');
  protected minuteHandColor = signal<string>('#800080');
  protected secondHandColor = signal<string>('#ffa500');
  protected hourMarkerColor = signal<string>('#40e0d0');
  protected minuteMarkerColor = signal<string>('#a52a2a');
  protected clockNumberColor = signal<string>('#ffd700');
  protected dialColor = signal<string>('linear-gradient(#e66465, #9198e5)');
  protected bezelColor = signal<string>('#000000');

  // Marker properties
  protected markerOffsetPercent = signal<number>(96);
  protected numbersOffsetPercent = signal<number>(70);
  protected hourMarkerThickness = signal<string>('2%');
  protected hourMarkerLength = signal<string>('7%');
  protected minuteMarkerThickness = signal<string>('1%');
  protected minuteMarkerLength = signal<string>('3%');

  // Border radius properties
  protected hourHandBorderRadius = signal<string>('2px');
  protected minuteHandBorderRadius = signal<string>('2px');
  protected secondHandBorderRadius = signal<string>('2px');
  protected minuteMarkerBorderRadius = signal<string>('2px');
  protected hourMarkerBorderRadius = signal<string>('2px');

  setCustomTime(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const [hours, minutes] = inputElement.value.split(':').map(Number);

    const now = new Date();
    const customDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);

    this.customTime.set(customDate);
    this.useRealTime.set(false);
  }

  toggleRealTime(useRealTime: boolean) {
    this.useRealTime.set(useRealTime);

    if (useRealTime) {
      this.customTime.set(null);
    }
  }
}
