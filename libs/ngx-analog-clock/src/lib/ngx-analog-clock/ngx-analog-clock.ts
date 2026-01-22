
import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'ngx-analog-clock',
  imports: [],
  templateUrl: './ngx-analog-clock.html',
  styleUrl: './ngx-analog-clock.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxAnalogClock {
  date = input.required<Date>();

  showHourHand = input<boolean>(true);
  showMinuteHand = input<boolean>(true);
  showSecondHand = input<boolean>(true);
  showHourMarkers = input<boolean>(true);
  showMinuteMarkers = input<boolean>(true);
  showClockNumbers = input<boolean>(true);
  showBezel = input<boolean>(true);
  transitionDuration = input<string>('0.5s');
  transitionFunction = input<string>('cubic-bezier(0.4, 2, 0.3, 1)');
  bezelThickness = input<string>('3px');
  pivotThickness = input<string>('12px');
  hourHandThickness = input<string>('9px');
  hourHandLength = input<string>('60%');
  minuteHandThickness = input<string>('6px');
  minuteHandLength = input<string>('90%');
  secondHandThickness = input<string>('3px');
  secondHandLength = input<string>('97%');
  pivotColor = input<string>('#ff0000');
  hourHandColor = input<string>('#222222');
  minuteHandColor = input<string>('#222222');
  secondHandColor = input<string>('#222222');
  hourMarkerColor = input<string>('#222222');
  minuteMarkerColor = input<string>('#222222');
  clockNumberColor = input<string>('#222222');
  dialColor = input<string>('transparent');
  bezelColor = input<string>('#222222');
  markerOffsetPercent = input<number>(96);
  numbersOffsetPercent = input<number>(70);
  hourMarkerThickness = input<string>('2%');
  hourMarkerLength = input<string>('7%');
  minuteMarkerThickness = input<string>('1%');
  minuteMarkerLength = input<string>('3%');
  hourHandBorderRadius = input<string>('2px');
  minuteHandBorderRadius = input<string>('2px');
  secondHandBorderRadius = input<string>('2px');
  minuteMarkerBorderRadius = input<string>('2px');
  hourMarkerBorderRadius = input<string>('2px');

  protected markers = computed(() => {
    const markers: ClockMarker[] = [];

    for (let i = 0; i < 60; i++) {
      const markerType = i % 5 === 0 ? 'hour' : 'minute';

      const angleDeg = i * 6;
      const angleRad = (angleDeg * Math.PI) / 180;

      const radius = 50 - (100 - this.markerOffsetPercent()) / 2;

      const leftPercent = 50 + Math.sin(angleRad) * radius;
      const topPercent = 50 - Math.cos(angleRad) * radius;

      markers.push({
        left: `${leftPercent}%`,
        top: `${topPercent}%`,
        transform: `rotate(${angleDeg}deg) translateX(-50%)`,
        type: markerType,
        minute: i + 1,
      });
    }
    return markers;
  });

  protected numbers = computed(() => {
    const numbers: ClockNumber[] = [];

    for (let i = 1; i <= 12; i++) {
      const angleRad = (i * 30 * Math.PI) / 180;

      const leftPercent = 50 + (Math.sin(angleRad) * this.numbersOffsetPercent()) / 2;
      const topPercent = 50 - (Math.cos(angleRad) * this.numbersOffsetPercent()) / 2;

      numbers.push({
        left: `${leftPercent}%`,
        top: `${topPercent}%`,
        number: i,
      });
    }

    return numbers;
  });

  private rawHoursDegrees = computed(
    () => (this.date().getHours() * 3600 + this.date().getMinutes() * 60 + this.date().getSeconds()) * (360 / 12 / 3600)
  );
  private rawMinutesDegrees = computed(
    () => (this.date().getHours() * 3600 + this.date().getMinutes() * 60 + this.date().getSeconds()) * (360 / 60 / 60)
  );
  private rawSecondsDegrees = computed(
    () => (this.date().getHours() * 3600 + this.date().getMinutes() * 60 + this.date().getSeconds()) * (360 / 60)
  );

  // Track adjusted rotations to avoid full-circle jumps, otherwise the arm would rotate multiple times when jumping from idle time to current time
  protected adjustedHoursDegrees = linkedSignal<number, number>({
    source: this.rawHoursDegrees,
    computation: (source, previous) => this.calculateRotationWithShortestPath(source, previous?.value ?? source),
  });
  protected adjustedMinutesDegrees = linkedSignal<number, number>({
    source: this.rawMinutesDegrees,
    computation: (source, previous) => this.calculateRotationWithShortestPath(source, previous?.value ?? source),
  });
  protected adjustedSecondsDegrees = linkedSignal<number, number>({
    source: this.rawSecondsDegrees,
    computation: (source, previous) => this.calculateRotationWithShortestPath(source, previous?.value ?? source),
  });

  private calculateRotationWithShortestPath(source: number, previous: number): number {
    const delta = source - previous;
    const fullCircles = Math.round(delta / 360);
    return previous + (delta - fullCircles * 360);
  }
}

interface ClockMarker {
  minute: number;
  left: string;
  top: string;
  transform: string;
  type: 'hour' | 'minute';
}

interface ClockNumber {
  number: number;
  left: string;
  top: string;
}
