const getWeather = (onSuccess) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      onSuccess(data);
    }
  };

  const cityId = 2158177;
  const apiKey = '';
  xhttp.open(
    'GET',
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`,
    true
  );
  xhttp.send();
};

export default getWeather;
