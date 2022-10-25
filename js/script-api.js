const {createApp} = Vue;

let app = Vue.createApp({
    data(){
        return{
            titulo:'',
            provincias: []
        }
    },
    created(){
        const url="https://apis.datos.gob.ar/georef/api/provincias";
        fetch(url) //ENDPOINT
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            this.provincias = data.provincias
            // Vamos a obtener los datos
        })
        .catch(error => console.log(error));

    }
}).mount("#app");