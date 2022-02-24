const {By,Key,Builder} = require("selenium-webdriver");
require("selenium-webdriver/firefox");

async function homeTests(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://127.0.0.1:80/");

    try{
        let element = await driver.findElement(By.id('timestamp'));
        console.log("Test Passed: Timestamp present");
    }catch(NoSuchElementException){
        console.log("Test Failed: Timestamp not present")
    }

    await driver.quit();
}

async function aboutUsTests(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://127.0.0.1:80/aboutus");

    try{
        let element = await driver.findElement(By.id('welcome'));
        let welcomeText = await element.getText();
        if(welcomeText.includes('Welcome to islandMovers')){
            console.log("Test Passed: Welcome phrase found");
        }else{
            console.log("Test Failed: Welcome phrase not found");
        }
    }catch(NoSuchElementException){
        console.log("Test Failed: Welcome phrase not found");
    }

    await driver.quit();
}

async function orderTaxisTests(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://127.0.0.1:80/ordertaxi");

    try{
        let imageElements = await driver.findElements(By.tagName('img'));
        let imageCnt = 0;
        for(let imageElement of imageElements){
            let imageAlt = await imageElement.getAttribute("alt");
            if(imageAlt == 'Car image'){
                imageCnt++;
            }else if(imageAlt == 'Van image'){
                imageCnt++;
            }else if(imageAlt == 'Bus image'){
                imageCnt++;
            }else if(imageAlt == 'Truck image'){
                imageCnt++;
            }
        }
        if(imageCnt == 4){
            console.log("Test Passed: All images found");
        }else{
            console.log("Test Failed: (" + imageCnt + "/4) images found");
        }
    }catch(NoSuchElementException){
        console.log("Test Failed: No images found on page");
    }

    try{
        let buttonElements = await driver.findElements(By.tagName('button'));
        let buttonCnt = 0;
        for(let buttonElement of buttonElements){
            let buttonId = await buttonElement.getAttribute("id");
            if(buttonId == 'order-1'){
                buttonCnt++;
            }else if(buttonId == 'order-2'){
                buttonCnt++;
            }else if(buttonId == 'order-3'){
                buttonCnt++;
            }else if(buttonId == 'order-4'){
                buttonCnt++;
            }
        }
        if(buttonCnt == 4){
            console.log("Test Passed: All buttons found");
        }else{
            console.log("Test Failed: (" + buttonCnt + "/4) buttons found");
        }
    }catch(NoSuchElementException){
        console.log("Test Failed: No buttons found on page");
    }

    await driver.quit();
}

async function contactUsTests(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://127.0.0.1:80/contact");

    try{
        let form = await driver.findElement(By.tagName('form'));
        try{
            let formElementCnt = 0;
            let nameInput = await driver.findElement(By.id('Name'));
            formElementCnt++;
            try{
                let queryInput = await driver.findElement(By.id('Query'));
                formElementCnt++;
                try{
                    let formSubmit = await driver.findElement(By.id('submitQuery'));
                    formElementCnt++;
                    if(formElementCnt == 3){
                        await formSubmit.click();
                        try{
                            let formAlert = await driver.findElement(By.id('submitAlert'));
                            let alertText = await formAlert.getText();
                            if(alertText == 'Thank you for your submission'){
                                console.log("Test Passed: All form and alert elements found");
                            }else{
                                console.log("Test Failed: Alert message incorrect");
                            }
                        }catch(NoSuchElementException){
                            console.log("Test Failed: Alert missing");
                        }
                    }else{
                        console.log("Test Failed: (" + formElementCnt + "/3) form elements found");
                    }
                }catch(NoSuchElementException){
                    console.log("Test Failed: (" + formElementCnt + "/3) form elements found");
                }
            }catch(NoSuchElementException){
                console.log("Test Failed: Query input not found");
            }
        }catch(NoSuchElementException){
            console.log("Test Failed: Name input not found");
        }
    }catch(NoSuchElementException){
        console.log("Test Failed: Form not found");
    }
    await driver.quit();
}

async function tests(){
    await homeTests();
    await aboutUsTests();
    await orderTaxisTests();
    await contactUsTests();
}

tests();

