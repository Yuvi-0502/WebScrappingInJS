const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
let fs=require('fs');
const path=require("path");
const cheerio=require("cheerio");
const request=require("request");
const AllMatchObj=require("./AllMatch")
const iplPath=path.join(__dirname,"ipl");
dirCreator(iplPath)
request(url,cb)
function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
        extractLink(html);
    }
}
function extractLink(html){
        let $=cheerio.load(html);
        let anchorElem=$("a[data-hover='View All Results']")
       let link=anchorElem.attr("href")
       let fullLink="https://www.espncricinfo.com"+link;
       AllMatchObj.gAlMatches(fullLink);
}
function dirCreator(filePath){

        if(fs.existsSync(filePath)==false){
            fs.mkdirSync(filePath);
        }

}