import { Component } from '@angular/core';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matDialog';

  myInputValue='';
constructor(private dialog: MatDialog){}

openDialog(){
  let config:MatDialogConfig= {
   width:'400px',
   panelClass:'myDialogClass', data:{heading:'register'}
  };
  this.dialog.open(MyDialogComponent, config).afterClosed().subscribe((data) => {
    this.myInputValue=data;
  });
}
}
