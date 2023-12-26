/**
 * ページtopボタン表示
 */
window.onload = function () {
    var scroll = document.querySelectorAll('.up');
    var Animation = function () {
        if (window.innerHeight == 0) {
            scroll.length.classList.remove('show');
        }
        for (var i = 0; i < scroll.length; i++) {
            var triggerMargin = 10;
            if (window.innerHeight > triggerMargin) {
                scroll[i].classList.add('show');
            }
        }
    }
    window.addEventListener('scroll', Animation);
}

/** テストアラート */
function test(temp) {
    alert(temp);

}


/** テキストエリアの文字取得・出力 */
function outText() {
    var inputText = document.getElementById('intext');
    var outputText = document.getElementById('outtext');
    outputText.innerText = inputText.value;
    return outputText.textContent;
}

/** 文字列検索・切り取り・出力 */
function searchText() {
    var searchedText = document.getElementById('searchtext');
    var instagramId = document.getElementById('instaid');
    var searchStrFront = outText().indexOf('"');
    var searchStrBehind = outText().lastIndexOf('"');
    searchedText.textContent = searchStrFront + " " + searchStrBehind;
    instagramId.textContent = outText().substring(searchStrFront + 1, searchStrBehind);
    if (instagramId.textContent.indexOf(" ") == -1) { // IDに空白が含まれていないか
        return instagramId.textContent;
    } else {
        return instagramId.textContent.substring(1);
    }
}

/** インスタグラムURL出力 */
function outInstaIdUrl() {
    var outUrl = document.getElementById("instaidurl");
    outUrl.textContent = "https://www.instagram.com/" + searchText() + "/";
    if (searchText() == "") { // IDが空白か
        outUrl.textContent = "IDが無いよ！";
    } else {
        window.location.href = outUrl.textContent;

    }

}




const target = document.querySelector("div.target");

target.addEventListener("paste", (event) => {
    event.preventDefault();

    let paste = (event.clipboardData || window.clipboardData).getData("text");
    paste = paste.toUpperCase();
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));
    selection.collapseToEnd();
});
