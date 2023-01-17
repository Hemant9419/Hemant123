import homePage from "../pages/home-page";
describe('Fill contect us form',async () => {
    it('Fill input fields and assert the succesful messege', async() => {
        homePage.openparbank();
       await $('#footerPanel ul li:nth-child(8) a').click();
       await $('#name').addValue('hemant rawat');
       await $('#email').addValue('hemantrawat@gmail.com');
       await $('#phone').addValue(1245668);
       await $('#message').addValue('This website is very useful to practice');
     //  await $('#contactForm tr:nth-child(5) input').click();
     await (await $('input[value="Send to Customer Care"]')).click();

       const messagelink=await $('#rightPanel p');
      const messege=  await messagelink.getText();

    //   await expect(messege).toEqual('Thank you hemant rawat');
      await expect(messege).toHaveTextContaining('Thank you hemant rawat')// it will only verify the text and ignore any extra speces if any

    });
});