 window.pageLoadedAt = Date.now();
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
        let adSlot1 = googletag.defineSlot('/21822800883/PFN-D-NM-In_Post-Banner-2',[728, 90],'footer-slot')
            .setTargeting('test', 'refresh')
            .addService(googletag.pubads());
        let adSlot2 = googletag.defineSlot('/21822800883/PFN-D-NM-In_Post-Banner-1',[728, 90],'header-slot')
            .setTargeting('test', 'refresh')
            .addService(googletag.pubads());
        let adSlot3 =  googletag.defineSlot('/21822800883/PFN-D-NM-Right_Rail-300x250',
            [300, 250], 'sidebar-slot')
            .setTargeting('test', 'refresh')
            .addService(googletag.pubads());
        googletag.pubads().enableLazyLoad();
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });


 window.onload = function(){

     function refreshAds() {
        googletag.cmd.push(function() {
            googletag.pubads().refresh();
        });
    }

    function displayAds() {
        googletag.cmd.push(function() {
            googletag.display('footer-slot');
            googletag.display('header-slot');
            googletag.display('sidebar-slot');
        });
    }

    displayAds();

// Refresh every 40 seconds
    setInterval(() => {
        refreshAds();
    },  40000);

     document.addEventListener('mouseleave', async (e) => {
         var isLeaving = e.pageY - document.body.scrollTop;

         if (isLeaving <= 50) {
             let data = { type: "Page exit intent",
                         timestamp: new Date(),
                         timeOnPage: (Date.now() -  window.pageLoadedAt) / 1000
             }
             try {
                 const response = await fetch("http://localhost:3030/events", {
                     method: "POST", // or 'PUT'
                     headers: {
                         "Content-Type": "application/json",
                     },
                     body: JSON.stringify(data),
                 });

                 const result = await response.json();
                 console.log("Success:", result);
             } catch (error) {
                 console.error("Error:", error);
             }
         }
     });
}