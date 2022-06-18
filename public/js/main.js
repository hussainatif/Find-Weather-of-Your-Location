const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText = `Please write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=837cd662de370dc8150dbea2e9fc49e1`;
        const response= await fetch(url);
        const data = await response.json();
        const arrData = [data];
        
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        var ans = (arrData[0].main.temp) ;
        var ans1=ans-273.15;
        ans1=ans1.toFixed(1)
        temp_real_val.innerText =  ans1 ;
        
        const tempMood = arrData[0].weather[0].main;

        if(tempMood == "Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }
        else if(tempMood == "Rain"){
            temp_status.innerHTML="<i class='fas fa-rain' style='color: #a4b0be;'></i>";
        }
        else {
            temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }
        datahide.classList.remove('data_hide');



        }
        catch{
            city_name.innerText = `Please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);
