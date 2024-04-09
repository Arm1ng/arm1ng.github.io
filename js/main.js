window.onload = function () {
    getIpInfo();
    clock(bg_autoMode);
    time_timer = setInterval("clock(" + bg_autoMode + ")", 60 * 1000);
    if (rotation_mode !== "") {
        rotation_mode = Number(rotation_mode)
    } else {
        rotation_mode = rotation_mode_default;
        setCookie("rotation_mode", rotation_mode, 30)
    }
    rotation_mode = rotation_mode === 0 ? 3 : rotation_mode - 1;
    // rotateScreen();
    if (hour24 !== "") {
        hour24 = hour24 === "true" ? true : false
    } else {
        hour24 = hour24_default;
        setCookie("hour24", hour24, 30)
    }
    if (top_mode !== "") {
        top_mode = Number(top_mode)
    } else {
        top_mode = top_mode_default;
        setCookie("top_mode", top_mode, 30)
    }
    top_mode = top_mode === 0 ? TOP_MODE.length - 1 : top_mode - 1;
    changeTopMode();
    if (bottom_mode !== "") {
        bottom_mode = Number(bottom_mode)
    } else {
        bottom_mode = bottom_mode_default;
        setCookie("bottom_mode", bottom_mode, 30)
    }
    bottom_mode = bottom_mode === 0 ? BOTTOM_MODE.length - 1 : bottom_mode - 1;
    changeBottomMode();
    if (bg_mode !== "") {
        bg_mode = Number(bg_mode);
        bg_mode = bg_mode === 0 ? BG_MODE.length - 1 : bg_mode - 1;
        changeBgMode()
    } else {
        bg_mode = bg_mode_default;
        setCookie("bg_mode", bg_mode, 30)
    }
    // addEvent(bg_autoMode);
    delayHiddenSetting()
};
var KEY_UNSPLASH = "bXwWoUhPeVw-yvSesGMgaOENnlSzhHYB43kZIQOR8cQ";
var KEY_QWEATHER = getCookie("qweatherKey");
var API_HITOKOTO = "https://v1.hitokoto.cn?encode=json&charset=utf-8";
var API_IP_INFO = "https://ipapi.co/json?languages=zh-CN";
var API_WEATHER = "https://devapi.qweather.com/v7/weather/now?";
var API_WEIBO = "https://tenapi.cn/resou/";
var TOP_MODE = ["nonetop", "hitokoto", "poem", "weibo"];
var BOTTOM_MODE = ["nonebtm", "weather"];
var BG_MODE = ["none", "dark", "auto", "pic"];
var morningHour = 6;
var nightHour = 19;
var top_mode_default = 1;
var bottom_mode_default = 1;
var bg_mode_default = 0;
var rotation_mode_default = 0;
var hour24_default = false;
var bg_autoMode = false;
var weibo_num = 3;
var timezoneOffset = 0;
var cIp = "";
var city = "";
var cityLocation = null;
var top_mode = getCookie("top_mode");
var bottom_mode = getCookie("bottom_mode");
var bg_mode = getCookie("bg_mode");
var rotation_mode = getCookie("rotation_mode");
var hour24 = getCookie("hour24");
var hitokoto_data = null;
var weibo_data = null;
var poem_data = null;
var weather_data = null;
var pic_data = null;
var dd_data = null;
var hitokoto_timer = null;
var poem_timer = null;
var weibo_timer = null;
var time_timer = null;
var weather_timer = null;
var pic_timer = null;
var settings_timer = null;
var autoModeImg = "&#xe8e3";

function createXHR() {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    return xhr
}

function hitokoto() {
    console.log("hitokoto update");
    var xhr = createXHR();
    xhr.open("GET", API_HITOKOTO, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            hitokoto_data = JSON.parse(this.responseText);
            document.getElementById("brackets-l").innerHTML = "『";
            document.getElementById("brackets-r").innerHTML = "』";
            document.getElementById("hitokoto").innerHTML = hitokoto_data.hitokoto;
            document.getElementById("from").innerHTML = hitokoto_data.from_who ? "「" + hitokoto_data.from + " " + hitokoto_data.from_who + "」" : "「" + hitokoto_data.from + "」"
        }
    };
    xhr.send(null)
}

