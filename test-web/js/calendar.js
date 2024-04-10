// https://github.com/jjonline/calendar.js
var calendar = {
    lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, 0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, 0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, 0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, 0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, 0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, 0x0d520],
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],
    Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],
    Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],
    festival: {
        '1-1': {
            title: '元旦节'
        },
        '2-14': {
            title: '情人节'
        },
        '5-1': {
            title: '劳动节'
        },
        '5-4': {
            title: '青年节'
        },
        '6-1': {
            title: '儿童节'
        },
        '9-10': {
            title: '教师节'
        },
        '10-1': {
            title: '国庆节'
        },
        '12-25': {
            title: '圣诞节'
        },
        '3-8': {
            title: '妇女节'
        },
        '3-12': {
            title: '植树节'
        },
        '4-1': {
            title: '愚人节'
        },
        '5-12': {
            title: '护士节'
        },
        '7-1': {
            title: '建党节'
        },
        '8-1': {
            title: '建军节'
        },
        '12-24': {
            title: '平安夜'
        }
    },
    lFestival: {
        '12-30': {
            title: '除夕'
        },
        '1-1': {
            title: '春节'
        },
        '1-15': {
            title: '元宵节'
        },
        '2-2': {
            title: '龙抬头'
        },
        '5-5': {
            title: '端午节'
        },
        '7-7': {
            title: '七夕节'
        },
        '7-15': {
            title: '中元节'
        },
        '8-15': {
            title: '中秋节'
        },
        '9-9': {
            title: '重阳节'
        },
        '10-1': {
            title: '寒衣节'
        },
        '10-15': {
            title: '下元节'
        },
        '12-8': {
            title: '腊八节'
        },
        '12-23': {
            title: '北方小年'
        },
        '12-24': {
            title: '南方小年'
        }
    },
    getFestival: function getFestival() {
        return this.festival
    },
    getLunarFestival: function getLunarFestival() {
        return this.lFestival
    },
    setFestival: function setFestival() {
        var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.festival = param
    },
    setLunarFestival: function setLunarFestival() {
        var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.lFestival = param
    },
    solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],
    sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],
    nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],
    nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],
    nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],
    lYearDays: function lYearDays(y) {
        var i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) {
            sum += this.lunarInfo[y - 1900] & i ? 1 : 0
        }
        return sum + this.leapDays(y)
    },
    leapMonth: function leapMonth(y) {
        return this.lunarInfo[y - 1900] & 0xf
    },
    leapDays: function leapDays(y) {
        if (this.leapMonth(y)) {
            return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29
        }
        return 0
    },
    monthDays: function monthDays(y, m) {
        if (m > 12 || m < 1) {
            return -1
        }
        return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29
    },
    solarDays: function solarDays(y, m) {
        if (m > 12 || m < 1) {
            return -1
        }
        var ms = m - 1;
        if (ms === 1) {
            return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0 ? 29 : 28
        } else {
            return this.solarMonth[ms]
        }
    },
    toGanZhiYear: function toGanZhiYear(lYear) {
        var ganKey = (lYear - 3) % 10;
        var zhiKey = (lYear - 3) % 12;
        if (ganKey === 0) ganKey = 10;
        if (zhiKey === 0) zhiKey = 12;
        return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1]
    },
    toAstro: function toAstro(cMonth, cDay) {
        var s = "\u6469\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u6469\u7FAF";
        var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
        return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"
    },
    toGanZhi: function toGanZhi(offset) {
        return this.Gan[offset % 10] + this.Zhi[offset % 12]
    },
    getTerm: function getTerm(y, n) {
        if (y < 1900 || y > 2100 || n < 1 || n > 24) {
            return -1
        }
        var _table = this.sTermInfo[y - 1900];
        var _calcDay = [];
        for (var index = 0; index < _table.length; index += 5) {
            var chunk = parseInt('0x' + _table.substr(index, 5)).toString();
            _calcDay.push(chunk[0], chunk.substr(1, 2), chunk[3], chunk.substr(4, 2))
        }
        return parseInt(_calcDay[n - 1])
    },
    toChinaMonth: function toChinaMonth(m) {
        if (m > 12 || m < 1) {
            return -1
        }
        var s = this.nStr3[m - 1];
        s += "\u6708";
        return s
    },
    toChinaDay: function toChinaDay(d) {
        var s;
        switch (d) {
            case 10:
                s = "\u521D\u5341";
                break;
            case 20:
                s = "\u4E8C\u5341";
                break;
            case 30:
                s = "\u4E09\u5341";
                break;
            default:
                s = this.nStr2[Math.floor(d / 10)];
                s += this.nStr1[d % 10]
        }
        return s
    },
    getAnimal: function getAnimal(y) {
        return this.Animals[(y - 4) % 12]
    },
    solar2lunar: function solar2lunar(yPara, mPara, dPara) {
        var y = parseInt(yPara);
        var m = parseInt(mPara);
        var d = parseInt(dPara);
        if (y < 1900 || y > 2100) {
            return -1
        }
        if (y === 1900 && m === 1 && d < 31) {
            return -1
        }
        var objDate;
        if (!y) {
            objDate = new Date()
        } else {
            objDate = new Date(y, parseInt(m) - 1, d)
        }
        var i, leap = 0,
            temp = 0;
        y = objDate.getFullYear();
        m = objDate.getMonth() + 1;
        d = objDate.getDate();
        var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
        for (i = 1900; i < 2101 && offset > 0; i++) {
            temp = this.lYearDays(i);
            offset -= temp
        }
        if (offset < 0) {
            offset += temp;
            i--
        }
        var isTodayObj = new Date(),
            isToday = false;
        if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {
            isToday = true
        }
        var nWeek = objDate.getDay(),
            cWeek = this.nStr1[nWeek];
        if (nWeek === 0) {
            nWeek = 7
        }
        var year = i;
        leap = this.leapMonth(i);
        var isLeap = false;
        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i === leap + 1 && isLeap === false) {
                --i;
                isLeap = true;
                temp = this.leapDays(year)
            } else {
                temp = this.monthDays(year, i)
            }
            if (isLeap === true && i === leap + 1) {
                isLeap = false
            }
            offset -= temp
        }
        if (offset === 0 && leap > 0 && i === leap + 1) {
            if (isLeap) {
                isLeap = false
            } else {
                isLeap = true;
                --i
            }
        }
        if (offset < 0) {
            offset += temp;
            --i
        }
        var month = i;
        var day = offset + 1;
        var sm = m - 1;
        var gzY = this.toGanZhiYear(year);
        var firstNode = this.getTerm(y, m * 2 - 1);
        var secondNode = this.getTerm(y, m * 2);
        var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
        if (d >= firstNode) {
            gzM = this.toGanZhi((y - 1900) * 12 + m + 12)
        }
        var isTerm = false;
        var Term = null;
        if (firstNode === d) {
            isTerm = true;
            Term = this.solarTerm[m * 2 - 2]
        }
        if (secondNode === d) {
            isTerm = true;
            Term = this.solarTerm[m * 2 - 1]
        }
        var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
        var gzD = this.toGanZhi(dayCyclical + d - 1);
        var astro = this.toAstro(m, d);
        var solarDate = y + '-' + m + '-' + d;
        var lunarDate = year + '-' + month + '-' + day;
        var festival = this.festival;
        var lFestival = this.lFestival;
        var festivalDate = m + '-' + d;
        var lunarFestivalDate = month + '-' + day;
        if (month === 12 && day === 29 && this.monthDays(year, month) === 29) {
            lunarFestivalDate = '12-30'
        }
        return {
            date: solarDate,
            lunarDate: lunarDate,
            festival: festival[festivalDate] ? festival[festivalDate].title : null,
            lunarFestival: lFestival[lunarFestivalDate] ? lFestival[lunarFestivalDate].title : null,
            'lYear': year,
            'lMonth': month,
            'lDay': day,
            'Animal': this.getAnimal(year),
            'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month),
            'IDayCn': this.toChinaDay(day),
            'cYear': y,
            'cMonth': m,
            'cDay': d,
            'gzYear': gzY,
            'gzMonth': gzM,
            'gzDay': gzD,
            'isToday': isToday,
            'isLeap': isLeap,
            'nWeek': nWeek,
            'ncWeek': "\u661F\u671F" + cWeek,
            'isTerm': isTerm,
            'Term': Term,
            'astro': astro
        }
    },
    lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {
        y = parseInt(y);
        m = parseInt(m);
        d = parseInt(d);
        isLeapMonth = !!isLeapMonth;
        var leapOffset = 0;
        var leapMonth = this.leapMonth(y);
        var leapDay = this.leapDays(y);
        if (isLeapMonth && leapMonth !== m) {
            return -1
        }
        if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) {
            return -1
        }
        var day = this.monthDays(y, m);
        var _day = day;
        if (isLeapMonth) {
            _day = this.leapDays(y, m)
        }
        if (y < 1900 || y > 2100 || d > _day) {
            return -1
        }
        var offset = 0;
        var i;
        for (i = 1900; i < y; i++) {
            offset += this.lYearDays(i)
        }
        var leap = 0,
            isAdd = false;
        for (i = 1; i < m; i++) {
            leap = this.leapMonth(y);
            if (!isAdd) {
                if (leap <= i && leap > 0) {
                    offset += this.leapDays(y);
                    isAdd = true
                }
            }
            offset += this.monthDays(y, i)
        }
        if (isLeapMonth) {
            offset += day
        }
        var strap = Date.UTC(1900, 1, 30, 0, 0, 0);
        var calObj = new Date((offset + d - 31) * 86400000 + strap);
        var cY = calObj.getUTCFullYear();
        var cM = calObj.getUTCMonth() + 1;
        var cD = calObj.getUTCDate();
        return this.solar2lunar(cY, cM, cD)
    }
};
