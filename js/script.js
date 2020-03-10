import "./byeie"; // loučíme se s IE

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/

var colors = ['#b80058','#ebac23','#008cf9','#006e00','#00bbad','#d163e6','#b24502','#ff9287', '#5954d6', '#00c6f8', '#878500', '#00a76c', '#bdbdbd'];

var roky = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

var rokylong = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

var rokylonglong = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

var mesto_celkem = [
  ["pocet",1000, 2000, 3000, 9528,8857,8152,7726,8433,8899,8716,9077,8967,8923],
  ["umrti",1000, 2000, 3000, 397,360,283,304,276,282,264,259,274,211],
  ["tezka",1000, 2000, 3000, 1503,1416,1337,1215,1225,1309,1273,1176,1134,1235],
  ["lehka",1000, 2000, 3000, 6340,5905,5788,5385,5918,6224,6123,6456,6322,6278],
  ["bez",1000, 2000, 3000, 1258,1141,711,779,949,1014,1009,1109,1165,1108],
  ["umrtilove",1000, 2000, 3000, 7854.2,7122.2,5598.9,6014.3,5460.4,5579.1,5223.0,5124.1,5420.8,4174.4],
  ["tezkalove",1000, 2000, 3000, 7661.5,7218.1,6815.4,6193.5,6244.4,6672.6,6489.1,5994.7,5780.6,6295.4],
  ["lehkalove",1000, 2000, 3000, 4543.9,4232.1,4148.3,3859.4,4241.4,4460.7,4388.4,4627.0,4531.0,4499.4],
  ["bezlove",1000, 2000, 3000, 486.1,440.9,274.7,301.0,366.7,391.8,389.9,428.5,450.2,428.1],
  ["love",1000, 2000, 3000, 20545.8,19013.3,16837.2,16368.2,16312.9,17104.3,16490.3,16174.2,16182.5,15397.4]
];

var mesto_brno = [
  ["pocet",322,356,398,406,375,386,359,392,419,387],
  ["umrti",11,6,6,12,11,4,5,3,4,7],
  ["tezka",53,52,73,65,75,73,80,59,85,52],
  ["lehka",230,246,280,294,259,267,250,295,286,293],
  ["bez",28,52,39,35,30,42,23,26,40,27],
  ["umrtilove",217.6,118.7,118.7,237.4,217.6,79.1,98.9,59.4,79.1,138.5],
  ["tezkalove",270.2,265.1,372.1,331.3,382.3,372.1,407.8,300.8,433.3,265.1],
  ["lehkalove",164.8,176.3,200.7,210.7,185.6,191.4,179.2,211.4,205.0,210.0],
  ["bezlove",10.8,20.1,15.1,13.5,11.6,16.2,8.9,10.0,15.5,10.4],
  ["love",663.5,580.2,706.6,793.0,797.2,658.8,694.8,581.6,732.9,624.0]
];

var mesto_praha = [
  ["pocet",886,920,1022,1067,1076,1084,1054,982,1087,998],
  ["umrti",21,23,21,25,9,14,12,16,27,13],
  ["tezka",180,153,162,169,125,113,137,103,116,81],
  ["lehka",544,603,662,688,746,746,672,659,678,669],
  ["bez",115,113,140,153,149,168,172,160,207,169],
  ["umrtilove",415.5,455.0,415.5,494.6,178.1,277.0,237.4,316.5,534.2,257.2],
  ["tezkalove",917.6,779.9,825.8,861.5,637.2,576.0,698.4,525.0,591.3,412.9],
  ["lehkalove",389.9,432.2,474.5,493.1,534.7,534.7,481.6,472.3,485.9,479.5],
  ["bezlove",44.4,43.7,54.1,59.1,57.6,64.9,66.5,61.8,80.0,65.3],
  ["love",1767.3,1710.8,1769.8,1908.3,1407.5,1452.6,1483.8,1375.7,1691.4,1214.9]
];