function poem() {
    console.log("poem update");
    jinrishici.load(function (result) {
        poem_data = result.data;
        var sentence = document.querySelector("#poem_sentence");
        var info = document.querySelector("#poem_info");
        sentence.innerHTML = poem_data.content;
        info.innerHTML = "【" + poem_data.origin.dynasty + "】" + poem_data.origin.author + "《" + poem_data.origin.title + "》"
    })
}

function getIpInfo() {
    var xhr = createXHR();
    xhr.open("GET", API_IP_INFO, false);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var data = JSON.parse(this.responseText);
            cityLocation = data.longitude + "," + data.latitude;
            cIp = data.ip;
            city = data.region;
            utc_offset = data.utc_offset;
            timezoneOffset = parseInt(utc_offset.replace("+0","") || "800") * 0.6
        }
    };
    xhr.send(null)
}

function clock(autoMode) {
    var date = new Date();
    var utc8DiffMinutes = date.getTimezoneOffset() + timezoneOffset;
    date.setMinutes(date.getMinutes() + utc8DiffMinutes);
    var MM = date.getMonth() + 1;
    var dd = date.getDate();
    var day = date.getDay();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var lightMode = true;
    if (autoMode) {
        if (hour > nightHour || hour < morningHour) {
            if (lightMode) {
                document.getElementsByClassName("page")[0].style.color = "#ffffff";
                document.getElementsByClassName("page")[0].style.backgroundColor = "#000000";
                lightMode = false
            }
        } else {
            if (!lightMode) {
                document.getElementsByClassName("page")[0].style.color = "#000000";
                document.getElementsByClassName("page")[0].style.backgroundColor = "#ffffff";
                lightMode = true
            }
        }
    }
    if (!hour24) {
        var apm = "上<br>午";
        if (hour > 12) {
            apm = "下<br>午";
            hour -= 12
        }
        document.getElementById("apm").innerHTML = apm
    } else {
        document.getElementById("apm").innerHTML = ""
    }
    var timeString = hour + ":" + ("0" + minutes).slice(-2);
    document.getElementById("time").innerHTML = timeString;
    if (!dd_data || dd !== dd_data) {
        dd_data = dd;
        var dateString = MM + "月" + dd + "日";
        var weekList = ["日", "一", "二", "三", "四", "五", "六"];
        var weekString = "星期" + weekList[day];
        document.getElementById("date").innerHTML = dateString + " " + weekString;
        getLunar()
    }
}

function getLunar() {
    var lunar = calendar.solar2lunar();
    document.getElementById("lunar").innerHTML = lunar.gzYear + "年" + lunar.IMonthCn + lunar.IDayCn;
    document.getElementById("holiday").innerHTML = "&nbsp;&nbsp;" + (lunar.lunarFestival || "") + (lunar.festival || "")
}

function weather() {
    if (!getCookie("qweatherKey")) {
        document.getElementById("weaTitle").innerHTML = "请刷新后点击右上角设置按钮填写 API Key～";
        return
    }
    console.log("weather update");
    var xhr = createXHR();
    xhr.open("GET", API_WEATHER + "key=" + KEY_QWEATHER + "&location=" + cityLocation, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var data = JSON.parse(this.responseText);
            var wea_now = data.now;
            if (data.code === "200") {
                var img = "<i class=qi-" + wea_now.icon + "></i>";
                var weaImg = img + "<div>天气：" + wea_now.text + "</div>";
                var weaTemp = '<div class="tempNum">' + parseInt(wea_now.temp) + '</div><div class="symbol">&#8451;</div>' + "<div>当前气温</div>";
                var weaInfo = "<div>" + city + "当前天气" + "</div>" + "<div>体感温度：" + wea_now.feelsLike + "&#8451;</div>" + "<div>湿度：" + wea_now.humidity + "%</div>" + "<div>风向：" + wea_now.windDir + "</div>" + "<div>风速：" + wea_now.windScale + "级 " + wea_now.windSpeed + "km/h</div>" + "<div>更新时间：" + wea_now.obsTime.match(/T(.+)\+/)[1] + "</div>";
                document.getElementById("weaTitle").innerHTML = "";
                document.getElementById("weaImg").innerHTML = weaImg;
                document.getElementById("weaTemp").innerHTML = weaTemp;
                document.getElementById("weaInfo").innerHTML = weaInfo
            } else {
                console.error("天气数据获取失败");
                document.getElementById("weaTitle").innerHTML = "数据获取失败，请检查 API Key～"
            }
        }
    };
    xhr.send(null)
}

