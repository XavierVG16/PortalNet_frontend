export class DetalleEquipo {
    constructor(iddetalle_equipo='',  total_equipo = 0 ,  orden_instalacion='', equipo='',descripcion='', serie='', dia_instalacion='', hora_instalacion='',
    idinfo_tec='',    wifi_nombre='',     wifi_clave='',     antena_receptora_cpe='',     antena_emisora_ap='',     router_acceso_remoto='',     ip_lan='',      ip_wan='',      potencia='',      aliniacion_antena='',      ruta='',      nap='',      puerto='',      detalle_equipo='') {
        this.iddetalle_equipo = iddetalle_equipo
      
        this.total_equipo = total_equipo
        this.orden_instalacion = orden_instalacion
        this.equipo = equipo,
        this.descripcion = descripcion
        this.serie = serie
        this.dia_instalacion = dia_instalacion
        this.hora_instalacion = hora_instalacion


        this.wifi_nombre = wifi_nombre;
        this.idinfo_tec= idinfo_tec;
        this.wifi_clave= wifi_clave;
         this.antena_receptora_cpe= antena_receptora_cpe;
         this.antena_emisora_ap= antena_emisora_ap;
         this.router_acceso_remoto =router_acceso_remoto;
         this.ip_lan = ip_lan;
          this.ip_wan= ip_wan;
          this.potencia = potencia;
          this.aliniacion_antena= aliniacion_antena;
          this.ruta= ruta;
          this.nap= nap;
          this.puerto= puerto;
          this.detalle_equipo= detalle_equipo

    }
    iddetalle_equipo: string;
    cantidad: number;
    total_equipo: number;
    orden_instalacion: string;
    equipo: string;
    descripcion: string;
    serie: string;
    dia_instalacion: string;
    hora_instalacion: string;

    idinfo_tec: string;
    wifi_nombre: string;
     wifi_clave: string;
     antena_receptora_cpe: string;
     antena_emisora_ap: string;
     router_acceso_remoto: string;
     ip_lan: string;
      ip_wan: string;
      potencia: string;
      aliniacion_antena: string;
      ruta: string;
      nap: string;
      puerto: string;
      detalle_equipo: string

}
