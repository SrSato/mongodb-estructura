db=db.getSiblingDB('pizzeria')
db.tiendas.insert([
	{
		"_id":ObjectId('000000000000000000000001'),
		"matricula":"001",
		"tfno":"934445525",
		"direccion":{
			"calle":"c/San Cucufate",
			"num":01,
			"piso":27,
			"puerta": "01",
			"cp": "12593",
			"localidad": "Barcelona",
			"provincia": "Barcelona",
		}
	},
	{
		"_id":ObjectId('000000000000000000000002'),
		"matricula":"002",
		"tfno":"936662354",
		"direccion":{
			"calle":"c/Pizzas",
			"num":01,
			"piso":01,
			"puerta": "01",
			"cp": "12593",
			"localidad": "Tarragona",
			"provincia": "Tarragona",
		}
	}
])
db.empleados.insert([
	{
		"_id":ObjectId('000000000000000000000003'),
		"nombre":"Pepe",
		"apellidos":"Pepez",
		"tfno": "666666666",
		"direccion":{
			"calle": "c/ Sevilla",
			"num":01,
			"piso":27,
			"puerta": "01",
			"cp": "12593",
			"localidad":"Pernambuco",
			"provincia":"Valladolid"
		},
		"tienda":ObjectId('000000000000000000000001')		
	},
	{
		"_id":ObjectId('000000000000000000000004'),
		"nombre":"Jose Maria",
		"apellidos": "Garcia Garcia",
		"tfno":"555555555",
		"direccion":{
			"calle": "c/ Falsa",
			"num":123,
			"piso":45,
			"puerta": "67",
			"localidad": "Nossisste",
			"cp": "12593",
			"provincia":"Teruel"
		},
		"tienda":ObjectId('000000000000000000000002')
	}
])
db.clientes.insert([
	{
		"_id":ObjectId('000000000000000000000005'),
		"nombre":"Mr. Anónimo",
		"apellidos": "Nadiez",
		"tfno":"999999999",
		"direccion":{
			"calle": "c/ La Mía",
			"num":51,
			"piso":01,
			"puerta": "01",
			"localidad": "Arkham",
			"cp": "12593",
			"provincia":"Murcia"
		}
	},
	{
		"_id":ObjectId('000000000000000000000006'),
		"nombre":"Sr. Enigma",
		"apellidos": "Nosabez",
		"tfno":"999999998",
		"direccion":{
			"calle": "c/ La Tuya",
			"num":56,
			"piso":23,
			"puerta": "00",
			"localidad": "Arkham",
			"cp": "12593",
			"provincia":"Massachusets"
		}
	},
	{
		"_id":ObjectId('000000000000000000000007'),
		"nombre":"Maria",
		"apellidos": "Mariez",
		"tfno":"999999997",
		"direccion":{
			"calle": "c/Mariana",
			"num":12,
			"piso":35,
			"puerta": "08",
			"localidad": "Mostoles",
			"cp": "12593",
			"provincia":"Madrid"
		}
	}
])
db.productos.insert([
	{
		"_id":ObjectId('000000000000000000000008'),
		"tipo":"1",
		"nombre": "Pizza Margarita",
		"desc": "Hecha con flores del campo",
		"img": "http://www.fotos.com/08.jpg",
		"precio": 10,
		"categoria":"Primavera"
	},	
	{
		"_id":ObjectId('000000000000000000000009'),
		"tipo":"1",
		"nombre": "Pizza Champiñones",
		"desc": "Hecha con setoides",
		"img": "http://www.fotos.com/09.jpg",
		"precio": 10,
		"categoria":"Primavera"
	},	
	{
		"_id":ObjectId('000000000000000000000010'),
		"tipo":"1",
		"nombre": "Pizza Cuatro Quesos",
		"desc": "Hecha con tres quesos",
		"img": "http://www.fotos.com/10jpg",
		"precio": 15,
		"categoria":"Universal"
	},
	{
		"_id":ObjectId('000000000000000000000011'),
		"tipo":"2",
		"nombre": "Hamburguesa Completa",
		"desc": "Lo tiene todo",
		"img": "http://www.fotos.com/11.jpg",
		"precio": 14
	},
	{
		"_id":ObjectId('000000000000000000000012'),
		"tipo":"3",
		"nombre": "Cola",
		"desc": "Refresco de cola",
		"img": "http://www.fotos.com/12.jpg",
		"precio": 3,
	},	
	{
		"_id":ObjectId('000000000000000000000013'),
		"tipo":"3",
		"nombre": "Naranja",
		"desc": "Refresco de naranja",
		"img": "http://www.fotos.com/13.jpg",
		"precio": 2,
	},	
	{
		"_id":ObjectId('000000000000000000000014'),
		"tipo":"3",
		"nombre": "Agua",
		"desc": "Agüita fresca",
		"img": "http://www.fotos.com/14.jpg",
		"precio": 25,
	}		
])
db.pedidos.insert([
	{
		"fecha": new Date(),
		"tienda":ObjectId('000000000000000000000001'),
		"cliente":ObjectId('000000000000000000000005'),
		"tipo":"A",
		"total":36,
		"lista_prod":[
			{
				"id_prod":ObjectId('000000000000000000000008'),
				"cantidad":3,
			},
			{
				"id_prod":ObjectId('000000000000000000000013'),
				"cantidad":3,
			}
		]
	},
	{
		"fecha": new Date(),
		"tienda":ObjectId('000000000000000000000002'),
		"cliente":ObjectId('000000000000000000000006'),
		"tipo":"B",
		"total":56,
		"lista_prod":[
			{
				"id_prod":ObjectId('000000000000000000000011'),
				"cantidad":4,
			}			
		]
	},
	{
		"fecha": new Date(),
		"tienda":ObjectId('000000000000000000000002'),
		"cliente":ObjectId('000000000000000000000007'),
		"tipo":"B",
		"total":60,
		"lista_prod":[
			{
				"id_prod":ObjectId('000000000000000000000010'),
				"cantidad":4,
			}			
		]
	},
])
