const idorden_instalacion = id;

const { cedula, nombre, apellido, direccion, referencia, telefono, email, propiedad } = req.body;

// IMNGRESAR clientes
const newCliente = {
    cedula, nombre, apellido, direccion, propiedad, referencia, telefono, email
};
const cliente = await pool.query('insert into cliente  set ?', newCliente);

const idcliente = cliente.insertId


//----------------------------------------------------------------------------------//
//orden Instalacion
const { dia_instalacion, hora_instalacion } = req.body;

const newOrden = { idorden_instalacion, dia_instalacion, hora_instalacion }

const Orden_instalacion = await pool.query('insert into orden_instalacion  set ?', newOrden)

//----------------------------------------------------------------------------------//
/** contrato */
const { tipo_enlace, wifi_nombre, wifi_clave, tipo_servicio, wifi_nombre2, wifi_clave2 } = req.body;
const row = await pool.query('select * from plan_servicio where nombre_plan = ?', [tipo_servicio]);

row.forEach(element => {
    plan_servicio = element.idplan_servicio
    total = element.precio

});
const newContrato = { idcliente, plan_servicio, tipo_enlace, wifi_nombre, wifi_clave, idorden_instalacion, wifi_nombre2, wifi_clave2 }

const contrato = await pool.query('insert contrato_servicio  set ?', newContrato)
const contrato_servicio = contrato.insertId;
/**primera factura */

const newfactura = { contrato_servicio, total };
await pool.query('insert factura  set ?', newfactura)
res.json({ status: 'contrato creado creada' });
};


contratoCtrl.createDetalleEquipos = async (req, res, next) => {

    const { equipo,
        cantidad,
        precio,
        idorden_instalacion } = req.body;
    const { id } = req.params;
    const total = id;
    const orden_instalacion = idorden_instalacion
    total_equipo = precio
    const new_detalle = {
        equipo,
        cantidad,
        total_equipo,
        orden_instalacion

    }
    const edit = { total }
    console.log(req.body)


    await pool.query('insert into detalle_equipos set ?', new_detalle);

    res.json({ status: 'Contrato creada' });

};
contratoCtrl.getContrato = async (req, res, next) => {
    const { id } = req.params;

    const contrato = await pool.query('select * from contrato_servicio  inner join plan_servicio on contrato_servicio.plan_servicio  = plan_servicio.idplan_servicio   where idcliente = ? ', [id]);
    res.json(contrato);
    console.log(contrato)