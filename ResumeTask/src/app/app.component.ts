import { Component, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeTask';

 

  exportAsPdf(){
    let data:any = document.getElementById('myResume');  
        html2canvas(data).then(canvas => {
          let fileWidth = 210;
          let fileHeight = (canvas.height * fileWidth) / canvas.width;
          let height1=301;
          const FILEURI = canvas.toDataURL('image/png');
          let PDF = new jsPDF('p', 'mm', 'a4');
          var height = PDF.internal.pageSize.getHeight();
          // var width = PDF.internal.pageSize.getWidth();
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
          PDF.save('angular-demo.pdf');  
      }); 
  }
   
  
  isShow: boolean | undefined;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

 
}

 
