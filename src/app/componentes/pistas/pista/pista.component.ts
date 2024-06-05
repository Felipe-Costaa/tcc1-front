import { ActivatedRoute, Router } from '@angular/router';
import { PistasService } from './../pistas.service';
import { Component, OnInit, Input } from '@angular/core';
import { Pista } from '../pista';

@Component({
  selector: 'app-pista',
  templateUrl: './pista.component.html',
  styleUrls: ['./pista.component.css']
})
export class PistaComponent implements OnInit {

  constructor(
    private service: PistasService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  @Input() pista:Pista = {
    nome: '',
    status: ''
  }

  ngOnInit(): void {
  }

  deletarPista(id: number) {
    this.service.deletePista(id).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/pistas']);
      });
    });
  }


}