var cykloumrti = [
  ["Rumunsko",8.3,8.3,7.3,8.5,6.5,7.7,8,7.6,8.2,8.9],
  ["Maďarsko",15.7,10.9,10.3,9.2,8.5,8.5,6.9,9.9,8.4,7.4],
  ["Polsko",13.1,11.4,9.7,7.4,8.2,7.9,8,7.5,7.9,7.1],
  ["Chorvatsko",6.5,10.9,6.7,6.5,6.5,4.9,5.4,4.5,8,6.4],
  ["Belgie",8.5,8.1,8.3,6.5,6.4,6.2,6.5,6.8,7.4,6.3],
  ["Nizozemsko",9,8.8,8.4,7.2,8.6,8.7,6.7,7,6.3,5.9],
  ["Slovinsko",8.5,8.5,8.9,8.3,7.8,5.8,7.8,6.3,6.8,5.8],
  ["Rakousko",4.5,7.5,4.7,3.8,5,6.2,6.2,5.3,4.5,5.5],
  ["Dánsko",9.9,9.9,4.5,4.7,5.4,3.9,5.9,5.3,4.6,5.4],
  ["Česko",11.3,9,8.1,7.6,6,7.4,7,6.5,8,5],
  ["Německo",5.2,5.5,5.6,4.7,5,5.1,4.4,4.9,4.7,4.8],
  ["Finsko",4.2,3.4,3.8,4.9,3.5,3.5,3.7,5,5.5,4.7],
  ["Itálie",6,4.9,5,4.5,4.8,4.9,4.2,4.5,4.1,4.5],
  ["Průměr EU",5.5,5.1,4.6,4.1,4.2,4.3,4,4.2,4,4],
  ["Švýcarsko",4,3.6,7,4.4,5,4.5,2.6,4.2,4.7,4],
  ["Lotyšsko",8.1,6.8,12,6.1,7.2,8.8,6.4,8,4.5,3.6],
  ["Portugalsko",3.2,4,2.7,3.1,4.3,3,2.8,3.4,2.4,3.2],
  ["Francie",2.2,2.3,2.5,2.3,2.2,2.5,2.2,2.4,2.2,2.4],
  ["Malta",null,null,null,null,null,null,null,null,null,2.3],
  ["Norsko",1.5,2.1,1.9,1,2.4,2.4,2,2.3,1,2.3],
  ["Švédsko",3.6,3.3,2.2,2.2,2.2,3,1.5,3.4,1.7,2.2],
  ["Řecko",1.4,2,1.4,2.1,1.2,1.9,1.4,1.7,1,1.7],
  ["Lucembursko",null,null,4.1,2,3.9,null,null,null,null,1.7],
  ["Spojené království",2.3,1.9,1.7,1.8,1.7,1.9,1.8,1.8,1.5,1.6],
  ["Španělsko",2,1.3,1.2,1.4,1,1.6,1.5,1.6,1.2,1.4],
  ["Kypr",4,7.7,2.5,2.4,2.4,1.2,2.3,1.2,1.2,null],
  ["Island",null,null,null,null,null,null,null,null,3,null],
  ["Bulharsko",null,4.7,3.9,3.6,2.3,4.4,4.3,4,4,null],
  ["Estonsko",9.7,6.7,5.2,null,null,null,null,null,null,null],
  ["Irsko",3.5,2.9,1.5,1.1,2,1.7,1.1,2.8,null,null],
  ["Litva",null,null,null,null,null,null,6.1,6.5,7.5,null],
  ["Slovensko",11.4,8.6,4.1,5,null,null,null,null,null,null]
];

var cykloumrtizeme = cykloumrti.map(function(value, index) { return value[0]; });

var cykloumrtidata = cykloumrti.map(function(value) { return value.slice(1); });

