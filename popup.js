findCompetitor();

function findOnAmazon(){
amazonSearchUrl='http://www.amazon.in/s/ref=nb_sb_noss_1/278-4309243-0016545?url=search-alias%3Daps&field-keywords='+encodeURIComponent("Inferno");
  $.get(amazonSearchUrl,function(data) {
    if($("#noResultsTitle",data).get(0))
        alert("Amazon doesn't have this... yet!");
    else{
        result=$("#result_0 > .rsltL > .newp",data).find('a').find('span.bld.lrg.red').html();
        alert("Available on Amazon for Rs.:" +result.substr(result.lastIndexOf(">")+1));
    }
    });


}

function findOnFlipkart(){
flipkartSearchUrl='http://m.flipkart.com/m/m-search-all/searchCategory?q='+encodeURIComponent("Inferno")+'&store=buk&count=1&otracker=search';
  $.get(flipkartSearchUrl,function(data) {
    /*if($(".fk-nosearch-results",data).get(0))
        alert("Flipkart doesn't have this... yet!");
    else{
        result=$(".category-search-result",data).html();
        alert("Available on Flipkart for Rs.:" +result);
    }*/
    alert(data);
    });


}


function findCompetitor(){
    if($(".fk-footer-sub-head").get(0))
        findOnAmazon();
    else if($(".navFooterLine").get(0))
       findOnFlipkart();
}
