export default class Cookies {

    static set(key, value) {
        document.cookie += `${key}=${value};`
    }

    static get(key) {

        const cookies = document.cookie.split(';');

        for(let cookie of cookies) {
            cookie = cookie.trim();
            if(cookie.startsWith(key+'=')) {
                return cookie.substring(key.length+1);
            }
        }
    }
}

export class Storage {

    static set(key, value) {

        window.sessionStorage.setItem(key, value);
        return;
    }

    static get(key) {

        return window.sessionStorage.getItem(key);
    }

    static remove(key) {

        window.sessionStorage.removeItem("key");
        return;
    }

    static clear() {

        window.sessionStorage.clear();
    }
}