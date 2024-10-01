tiredata = { 
    -- All tires have a 15% grip margin added on top of their original value, in order to provide a more arcade experience.
    slick = {      -- Race car tire.
        peaktraction = 2.3, --- Original 2.0
        lateralcurve = 4.0,
        lstractionlossmulti = 0.01,
        tracitionlossmulti = 1.0,
        usesarcadegripvalues = false,
    },
    semislick = {      -- Hypercar car tire
       peaktraction = 2.07, --   Original 1.8
       lateralcurve = 7.0,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 1.0,
       usesarcadegripvalues = false,
    },
    race = {      -- Super car tire, be aware that super powerful cars may need a semi-slick tire.
       peaktraction = 1.725, -- Original 1.5
       lateralcurve = 8.5,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 1.0,
       usesarcadegripvalues = false,
    }, 
    sport = {     -- Sport car tire.
       peaktraction = 1.495, -- Original 1.3
       lateralcurve = 10.0,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 1.0,
       usesarcadegripvalues = false,
    },    
    street = {      -- Entry level Sport car.
       peaktraction = 1.265, -- Original 1.1
       lateralcurve = 11.5,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 1.0,
       usesarcadegripvalues = false,
    },
    common = {      -- Daily driver, common car.
        peaktraction = 1.15, -- Original 1.0
        lateralcurve = 12.7,
        lstractionlossmulti = 0.01,
        tracitionlossmulti = 1.0,
        usesarcadegripvalues = false,
    },
    drift = {      -- Drift Tire, custom made.
        peaktraction = 1.6,
        lateralcurve = 13.5,
        lstractionlossmulti = 0.01,
        tracitionlossmulti = 1.0,
        usesarcadegripvalues = false,
    },    
    offroad = {      -- Off-Road Tire, custom made.
       peaktraction = 2.15, 
       lateralcurve = 16.0,
       lstractionlossmulti = 0.00,
       tracitionlossmulti = 0.01,
       usesarcadegripvalues = false,
    },
    bikeslick = {      -- MotoGP Tire.
        peaktraction = 1.8,
        lateralcurve = 8.5,
        lstractionlossmulti = 0.01,
        tracitionlossmulti = 1.0,
        usesarcadegripvalues = false,
    },
    bikesemislick = {      -- Hyperbikes Tires
       peaktraction = 1.615, 
       lateralcurve = 10.0,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 1.0,
       usesarcadegripvalues = false,
    },
    bikerace = {      -- Superbike Tire
       peaktraction = 1.495, 
       lateralcurve = 11.5,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 1.0,
       usesarcadegripvalues = false,
    }, 
    bikesport = {     -- Sportbike tire.
       peaktraction = 1.3, -- Original 1.3
       lateralcurve = 12.7,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 1.0,
       usesarcadegripvalues = false,
    },    
    bikecommon = {      -- Generic bike tire.
       peaktraction = 1.05, 
       lateralcurve = 13.4,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 1.0,
       usesarcadegripvalues = false,
    },
    bikeoffroad = {      -- Offroad Bike Tire
       peaktraction = 1.525, 
       lateralcurve = 11.5,
       lstractionlossmulti = 0.01,
       tracitionlossmulti = 0.0,
       usesarcadegripvalues = false,
    }
}

