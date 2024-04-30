//after refresh
var cacheurl = [
"/Users/arushkarekar/Desktop/MADLAB/LabPWA/PWALab/index.html",
"/Users/arushkarekar/Desktop/MADLAB/LabPWA/PWALab/assets/images/courses-1.jpg",
"/Users/arushkarekar/Desktop/MADLAB/LabPWA/PWALab/assets/images/courses-5.jpg",
"/assets/images/about-banner.jpg",
"/assets/images/title-shape.png"
]


self.addEventListener('install', event => {
        event.waitUntil(
            caches.open('MyCacheFile')
            .then(cache=>{
                return cache.addAll(cacheurl);
            })
        );
    }
    )

self.addEventListener('fetch', event=>{
        event.respondWith(caches.match(event.request))
        .then(res => {
            if (res){
            return res;
            }
            return fetch(event.request); 
        })
    })