var pesoumrti = [
  ["Rumunsko",52.7,51.7,49.7,42.8,37,36.2,36.3,34.9,32.7,36.3],
  ["Lotyšsko",71.5,47.9,37.9,37.3,28.9,30.3,34.6,35.5,31.7,27.9],
  ["Polsko",51.2,49.4,38.5,32.5,37,30.4,30,29.4,24.1,22.9],
  ["Malta",7.4,2.5,9.7,4.8,null,null,null,null,11.4,17.8],
  ["Kypr",22.4,20.6,11.3,15.9,15.5,11.6,9.2,11.7,18.9,16.5],
  ["Chorvatsko",28.7,31.5,23.9,24.4,16.6,16.8,16.2,17.2,14.4,16],
  ["Maďarsko",28.6,25,18.5,19.2,12.4,15.7,14.8,15.4,15.1,15.5],
  ["Lucembursko",14.7,12.4,24.3,2,11.7,11.4,9.3,5.5,12.4,13.9],
  ["Řecko",23.1,22.4,18.2,16.1,20,15.3,13.7,11.4,11.8,13.8],
  ["Česko",22.6,23,16.9,16.1,16.8,15.5,15.4,12.4,14.2,12.3],
  ["Portugalsko",14.8,14.7,14,18.4,18.8,15.1,13.7,13.9,14.1,11.9],
  ["Slovinsko",15.9,19.4,11.8,12.7,10.2,9.2,9.7,6.8,7.8,10.7],
  ["Průměr EU",17.1,16.1,13.9,12.5,12.7,11.4,11.1,11.1,10.6,10.6],
  ["Itálie",10.8,11,11.3,10.5,9.9,9.7,9.2,9.5,9.9,9.4],
  ["Francie",9.1,8.8,7.9,7.7,8.2,7.7,7.3,7.8,7.3,8.6],
  ["Španělsko",13.2,11,10.2,10.1,8.2,7.9,7.9,7.2,7.9,8.4],
  ["Rakousko",13,12.3,12.1,11.7,10.4,9.6,9.7,8.3,9.8,8.4],
  ["Spojené království",10.9,9.6,8.4,6.6,7.4,6.8,6.3,7.2,6.6,7.1],
  ["Belgie",9.8,9.3,9.4,9.8,10.3,9.4,8.9,9.5,8.2,6.9],
  ["Dánsko",12.5,10.6,9.4,7.9,5.9,5.6,5.9,3.9,4.8,6.3],
  ["Německo",8.4,7.9,7.2,5.8,7.7,6.6,7,6.5,6.7,6.1],
  ["Island",3.3,0,6.3,6.3,12.6,6.3,3.1,0,3,6],
  ["Švýcarsko",10.5,7.8,7.8,9.6,8.8,9.4,8.6,5.3,7,6],
  ["Finsko",9.1,10,5.6,6.5,7.6,5.4,6.3,6.6,5.8,5.3],
  ["Švédsko",6.4,4.9,4.8,3.3,5.6,5.3,4.4,5.4,2.9,4.3],
  ["Norsko",4.9,6.5,5.4,4.9,3.3,4.4,3.6,3.5,2.3,2.9],
  ["Nizozemsko",5.3,3.4,3.8,3.7,3.9,3.8,3,3,3.6,2.6],
  ["Bulharsko",null,37,26.5,23.4,20.2,18.4,14.8,21.5,22.8,null],
  ["Estonsko",28.3,30.6,17.2,10.5,19.6,21.9,17.4,19.8,18.3,null],
  ["Irsko",18.7,11,8.8,9.7,10.3,6.3,6.7,9.1,null,null],
  ["Litva",null,null,null,null,null,null,null,37,27.7,null],
  ["Slovensko",40.4,37.9,21,23.4,null,null,null,null,null,null]
];

var pesoumrtizeme = pesoumrti.map(function(value, index) { return value[0]; });

var pesoumrtidata = pesoumrti.map(function(value) { return value.slice(1); });

var strategie = [
  ["mrtví",926,782,675,604,551,535,449,517,529,434,401,455,454,null],
  ["těžce zranění",3096,2999,2807,2195,2463,2324,2147,2169,1987,1989,1822,1955,1676,null],
  ["mrtví podle strategie",null,null,675,638,601,565,528,491,454,417,380,344,307,270],
  ["těžce zranění podle strategie",null,null,2807,2705,2603,2501,2399,2297,2195,2092,1990,1888,1786,1684]
];

var strategielegenda = strategie.map(function(value, index) { return value[0]; });

var strategiedata = strategie.map(function(value) { return value.slice(1); });

