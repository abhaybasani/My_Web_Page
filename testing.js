(function() {
    var element, timeout, intervalTime;

    var duration = 5000;
    var temp = null;

    function delayfunction() {
        element = document.querySelector(".inp-text");
        element.addEventListener("click", stopProgram);
        element.addEventListener("click", linkRedirect);
        element.addEventListener("mousedown", MouseDown);
        element.addEventListener("mouseup", mouseUpCancel);
        element.addEventListener("mouseleave", mouseLeave);
    }

    function mouseLeave(e) {
        cancelProgram(e);
    }

    function mouseUpCancel(e) {
        cancelProgram(e);
    }

    function MouseDown(e) {
        onClickAction(e);
    }

    function onClickAction(e) {
        temp = Date.now();

        clearTimeout(timeout);
        timeout = setTimeout(function() {
            completeSlowClick(e);
        }, duration);

        clearInterval(intervalTime);
        interval = setInterval(function() {
            changeColor(e);
        }, 1000 / 60);
    }

    function changeColor(e) {
        var tempDate = Date.now() - temp;
        var interval = tempDate / duration;
        var percentage = (interval * 100).toFixed(4) + "%";
        var AfterChangeColor = [
            "rgba(246, 0, 4, .8)",
            "rgba(246, 0, 4, 0.8) " + percentage,
            "transparent " + percentage,
        ];

        var Shaker = "";
        if (interval > 0.05) {
            Shaker = "shake shake-little";
        }
        if (interval > 0.33) {
            Shaker = "shake";
        }
        if (interval > 0.75) {
            Shaker = "shake shake-hard";
        }

        e.target.className =
            "inp-text shake-constant" + Shaker;

        e.target.style.backgroundImage =
            "linear-gradient(to right, " + AfterChangeColor.join(", ") + " )";
    }

    function completeSlowClick(e) {
        changeColor(e);
        var clique = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
        });
        clique.slowClick = true;
        e.target.dispatchEvent(clique);
        finishSlowClick(e);
    }

    function cancelProgram(e) {
        finishSlowClick(e);
    }

    function finishSlowClick(e) {
        e.target.style.background = null;
        e.target.className = "inp-text shake-constant";
        clearTimeout(timeout);
        clearInterval(intervalTime);
    }

    function stopProgram(e) {
        if (e.slowClick !== true) {
            e.preventDefault();
            e.stopImmediatePropagation();
            return false;
        }
    }

    function linkRedirect(e) {
        window.location.href = "https://www.instagram.com/abhay_basani";
    }

    document.addEventListener("DOMContentLoaded", delayfunction());
})();