

function displayAds() {
    console.log("DISPLAY ADS");
    googletag.cmd.push(function() {
        googletag.display('footer-slot');
        googletag.display('header-slot');
        googletag.display('sidebar-slot');
    });
}

/*function refreshAds() {
    console.log("REFRESH ADS");
    googletag.cmd.push(function() {
        googletag.pubads().refresh();
    });
};*/

setInterval(() => refreshAds(),  1000);
refreshAds();

displayAds();

