import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute
  ) {}

    ngOnInit(): void {
      this.activedRoute.params.subscribe(
        (res: any) => console.log(res.id, res.username, res)
      );

      this.activedRoute.queryParams.subscribe(
        (res) => console.log('queryparams', res)
      );
    }
}
