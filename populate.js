db=db.getSiblingDB('cul_dampolla')
db.proveedores.insert([
	{
		"_id":ObjectId('000000000000000000000001'),
		"nombre":"Pepe",
		"nif": "70880486Y",
		"direccion":{
			"calle": "c/ Sevilla",
			"num":01,
			"piso":27,
			"puerta": "01",
			"ciudad": "Alcorcon",
			"cp": "12593",
			"pais":"ES"
		},
		"marcas":[
			{
				"_id":ObjectId('000000000000000000000002'),
				"nombre":"Ojazos Locos"
			},
			{
				"_id":ObjectId('000000000000000000000003'),
				"nombre":"Ojuelos"
			}
		]		
	},
	{
		"_id":ObjectId('000000000000000000000004'),
		"nombre":"Jose Maria",
		"nif": "00000000Z",
		"direccion":{
			"calle": "c/ Falsa",
			"num":123,
			"piso":45,
			"puerta": "67",
			"ciudad": "Nossisste",
			"cp": "12593",
			"pais":"ES"
		},
		"marcas":[
			{
				"_id":ObjectId('000000000000000000000005'),
				"nombre":"Aviador"
			},
			{
				"_id":ObjectId('000000000000000000000006'),
				"nombre":"Cuatro Ojos"
			}
		]		
	}
])

db.clientes.insert([
	{
		"_id":ObjectId('000000000000000000000007'),
		"nombre":"Mr. Anónimo",
		"reg": new Date(),
		"direccion":{
			"calle": "c/ La Mía",
			"num":51,
			"piso":01,
			"puerta": "01",
			"ciudad": "Arkham",
			"cp": "12593",
			"pais":"ES"
		}
	},
	{
		"_id":ObjectId('000000000000000000000008'),
		"nombre":"Sr. Enigma",
		"reg": new Date(),
		"direccion":{
			"calle": "c/ La Tuya",
			"num":56,
			"piso":23,
			"puerta": "00",
			"ciudad": "Arkham",
			"cp": "12593",
			"pais":"ES"
		}
	}
])

db.gafas.insert([
	{
		"grad_izda":"0.5",
		"grad_dcha":"0.4",
		"color_izda":"Azul",
		"color_dcha":"Azul",
		"montura":"1",
		"color_montura":"Rojo",
		"vendedor":"123",
		"marca":ObjectId('000000000000000000000002'),
		"cliente":ObjectId('000000000000000000000007')
	},
	{
		"grad_izda":"9.5",
		"grad_dcha":"56.4",
		"color_izda":"Verde",
		"color_dcha":"Amarillo",
		"montura":"2",
		"color_montura":"Negro",
		"vendedor":"007",
		"marca":ObjectId('000000000000000000000003'),
		"cliente":ObjectId('000000000000000000000008')
	},
	{
		"grad_izda":"0",
		"grad_dcha":"0",
		"color_izda":"Negro",
		"color_dcha":"Negro",
		"montura":"2",
		"color_montura":"Fucsia",
		"vendedor":"080",
		"marca":ObjectId('000000000000000000000005'),
		"cliente":ObjectId('000000000000000000000007')
	},
	{
		"grad_izda":"80",
		"grad_dcha":"80",
		"color_izda":"Transparente",
		"color_dcha":"Transparente",
		"montura":"3",
		"color_montura":"Verde",
		"vendedor":"080",
		"marca":ObjectId('000000000000000000000006'),
		"cliente":ObjectId('000000000000000000000008')
	},
])
