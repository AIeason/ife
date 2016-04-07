/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById("aqi-city-input").value.trim();
    var num = document.getElementById("aqi-value-input").value.trim();
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        alert("城市名只能为中文或英文");
        return;
    }
    if(!num.match(/^\d+$/)){
        alert("空气质量只能为整数");
        return;
    }
    //创建集合？
    aqiData[city] = num;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var node = '';
    var table = document.getElementById("aqi-table");
    //当html里面有表头时，先定义tr 完美
    var tr = '<tr>'+'<td>'+'城市'+'</td>'+'<td>'+'空气质量'+'</td>'+'<td>'+'操作'+'</td>'+'</tr>';

    // for...in 语句用于对数组或者对象的属性进行循环操作。
    for(var city in aqiData) {

        //若html里没有表头这种写法才对@@@@！！！！！
        // if (table.children.length === 0) {
        //     table.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";
        // }
                                                                    //拼接参数的技巧！！！！！！因为参数要带引号,所以引号得转义
         tr += "<tr><td>"+city +"</td><td>"+aqiData[city]+"</td><td><button onclick='delBtnHandle(\""+city+"\")'>删除</button></td></tr>"
    }
    document.getElementById("aqi-table").innerHTML = tr;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.这是什么意思？？为什么可以删除参数就删除了这一行!!!!!!!!!!!!!!!!!!!!!!
    console.log(1111,aqiData[city])
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").onclick = addBtnHandle;

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
