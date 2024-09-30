local spawns = {
    ["blue"] = vector3(40.875, 1.875, 0.393),
    ["yellow"] = vector3(81.161, 2.355, 0.393),
    ["red"] = vector3(0.891, 1.525, 0.393),
    ["green"] = vector3(-38.827, 1.779, 0.394),
    ["white"] = vector3(-80.202, 2.135, 0.394),
}

local vehSpawn = spawns["green"]

_catalog = {
    camera = {
        coords = vector3(vehSpawn.x-4.505005, vehSpawn.y-2.985992, vehSpawn.z+1.229),
        rotation = vector3(-12.044, 0.000, 317.127),
    },
    vehicle = vector4(vehSpawn.x, vehSpawn.y, vehSpawn.z,  97.743)
}

_catalogCategories = {
    ['import'] = 'Imports',
    ['compact'] = 'Compacts',
    ['suv'] = 'SUVs',
    ['sedans'] = 'Sedan',
    ['muscle'] = 'Muscle',
    ['sport'] = 'Sports',
    ['sportclassic'] = 'Sports Classic',
    ['super'] = 'Super',
    ['motorcycles'] = 'Motorcycles',
    ['offroad'] = 'Off-road',
    ['rally'] = 'Rally',
    ['van'] = 'Vans',
    ['utility'] = 'Utility Vehicles',
    ['misc'] = 'Miscellaneous',
}