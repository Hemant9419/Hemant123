class NavComponents{
get navLinks(){
    return $$('#footermainPanel ul>li a');
}
get Fristnavmenu(){
    return $('#footermainPanel ul>li a:nth-child(1)');
}
}
export default new NavComponents();