window._$ = (function () {
    return {
        ajax: function (opt) {
            opt = opt || {};
            var type = opt.type || 'GET';
            type = type.toUpperCase();
            var url = opt.url || '';
            var async = opt.async || true;
            var data = opt.data || null;
            var success = opt.success || function () { };
            var xmlHttp = null;
            if (XMLHttpRequest) {
                xmlHttp = new XMLHttpRequest();
            } else {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            var params = [];
            for (var key in data) {
                params.push(key + '=' + data[key]);
            }
            var dataStr = params.join('&');
            if (type === 'POST') {
                xmlHttp.open(type, url, async);
                xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                xmlHttp.send(dataStr);
            } else {
                xmlHttp.open(type, url + '?' + dataStr, async);
                xmlHttp.send(null);
            }
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    success(JSON.parse(xmlHttp.responseText));
                }
            }
        },
        method: function () {
        }
    }
})()