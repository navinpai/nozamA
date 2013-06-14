findCompetitor();

function findOnAmazon(title){
amazonSearchUrl='http://www.amazon.in/s/ref=nb_sb_noss_1/278-4309243-0016545?url=search-alias%3Daps&field-keywords='+encodeURIComponent(title);
  $.get(amazonSearchUrl,function(data) {
      alert(data)
    if($("#noResultsTitle",data).get(0)){
        message="Amazon doesn't have this... yet!"
        addToPage(message)
        }
    else{
        result=$("#result_0 > .rsltL > .newp",data).find('a').find('span.bld.lrg.red').html();
        message="Available on <span id=\"amazonlogo\">&nbsp;</span> for <span style=\"font-weight: bold\">Rs." +result.substr(result.lastIndexOf(">")+1)+"</span> (<a href=\""+amazonSearchUrl+"\">link</a>)"
        addToPage(message)
 
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

function addToPage(message){
        alert(message)

$(function(){
    $("#fk-mainhead-id").prepend("<p class=\"flipkart-price\">"+message+"</p>");
    $(".flipkart-price").show()
});
}