var modalsplit = [
  ["chůze",27,23,29,32,37,32,22,30,24,21,20,24,18],
  ["bicykl",18,16,11,6,2,2,2,1,1,1,1,0,0],
  ["veřejná doprava",39,43,44,48,46,45,58,53,64,62,63,61,65],
  ["automobil/motocykl",15,15,17,14,15,21,18,17,11,16,15,15,16]
];

var modalsplitprostredek = modalsplit.map(function(value, index) { return value[0]; });

var modalsplitdata = modalsplit.map(function(value) { return value.slice(1); });

var mesta = ["Pardubice","Hradec Králové","České Budějovice","Olomouc","Jihlava","Karlovy Vary","Zlín","Liberec","Ostrava","Plzeň","Brno","Ústí nad Labem","Praha"];

document.getElementById('selectMesto').onchange =  () => drawMesto()

document.getElementById('selectLove').onchange =  () => drawLove()

drawMesto();

drawLove();

function drawMesto() {

	var mesto = document.getElementById("selectMesto");
	var mesto = mesto.value;

	var mestonau = eval('mesto_' + mesto);

	var pocet = mestonau[0]; pocet.shift();
	var umrti = mestonau[1]; umrti.shift();
	var tezka = mestonau[2]; tezka.shift();
	var lehka = mestonau[3]; lehka.shift();
	var bez = mestonau[4]; bez.shift();

	var rokynau;
	if(mesto == 'celkem') {
		rokynau = rokylong;
	} else {
		rokynau = roky;
	}

Highcharts.chart('mesta', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Nehody chodců a cyklistů'
    },

    subtitle: {
        text: 'Česko 2007 až 2019<br/>města 2010 až 2019'
    },

    xAxis: {
        categories: rokynau
    },

    yAxis: {
        title: {
            text: 'počet'
        },
        reversedStacks: false
    },

    tooltip: {
        shared: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: '',
        text: 'Zdroj: Policie ČR'
    },

    plotOptions: {
        series: {
            stacking: 'stacked'
        }
    },

    series: [{
        name: 'Úmrtí',
        data: umrti,
        color: '#333'
    }, {
        name: 'Těžká zranění',
        data: tezka,
        color: colors[0]
    }, {
        name: 'Lehká zranění',
        data: lehka,
        color: colors[1]
    }, {
        name: 'Bez zranění',
        data: bez,
        color: colors[3]
    }, {
        name: 'Počet nehod',
        data: pocet,
        color: '#333',
        type: 'line'
    }]
});

}

function drawLove() {

	var mesto = document.getElementById("selectLove");
	var mesto = mesto.value;

	var mestonau = eval('mesto_' + mesto);

	var love = mestonau[9]; love.shift();
	var umrtilove = mestonau[5]; umrtilove.shift();
	var tezkalove = mestonau[6]; tezkalove.shift();
	var lehkalove = mestonau[7]; lehkalove.shift();
	var bezlove = mestonau[8]; bezlove.shift();

	var rokynau;
	if(mesto == 'celkem') {
		rokynau = rokylong;
	} else {
		rokynau = roky;
	}

Highcharts.chart('love', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Ekonomické ztráty z nehod chodců a cyklistů'
    },

    subtitle: {
        text: 'Česko 2007 až 2019<br/>města 2010 až 2019'
    },

    xAxis: {
        categories: rokynau
    },

    yAxis: {
        title: {
            text: 'ekonomické ztráty'
        },
        labels: {
        	formatter: function() {
 			   return this.value + ' mld. Kč';
			}
        },
        reversedStacks: false
    },

    tooltip: {
        shared: true,
        valueSuffix: ' mld. Kč',

    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'http://www.lss.fd.cvut.cz/Members/langr/uaemka/metodika-vypoctu-ztrat/at_download/file',
        text: 'Zdroj: Policie ČR, metodika CDV'
    },

    plotOptions: {
        series: {
            stacking: 'stacked'
        }
    },

    series: [{
        name: 'Úmrtí',
        data: umrtilove,
        color: '#333'
    }, {
        name: 'Těžká zranění',
        data: tezkalove,
        color: colors[0]
    }, {
        name: 'Lehká zranění',
        data: lehkalove,
        color: colors[1]
    }, {
        name: 'Bez zranění',
        data: bezlove,
        color: colors[3]
    }, {
        name: 'Ztráty celkem',
        data: love,
        color: '#333',
        type: 'line'
    }]
});

}

