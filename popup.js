findCompetitor();

function findOnAmazon(title){
amazonSearchUrl='http://www.amazon.in/s/ref=nb_sb_noss_1/278-4309243-0016545?url=search-alias%3Daps&field-keywords='+encodeURIComponent(title);
  $.get(amazonSearchUrl,function(data) {
    if($("#noResultsTitle",data).get(0))
        alert("Amazon doesn't have this... yet!");
    else{
        result=$("#result_0 > .rsltL > .newp",data).find('a').find('span.bld.lrg.red').html();
        alert("Available on Amazon for Rs.:" +result.substr(result.lastIndexOf(">")+1));
    }
    });

}



function findCompetitor(){
    if($(".fksk-mprod-summary-title").get(0))
      {
        title= $(".fksk-mprod-summary-title h1").attr("title");
        findOnAmazon(title);
      }
 
}
