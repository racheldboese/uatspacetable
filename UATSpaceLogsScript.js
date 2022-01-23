var theTime = new Date();
var tempTime = new Date();
var time_interval = 5000;
var last_iteration = 0;
var running = true;
var index = 0;
var timer;

function Start() {
    
    document.getElementById("data").rows["seconds"].innerHTML = "Reading data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("Starter").disabled = true;
    document.getElementById("Stopper").disabled = false;
}

function Stop() {
    clearInterval( timer );
    document.getElementById("Starter").disabled = false;
    document.getElementById("Stopper").disabled = true;
}

class InputData {

    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        AccelX,
        AccelY,
        AccelZ,
        MagneticX,
        MagneticY,
        MagneticZ,
        GyroX,
        GyroY,
        GyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.AccelX = AccelX;
        this.AccelY = AccelY;
        this.AccelZ = AccelZ;
        this.MagneticX = MagneticX;
        this.MagneticY = MagneticY;
        this.MagneticZ = MagneticZ;
        this.GyroX = GyroX;
        this.GyroY = GyroY;
        this.GyroZ = GyroZ;
    }
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}



// Load our data into our array
var data = getData();

function updateDisplay() {
    theTime = new Date();
    // Debugging
    console.log(
        "Display : " +
        (theTime.getHours() < 10 ? "0" + theTime.getHours() : theTime.getHours()) +
        ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) +
        ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds())
    );

    // Now update the document
    var timeRead = data[index].time_seconds;
    if (timeRead >= 10) {
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time elapsed", data[index]
            .time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longltude", data[index].longitude,
            " ");
        document.getElementById("data").rows["gps_altitude"].innerHTML = dataRow("GPS Altitude", data[index]
            .gps_altitude, " ");
        document.getElementById("data").rows["bmpSensor_altitude"].innerHTML = dataRow("BMP Sensor Altitude", data[
            index].bmpSensor_altitude, "");
        document.getElementById("data").rows["bmpSensor_pressure"].innerHTML = dataRow("BMP Sensor Pressure", data[
            index].bmpSensor_pressure, "");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML = dataRow("BMP Sensor Temperature", data[
            index].bmpSensor_temp, "");
        document.getElementById("data").rows["digSensor_temp"].innerHTML = dataRow("Digital Sensor Temperature",
            data[index].digSensor_temp, "");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML = dataRow("CSS Sensor Temperature", data[
            index].cssSensor_temp, "");
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = dataRow("CSS Sensor eCO2", data[index]
            .cssSensor_eCO2, "");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS Sensor TVOC", data[index]
            .cssSensor_TVOC, "");
        document.getElementById("data").rows["UV"].innerHTML = dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["AccelX"].innerHTML = dataRow("Accel X", data[index].AccelX, " ");
        document.getElementById("data").rows["AccelY"].innerHTML = dataRow("Accel Y", data[index].AccelY, " ");
        document.getElementById("data").rows["AccelZ"].innerHTML = dataRow("Accel Z", data[index].AccelZ, " ");
        document.getElementById("data").rows["MagneticX"].innerHTML = dataRow("Magnetic X", data[index].MagneticX,
            " ");
        document.getElementById("data").rows["MagneticY"].innerHTML = dataRow("Magnetic Y", data[index].MagneticY,
            " ");
        document.getElementById("data").rows["MagneticZ"].innerHTML = dataRow("Magnetic Z", data[index].MagneticZ,
            " ");
        document.getElementById("data").rows["GyroX"].innerHTML = dataRow("Gyro X", data[index].GyroX, " ");
        document.getElementById("data").rows["GyroY"].innerHTML = dataRow("Gyro Y", data[index].GyroY, " ");
        document.getElementById("data").rows["GyroZ"].innerHTML = dataRow("Gyro Z", data[index].GyroZ, " ");

        if (index < 499) {
            index++;
        } else {
            index = 0;
        }
    }

    document.getElementById("time").innerHTML =
        (theTime.getHours() < 10 ? "0" + theTime.getHours() : theTime.getHours()) +
        ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) +
        ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());


}








