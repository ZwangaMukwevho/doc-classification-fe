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

export function setItemToStorage(key, code) {
    localStorage.setItem(key, code);
}

export function saveCode(count, slugs) {
    const authCode = getAuthTokenFromSlugs(slugs);

    switch(count) {
        case 1:
            setItemToStorage('gmail',authCode)
            return;
        case 2:
            setItemToStorage('gdrive',authCode)
            return
        default:
            return
    }
}

export function saveCategoties(count, categories) {
    if(count == 1) {
        setItemToStorage('categories',categories);
    }
}

// Gmail is step 2 on sign up, Gdrive is step 3 on sign up
export function getAuthSourceIndex(url){
    const urlArray = url.split("/");
    const lastElement = urlArray[urlArray.length-1]
    
    switch(lastElement){
        case 'gmail.readonly':
            return 1
        case 'drive':
            return 2
        default:
            return 0
    }
}

export function getAuthCodeFromStorage(source){
    return localStorage.getItem(source)
}