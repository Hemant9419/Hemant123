import NavComponents from './components/nav-comp';
class home_page {
 open(){
    return browser.url('https://demo.applitools.com/app.html');
 }
 openparbank(){
    return browser.url('https://parabank.parasoft.com/parabank/index.htm')
 }
 get contectuslink(){
    return  $('div#footerPanel ul>li:nth-child(8) a')
 }

 get name(){
    return $('form#contactForm tr>td>input');

 }
 get email(){
    return $('form#contactForm tr:nth-child(2) input');
 }
 get phone(){
    return $('form#contactForm tr:nth-child(3) input');
 }
 get message(){
    return $('textarea#message');
 }
 get submitbtn(){
    return $('form#contactForm tr:nth-child(5) input');
 }
 get navcomponent(){
    return NavComponents;
 }

}
export default new home_page();
