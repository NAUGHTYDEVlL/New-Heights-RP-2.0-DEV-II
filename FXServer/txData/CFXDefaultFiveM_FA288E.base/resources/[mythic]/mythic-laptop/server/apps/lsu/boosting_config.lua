BOOSTING_SERVER_START_WAIT = 1000 * 60 * math.random(15, 30)

-- Max number of contracts a single individual can be offered in one restart
BOOSTING_MAX_CONTRACTS = 10

-- Max number of contracts a single individual can hold until they stop getting rewarded new ones
BOOSTING_MAX_QUEUE = 4

-- If the number of police is below this, make things harder:
    -- Increase Ped Difficulty (adds health, etc)
    -- Longer between contracts, decrease liklihood
BOOSTING_POLICE_DIFFICULT = 6

-- Minutes
BOOSTING_TIME_BETWEEN_MIN = 2
BOOSTING_TIME_BETWEEN_MAX = 4

-- The amount added to the random number so that a contract isn't rewarded
-- to someone everytime it is ran.
BOOSTING_RANDOMNESS = 3
BOOSTING_RANDOMNESS_DIFFICULT = 6

_boostingRepToClass = {
    "D",
    "C",
    "B",
    "A",
    "A+",
    "S+",
}

_boostingRepToClassChances = {
    -- D Rep
    {
        {1, "D"},
    },
    -- C Rep
    {
        {10, "D"},
        {8, "C"},
    },
    -- B Rep
    {
        {5, "D"},
        {10, "C"},
        {7, "B"},
    },
    -- A Rep
    {
        {1, "D"},
        {5, "C"},
        {10, "B"},
        {7, "A"},
    },
    -- A+ Rep
    {
        {1, "D"},
        {2, "C"},
        {8, "B"},
        {8, "A"},
        {5, "A+"},
    },
    -- S+ Rep
    {
        {2, "C"},
        {3, "B"},
        {8, "A"},
        {8, "A+"},
        {5, "S+"},
    },
}

