const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = {
   body: '',
}

for (let key in citiesAndCountries){
   let city = citiesAndCountries[key]
   if (key!=='Вена'){
      result.body +=  key + ' - это ' + city + ', '
   } else {
      result.body +=  key + ' - это ' + city
   }
}
console.log(result);