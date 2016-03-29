function loadJSON(url){
  var json = UrlFetchApp.fetch(url).getContentText();
  var data = JSON.parse(json);
  return data;
}

//https://poloniex.com/public?command=returnTicker
// BTC_ETH: {
//last: "0.00466699",
//lowestAsk: "0.00466699",
//highestBid: "0.00461400",
//percentChange: "-0.15366913",
//baseVolume: "4501.14835096",
//quoteVolume: "927134.08196813",
//isFrozen: "0",
//high24hr: "0.00566600",
//low24hr: "0.00425100"
//}

function loadBtcEth(){
  var array = [];
  var url = 'https://poloniex.com/public?command=returnTicker';
  var data = loadJSON(url);
  var eth = data['BTC_ETH'];
  array.push(['last',eth['last'],'ask',eth['lowestAsk'],'bid',eth['highestBid']]);
  Logger.log(array);
  return array;
}


function loadTwdBanana(){
  var array = [];
  var url = 'http://m.coa.gov.tw/OpenData/FarmTransData.aspx?$top=20&$skip=0&Crop=%E9%A6%99%E8%95%89';
  var data = loadJSON(url);
  var banana = data[1];
  array.push(['average',banana['平均價']]);
  Logger.log(array);
  return array;
}
