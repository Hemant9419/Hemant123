describe('Iframe', () => {
    it('working with iframe', async() => {
        await browser.url('https://practice.automationbro.com/iframe-sample/');
        const frmae= await $('iframe#advanced_iframe');
      // switch to iFrame  
        await browser.switchToFrame(frmae);
        //verify logo is exist

        await expect ($('#site-logo')).toExist();
        //switch to parent ifrmae
        await browser.switchToParentFrame();

        //verify the header text
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
    });
});