Highcharts.chart('pesoumrti', {
    chart: {
        type: 'line'
    },

    title: {
        text: 'Úmrtí chodců na milion obyvatel'
    },

    subtitle: {
        text: 'podle země EU'
    },

    xAxis: {
        categories: rokylong
    },

    yAxis: {
        title: {
            text: 'úmrtí',
        },
        labels: {
        	formatter: function() {
 			   return this.value + '/mil.';
			}
        },
        min: 0
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://ec.europa.eu/transport/road_safety/sites/roadsafety/files/pdf/statistics/dacota/bfs20xx_pedestrians.pdf',
        text: 'Zdroj: Traffic Safety Basic Facts 2018'
    },

    plotOptions: {
        series: {
            marker: {
            	symbol: 'circle'
            }
        }
    },

    series: [{
        name: pesoumrtizeme[0],
        data: pesoumrtidata[0],
        color: colors[0]
    },{
        name: pesoumrtizeme[1],
        data: pesoumrtidata[1],
        color: colors[1]
    },{
        name: pesoumrtizeme[2],
        data: pesoumrtidata[2],
        color: colors[2],
        visible: false
    },{
        name: pesoumrtizeme[3],
        data: pesoumrtidata[3],
        color: colors[3],
        visible: false
    },{
        name: pesoumrtizeme[4],
        data: pesoumrtidata[4],
        color: colors[4],
        visible: false
    },{
        name: pesoumrtizeme[5],
        data: pesoumrtidata[5],
        color: colors[5],
        visible: false
    },{
        name: pesoumrtizeme[6],
        data: pesoumrtidata[6],
        color: colors[6],
        visible: false
    },{
        name: pesoumrtizeme[7],
        data: pesoumrtidata[7],
        color: colors[7],
        visible: false
    },{
        name: pesoumrtizeme[8],
        data: pesoumrtidata[8],
        color: colors[8],
        visible: false
    },{
        name: pesoumrtizeme[9],
        data: pesoumrtidata[9],
        color: colors[9]
    },{
        name: pesoumrtizeme[10],
        data: pesoumrtidata[10],
        color: colors[10],
        visible: false
    },{
        name: pesoumrtizeme[11],
        data: pesoumrtidata[11],
        color: colors[11],
        visible: false
    },{
        name: pesoumrtizeme[12],
        data: pesoumrtidata[12],
        color: '#333'
    },{
        name: pesoumrtizeme[13],
        data: pesoumrtidata[13],
        color: colors[12],
        visible: false
    },{
        name: pesoumrtizeme[14],
        data: pesoumrtidata[14],
        color: colors[0],
        visible: false
    },{
        name: pesoumrtizeme[15],
        data: pesoumrtidata[15],
        color: colors[1],
        visible: false
    },{
        name: pesoumrtizeme[16],
        data: pesoumrtidata[16],
        color: colors[2],
        visible: false
    },{
        name: pesoumrtizeme[17],
        data: pesoumrtidata[17],
        color: colors[9],
        visible: false
    },{
        name: pesoumrtizeme[18],
        data: pesoumrtidata[18],
        color: colors[4],
        visible: false
    },{
        name: pesoumrtizeme[19],
        data: pesoumrtidata[19],
        color: colors[5],
        visible: false
    },{
        name: pesoumrtizeme[20],
        data: pesoumrtidata[20],
        color: colors[6],
        visible: false
    },{
        name: pesoumrtizeme[21],
        data: pesoumrtidata[21],
        color: colors[10],
        visible: false
    },{
        name: pesoumrtizeme[22],
        data: pesoumrtidata[22],
        color: colors[8],
        visible: false
    },{
        name: pesoumrtizeme[23],
        data: pesoumrtidata[23],
        color: colors[7],
        visible: false
    },{
        name: pesoumrtizeme[24],
        data: pesoumrtidata[24],
        color: colors[3],
        visible: false
    },{
        name: pesoumrtizeme[25],
        data: pesoumrtidata[25],
        color: colors[11]
    },{
        name: pesoumrtizeme[26],
        data: pesoumrtidata[26],
        color: colors[12]
    },{
        name: pesoumrtizeme[27],
        data: pesoumrtidata[27],
        color: colors[0],
        visible: false
    },{
        name: pesoumrtizeme[28],
        data: pesoumrtidata[28],
        color: colors[1],
        visible: false
    },{
        name: pesoumrtizeme[29],
        data: pesoumrtidata[29],
        color: colors[2],
        visible: false
    },{
        name: pesoumrtizeme[30],
        data: pesoumrtidata[30],
        color: colors[3],
        visible: false
    },{
        name: pesoumrtizeme[31],
        data: pesoumrtidata[31],
        color: colors[4],
        visible: false
    }]
});

