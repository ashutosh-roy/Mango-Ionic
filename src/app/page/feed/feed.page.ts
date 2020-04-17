import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  authUser: any;
  constructor(private auth:AuthService) { }
  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => 
    {
      this.authUser = res;
      console.log(this.authUser);
    });
  }

}
