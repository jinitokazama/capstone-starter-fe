export default function isAuthenticated() {
    let auth = localStorage.getItem("auth")

    if(auth){
        auth = JSON.parse(auth)
        if(auth.token){
            return true;
        }
    } else {
        return false
    }
}
