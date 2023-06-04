// textos.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.css']
})
export class TextosComponent implements OnInit {
  public texto1: string = '';
  public texto2: string = '';

  ngOnInit(): void {
      
  }
}
