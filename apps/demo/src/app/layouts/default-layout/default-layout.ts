import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'demo-default-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './default-layout.html',
  styles: `:host { @apply min-h-full grid grid-rows-[auto_1fr_auto];}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayout {}