_boostingLocations = {
    {
        coords = vector4(947.810, -251.144, 67.105, 327.472),
        peds = {
            vector4(953.979, -239.359, 67.810, 70.225),
            vector4(968.976, -249.452, 67.583, 221.666),
            vector4(966.730, -257.884, 67.463, 140.669),
            vector4(943.368, -241.770, 68.645, 245.889),
        },
        rich = false,
    },
    {
        coords = vector4(1241.101, -578.381, 68.958, 269.592),
        peds = {
            vector4(1229.175, -580.646, 69.484, 275.114),
            vector4(1227.081, -582.567, 69.392, 268.294),
            vector4(1226.904, -574.149, 69.405, 267.219),
            vector4(1242.967, -565.568, 69.658, 290.521),
        },
        rich = false,
    },
    {
        coords = vector4(1253.794, -666.684, 67.182, 294.556),
        peds = {
            vector4(1243.497, -650.954, 67.629, 204.405),
            vector4(1265.500, -647.004, 67.922, 323.686),
            vector4(1244.060, -672.560, 66.801, 317.723),
            vector4(1252.154, -659.438, 67.735, 118.768),
        },
        rich = false,
    },
    {
        coords = vector4(1255.607, -421.770, 68.953, 118.840),
        peds = {
            vector4(1263.030, -429.712, 69.801, 286.801),
            vector4(1255.805, -435.357, 69.568, 36.589),
            vector4(1254.273, -433.473, 69.447, 35.264),
        },
        rich = false,
    },
    {
        coords = vector4(1041.491, -480.551, 63.456, 258.128),
        peds = {
            vector4(1043.660, -465.929, 63.925, 81.419),
            vector4(1052.599, -470.693, 63.899, 257.357),
            vector4(1042.750, -483.793, 63.899, 242.548),
        },
        rich = false,
    },
    {
        coords = vector4(1341.601, -614.594, 73.876, 145.043),
        peds = {
            vector4(1343.925, -596.333, 74.342, 244.227),
            vector4(1329.743, -610.045, 74.335, 147.018),
            vector4(1328.160, -603.059, 74.490, 136.241),
            vector4(1356.671, -632.302, 74.351, 45.460),
        },
        rich = false,
    },
    {
        coords = vector4(1119.685, -1000.765, 44.614, 98.845),
        peds = {
            vector4(1129.771, -989.359, 45.968, 126.007),
            vector4(1126.484, -1013.589, 44.537, 92.608),
        },
        rich = false,
    },
    {
        coords = vector4(1175.103, -1264.581, 34.289, 356.532),
        peds = {
            vector4(1179.960, -1280.681, 35.028, 88.768),
            vector4(1179.621, -1242.062, 34.841, 213.611),
            vector4(1160.674, -1252.790, 34.566, 330.914),
        },
        rich = false,
    },
    {
        coords = vector4(1300.859, -1702.120, 54.637, 21.204),
        peds = {
            vector4(1288.582, -1695.979, 55.079, 242.317),
            vector4(1280.646, -1703.567, 55.028, 205.319),
            vector4(1284.962, -1713.629, 54.993, 192.528),
        },
        rich = false,
    },
    {
        coords = vector4(1456.038, -1684.093, 65.645, 204.246),
        peds = {
            vector4(1458.049, -1674.045, 65.974, 206.389),
            vector4(1452.838, -1696.467, 66.620, 346.705),
            vector4(1440.834, -1675.703, 65.493, 190.788),
        },
        rich = false,
    },
    {
        coords = vector4(799.835, -2410.429, 23.228, 265.174),
        peds = {
            vector4(805.868, -2373.031, 29.098, 118.276),
            vector4(792.496, -2425.031, 23.676, 271.906),
            vector4(820.857, -2399.721, 23.659, 169.491),
            vector4(817.301, -2422.538, 23.598, 340.894),
        },
        rich = false,
    },
    {
        coords = vector4(1013.693, -2412.468, 28.723, 84.305),
        peds = {
            vector4(989.638, -2414.250, 30.319, 344.540),
            vector4(988.614, -2406.363, 30.493, 189.725),
            vector4(1025.533, -2408.069, 29.559, 205.937),
            vector4(977.284, -2410.473, 30.432, 239.392),
        },
        rich = false,
    },
    {
        coords = vector4(985.336, -2288.725, 30.026, 264.159),
        peds = {
            vector4(985.112, -2278.194, 30.510, 161.424),
            vector4(988.512, -2261.096, 30.510, 281.366),
            vector4(1009.268, -2277.894, 30.716, 85.715),
            vector4(981.840, -2280.899, 34.724, 275.626),
            vector4(978.382, -2297.742, 34.724, 270.000),
            
        },
        rich = false,
    },
    {
        coords = vector4(-1021.271, -509.839, 36.043, 116.070),
        peds = {
            vector4(-1012.589, -491.121, 37.044, 113.368),
            vector4(-1016.291, -485.364, 37.079, 106.446),
            vector4(-1053.313, -518.043, 36.039, 336.678),
            vector4(-1026.116, -535.097, 35.723, 327.670),
        },
        rich = false,
    },
    {
        coords = vector4(-1203.482, -663.324, 39.636, 311.506),
        peds = {
            vector4(-1224.854, -632.483, 39.459, 220.901),
            vector4(-1239.570, -628.513, 42.272, 224.941),
            vector4(-1167.942, -696.235, 40.358, 105.037),
            vector4(-1191.198, -692.626, 40.358, 10.224),
            vector4(-1206.031, -698.907, 39.658, 52.007),
        },
        rich = false,
    },
    {
        coords = vector4(-1527.519, -601.800, 22.554, 176.910),
        peds = {
            vector4(-1546.625, -611.556, 23.386, 48.136),
            vector4(-1545.875, -595.013, 23.275, 236.470),
            vector4(-1532.377, -576.524, 23.909, 231.805),
            vector4(-1496.924, -594.935, 23.275, 150.316),
        },
        rich = false,
    },
    {
        coords = vector4(-1681.425, -443.371, 39.043, 230.806),
        peds = {
            vector4(-1678.128, -433.164, 40.184, 140.179),
            vector4(-1665.963, -442.944, 39.893, 219.017),
            vector4(-1692.355, -445.756, 41.125, 323.346),
        },
        rich = false,
    },
    {
        coords = vector4(-1717.926, -494.052, 37.355, 208.823),
        peds = {
            vector4(-1705.441, -499.108, 39.628, 176.009),
            vector4(-1722.612, -483.815, 41.619, 140.898),
            vector4(-1725.176, -467.301, 41.621, 177.200),
        },
        rich = false,
    },
    {
        coords = vector4(-1827.357, -624.371, 10.339, 319.732),
        peds = {
            vector4(-1833.857, -627.357, 10.854, 343.751),
            vector4(-1813.065, -633.227, 10.950, 337.339),

        },
        rich = false,
    },
    {
        coords = vector4(-1519.181, -887.112, 9.400, 50.223),
        peds = {
            vector4(-1520.145, -892.668, 13.685, 50.532),
            vector4(-1527.950, -886.163, 13.685, 315.118),
            vector4(-1529.235, -884.998, 10.174, 33.229),
            vector4(-1506.440, -886.728, 10.223, 328.885),
            vector4(-1529.918, -871.158, 10.263, 253.404)
        },
        rich = false,
    },
    {
        coords = vector4(-1318.924, -1241.055, 3.878, 288.529),
        peds = {
            vector4(-1299.616, -1239.104, 4.525, 110.237),
            vector4(-1321.244, -1250.590, 4.600, 233.532),
            vector4(-1323.453, -1249.594, 7.549, 289.437),
            vector4(-1293.415, -1259.451, 4.206, 126.892),
        },
        rich = false,
    },
    {
        coords = vector4(-1148.716, -1562.452, 3.660, 52.169),
        peds = {
            vector4(-1168.669, -1566.289, 4.404, 307.779),
            vector4(-1157.570, -1556.875, 4.350, 310.807),
            vector4(-1167.674, -1552.367, 4.388, 313.155),
            vector4(-1141.069, -1547.157, 4.377, 38.920),
            vector4(-1141.647, -1532.465, 4.347, 108.866),
        },
        rich = false,
    },
    {
        coords = vector4(-1066.305, -1565.357, 3.840, 35.928),
        peds = {
            vector4(-1076.891, -1557.655, 4.486, 215.800),
            vector4(-1067.626, -1554.524, 4.709, 208.317),
            vector4(-1075.161, -1575.390, 4.389, 223.951),
        },
        rich = false,
    },
    {
        coords = vector4(-930.721, -1547.164, 4.299, 19.689),
        peds = {
            vector4(-932.162, -1566.175, 5.280, 285.453),
            vector4(-910.372, -1515.421, 5.024, 199.023),
            vector4(-954.775, -1554.465, 5.021, 13.106),

        },
        rich = false,
    },
    {
        coords = vector4(-768.764, -1333.638, 4.279, 317.415),
        peds = {
            vector4(-778.416, -1317.775, 5.150, 137.954),
            vector4(-783.019, -1350.638, 9.000, 299.861),
            vector4(-755.297, -1327.741, 5.000, 50.973),
            vector4(-779.184, -1319.775, 5.100, 163.180),
            
        },
        rich = false,
    },
    {
        coords = vector4(-649.943, -1158.445, 8.448, 216.764),
        peds = {
            vector4(-642.518, -1137.665, 11.988, 224.489),
            vector4(-678.308, -1146.447, 10.727, 251.444),
            vector4(-651.741, -1186.296, 11.114, 342.987),
            
        },
        rich = false,
    },
    {
        coords = vector4(-1036.156, -901.564, 3.361, 18.879),
        peds = {
            vector4(-1032.720, -917.340, 2.661, 30.288),
            vector4(-1022.925, -909.079, 2.888, 338.200),
            vector4(-1022.151, -903.775, 2.131, 120.797),
            vector4(-1022.919, -914.472, 10.511, 32.169),
            
        },
        rich = false,
    },
    {
        coords = vector4(-1075.373, -942.075, 1.579, 26.811),
        peds = {
            vector4(-1083.135, -922.220, 3.343, 55.532),
            vector4(-1066.943, -944.143, 3.162, 140.875),
            vector4(-1057.546, -940.705, 2.204, 212.531),
            
        },
        rich = false,
    },
    {
        coords = vector4(-1188.138, -1065.308, 1.432, 122.937),
        peds = {
            vector4(-1175.637, -1063.085, 2.150, 112.697),
            vector4(-1178.834, -1054.854, 2.150, 81.396),
            vector4(-1170.803, -1067.109, 2.150, 95.666)
            
        },
        rich = false,
    },
    {
        coords = vector4(-1131.600, -1172.808, 1.639, 120.126),
        peds = {
            vector4(-1118.642, -1170.163, 2.331, 103.111),
            vector4(-1125.092, -1164.209, 2.357, 116.665),
            vector4(-1144.322, -1187.879, 2.453, 277.227),
            vector4(-1128.493, -1179.998, 2.288, 144.236),
            
        },
        rich = false,
    },
    {
        coords = vector4(-1133.560, -1060.614, 1.432, 178.960),
        peds = {
            vector4(-1119.926, -1074.873, 2.150, 18.887),
            vector4(-1127.794, -1080.915, 4.223, 127.130),
            vector4(-1132.310, -1081.999, 2.644, 18.800),
            vector4(-1147.629, -1054.278, 2.150, 161.182),
            
        },
        rich = false,
    },
    {
        coords = vector4(-1441.466, -685.567, 25.592, 214.635),
        peds = {
            vector4(-1450.551, -699.913, 26.191, 322.561),
            vector4(-1425.131, -685.613, 30.102, 118.640),
            vector4(-1440.473, -649.960, 28.972, 324.714),
            
        },
        rich = false,
    },
    {
        coords = vector4(-1879.734, -308.028, 48.518, 320.745),
        peds = {
            vector4(-1878.726, -324.886, 49.377, 151.435),
            vector4(-1882.197, -335.390, 52.635, 52.216),
            vector4(-1885.785, -334.974, 49.404, 96.735),
            vector4(-1902.146, -312.342, 49.328, 294.060),
            vector4(-1887.952, -293.958, 49.436, 121.581)
            
        },
        rich = false,
    },
    {
        coords = vector4(-1995.172, -327.381, 43.387, 236.425),
        peds = {
            vector4(-1997.333, -333.109, 44.106, 33.232),
            vector4(-1986.164, -311.133, 44.106, 67.292),
            vector4(-1979.156, -287.030, 44.107, 146.282),

            
        },
        rich = false,
    },
    {
        coords = vector4(-1663.603, -387.460, 44.120, 234.928),
        peds = {
            vector4(-1652.457, -392.573, 45.212, 349.125),
            vector4(-1667.758, -388.829, 46.155, 189.982),
            vector4(-1657.380, -376.819, 45.332, 225.620),
            vector4(-1648.626, -387.754, 44.294, 2.893),
        },
        rich = false,
    },
    {
        coords = vector4(-1565.122, -436.536, 36.639, 336.742),
        peds = {
            vector4(-1569.142, -453.867, 35.982, 48.654),
            vector4(-1577.957, -447.313, 37.071, 193.088),
            vector4(-1564.572, -418.232, 38.094, 81.258),
            vector4(-1562.178, -437.732, 42.146, 120.698),
        },
        rich = false,
    },
    {
        coords = vector4(-1487.803, -169.635, 48.107, 218.279),
        peds = {
            vector4(-1461.998, -157.119, 48.828, 221.687),
            vector4(-1468.854, -197.307, 48.835, 356.670),
            vector4(-1497.033, -185.881, 50.397, 310.009),

        },
        rich = false,
    },
    {
        coords = vector4(-797.983, -184.393, 36.565, 299.388),
        peds = {
            vector4(-802.192, -177.558, 38.134, 266.988),
            vector4(-790.788, -163.466, 37.292, 164.562),
            vector4(-767.451, -194.573, 35.152, 127.708),
            vector4(-763.140, -214.382, 37.272, 27.628),
            vector4(-787.346, -168.602, 37.285, 136.948),
        },
        rich = false,
    },
    {
        coords = vector4(-778.000, -185.016, 35.530, 117.490),
        peds = {
            vector4(-802.192, -177.558, 38.134, 266.988),
            vector4(-790.788, -163.466, 37.292, 164.562),
            vector4(-767.451, -194.573, 35.152, 127.708),
            vector4(-763.140, -214.382, 37.272, 27.628),
            vector4(-787.346, -168.602, 37.285, 136.948),
        },
        rich = false,
    },
    {
        coords = vector4(-774.479, -194.023, 36.565, 300.741),
        peds = {
            vector4(-802.192, -177.558, 38.134, 266.988),
            vector4(-790.788, -163.466, 37.292, 164.562),
            vector4(-767.451, -194.573, 35.152, 127.708),
            vector4(-763.140, -214.382, 37.272, 27.628),
            vector4(-787.346, -168.602, 37.285, 136.948),
        },
        rich = false,
    },
    {
        coords = vector4(-788.960, 42.933, 48.069, 251.662),
        peds = {
            vector4(-773.287, 53.035, 50.771, 118.227),
            vector4(-782.435, 34.709, 54.288, 61.726),
            vector4(-778.846, 29.927, 47.666, 138.446),
            vector4(-820.212, 51.403, 49.035, 224.122),
        },
        rich = false,
    },
    {
        coords = vector4(-939.280, 308.187, 70.454, 1.951),
        peds = {
            vector4(-942.181, 319.845, 71.352, 269.590),
            vector4(-948.327, 319.619, 71.352, 52.198),
        },
        rich = false,
    },
    {
        coords = vector4(-450.373, 175.604, 74.484, 355.174),
        peds = {
            vector4(-456.763, 171.967, 76.323, 268.328),
            vector4(-449.667, 166.037, 78.077, 3.524),
            vector4(-440.947, 198.227, 76.114, 180.682),
            vector4(-429.007, 178.961, 78.355, 91.381),
            vector4(-454.647, 195.266, 75.240, 155.636),

        },
        rich = false,
    },
    {
        coords = vector4(-422.086, 299.552, 82.512, 177.000),
        peds = {
            vector4(-440.955, 295.627, 83.229, 37.581),
            vector4(-417.074, 303.473, 85.958, 173.519),
            vector4(-415.377, 279.066, 83.194, 331.282),
        },
        rich = false,
    },
    {
        coords = vector4(-147.141, 199.293, 89.735, 339.796),
        peds = {
            vector4(-158.411, 189.335, 96.930, 314.826),
            vector4(-145.394, 214.568, 98.329, 174.324),
            vector4(-154.956, 214.552, 94.808, 209.847),

        },
        rich = false,
    },
    {
        coords = vector4(97.292, 55.120, 72.801, 72.487),
        peds = {
            vector4(95.675, 60.972, 73.567, 121.248),
            vector4(79.848, 62.105, 73.598, 188.909),
            vector4(96.974, 36.837, 73.515, 115.151),
            vector4(62.673, 35.537, 73.564, 340.026),
        },
        rich = false,
    },
    {
        coords = vector4(156.458, -75.271, 67.273, 337.994),
        peds = {
            vector4(146.061, -77.723, 68.006, 246.872),
            vector4(151.915, -66.517, 71.874, 177.567),
            vector4(151.925, -94.927, 68.518, 311.758),
            vector4(154.300, -59.408, 68.888, 245.425),
        },
        rich = false,
    },
    {
        coords = vector4(232.253, -153.188, 58.037, 341.317),
        peds = {
            vector4(233.719, -152.110, 62.946, 200.153),
            vector4(232.536, -168.648, 57.708, 252.474),
            vector4(242.345, -138.567, 65.325, 196.584),
        },
        rich = false,
    },
    {
        coords = vector4(-0.027, -203.265, 52.021, 160.407),
        peds = {
            vector4(-11.643, -200.880, 52.491, 233.178),
            vector4(8.023, -200.452, 58.639, 151.369),
            vector4(18.490, -213.283, 53.301, 170.374),
        },
        rich = false,
    },
    {
        coords = vector4(91.329, -277.357, 46.568, 157.283),
        peds = {
            vector4(102.438, -280.309, 47.417, 161.015),
            vector4(88.910, -267.085, 47.416, 158.334),
            vector4(82.472, -268.124, 48.188, 172.455),
        },
        rich = false,
    },
    {
        coords = vector4(-112.644, -324.747, 34.474, 162.098),
        peds = {
            vector4(-110.446, -318.825, 39.351, 88.281),
            vector4(-115.971, -355.587, 38.726, 34.162),
            vector4(-125.894, -359.543, 35.437, 55.631),

        },
        rich = false,
    },
    {
        coords = vector4(27.615, -593.419, 30.908, 162.626),
        peds = {
            vector4(33.520, -583.336, 31.629, 339.968),
            vector4(16.530, -614.208, 31.764, 157.798),
            vector4(23.563, -621.579, 31.629, 341.630),
            vector4(5.183, -604.884, 35.724, 301.595),
        },
        rich = false,
    },
    {
        coords = vector4(-26.962, -623.626, 34.740, 70.180),
        peds = {
            vector4(-12.047, -617.097, 35.861, 162.357),
            vector4(5.183, -604.884, 35.724, 301.595),
            vector4(-25.507, -646.504, 35.869, 334.733),
        },
        rich = false,
    },
    {
        coords = vector4(398.355, -1323.026, 38.662, 322.831),
        peds = {
            vector4(423.682, -1319.593, 41.075, 96.687),
            vector4(402.345, -1334.033, 41.467, 348.803),
            vector4(383.616, -1318.038, 38.554, 24.440),
        },
        rich = false,
    },
    {
        coords = vector4(426.711, -1522.750, 28.563, 208.383),
        peds = {
            vector4(429.132, -1508.028, 29.292, 246.591),
            vector4(447.644, -1528.341, 29.209, 54.545),
            vector4(417.124, -1534.781, 29.388, 214.549),
            vector4(413.777, -1508.809, 29.292, 161.373),
        },
        rich = false,
    },
    {
        coords = vector4(365.801, -1667.337, 26.584, 52.296),
        peds = {
            vector4(341.882, -1683.858, 27.302, 283.585),
            vector4(372.668, -1679.450, 27.311, 357.934),
            vector4(359.202, -1659.729, 27.255, 321.935),
            vector4(364.755, -1677.664, 30.730, 356.108)
        },
        rich = false,
    },
    {
        coords = vector4(187.956, -1876.204, 23.914, 336.035),
        peds = {
            vector4(189.998, -1863.711, 24.670, 134.423),
            vector4(196.567, -1868.037, 24.721, 143.669),
            vector4(200.028, -1889.899, 24.674, 120.734),
        },
        rich = false,
    },
    {
        coords = vector4(165.226, -1863.747, 23.374, 154.384),
        peds = {
            vector4(158.582, -1854.632, 24.211, 271.215),
            vector4(175.489, -1856.583, 24.051, 80.025),
            vector4(174.937, -1875.394, 24.198, 79.108),
            vector4(155.358, -1869.323, 24.244, 236.146),
        },
        rich = false,
    },
    {
        coords = vector4(277.294, -1960.316, 22.749, 334.825),
        peds = {
            vector4(290.408, -1955.187, 22.595, 96.971),
            vector4(268.243, -1966.887, 22.576, 49.256),
            vector4(274.251, -1970.753, 21.644, 228.204),
        },
        rich = false,
    },
    {
        coords = vector4(276.845, -1983.386, 19.691, 228.662),
        peds = {
            vector4(267.878, -1985.109, 20.417, 354.902),
            vector4(277.803, -1973.502, 21.251, 97.145),
            vector4(279.686, -1993.773, 20.804, 331.211),
            vector4(270.952, -1985.690, 23.888, 38.144),
        },
        rich = false,
    },
    {
        coords = vector4(236.695, -2026.767, 17.587, 52.061),
        peds = {
            vector4(241.064, -2018.718, 18.314, 133.599),
            vector4(252.446, -2029.902, 18.317, 162.562),
            vector4(246.883, -2016.386, 22.084, 119.730),
        },
        rich = false,
    },
    {
        coords = vector4(353.940, -1836.484, 27.228, 33.708),
        peds = {
            vector4(338.994, -1829.667, 28.338, 344.840),
            vector4(346.581, -1839.275, 27.948, 229.485),
            vector4(366.888, -1839.984, 28.403, 323.899),

        },
        rich = false,
    },
    {
        coords = vector4(419.283, -1818.590, 27.352, 43.301),
        peds = {
            vector4(429.989, -1817.109, 27.976, 153.957),
            vector4(409.596, -1831.052, 27.830, 304.036),
            vector4(417.111, -1833.083, 28.073, 32.939),
        },
        rich = false,
    },
    {
        coords = vector4(-38.301, -1434.365, 30.773, 357.755),
        peds = {
            vector4(-30.176, -1433.061, 31.493, 356.450),
            vector4(-48.404, -1430.626, 32.421, 302.262),
            vector4(-32.473, -1446.439, 31.891, 112.708),
        },
        rich = false,
    },
    {
        coords = vector4(-34.973, -1510.751, 30.022, 140.692),
        peds = {
            vector4(-44.172, -1530.562, 32.055, 322.365),
            vector4(-27.041, -1533.258, 30.677, 345.806),
            vector4(-48.418, -1501.425, 35.170, 217.698),
        },
        rich = false,
    },
    {
        coords = vector4(1151.929, -1655.982, 35.811, 27.637),
        peds = {
            vector4(1142.162, -1656.049, 36.416, 301.513),
            vector4(1146.980, -1664.548, 36.520, 297.145),
            vector4(1151.577, -1637.057, 36.958, 152.469),
        },
        rich = false,
    },
    {
        coords = vector4(464.025, 2604.567, 42.552, 9.481),
        peds = {
            vector4(472.068, 2589.297, 43.273, 71.799),
            vector4(478.754, 2608.585, 43.273, 17.288),
            vector4(469.767, 2608.555, 44.477, 113.703),
        },
        rich = false,
    },
    {
        coords = vector4(253.592, 3120.312, 41.767, 272.848),
        peds = {
            vector4(246.908, 3111.811, 42.487, 1.054),
            vector4(265.342, 3123.633, 42.288, 11.642),
            vector4(264.007, 3096.275, 42.764, 90.856),
            vector4(255.413, 3110.959, 42.594, 290.532)
        },
        rich = false,
    },
    {
        coords = vector4(236.652, 3165.161, 41.912, 107.031),
        peds = {
            vector4(259.540, 3163.413, 42.867, 150.774),
            vector4(252.481, 3183.573, 42.705, 102.546),

        },
        rich = false,
    },
    {
        coords = vector4(373.764, 3580.973, 32.571, 321.114),
        peds = {
            vector4(369.719, 3573.905, 33.298, 17.814),
            vector4(378.999, 3560.358, 33.355, 336.243),
            vector4(394.245, 3565.133, 33.292, 334.123),
            
        },
        rich = false,
    },
    {
        coords = vector4(-233.178, 6442.154, 30.476, 51.424),
        peds = {
            vector4(-230.655, 6451.745, 31.198, 149.502),
            vector4(-213.652, 6444.155, 31.313, 218.616),
            vector4(-241.843, 6430.840, 31.068, 285.709),
            
        },
        rich = false,
    },
    {
        coords = vector4(-314.342, 6312.401, 31.639, 221.617),
        peds = {
            vector4(-305.595, 6302.618, 32.489, 333.582),
            vector4(-318.182, 6294.037, 32.489, 320.369),
            vector4(-340.845, 6298.868, 32.452, 331.736),
            vector4(-310.113, 6322.814, 32.489, 124.947)
            
        },
        rich = false,
    },
    {
        coords = vector4(-440.045, 6192.003, 28.829, 178.821),
        peds = {
            vector4(-452.579, 6188.672, 29.166, 180.561),
            vector4(-455.163, 6204.547, 29.553, 330.679),
            vector4(-430.752, 6213.958, 30.091, 53.801),
            vector4(-443.207, 6177.934, 29.983, 5.589),
            
        },
        rich = false,
    },
    {
        coords = vector4(-162.888, 6307.290, 30.681, 225.407),
        peds = {
            vector4(-152.503, 6287.130, 31.609, 350.192),
            vector4(-169.356, 6301.149, 31.490, 180.932),
            vector4(-186.441, 6318.157, 31.609, 242.993),
            
        },
        rich = false,
    },
    {
        coords = vector4(-12.911, 6469.701, 30.738, 322.115),
        peds = {
            vector4(-25.408, 6472.673, 31.484, 109.847),
            vector4(-8.378, 6483.910, 31.445, 159.106),
            vector4(-13.066, 6466.693, 31.427, 133.210),
            
        },
        rich = false,
    },
    {
        coords = vector4(-2334.122, 373.772, 173.746, 111.736),
        peds = {
            vector4(-2328.204, 359.427, 174.597, 119.197),
            vector4(-2357.565, 354.805, 172.707, 327.999),
            vector4(-2349.741, 383.349, 174.702, 264.326),

            
        },
        rich = false,
    },

    {
        coords = vector4(-2785.764, 1431.680, 100.209, 56.302),
        peds = {
            vector4(-2797.343, 1431.934, 100.928, 317.660),
            vector4(-2789.603, 1456.278, 100.863, 225.159),
            vector4(-2783.629, 1414.709, 100.831, 317.688),
            vector4(-2772.302, 1420.466, 99.847, 340.445),
        },
        rich = true,
    },
    {
        coords = vector4(-1551.862, 430.744, 108.468, 81.677),
        peds = {
            vector4(-1523.393, 418.483, 109.678, 340.506),
            vector4(-1562.022, 427.724, 112.991, 265.845),
        },
        rich = true,
    },
    {
        coords = vector4(-1409.307, 537.732, 122.121, 104.596),
        peds = {
            vector4(-1402.998, 517.717, 123.292, 120.193),
            vector4(-1387.981, 545.745, 122.928, 58.817),
        },
        rich = true,
    },
    {
        coords = vector4(-1358.759, 578.182, 130.681, 62.259),
        peds = {
            vector4(-1367.126, 567.166, 134.973, 251.608),
            vector4(-1364.231, 587.513, 131.419, 212.782),
            vector4(-1377.064, 579.093, 131.447, 273.393),
        },
        rich = true,
    },
    {
        coords = vector4(-1346.102, 608.875, 133.092, 99.275),
        peds = {
            vector4(-1335.289, 590.036, 134.379, 40.314),
            vector4(-1333.900, 617.633, 133.859, 87.804),
        },
        rich = true,
    },
    {
        coords = vector4(-1080.608, 814.797, 165.506, 186.352),
        peds = {
            vector4(-1075.887, 820.319, 166.837, 139.749),
            vector4(-1086.756, 827.632, 168.437, 243.978),
            vector4(-1086.579, 817.768, 172.365, 268.353),
            vector4(-1092.291, 796.073, 166.225, 286.378),
        },
        rich = true,
    },
    {
        coords = vector4(-660.140, 806.895, 198.538, 178.085),
        peds = {
            vector4(-643.484, 805.078, 197.921, 97.766),
            vector4(-669.920, 799.603, 198.998, 320.240),

        },
        rich = true,
    },
    {
        coords = vector4(-714.487, 645.249, 154.454, 169.263),
        peds = {
            vector4(-722.441, 641.844, 155.164, 167.576),
            vector4(-694.826, 647.950, 155.175, 34.327),
            vector4(-690.061, 649.173, 155.175, 8.913),
            
        },
        rich = true,
    },
    {
        coords = vector4(-274.477, 599.423, 180.977, 156.529),
        peds = {
            vector4(-279.797, 574.903, 181.682, 276.003),
            vector4(-294.250, 604.736, 180.835, 234.320),
            vector4(-299.110, 597.113, 181.027, 316.561),
            
        },
        rich = true,
    },
    {
        coords = vector4(-1096.622, 359.818, 67.811, 178.661),
        peds = {
            vector4(-1104.687, 346.385, 68.481, 1.089),
            vector4(-1126.581, 352.325, 71.561, 261.069),
            vector4(-1146.003, 386.923, 71.305, 282.663),
            vector4(-1131.488, 371.885, 74.933, 252.954),
            vector4(-1129.673, 347.068, 71.409, 247.361),
        },
        rich = true,
    },
    {
        coords = vector4(-1126.547, 378.957, 69.986, 38.914),
        peds = {
            vector4(-1104.687, 346.385, 68.481, 1.089),
            vector4(-1126.581, 352.325, 71.561, 261.069),
            vector4(-1146.003, 386.923, 71.305, 282.663),
            vector4(-1131.488, 371.885, 74.933, 252.954),
            vector4(-1129.673, 347.068, 71.409, 247.361),
        },
        rich = true,
    },
    {
        coords = vector4(-1126.547, 378.957, 69.986, 38.914),
        peds = {
            vector4(-1104.687, 346.385, 68.481, 1.089),
            vector4(-1126.581, 352.325, 71.561, 261.069),
            vector4(-1146.003, 386.923, 71.305, 282.663),
            vector4(-1131.488, 371.885, 74.933, 252.954),
            vector4(-1129.673, 347.068, 71.409, 247.361),
        },
        rich = true,
    },
    {
        coords = vector4(-1044.371, 221.407, 63.044, 328.748),
        peds = {
            vector4(-1032.881, 207.585, 64.564, 41.483),
            vector4(-1055.154, 234.289, 64.160, 110.862),
        },
        rich = true,
    },
    {
        coords = vector4(-910.447, 186.004, 68.721, 332.757),
        peds = {
            vector4(-917.220, 203.691, 69.430, 181.600),
            vector4(-895.798, 174.679, 69.446, 50.574),
        },
        rich = true,
    },
    {
        coords = vector4(-715.096, 88.077, 55.136, 295.013),
        peds = {
            vector4(-695.249, 83.123, 55.855, 63.499),
            vector4(-726.511, 69.853, 55.938, 53.960),
            vector4(-731.266, 66.062, 51.910, 357.749),
        },
        rich = true,
    },
    {
        coords = vector4(-964.179, 108.263, 55.254, 121.504),
        peds = {
            vector4(-973.503, 102.385, 55.864, 219.455),
            vector4(-971.139, 122.676, 57.049, 304.920),
            vector4(-984.328, 134.633, 56.456, 337.331),
        },
        rich = true,
    },
    {
        coords = vector4(-994.330, 143.773, 59.948, 289.761),
        peds = {
            vector4(-998.115, 156.337, 62.114, 201.276),
            vector4(-1004.744, 136.147, 58.114, 256.251),

        },
        rich = true,
    },
    {
        coords = vector4(-1060.916, 310.835, 65.315, 169.595),
        peds = {
            vector4(-1066.771, 289.023, 65.839, 341.296),
            vector4(-1039.122, 312.527, 67.274, 7.280),
            vector4(-1025.014, 317.433, 66.882, 65.550),
        },
        rich = true,
    },
    {
        coords = vector4(-1203.932, 270.964, 68.836, 72.120),
        peds = {
            vector4(-1216.408, 260.515, 69.735, 46.154),
            vector4(-1210.814, 278.782, 69.677, 329.401),
            vector4(-1188.844, 279.840, 69.819, 207.082),
            vector4(-1172.400, 322.292, 69.884, 194.744),
        },
        rich = true,
    },
    {
        coords = vector4(-1503.102, 23.162, 55.510, 175.703),
        peds = {
            vector4(-1501.227, 5.868, 56.680, 271.314),
            vector4(-1541.619, 18.082, 56.224, 356.803),
            vector4(-1511.318, 37.136, 55.526, 145.251),

        },
        rich = true,
    },
    {
        coords = vector4(-1587.369, -81.772, 53.615, 46.986),
        peds = {
            vector4(-1595.184, -91.114, 54.330, 188.815),
            vector4(-1588.575, -75.015, 55.067, 229.762),
            vector4(-1550.108, -89.633, 54.929, 315.361),
            vector4(-1525.901, -96.211, 54.331, 334.706),
        },
        rich = true,
    },
    {
        coords = vector4(-1858.830, 325.115, 87.974, 187.385),
        peds = {
            vector4(-1841.266, 315.377, 90.917, 315.742),
            vector4(-1872.167, 313.743, 88.738, 295.113),
            vector4(-1842.100, 312.899, 90.917, 340.809),

        },
        rich = true,
    },
    {
        coords = vector4(-1794.047, 404.982, 112.477, 359.376),
        peds = {
            vector4(-1779.657, 413.056, 113.653, 39.089),
            vector4(-1802.999, 406.435, 114.632, 169.484),
            vector4(-1818.913, 401.706, 116.313, 184.240),

        },
        rich = true,
    },
    {
        coords = vector4(-1993.140, 375.725, 93.764, 91.116),
        peds = {
            vector4(-2011.637, 349.958, 94.479, 259.058),
            vector4(-1995.787, 396.985, 94.637, 220.259),
            vector4(-2008.969, 369.209, 94.814, 273.277),
        },
        rich = false,
    },
    {
        coords = vector4(-1907.685, 407.045, 95.578, 277.689),
        peds = {
            vector4(-1938.595, 413.376, 96.499, 266.176),
            vector4(-1894.156, 380.427, 97.708, 44.136),
            vector4(-1937.061, 414.219, 96.389, 285.210),
            vector4(-1928.599, 383.736, 96.284, 232.956),
        },
        rich = false,
    },
    {
        coords = vector4(-86.115, 1953.929, 187.621, 248.071),
        peds = {
            vector4(-62.704, 1948.875, 190.186, 7.105),
            vector4(-32.441, 1964.370, 190.120, 4.790),
            vector4(-93.247, 1917.847, 196.755, 21.565),
            vector4(-73.520, 1961.627, 188.987, 118.098),
        },
        rich = false,
    },
    {
        coords = vector4(737.122, 2515.915, 72.496, 269.480),
        peds = {
            vector4(728.347, 2514.095, 73.096, 204.345),
            vector4(724.910, 2539.661, 73.189, 265.550),
            vector4(713.267, 2517.247, 73.345, 143.711),
        },
        rich = false,
    },
}

