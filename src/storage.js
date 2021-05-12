class SessionStorage {
    setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    clearWithKey(key) {
        sessionStorage.removeItem(key);
    }
    cleareverything() {
        sessionStorage.clear();
    }
}

export default {
    session: new SessionStorage(),
};