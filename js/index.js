 // get reference
 let $dc = document.getElementById('dynamic-content');
 // Get all buttons in a NODE LIST of buttons
 let nodeList = document.querySelectorAll('#controls button');
 
 // Load your images on page-load
 function preloader() {
    const imagesPaths = [
       "./img/sunshine.jpg",
       "./img/wind.jpg",
       "./img/water.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

/* 
Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */
const data = {
    Sunlight:{
        heading: 'Solar Power',
        imageURL: 'img/sunshine.jpg',
        imageAlt: 'sunshine-energy',
        bodyText: 'Solar radiation is light – also known as electromagnetic radiation – that is emitted by the sun. While every location on Earth receives some sunlight over a year, the amount of solar radiation that reaches any one spot on the Earth’s surface varies. Solar technologies capture this radiation and turn it into useful forms of energy.'
    },
    Wind:{
        heading: 'Wind Power',
        imageURL: 'img/wind.jpg',
        imageAlt: 'wind-energy',
        bodyText: 'Land-based utility-scale wind is one of the lowest-priced energy sources available today, costing 1–2 cents per kilowatt-hour after the production tax credit. Because the electricity from wind farms is sold at a fixed price over a long period of time (e.g. 20+ years) and its fuel is free, wind energy mitigates the price uncertainty that fuel costs add to traditional sources of energy.'
    },
    Water:{
        heading: 'Hydropower',
        imageURL: 'img/water.jpg',
        imageAlt: 'water-energy',
        bodyText: 'Hydropower is using water to power machinery or make electricity. Water constantly moves through a vast global cycle, evaporating from lakes and oceans, forming clouds, precipitating as rain or snow, then flowing back down to the ocean. The energy of this water cycle, which is driven by the sun, can be tapped to produce electricity or for mechanical tasks like grinding grain. Hydropower uses a fuel—water—that is not reduced or used up in the process. Because the water cycle is an endless, constantly recharging system, hydropower is considered a renewable energy.'
    },

};

let markup = {
    Sunlight:`<h2>${data.Sunlight.heading}</h2>
    <img src="${data.Sunlight.imageURL}" alt="${data.Sunlight.imageAlt}" />
    <p>${data.Sunlight.bodyText}</p>`,
    Wind:`<h2>${data.Wind.heading}</h2>
    <img src="${data.Wind.imageURL}" alt="${data.Wind.imageAlt}" />
    <p>${data.Wind.bodyText}</p>`,
    Water:`<h2>${data.Water.heading}</h2>
    <img src="${data.Water.imageURL}" alt="${data.Water.imageAlt}" />
    <p>${data.Water.bodyText}</p>`,
}

function handleClick(ev) {
    // move the id-attribute to the currently clicked item
    let currentItem = ev.target;
    console.log(currentItem);
    // loop through the list of all nav-items
    for (let i = 0; i < nodeList.length; i++){
        // if nav-item contains attribute type of id
        if (nodeList[i].hasAttribute('id')) {
         
            // remove the attribute type of 'id'
                    nodeList[i].removeAttribute('id');
                }
    }
    // add attribute to the currently clicked element
     currentItem.setAttribute('id','active');
    if (nodeList[0].hasAttribute("id")){
        $dc.innerHTML = markup.Sunlight;
    }
    else if (nodeList[1].hasAttribute("id")){
        $dc.innerHTML = markup.Wind;
    }
    else{$dc.innerHTML = markup.Water;}
  };

 nodeList[0].addEventListener('click', handleClick);  
 nodeList[1].addEventListener('click', handleClick);  
 nodeList[2].addEventListener('click', handleClick);  
