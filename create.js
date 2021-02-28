db=db.getSiblingDB('pizzeria')
db.createCollection("clientes",{
	validator:{
		$jsonSchema:{
			bsonType: "object",
			required:["_id","nombre","apellidos","tfno","direccion"],
			properties:{
				_id: {
					bsonType: "objectId",
					description: "Identificador único del cliente. Obligatorio"
				},
				nombre: {
					bsonType: "string",
					description: "Nombre del cliente. Obligatorio"
				},
				apellidos: {
					bsonType: "string",
					description: "Apellidos del cliente. Obligatorio"
				},
				tfno:{
					bsonType: "string",
					description: "Teléfono de contacto del cliente. Obligatorio"
				},
				direccion: {
					bsonType: "object",
					required:["calle","num","piso","puerta","cp","localidad","provincia"],
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
						cp:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						localidad:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						provincia:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						}
					}
				}				
			}
		}
	}
})
db.createCollection("empleados",{
	validator:{
		$jsonSchema:{
			bsonType: "object",
			required:["nombre","apellidos","tfno","direccion","tienda"],
			properties:{
				nombre: {
					bsonType: "string",
					description: "Nombre del empleado. Obligatorio"
				},
				apellidos: {
					bsonType: "string",
					description: "Apellidos del empleado. Obligatorio"
				},
				tfno:{
					bsonType: "string",
					description: "Teléfono de contacto del empleado. Obligatorio"
				},
				direccion: {
					bsonType: "object",
					required:["calle","num","piso","puerta","cp","localidad","provincia"],
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
						cp:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						localidad:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						provincia:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						}
					}					
				},
				tienda:{
					bsonType:"objectId",
					description:"Referencia a la tienda en la que trabaja"
				}				
			}
		}
	}
})
db.createCollection("tiendas",{
	validator:{
		$jsonSchema:{
			bsonType: "object",
			required:["_id","matricula","tfno","direccion"],
			properties:{
				_id: {
					bsonType: "objectId",
					description: "Identificador único de la tienda. Obligatorio"
				},
				matricula: {
					bsonType: "string",
					description: "Identificador externo de la tienda. Obligatorio"
				},
				tfno:{
					bsonType: "string",
					description: "Teléfono de contacto del local. Obligatorio"
				},
				direccion: {
					bsonType: "object",
					required:["calle","num","piso","puerta","cp","localidad","provincia"],
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
						cp:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						localidad:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						},
						provincia:{
							bsonType: "string",
							description: "Parte obligatoria de la direccion"
						}
					},					
				}				
			}
		}
	}
})
db.createCollection("productos",{
	validator:{
		$jsonSchema:{
			bsonType: "object",
			required:["_id","tipo","nombre","desc","img","precio"],
			properties:{
				_id:{
					bsonType:"objectId",
					description: "Identificador del producto. Obligatorio"
				},
				tipo:{
					bsonType:"string",
					description:"Tipo de producto. Obligatorio"
				},
				nombre:{
					bsonType:"string",
					description:"Nombre del producto. Obligatorio"
				},
				desc:{
					bsonType:"string",
					description:"descripción del producto. Obligatorio"
				},
				img:{
					bsonType:"string",
					description: "URL de la imagen del producto. Obligatorio"
				},
				precio:{
					bsonType:"double",
					description:"PVP del producto. Obligatorio"
				},
				categoria:{
					bsonType:"string",
					description:"Nombre de la categoria del producto (aplicable en las pizzas y por temporadas). Si existe, debe ser de tipo string"
				}
			}
		}
	}
})
db.createCollection("pedidos",{
	validator:{
		$jsonSchema:{
			bsonType:"object",
			required:["fecha","tienda","cliente","tipo","total","lista_prod"],
			properties:{
				fecha:{
					bsonType:"date",
					description:"Fecha de la realización del pedido. Obligatorio"
				},
				tienda:{
					bsonType:"objectId",
					description:"Referencia a la tienda que sirve el pedido. Obligatorio"
				},
				cliente:{
					bsonType:"objectId",
					description:"Referencia al cliente que realiza el pedido. Obligatorio"
				},
				tipo:{
					bsonType:"string",
					description:"Tipo de pedido. (Para llevar o para recoger en local). Obligatorio"
				},
				total:{
					bsonType:"double",
					description:"Precio total del pedido. Obligatorio"
				},
				lista_prod:{
					bsonType:"array",
					required:["id_prod","cantidad"],
					properties:{
						id_prod:{
							bsonType:"objectId",
							description:"Referencia al producto que se pide. Obligatorio"
						},
						cantidad:{
							bsonType:"double",
							description:"Num. de unidades que se piden del producto"
						}
					}
				}
			}
		}
	}
})