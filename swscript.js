if('serviceWorker' in navigator) {
    navigator.serviceWorker.register("./sw1.js")
    .then((swreg) => {
        console.log("Service worker successfully registered",swreg.scope);
    })
    .catch((err) => {
        console.log("Service Worker not register", err );
    });
}