function weibo() {
    console.log("weibo update");
    var xhr = createXHR();
    xhr.open("GET", API_WEIBO, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var data = JSON.parse(this.responseText);
            var weibo_title = document.getElementsByClassName("weibo_title")[0];
            var hot_word = document.getElementById("hot_word");
            var hot_word_num = document.getElementById("hot_word_num");
            if (data.data === 200) {
                weibo_data = data.list;
                weibo_title.innerHTML = "微博实时热搜";
                hot_word.innerHTML = "";
                hot_word_num.innerHTML = "";
                for (var i = 0; i < weibo_num; i++) {
                    var index = i + 1;
                    hot_word.innerHTML += "<li>" + index + ". " + weibo_data[i].name + "</li>";
                    hot_word_num.innerHTML += "<li>" + weibo_data[i].hot + "</li>"
                }
            } else {
                console.error("微博热搜数据获取失败: " + data.msg);
                weibo_title.innerHTML = "数据获取失败，请稍后再试～"
            }
        }
    };
    xhr.send(null)
}

function picture() {
    console.log("picture update")
}

function changeMode(pos) {
    console.log("# change " + pos + " mode");
    var pos_mode = eval(pos + "_mode");
    var POS_MODE = eval(pos.toUpperCase() + "_MODE");
    if (pos_mode !== 0 && eval(POS_MODE[pos_mode] + "_timer")) {
        clearInterval(eval(POS_MODE[pos_mode] + "_timer"));
        eval(POS_MODE[pos_mode] + "_timer = null");
        console.log(POS_MODE[pos_mode] + "_timer destroyed")
    }
    pos_mode++;
    if (pos_mode === POS_MODE.length) {
        pos_mode = 0
    }
    eval(pos + "_mode = pos_mode");
    setCookie(pos + "_mode", pos_mode, 30);
    if (pos_mode !== 0) {
        if (!eval(POS_MODE[pos_mode] + "_data")) {
            eval(POS_MODE[pos_mode] + "()")
        }
        eval(POS_MODE[pos_mode] + '_timer = setInterval(POS_MODE[pos_mode] + "()", 60 * 1000 * 60)');
        console.log(POS_MODE[pos_mode] + "_timer created")
    }
    for (var i = 0; i < POS_MODE.length; i++) {
        document.getElementsByClassName(POS_MODE[i] + "_container")[0].style.display = "none"
    }
    document.getElementsByClassName(POS_MODE[pos_mode] + "_container")[0].style.display = "block"
}

function changeTopMode() {
    changeMode("top")
}

function changeBottomMode() {
    changeMode("bottom")
}

function rotateScreen() {
    console.log("# rotate screen " + rotation_mode);
    var body = document.getElementsByTagName("body")[0];
    var page = document.getElementsByClassName("page")[0];
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    if (rotation_mode === 0) {
        body.classList.add("rotate-90");
        body.style.height = w + "px";
        page.style.width = h + "px";
        page.style.height = w + "px"
    } else {
        if (rotation_mode === 1) {
            body.classList.remove("rotate-90");
            body.classList.add("rotate-180");
            body.style.height = h + "px";
            page.style.width = w + "px";
            page.style.height = h + "px"
        } else {
            if (rotation_mode === 2) {
                body.classList.remove("rotate-180");
                body.classList.add("rotate-270");
                body.style.width = h + "px";
                page.style.height = w + "px";
                page.style.width = "auto"
            } else {
                if (rotation_mode === 3) {
                    body.classList.remove("rotate-270");
                    body.style.width = "auto";
                    body.style.height = h + "px";
                    page.style.width = w + "px";
                    page.style.height = h + "px"
                }
            }
        }
    }
    rotation_mode = rotation_mode === 3 ? 0 : rotation_mode + 1;
    setCookie("rotation_mode", rotation_mode, 30)
}

