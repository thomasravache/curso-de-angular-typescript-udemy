import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

    ngOnInit(): void {
      this.activedRoute.params.subscribe(
        (res: any) => console.log(res.id, res.username, res)
      );

      this.activedRoute.queryParams.subscribe(
        (res) => console.log('queryparams', res)
      );

      setInterval(() => {
        this.router.navigate(['404']); // funciona igual o clicked link, sem fazer reload na pagina
        // this.router.navigateByUrl('404'); // faz o reload na página, usar mais pra mandar pra outros sites
      }, 5000)
    }
}
