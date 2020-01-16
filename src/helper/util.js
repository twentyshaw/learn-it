function formatDate(dateStr){
    var date = typeof dateStr === "object"? dateStr : new Date(dateStr)
    var time = date.getTime() //从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数
    var now = Date.now() //从1970年1月1日0时0分0秒（UTC，即协调世界时）距离当前时间时间的毫秒数
    var space = now - time
    var result = ""
    switch(true){
        case space < 60000: //小于1min
        result = "just now"
        break;
        case space < 3600*1000: //小于1h
        result = "before " + Math.floor(space/60000) + " mins"
        break;
        case space < 3600*24*1000: //小于1day
        result = date.getHours() + ":" + (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())
        break;
        default:
        var m = date.getMonth() + 1
        result = date.getFullYear() + "." + m + "." + date.getDate()
    }
    return result
}

export default {
    install(Vue,options){
        Vue.prototype.formatDate = formatDate
    }
}