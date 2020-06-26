import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public init = new Client();
  constructor(
    private os: ClientsService,
    private router: Router,
    // private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  public add(item: Client) {
    this.os.add(item).subscribe((res) => {
      // console.log(res);
      this.router.navigate(['clients'])
      // this.router.navigate(['../'], {relativeTo: this.route})
      // this.router.navigate(['edit'], {relativeTo: this.route})
    })
  }

}