function changeBgMode() {
    console.log("# change background");
    var page = document.getElementsByClassName("page")[0];
    var backdropClasses = document.getElementById("settings_backdrop").classList;
    var settingsClasses = document.getElementById("settings_card").classList;
    var pageClasses = page.classList;
    bg_mode = bg_mode === BG_MODE.length - 1 ? 0 : bg_mode + 1;
    setCookie("bg_mode", bg_mode, 30);
    if (bg_mode === 0) {
        clearInterval(pic_timer);
        pic_timer = null;
        console.log("picture close");
        pageClasses.remove("pic");
        pageClasses.add("light")
    } else {
        if (bg_mode === 1) {
            pageClasses.remove("light");
            pageClasses.add("dark");
            backdropClasses.remove("backdrop_black");
            backdropClasses.add("backdrop_white");
            settingsClasses.remove("light");
            settingsClasses.add("dark")
        } else {
            if (bg_mode === 2) {
                var date = new Date();
                var utc8DiffMinutes = date.getTimezoneOffset() + 480;
                date.setMinutes(date.getMinutes() + utc8DiffMinutes);
                var hour = date.getHours();
                if (hour > nightHour || hour < morningHour) {
                    pageClasses.remove("light");
                    pageClasses.add("dark");
                    backdropClasses.remove("backdrop_black");
                    backdropClasses.add("backdrop_white");
                    settingsClasses.remove("light");
                    settingsClasses.add("dark")
                } else {
                    pageClasses.remove("dark");
                    pageClasses.add("light");
                    backdropClasses.remove("backdrop_white");
                    backdropClasses.add("backdrop_black");
                    settingsClasses.remove("dark");
                    settingsClasses.add("light")
                }
                var icon = document.getElementById("light_dark_icon");
                var middle = document.getElementById("middle");
                icon.style.visibility = "visible";
                middle.style.visibility = "hidden";
                setTimeout(function () {
                    icon.style.visibility = "hidden";
                    middle.style.visibility = "visible"
                }, 1000)
            } else {
                console.log("picture open");
                if (!pic_data) {
                    picture()
                }
                pic_timer = setInterval("picture()", 60 * 1000 * 60);
                pageClasses.remove("light");
                pageClasses.remove("dark");
                pageClasses.add("pic");
                backdropClasses.remove("backdrop_white");
                backdropClasses.add("backdrop_black");
                settingsClasses.remove("dark");
                settingsClasses.add("light")
            }
        }
    }
}

function delayHiddenSetting() {
    settings_timer = setTimeout(function () {
        document.getElementById("settings_icon").style.visibility = "hidden"
    }, 3000)
}

function openSettingsDialog() {
    clearTimeout(settings_timer);
    document.getElementById("qweather_input").value = KEY_QWEATHER;
    document.getElementById("settings_dialog").style.display = "block"
}

function closeSettingsDialog() {
    delayHiddenSetting();
    document.getElementById("settings_dialog").style.display = "none"
}

function saveSettings() {
    const qweatherKey = document.getElementById("qweather_input").value;
    KEY_QWEATHER = qweatherKey;
    setCookie("qweatherKey", qweatherKey, 360);
    closeSettingsDialog();
    window.location.reload()
}

function changeHourCycle(){
    console.log("hourCycle change");
    hour24 = !hour24;
    setCookie("hour24", hour24, 30);
    clock(autoMode)
}

// function addEvent(autoMode) {
//     document.getElementById("apmOuterWrapper").addEventListener("click", function () {
//         console.log("hourCycle change");
//         hour24 = !hour24;
//         setCookie("hour24", hour24, 30);
//         clock(autoMode)
//     });
//     document.getElementsByClassName("time")[0].addEventListener("click", rotateScreen);
//     document.getElementById("top").addEventListener("click", changeTopMode);
//     document.getElementById("bottom").addEventListener("click", changeBottomMode);
//     document.getElementById("date").addEventListener("click", changeBgMode);
//     document.getElementById("settings_icon").addEventListener("click", openSettingsDialog);
//     document.getElementById("save_button").addEventListener("click", saveSettings);
//     document.getElementById("settings_backdrop").addEventListener("click", closeSettingsDialog)
// };
