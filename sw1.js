//after refresh
var cacheurl = ["/assets/css/style.css", 
"/index.html",
"/assets/images/courses-1.jpg",
"/assets/images/service-1.svg",
"/assets/images/about-banner.jpg",
"/assets/images/title-shape.png"
]

self.addEventListener('install',
    event=>{
        event.waitUntil(
            caches.open('Mycachefile')
            .then(cache=>{
                return cache.addAll(cacheurl);
            })
        )
     })

self.addEventListener('fetch',
    event => {
        event.respondWith(
            caches.match(event.request)
            .then(response=>{
                if (response){
                    return response;
                }
            return fetch(event.response);
            })
        )
    }
    )