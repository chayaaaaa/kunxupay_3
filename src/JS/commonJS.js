

//input失焦事件：
export default {
    inputBlur: function () {
        setTimeout(() => {
            // alert(1);
            if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
                return;
            }
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { // 判断iPhone|iPad|iPod|iOS
                this.valRes = 'ios';
            } // 判断Android
            if (/Android [4-6]/.test(navigator.appVersion)) {
                this.valRes = 'android';
                window.addEventListener("resize", function () {
                    if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
                        window.setTimeout(function () {
                            document.activeElement.scrollIntoViewIfNeeded();
                        }, 0);
                    }
                })
            }

            if (this.valRes === 'ios') {
                document.activeElement.scrollIntoViewIfNeeded(true);
            }
        }, 10);
    },
    getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    }
}
