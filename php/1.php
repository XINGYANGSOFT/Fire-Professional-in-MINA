<?php
// $arr    =   array
// (
//     0 => array
//         (
//             'initial' => 'A',
//             'typename' => '奥迪'
//         ),
//     1 => array
//         (
//             'initial' => 'F',
//             'typename' =>'F1'
//         ),
//     2 => array
//         (
//             'initial' => 'F',
//             'typename' => 'F2'
//         )
// );

// function fenlei($arr){
//     $r =   array();
//     foreach($arr as $k=>$v){
//         $r[$v['initial']][]    =   $v;
//     }
//     return $r;
// }
// $arrr = fenlei($arr);

// print_r($arrr); 

// function fenlei($a){
//     $r = array();
//     foreach($a as $k=>$v){
//         $r[$v['fenlei']][] = $v;
//     }
//     return $r;
// }

$t = Array('灭火类'=>'1','侦检类'=>'2');
$i=0;
$tt = array();
foreach ($t as $key => $value) {
    $i++;
    $tt[] = array('fid'=>$i,'fl'=>$key,'ft'=>$value);
}
print_r($tt);
?>