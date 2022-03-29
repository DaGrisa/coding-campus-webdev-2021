let areas = [];
let timezones = [];
let widgets = [];

async function startApp() {
    widgets.push("local");
    await reloadWidgets();

    [areas, timezones] = await getTimeZoneData();
    setAreaOptions(areas);
    setTimeZoneOptions();

    setInterval(() => reloadWidgets(), 60000);
}

async function reloadWidgets() {
    for (const widget of widgets) {
        const url = getUrl(widget);
        const responseTimeInfo = await fetch(url);
        const timeInfo = await responseTimeInfo.json();

        const timestampWithoutOffset = timeInfo.datetime.substring(0, 26);
        const dateObject = new Date(timestampWithoutOffset);
        const localTime = new Intl.DateTimeFormat("de", {
            hour: '2-digit',
            minute: '2-digit'
        }).format(dateObject);
        const localDate = new Intl.DateTimeFormat("de", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(dateObject);
        const localTimeZone = timeInfo.timezone;

        document.getElementById(widget + "-time").innerText = localTime;
        document.getElementById(widget + "-date").innerText = localDate;
        document.getElementById(widget + "-timezone").innerText = localTimeZone;
    }
}

function getUrl(widgetName) {
    if (widgetName == "local") {
        return "http://worldtimeapi.org/api/ip";
    }
    return `http://worldtimeapi.org/api/timezone/${widgetName}`;
}

async function getTimeZoneData() {
    const responseTimeZones = await fetch("http://worldtimeapi.org/api/timezones");
    const timeZonesRaw = await responseTimeZones.json();

    const timeZones = timeZonesRaw.filter(timeZone => timeZone.includes("/") && !timeZone.startsWith("Etc/"));

    const areas = new Set();
    for (const timeZone of timeZones) {
        [area, region] = timeZone.split("/");
        areas.add(area);
    }

    return [Array.from(areas).sort(), timeZones.sort()];
}

function setAreaOptions(areas) {
    const selectList = document.getElementById("areas");
    for (const area of areas) {
        const option = document.createElement("option");
        option.innerText = area;
        selectList.appendChild(option);
    }
}

function setTimeZoneOptions() {
    const area = document.getElementById("areas").value;
    const filteredTimeZones = timezones.filter(timeZone => timeZone.startsWith(area))
    const selectList = document.getElementById("timezones");
    selectList.innerHTML = undefined;
    for (const timeZone of filteredTimeZones) {
        const option = document.createElement("option");
        option.innerText = timeZone;
        selectList.appendChild(option);
    }
}

function addWidget() {
    const timezone = document.getElementById("timezones").value;
    if (widgets.includes(timezone)) {
        return;
    }

    widgets.push(timezone)
    createWidget(timezone);
    reloadWidgets();
}

function createWidget(timezone) {
    const widgets = document.getElementById("widgets");
    const newWidget = document.createElement("div");
    newWidget.id = "widget-" + timezone;

    const timeElement = document.createElement("div");
    timeElement.id = timezone + "-time";
    const dateElement = document.createElement("div");
    dateElement.id = timezone + "-date";
    const timezoneElement = document.createElement("div");
    timezoneElement.id = timezone + "-timezone";

    newWidget.appendChild(timeElement);
    newWidget.appendChild(dateElement);
    newWidget.appendChild(timezoneElement);

    widgets.appendChild(newWidget);
}