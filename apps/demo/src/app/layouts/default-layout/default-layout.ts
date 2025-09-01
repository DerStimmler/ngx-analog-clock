import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'demo-default-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, NgOptimizedImage, RouterLinkActive],
  templateUrl: './default-layout.html',
  styles: `:host { @apply min-h-0 h-full grid grid-rows-[auto_1fr_auto];}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayout {}
