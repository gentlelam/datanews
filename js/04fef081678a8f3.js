var dataMap = {};
function dataFormatter(obj) {
    var pList = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'];
    var temp;
    var max = 0;
    for (var year = 2002; year <= 2005; year++) {
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            obj[year][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[year+'max'] = Math.floor(max/100) * 100;
    }
    return obj;
}

function dataMix(list) {
    var mixData = {};
    for (var i = 0, l = list.length; i < l; i++) {
        for (var key in list[i]) {
            if (list[i][key] instanceof Array) {
                mixData[key] = mixData[key] || [];
                for (var j = 0, k = list[i][key].length; j < k; j++) {
                    mixData[key][j] = mixData[key][j] 
                                      || {name : list[i][key][j].name, value : []};
                    mixData[key][j].value.push(list[i][key][j].value);
                }
            }
        }
    }
    return mixData;
}

dataMap.dataGDP = dataFormatter({
    //max : 120,
    2005:[113.82,90.41,98.11,72.11,51.67,76.93,84.23,54.76,63.47,67.79,52.06,68.40,26.44,45.69,90.37,95.61,67.85,52.43,36.85,36.80,20.57,52.73,48.43,31.69,25.73,34.57,65.73,37.85,44.56,57.79,64.23],
    2004:[48.34,46.12,43.81,38.82,29.45,31.16,28.49,18.10,34.25,33.80,37.72,41.19,24.18,38.91,42.02,54.59,51.70,47.46,32.46,31.81,14.34,34.63,28.37,25.87,18.56,18.01,38.32,22.45,34.06,26.97,27.66],
    2003:[63.32,60.78,59.77,44.37,33.54,41.78,36.98,28.78,46.56,48.57,43.38,49.86,27.33,38.85,51.91,69.67,53.29,43.88,23.22,31.19,13.98,41.19,37.35,26.00,26.00,21.11,36.43,37.76,42.06,38.17,44.70],
    2002:[92.20,84.83,97.79,65.81,47.46,68.23,67.02,51.05,67.66,74.09,61.97,63.40,39.43,51.24,79.71,103.00,98.76,74.27,47.64,62.17,28.35,84.87,69.59,43.29,40.24,26.53,70.68,64.39,49.15,57.78,69.65]
});


dataMap.dataGDP_Estate = dataMix([dataMap.dataEstate, dataMap.dataGDP]);
