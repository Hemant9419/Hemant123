//Upload file for Hidden input upload button
const path=require('path');
describe('upload test', () => {
    it('simple upload test', async() => {
        //open url
        await browser.url('https://practice.automationbro.com/cart/');
        //store test file
        const filepath=path.join(__dirname,'../data/Logo.png');

        //remove hidden class using java script executer
        await browser.execute("document.querySelector('#upfile_1').className=''")
        //upload test file
        const remotfilepath=await browser.uploadFile(filepath);
        //set file path value in input field
        // await (await $('#input_1')).setValue(remotfilepath)
        
        await (await $('#upfile_1')).setValue(remotfilepath)
        await (await $('#upload_1')).click();


       // assertion
       await expect($('wfu_messageblock_header_1_label_1').getText()).toHaveTextContaining('uploaded successfully');


    });
});