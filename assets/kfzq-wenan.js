function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function onload() {
    auto_grow(document.getElementById("result"));
}

function generate() {
    subject = document.getElementById("subject").value;
    event = document.getElementById("event").value;
    event2 = document.getElementById("event2").value;
    if (subject.length==0 || event.length==0 || event2.length==0)
        return;
    result = `　　各位亲爱的玩家：\r\n 开服专区服务器将于${subject}进行临时维护（如有变动将会另行发布通知），维护期间将暂时无法进入服务器，还请各位玩家提前做好下线或不上线的更新准备，为各位带来的不便敬请谅解。\r\n　本次维护将会更新${event}。 维护结束后${event2}，感谢您对开服专区的支持。\r\n`;
    document.getElementById("result").value = result;
    auto_grow(document.getElementById("result"));
}