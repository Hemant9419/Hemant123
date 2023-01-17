class internetpage{

getH3header(){
    return $('h3')
}    getIndex(index){
    return $(`ul li:nth-child(${index})a`)
}
clickonLink(index){
    this.internetpage(index).waitForDisplayed();
    this.internetpage(index).click();

}
checkboxElement(index){
    return $(`form#checkboxes input:nth-child(${index})`);
}

clickonCheckBoxes(index){
    this.checkboxElement(index).waitForDisplayed();
    this.checkboxElement(index).click();
}

}
module.exports=new internetpage();