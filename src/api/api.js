import axios from "axios";

const baseURL = "http://localhost:3030"

export async function pageLoadEvent() {
    return await postRequest(`${baseURL}/events`, {
        type: "Page load",
        timestamp: Date.now()
    });
}

export async function adClickedEvent(e) {
    e.preventDefault();
    return await postRequest(`${baseURL}/events`, {
        type: "Ad clicked",
        timestamp: Date.now(),
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
                slot_id: e.slot.getSlotElementId(),
                timestamp: Date.now()
            }
            return await postRequest(`${baseURL}/events`, data);
        });
    });
}

async function postRequest(url, data) {
    data.timeOnPage = (Date.now() - window.pageLoadedAt) / 1000; // Time in seconds;
    const res = await axios.post(url, data);
    console.debug("Event: ", data.type, " Results: ", res.data)
    return res;
}


