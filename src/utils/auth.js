export function getToken() {
    return localStorage.getItem('token');
}

export function removeToken() {
    return localStorage.removeItem('token');
}
