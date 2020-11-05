import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LayoutService } from 'src/app/services/layout.service';

const trackDebounce = 10;

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {
  private track = new BehaviorSubject<MouseEvent | TouchEvent>(null);
  trackSub: Subscription;

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent) { this.layoutService.trackStop(event) }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) { this.layoutService.trackStart(event); }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) { this.track.next(event); }

  @HostListener('touchstart', ['$event'])
  onTouchstart(event: MouseEvent) { this.layoutService.trackStart(event) }

  @HostListener('touchend', ['$event'])
  onTouchend(event: MouseEvent) { this.layoutService.trackStop(event); }

  @HostListener('touchmove', ['$event'])
  onTouchmove(event: MouseEvent) { this.track.next(event); }

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    this.trackSub = this.track.asObservable().pipe(
      debounce(()=> interval(trackDebounce))
    ).subscribe((event) => {
      this.layoutService.track(event);
    })
  }

  ngOnDestroy(): void {
    this.trackSub?.unsubscribe();
  }

}
