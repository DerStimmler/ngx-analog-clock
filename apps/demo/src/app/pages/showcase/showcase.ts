import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-showcase',
  imports: [CommonModule],
  templateUrl: './showcase.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Showcase {}
