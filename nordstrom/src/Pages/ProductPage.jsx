import axios from "axios";

const ProductPage = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: 'freshness',
    q: 'T shirt',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'X-RapidAPI-Key': 'f0b812849emsh30158b305691443p187420jsnfd64ec5aa34e',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
};

axios.request(ProductPage).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



export default ProductPage;