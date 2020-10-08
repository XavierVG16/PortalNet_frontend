import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from 'src/app/models/equipo';
import { ServicioService } from '../../services/servicio.service';
import { Servicio } from '../../models/servicio';
import { from } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router'


@Component({ selector: 'app-contrato', templateUrl: './contrato.component.html', styleUrls: ['./contrato.component.css'] })
export class ContratoComponent implements OnInit { /**pas0 a paso */


    equiposISp = [];
    total: number;
    orden_instalacion = Math.floor((Math.random() * 10000) + 1);

    displayedColumns: string[] = [
        'equipo',
        'descripcion',
        'cantidad',
        'estado',
        'accion'
    ];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    constructor(public contratoService: ContratoService, public equipoService: EquipoService, public servicioService: ServicioService, private toastr: ToastrService, private router: Router) { }

    ngOnInit(): void {
        this.getEquipos();
        this.getServicios();
        this.orden_instalacion = Math.floor((Math.random() * 10000) + 1);


    }
    resetForm(form?: NgForm) {
        if (form) {
            form.reset();
            this.total = 0;
            this.contratoService.selectedContrato = new Contrato();
            this.equiposISp = [{
                "id": "",
                "equipo": "",
                "equipo_n": "",
                "descripcion": "",
                "serie": "",
                "cantidad": "",
                "precio": 0,
                "idorden_instalacion": " "
            }];

        }
    }
    getEquipos() {
        this.equipoService.getEquipos().subscribe(res => {
            this.equipoService.equipos = res as Equipo[];
            this.dataSource = new MatTableDataSource(this.equipoService.equipos);
            this.dataSource.paginator = this.paginator;


        });

    }

    getServicios() {
        this.servicioService.getServicios().subscribe(res => {
            this.servicioService.servicios = res as Servicio[];
        });
    }

    addContrato(form?: NgForm) {

        if (form.valid) {
            this.contratoService.postContrato(form.value, this.orden_instalacion).subscribe(res => {
                this.toastr.success('Guardado con éxito!', 'Datos');
            })

        } else {
            this.toastr.error('Complete los campos', 'Por favor!');
        }


    }
    addEquipos() {
        if (this.equiposISp.length != 0) {
            for (let i = 0; i < this.equiposISp.length; i++) {
                const element = this.equiposISp[i];
                console.log(element)
                this.contratoService.postDetalle(element, this.total).subscribe(res => {
                    // this.getServicios();
                    // this.resetForm(form);
                    this.toastr.success('Guardado con éxito!', 'Detalle de Equipos ISP' + ' ' + `${i}`);
                })

            }
            this.orden_instalacion = Math.floor((Math.random() * 10000) + 1);
            this.router.navigate(['/inicio'])

        } else {
            this.toastr.error('Complete la tabla de detalle Equipos ISP ', 'Por favor!');

        }


    }

    selectEquipo(equipo: Equipo) {

        this.equipoService.selectedEquipo = equipo;

        this.equiposISp.push({
            id: this.equiposISp.length + 1,
            equipo: equipo.idequipo,
            equipo_n: equipo.equipo,
            descripcion: equipo.descripcion,
            serie: equipo.serie,
            cantidad: 1,
            precio: equipo.precio,
            idorden_instalacion: this.orden_instalacion

        });
        for (let i = 0; i < this.equipoService.equipos.length; i++) {
            const element = this.equipoService.equipos[i];

            if (equipo.idequipo == element.idequipo) {

                element.cantidad = element.cantidad - 1
            }

        }

        this.calcular();

    }


    deleteCategory(_id: string) {
        if (confirm('Seguro que deseas borrar el equipo?')) {


            for (let i = 0; i < this.equipoService.equipos.length; i++) {
                const element = this.equipoService.equipos[i];

                this.equiposISp.forEach((product, i) => {
                    if (product.id == _id) {


                        if (product.equipo == element.idequipo) {
                            console.log(product.equipo)
                            console.log(element.idequipo)
                            element.cantidad = element.cantidad + 1;
                            this.equiposISp.splice(i, 1);

                        }

                    }


                });

            }

            this.calcular();


            this.toastr.success('Se borro con éxito!', 'Equipo ISP', { timeOut: 2000 });
            // M.toast({html: 'Deleted Succesfully'});

        }
    }
    calcular() {
        this.total = 0;
        for (let i = 0; i < this.equiposISp.length; i++) {
            const element = this.equiposISp[i];

            this.total = this.total + element.precio;

        }

    }


}