Highcharts.chart('cykloumrti', {
    chart: {
        type: 'line'
    },

    title: {
        text: 'Úmrtí cyklistů na milion obyvatel'
    },

    subtitle: {
        text: 'podle země EU'
    },

    xAxis: {
        categories: rokylong
    },

    yAxis: {
        title: {
            text: 'úmrtí',
        },
        labels: {
        	formatter: function() {
 			   return this.value + '/mil.';
			}
        },
        min: 0
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://ec.europa.eu/transport/road_safety/sites/roadsafety/files/pdf/statistics/dacota/bfs20xx_cyclists.pdf',
        text: 'Zdroj: Traffic Safety Basic Facts 2018'
    },

    plotOptions: {
        series: {
            marker: {
            	symbol: 'circle'
            }
        }
    },

    series: [{
        name: cykloumrtizeme[0],
        data: cykloumrtidata[0],
        color: colors[0]
    },{
        name: cykloumrtizeme[1],
        data: cykloumrtidata[1],
        color: colors[1]
    },{
        name: cykloumrtizeme[2],
        data: cykloumrtidata[2],
        color: colors[2],
        visible: false
    },{
        name: cykloumrtizeme[3],
        data: cykloumrtidata[3],
        color: colors[3],
        visible: false
    },{
        name: cykloumrtizeme[4],
        data: cykloumrtidata[4],
        color: colors[4],
        visible: false
    },{
        name: cykloumrtizeme[5],
        data: cykloumrtidata[5],
        color: colors[5],
        visible: false
    },{
        name: cykloumrtizeme[6],
        data: cykloumrtidata[6],
        color: colors[6],
        visible: false
    },{
        name: cykloumrtizeme[7],
        data: cykloumrtidata[7],
        color: colors[7],
        visible: false
    },{
        name: cykloumrtizeme[8],
        data: cykloumrtidata[8],
        color: colors[8],
        visible: false
    },{
        name: cykloumrtizeme[9],
        data: cykloumrtidata[9],
        color: colors[9]
    },{
        name: cykloumrtizeme[10],
        data: cykloumrtidata[10],
        color: colors[10],
        visible: false
    },{
        name: cykloumrtizeme[11],
        data: cykloumrtidata[11],
        color: colors[11],
        visible: false
    },{
        name: cykloumrtizeme[12],
        data: cykloumrtidata[12],
        color: colors[12],
        visible: false
    },{
        name: cykloumrtizeme[13],
        data: cykloumrtidata[13],
        color: '#333'
    },{
        name: cykloumrtizeme[14],
        data: cykloumrtidata[14],
        color: colors[0],
        visible: false
    },{
        name: cykloumrtizeme[15],
        data: cykloumrtidata[15],
        color: colors[1],
        visible: false
    },{
        name: cykloumrtizeme[16],
        data: cykloumrtidata[16],
        color: colors[2],
        visible: false
    },{
        name: cykloumrtizeme[17],
        data: cykloumrtidata[17],
        color: colors[9],
        visible: false
    },{
        name: cykloumrtizeme[18],
        data: cykloumrtidata[18],
        color: colors[4],
        visible: false
    },{
        name: cykloumrtizeme[19],
        data: cykloumrtidata[19],
        color: colors[5],
        visible: false
    },{
        name: cykloumrtizeme[20],
        data: cykloumrtidata[20],
        color: colors[6],
        visible: false
    },{
        name: cykloumrtizeme[21],
        data: cykloumrtidata[21],
        color: colors[10],
        visible: false
    },{
        name: cykloumrtizeme[22],
        data: cykloumrtidata[22],
        color: colors[8],
        visible: false
    },{
        name: cykloumrtizeme[23],
        data: cykloumrtidata[23],
        color: colors[7]
    },{
        name: cykloumrtizeme[24],
        data: cykloumrtidata[24],
        color: colors[3]
    },{
        name: cykloumrtizeme[25],
        data: cykloumrtidata[25],
        color: colors[11],
        visible: false
    },{
        name: cykloumrtizeme[26],
        data: cykloumrtidata[26],
        color: colors[12],
        visible: false
    },{
        name: cykloumrtizeme[27],
        data: cykloumrtidata[27],
        color: colors[0],
        visible: false
    },{
        name: cykloumrtizeme[28],
        data: cykloumrtidata[28],
        color: colors[1],
        visible: false
    },{
        name: cykloumrtizeme[29],
        data: cykloumrtidata[29],
        color: colors[2],
        visible: false
    },{
        name: cykloumrtizeme[30],
        data: cykloumrtidata[30],
        color: colors[3],
        visible: false
    },{
        name: cykloumrtizeme[31],
        data: cykloumrtidata[31],
        color: colors[4],
        visible: false
    }]
});

