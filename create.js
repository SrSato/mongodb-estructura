db=db.getSiblingDB('cul_dampolla')
db.createCollection("clientes",{
	validator:{
		$jsonSchema:{
			bsonType: "object",
			required:["_id","nombre","reg", "direccion"],
			properties:{
				_id: {
					bsonType: "objectId",
					description: "Identificador único del cliente. Obligatorio"
				},
				nombre: {
					bsonType: "string",
					description: "Nombre del cliente. Obligatorio"
				},
				reg: {
					bsonType: "date",
					description: "Fecha de alta como cliente. Obligatorio"
				},
				direccion: {
					bsonType: "object",
					required:["calle","num","piso","puerta","ciudad","cp","pais"],
					properties:{
						calle: {
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						num: {
							bsonType: "double",
							description: "Parte obligatoria de la direccion"
						},
						piso: {
							bsonType: "double",
							description: "Parte obligatoria de la direccion"
						},
						puerta:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						ciudad:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						cp:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						pais:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						tel:{
							bsonType: "string",
							description: "Campo opcional para el teléfono.Si existe, será string"
						},
						fax:{
							bsonType: "string",
							description: "Campo opcional para el fax.Si existe, será string"
						},
						email:{
							bsonType: "string",
							description: "Campo opcional para el e-mail.Si existe, será string"
						}
					}
				},
				"recomendado":{
					bsonType: "objectId",
					description: "Opcional, guarda el id del cliente que recomendo nuestra optica a este"
				}				
			}
		}
	}
})
db.createCollection("proveedores",{
	validator:{
		$jsonSchema:{
			bsonType: "object",
			required:["_id","nombre","nif", "direccion","marcas"],
			properties:{
				_id: {
					bsonType: "objectId",
					description: "Identificador único del proveedor. Obligatorio"
				},
				nombre: {
					bsonType: "string",
					description: "Nombre del proveedor. Obligatorio"
				},
				nif: {
					bsonType: "string",
					description: "Identificación fiscal del proveedor. Obligatorio"
				},
				direccion: {
					bsonType: "object",
					required:["calle","num","piso","puerta","ciudad","cp","pais"],
					properties:{
						calle: {
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						num: {
							bsonType: "double",
							description: "Parte obligatoria de la direccion"
						},
						piso: {
							bsonType: "double",
							description: "Parte obligatoria de la direccion"
						},
						puerta:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						ciudad:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						cp:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						pais:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						tel:{
							bsonType: "string",
							description: "Campo opcional para el teléfono.Si existe, será string"
						},
						fax:{
							bsonType: "string",
							description: "Campo opcional para el fax.Si existe, será string"
						},
						email:{
							bsonType: "string",
							description: "Campo opcional para el e-mail.Si existe, será string"
						}
					}
				},
				marcas:{
					bsonType: "array",
					required: "marca",
					properties:{
						marca:{
							bsonType: "object",
							required:["_id","nombre"],
							properties:{
								_id: {
									bsonType: "objectId",
									description: "Identificador único de la marca. Obligatorio"
								},
								nombre: {
									bsonType: "string",
									description: "Nombre de la marca. Obligatorio"
								}
							}
						}
					}					
				}							
			}
		}
	}
})
db.createCollection("gafas",{
	validator: {
		$jsonSchema:{
			bsonType: "object",
			required:["grad_izda","grad_dcha","color_izda","color_dcha","montura","color_montura","vendedor","marca","cliente"],
			properties:{
				grad_izda:{
					bsonType: "string",
					description: "Graduación lente izda. Obligatorio"
				},
				grad_dcha:{
					bsonType: "string",
					description: "Graduación lente dcha. Obligatorio"
				},
				color_izda:{
					bsonType: "string",
					description: "Color lente izda. Obligatorio"
				},
				color_dcha:{
					bsonType: "string",
					description: "Color lente dcha. Obligatorio"
				},
				montura:{
					bsonType: "string",
					description: "Tipo de montura. Obligatorio"
				},
				color_montura:{
					bsonType: "string",
					description: "Color montura. Obligatorio"
				},
				vendedor:{
					bsonType: "string",
					description: "Código externo del vendedor que realiza la venta (nuestra BBDD no almacena vendedores). Obligatorio"
				},
				marca:{
					bsonType: "objectId",
					description: "Referencia a la id de la marca de estas gafas. Obligatorio"
				},
				cliente:{
					bsonType: "objectId",
					description: "Referencia al id del cliente que las compra. Obligatorio"
				}
			}			
		}
	}
})