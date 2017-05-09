<?php
require 'config.php';

$con=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; //连接数据库
mysql_query("set names 'utf8'"); //数据库输出编码
mysql_select_db($mysql_database); //打开数据库


$AppID="wx1faab87f6037d2fc";
$AppSecret="e16fdd165eddb50102067aa4ff687d56";


if ($_GET["a"]=="qc"){ //获取器材列表
    if(isset($_GET["id"])){
        $id = $_GET["id"];
        $sql = "SELECT *  FROM `xcx_qicai` WHERE id='$id'";
    }else{
        $sql = "SELECT `id`,`name`  FROM `xcx_qicai` ORDER BY id ASC";
    }
    $result = mysql_query($sql,$con);
    $result1=array();
    while ($row=mysql_fetch_array($result,MYSQL_ASSOC))
    {
        $result1[] = $row;
    }
    $json = json_encode($result1);
    header('content-type:application/json;charset=utf8');
    print_r($json);

    //关闭连接
    mysql_close($con);
}

if ($_GET["a"]=="xl"){ //获取训练列表
    if(isset($_GET["id"])){
        $id = $_GET["id"];
        $sql = "SELECT *  FROM `xcx_xunlian` WHERE id='$id'";
    }else{
        $sql = "SELECT `id`,`name`  FROM `xcx_xunlian` ORDER BY id ASC";
    }
    $result = mysql_query($sql,$con);
    $result1=array();
    while ($row=mysql_fetch_array($result,MYSQL_ASSOC))
    {
        $result1[] = $row;
    }
    $json = json_encode($result1);
    header('content-type:application/json;charset=utf8');
    print_r($json);

    //关闭连接
    mysql_close($con);
}

if ($_GET["a"]=="cf"){ //获取训练列表
    if(isset($_GET["id"])){
        $id = $_GET["id"];
        $sql = "SELECT *  FROM `xcx_caofa` WHERE id='$id'";
    }else{
        $sql = "SELECT `id`,`name`  FROM `xcx_caofa` ORDER BY id ASC";
    }
    $result = mysql_query($sql,$con);
    $result1=array();
    while ($row=mysql_fetch_array($result,MYSQL_ASSOC))
    {
        $result1[] = $row;
    }
    $json = json_encode($result1);
    header('content-type:application/json;charset=utf8');
    print_r($json);

    //关闭连接
    mysql_close($con);
}

if ($_GET["a"]=="s"){ //搜索
    if(isset($_GET["k"])){
        $k = $_GET["k"];
        if($_GET["f"] == "xunlian"){
            $f = "xcx_xunlian";
        }elseif ($_GET["f"] == "caofa") {
            $f = "xcx_caofa";
        }else{
            $f = "xcx_qicai";
        }
        $sql = "SELECT`id`,`name`FROM`$f`WHERE`name` LIKE '$k%'";
        $result = mysql_query($sql,$con);
        $result1=array();
        while ($row=mysql_fetch_array($result,MYSQL_ASSOC))
        {
            $result1[] = $row;
        }
        $json = json_encode($result1);
        header('content-type:application/json;charset=utf8');
        print_r($json);

        //关闭连接
        mysql_close($con);
        }
    }

if ($_GET["a"]=="qcsj"){ //器材随机
    $qcarr = array("1","3","5","7","9");
    $qcid = array_rand($qcarr,1);
    $qcud = $qcarr[$qcid];
    $json = json_encode($qcud);
    header('content-type:application/json;charset=utf8');
    print_r($json);
    }

if($_GET["a"]=="sj"){
    if($_GET["z"]=="qc"){
        $sql = "select id from xcx_qichai";
    }elseif ($_GET["z"]=="xl") {
        $sql = "select id from xcx_xunlian";
    }else{
        $sql = "select id from xcx_caofa";
    }
    $result = mysql_query($sql,$con);
    $result1=array();
    while ($row=mysql_fetch_array($result,MYSQL_ASSOC))
    {
        $result1[] = $row["id"];
    }
    $qcarr = $result1;
    $qcid = array_rand($qcarr,1);
    $qcud = $qcarr[$qcid];
    $json = json_encode($qcud);
    header('content-type:application/json;charset=utf8');
    print_r($json);

    //关闭连接
    mysql_close($con);
}
?>