
import home_page from '../pages/home-page';
//Hooks
before(async() => {
    console.log('THIS COULD BE USED FOR TEST SETUP');
  await  home_page.openparbank();
});
describe('Navugation Menu ', () => {
    it('Get the text of all menu item and assert them', async() => {
        browser.pause(5000);
    //    await browser.url('/') //refer to base url

    // await home_page.openparbank();
       const expectedlinks=[
        "Home",
        "About Us" ,
       "Services",
         "Products",
        "Locations",
        "Forum",
      "Site Map",
        "Contact Us",
         "www.parasoft.com",
        
    ];
    // await browser.debug();
    const actualLinks=[];// empty array
   
    await (await $('#footermainPanel')).waitForDisplayed();
    //    const nevLinks= await $$('#footermainPanel ul>li a');
    const nevLinks=await  home_page.navcomponent.navLinks;
      
      
       //creating of for loop to push the links text into actualLinks
       for (const Links of nevLinks ) {
        actualLinks.push(await Links.getText());
        
       }
       for (const msg of actualLinks) {
        console.log(msg);
        
       }
       await browser.pause(3000);
      
    //    nevLinks.forEach(element =>console.log(element.getText()));
      await expect(expectedlinks).toEqual(actualLinks);
    })
    it('Assert the text of First navcomponent',async ()=>{
        // await home_page.openparbank();
        await browser.pause(3000);
        //wait until the home text is displayed on the navigation menu
    await browser.waitUntil(async function(){
        const hometext= await $('#footermainPanel ul>li a:nth-child(1)');
        // const hometext= await home_page.navcomponent.Fristnavmenu;
         const msg=await hometext.getText();
        return msg==="Home";// True and false
    }, {timeout:5000,
        timeoutMsg:'Could not verify the home text from #footermainPanel ul>li !'
    })
    })

});
