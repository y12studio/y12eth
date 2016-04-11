<?php
$obj1 = json_decode(file_get_contents('http://m.coa.gov.tw/OpenData/FarmTransData.aspx?$top=20&$skip=0&Crop=%E9%A6%99%E8%95%89'),true);
//echo $obj1[1]['平均價'];
// result.XETHZUSD.a.0
$obj2 = json_decode(file_get_contents('https://api.kraken.com/0/public/Ticker?pair=ETHXBT'),true);
// echo $obj2['result']['XETHZUSD']['a'][0];
$obj3 = json_decode(file_get_contents('https://api.bitcoinaverage.com/ticker/global/TWD/'),true);
$kgtwd = floatval($obj1[1]['平均價']);
$ethbtc = floatval($obj2['result']['XETHXXBT']['c'][0]);
$btctwd = $obj3['last'];
$ethtwd = $ethbtc * $btctwd;
$ethkg = $ethtwd / $kgtwd;
$ethban = $ethkg * 5;
// 1 banana = 200 g
echo json_encode(array('kgtwd' => $kgtwd,
                        'ethkg' => $ethkg,
                        'ethban' => $ethban,
                        'ethbane3' => round($ethban*1000),
                        'ethtwd' => sprintf('%0.3f', $ethtwd),
                       'ethbtc' => $ethbtc,
                       'btctwd'=> $btctwd));
?>