Highcharts.chart('strategie', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Národní bezpečnostní strategie: plán × skutečnost'
    },

    subtitle: {
        text: 'počet obětí má mezi 2009 a 2020 klesnout o 60 %<br/>počet těžce zraněných o 40 %'
    },

    xAxis: {
        categories: rokylonglong
    },

    yAxis: {
        title: {
            text: 'počet'
        }
    },

    tooltip: {
        shared: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.czrso.cz/nsbsp/Revize-a-aktualizace-NSBSP-2020_vc_AP_final.pdf',
        text: 'Zdroj: Policie ČR, Národní strategie bezpečnosti silničního provozu pro roky 2011 až 2020'
    },

    plotOptions: {
        series: {
            marker: {
            	symbol: 'circle'
            }
        }
    },

    series: [{
        name: strategielegenda[0],
        data: strategiedata[0],
        color: colors[0]
    }, {
    	type: 'line',
        name: strategielegenda[2],
        data: strategiedata[2],
        color: '#555',
        zIndex: 10,
        linkedTo: ':previous'
    }, {
        name: strategielegenda[1],
        data: strategiedata[1],
        color: colors[1],
        visible: false
    }, {
    	type: 'line',
        name: strategielegenda[3],
        data: strategiedata[3],
        color: '#999',
        zIndex: 10,
        linkedTo: ':previous'
    }]
});

Highcharts.chart('modalsplit', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Podíl dopravních prostředků podle města'
    },

    subtitle: {
        text: 'krajská města, podle SLDB 2001'
    },

    xAxis: {
        categories: mesta
    },

    yAxis: {
        title: {
            text: 'podíl'
        },
        labels: {
        	formatter: function() {
 			   return this.value + '%';
			}
        }
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://cs.wikipedia.org/wiki/D%C4%9Blba_p%C5%99epravn%C3%AD_pr%C3%A1ce',
        text: 'Zdroj: SLDB 2001'
    },

    series: [{
        name: modalsplitprostredek[0],
        data: modalsplitdata[0],
        color: colors[0]
    }, {
        name: modalsplitprostredek[1],
        data: modalsplitdata[1],
        color: colors[1]
    }, {
        name: modalsplitprostredek[2],
        data: modalsplitdata[2],
        color: colors[2],
        visible: false
    }, {
        name: modalsplitprostredek[3],
        data: modalsplitdata[3],
        color: colors[3],
        visible: false
    }]
});