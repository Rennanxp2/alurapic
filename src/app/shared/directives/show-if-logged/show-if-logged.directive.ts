import { UserService } from './../../../core/user/user.service';
import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[ShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {


  constructor(
    private element: ElementRef<any>,
    // tslint:disable-next-line: deprecation
    private renderer: Renderer,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-unused-expression
    !this.userService.isLogged()
      && this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
  }
}
