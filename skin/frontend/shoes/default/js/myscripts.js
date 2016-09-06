jQuery(document).ready(function ($j) {
    var url = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $j(".menu ul.links li").each(function (){
        if (($j(this).children().attr("href") === url)) {
            $j(this).addClass("active");
        }
    });
})

