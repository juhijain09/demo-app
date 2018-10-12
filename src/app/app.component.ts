}
import { Component, OnInit, Renderer2, ElementRef, ViewChild , AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public count=0;
public fade = true;
  constructor(
	   private el:ElementRef,
	   private renderer:Renderer2){

}
  @ViewChild('appendToChildEl') appendToChildEl: ElementRef;
public toggleSide(){
	this.fade = !this.fade;
	const child2 = this.renderer.createElement('div');
			child2.innerHTML ='<div style="color:red; "><div> heloo </div>';
			this.appendToChildEl.nativeElement.appendChild( child2);
	// this.count++;
		// if(this.count%2 ===0){
		// 	// this.el.nativeElement.querySelector('#toggleview').element.className("hidden");
		// 	this.el.nativeElement.querySelector('#toggleview').style.display = "none"
		// }
		// else{
		// 	this.el.nativeElement.querySelector('#toggleview').style.display = "initial"
		// }
}

}