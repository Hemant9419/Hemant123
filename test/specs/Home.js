import home_page from "../pages/home-page";
//Hooks- it will execute first before starting any test
before(async () => {
   home_page.open();
});
describe('Home', () => {
    it('Open URL & assert title',async () => {
    //   await home_page.open();
       await expect(browser).toHaveTitle('ACME demo app');

    });
    
    
});
describe('open home page', () => {
    beforeEach(async () => {
        console.log("THIS WILL RUN BEFORE EACH TEST");
        await home_page.openparbank();
    });
    after(async() => {
        console.log("THIS COULD BE USED FOR TEST CLEANUP");
    });
    afterEach(async () => {
    console.log("THIS COULD BE RUN AFTER EACH TEST");
    });
    it('confirm about us url', async() => {
        // await browser.url('https://parabank.parasoft.com/parabank/index.htm');
    //    await home_page.openparbank();
        const aboutlink=await $('div#footerPanel ul li:nth-child(2)');
        
        aboutlink.click();
        await expect(browser).toHaveUrlContaining('about.htm');
        //form#contactForm tr>td>input
        //form#contactForm tr:nth-child(2) input
        //form#contactForm tr:nth-child(3) input
        //textarea#message
        //submit-form#contactForm tr:nth-child(5) input
       



        
    });
    it('Fill contect us form', async() => {
        // await browser.url('https://parabank.parasoft.com/parabank/index.htm');
    //    await home_page.openparbank();
        // const contectuslink= await $('div#footerPanel ul>li:nth-child(8) a');
      await  home_page.contectuslink.click()
        // const name=await $('form#contactForm tr>td>input');
        // const email=await $('form#contactForm tr:nth-child(2) input');
        // const phone=await $('form#contactForm tr:nth-child(3) input');
        // const messege=await $('textarea#message');
        // const submitbtn=await $('form#contactForm tr:nth-child(5) input');

    //    await contectuslink.click();
  await  home_page.name.addValue('hemant')
        // await name.addValue('hemant');

        await home_page.email.addValue('hs@gmail.com');
        // await email.addValue('demo@gmail.com');
        await home_page.phone.addValue(45689);
        // await phone.addValue(45689);
        await home_page.message.addValue('this site is very useful to practice automation')
        // await messege.addValue('this site is very useful to practice automation');
        await home_page.submitbtn.click();
        // await submitbtn.click();

    });
    // it.not('confirm the homepage url',async () => {
    //    await home_page.open()
    //     await $('div#footerPanel ul>li:nth-child(8) a').click();
        
    //     await $('div#topPanel a:nth-child(2) img').click();
    //     await expect(browser).not.toHaveUrlContaining('contact.htm');
     

    // });
    // it.not('Find heading Element and assert the text', async() => {
    //     // open heme page 
    //    await home_page.open()
    //     const heading=await $('p.caption');
    //   const headingtext=  await heading.getText();
    //     // assert the heading text
    //     await expect(headingtext).toEqual('Experience the difference');
    // });
});