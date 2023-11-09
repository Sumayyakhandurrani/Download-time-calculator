function Myfunction()
{
    let fileSizeInGB = document.getElementById("fileSize");
    let internetSpeed = document.getElementById("internetSpeed");
    let sizeInMB=(fileSizeInGB.value)*1024;
   
    let speed=(internetSpeed.value);
    let Size=(sizeInMB*8);
    let time=Size/speed;
    console.log(time);
    let min=time/60;
    let sec=time%60;
    let hour=0;
   
    if (min>59){
            hour = min / 60;
            min = min % 60;
           
    }
    document.getElementById("result").innerHTML = hour.toFixed(0) + " hours  " + min.toFixed(0) + " min   " + sec.toFixed(0) + " sec";
}