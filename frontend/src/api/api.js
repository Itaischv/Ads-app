import axios from "axios";

const baseURL = "http://localhost:3030"

export async function pageLoadEvent() {
    return await postRequest(`${baseURL}/events`, {
        type: "Page load",
        timestamp: new Date()
    });
}

export async function adClickedEvent(e) {
    e.preventDefault();
    return await postRequest(`${baseURL}/events`, {
        type: "Ad clicked",
        timestamp: new Date(),
        slot: e.target.id,
        googleQueryId: e.target.getAttribute("data-google-query-id")
    });
}

export async function adViewedEvent() {
    window.googletag.cmd.push(function() {
        window.googletag.pubads().addEventListener('impressionViewable', async function(e) {
            // Send event;
            let data = {
                type: "Ad slot viewed",
                slot: e.slot.getSlotElementId(),
                timestamp: new Date()
            }
            return await postRequest(`${baseURL}/events`, data);
        });
    });
}


export async function fetchEvents() {
    return await getRequest(`${baseURL}/events`);
}

async function postRequest(url, data) {
    data.timeOnPage = (new Date() - window.pageLoadedAt) / 1000; // Time in seconds;
    const res = await axios.post(url, data);
    console.debug("Event: ", data.type, " Results: ", res.data)
    return res;
}

async function getRequest(url) {
    const res = await axios.get(url);
    console.log("Get request:", res)
    return res.data;
}


