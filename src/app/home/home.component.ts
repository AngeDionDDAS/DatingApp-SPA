import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode = false;
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }

  registerToggle(){
    this.registerMode = true;
  }

  getValues(){
    this.http.get('https://localhost:7191/api/Values').subscribe( response => {
      this.values = response;
    }, error =>{
      console.log(error);
    });
  }


  cancerlRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }
}
