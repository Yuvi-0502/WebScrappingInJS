const cheerio=require("cheerio");
const request=require("request");
const scoreCardObj=require("./scorecard");
function getAllMatchesLink(url){
    request(url,function(err,response,html){
        if(err){
            console.log(err);
        }else{
            extractHTML(html);
        }
    })
}
function extractHTML(html){
    let $=cheerio.load(html);
    let scorecard=$("a[data-hover='Scorecard']")
    for(let i=0;i<scorecard.length;i++){
      let link=  $(scorecard[i]).attr("href")
      let fullLink="https://www.espncricinfo.com"+link;
     // console.log(fullLink);
      scoreCardObj.ps(fullLink)

    }
}
module.exports={
   gAlMatches : getAllMatchesLink
}