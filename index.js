/**
 * Created by A151166 on 08/06/2016.
 */
var cities = [

    {name: 'TORINO', reg: 'PIE'}
    ,
    {
        name: 'ASTI', reg: 'PIE'
    },
    {
        name: 'MILANO', reg: 'LOM'
    }
    , {
        name: 'COMO', reg: 'LOM'
    }
];

var city = document.getElementById('city');
var ul = document.createElement('ul');
var pieCities = cities.filter(function(v){
    return v.reg=='LOM';
})
//var pieCities = cities.filter(v => v.reg=='LOM');
pieCities.forEach(function (ele) {
     var li = document.createElement('li');
    li.innerHTML = ele.name;
    ul.appendChild(li);
});
city.appendChild(ul);
