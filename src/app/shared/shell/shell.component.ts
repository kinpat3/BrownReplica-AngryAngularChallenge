import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches), shareReplay()
    )

  constructor(private BreakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