_boostingDropoffs = {
    vector3(701.970, -2319.590, 25.698),
    vector3(602.283, -437.088, 24.031),
    vector3(-1398.568, -646.997, 27.950),
    vector3(-498.662, 173.686, 70.213),
    vector3(36.566, -408.838, 39.204),
    vector3(-553.651, -1789.035, 21.553),
    vector3(-1132.890, -2229.106, 12.475),
    vector3(-475.427, -2770.125, 5.281),
    vector3(1013.072, -3277.831, 5.179),
    vector3(474.583, -2701.298, 5.336),
    vector3(1746.653, -1497.297, 112.091),
    vector3(2783.996, 1397.517, 23.931),
    vector3(748.694, 1308.605, 359.333),
    vector3(1027.704, 2448.598, 44.447),
    vector3(896.512, 3610.518, 32.104),
    vector3(-218.848, 3642.384, 51.033),
    vector3(-2220.982, 3484.095, 29.448),
    vector3(-441.285, 6338.938, 11.998),
    vector3(1590.964, 6467.215, 24.538),
    vector3(2908.522, 4339.502, 49.579),
    vector3(2982.158, 3485.835, 70.662),
    vector3(2519.921, 4088.236, 37.879),
    vector3(1031.964, -145.152, 73.471),
    vector3(1416.154, -2046.024, 51.277),
    vector3(-455.544, -940.541, 22.946),
    vector3(-1184.865, -460.134, 33.174),
    vector3(555.460, -1631.398, 27.905),
    vector3(-1566.907, -438.518, 37.009),
}

_boostingEventDropoff = vector3(1020.419, -2926.952, 5.180)

