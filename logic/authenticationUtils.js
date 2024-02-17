export function getAuthTokenFromSlugs(slugs){
    
    if(slugs.length < 2){
        return ''
    }

    if(slugs.length == 2){
        return slugs[1]
    }

    const authCode = slugs.slice(1).join('/')
    return authCode;
}

export function setAuthCodeLocalStorage(key, code) {
    localStorage.setItem(key, code);
}

export function saveCode(count, slugs) {
    const authCode = getAuthTokenFromSlugs(slugs);

    switch(count) {
        case 2:
            setAuthCodeLocalStorage('gmail',authCode)
            return;
        case 3:
            setAuthCodeLocalStorage('gdrive',authCode)
            return
        default:
            return
    }
}

// Gmail is step 2 on sign up, Gdrive is step 3 on sign up
export function getAuthSourceIndex(url){
    const urlArray = url.split("/");
    const lastElement = urlArray[urlArray.length-1]
    
    switch(lastElement){
        case lastElement.includes('gmail'):
            return 2
        case lastElement.includes('drive'):
            return 3
        default:
            return 1
    }
}