import { EventEmitter, Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const minHeight = 64;
const expandMargin = 32;
const swipeBuffer = 50;

function getClientPos(event: MouseEvent | TouchEvent) {
  if (event instanceof TouchEvent) {
    const touches = event.touches.length ? event.touches : event.changedTouches;
    return { x: touches[0].clientX, y: touches[0].clientY }
  }
  return { x: event.clientX, y: event.clientY };
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _height: number = minHeight;
  private startingPos: {x: number, y: number };
  private startingHeight: number;

  swipeLeft = new EventEmitter();
  swipeRight = new EventEmitter();

  aboveMaxHeight = new BehaviorSubject<boolean>(false);

  set height(val: number) {
    this._height = val;
    this.aboveMaxHeight.next(val > this.maxHeight);
  }

  get height() {
    return this._height;
  }

  get maxHeight() {
    return Math.floor(window.innerHeight / 2);
  }

  get menuOpen() {
    return this.height > this.maxHeight - 64;
  }

  constructor() {}

  trackStart(event: MouseEvent | TouchEvent) {
    this.startingPos = getClientPos(event);
    this.startingHeight = this.height;
  }

  trackStop(event: MouseEvent | TouchEvent) {
    if (!this.startingPos) { return; }
    this.checkHeight();
    this.checkHorizontalSwipe(this.startingPos.x, getClientPos(event).x);
    this.startingPos = null;
    this.startingHeight = null;
  }

  checkHorizontalSwipe(start: number, end: number) {
    if (end < start - swipeBuffer) {
      this.swipeLeft.emit();
    } else if (end > start + swipeBuffer) {
      this.swipeRight.emit();
    }
  }

  track(event: MouseEvent | TouchEvent) {
    if (!this.startingHeight || !this.startingPos.y) return;

    this.checkMenuHeight(event);
  }

  checkMenuHeight(event: MouseEvent | TouchEvent) {
    const currentPos = getClientPos(event);
    const distanceMoved = currentPos.y - this.startingPos.y;
    if (Math.abs(distanceMoved) < swipeBuffer) {
      return;
    }
    this.updateHeight(distanceMoved);
  }

  updateHeight(distanceMoved: number) {
    let newHeight = this.startingHeight + distanceMoved;
    if (newHeight < minHeight) {
      newHeight = minHeight;
    } else if (newHeight > this.maxHeight + expandMargin) {
      newHeight = this.maxHeight + expandMargin;
    }
    this.height = newHeight;
  }

  checkHeight() {
    const threshold = this.maxHeight / 2;
    if (this.height > threshold) {
      this.height = this.maxHeight;
    }
    if (this.height < threshold) {
      this.height = minHeight;
    }
  }
}
