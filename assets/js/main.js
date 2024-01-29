async function getProduct() {
      const response = await axios.get('https://dummyjson.com/products');
      const data = response.data.products;
      const result =data.map(function(e){
        return `
        <div class='product'>
        <h2>${e.title}</h2>
        <img src='${e.thumbnail}'/>
        <a href="details.html?product_id=${e.id}">MORE DETAILS</a>
        </div>
        `
      }).join('');
      document.querySelector('.pro').innerHTML=result;
      
}
  getProduct();