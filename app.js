new Vue({
    el:"#instruments",
    data:{
        name:"",
        type:"",
        price:"",
        brand:"",
        selected:false,
        img:"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png",
        mess:"",

        instrument:[
            {
                name: "Drums",
                type: "Percussion",
                price: "$1250",
                brand: "Yamaha",
                color:"green",
                selected:false,
                img:"https://freepngimg.com/thumb/drum/9-2-drums-free-download-png.png",

            },
            {
                name: "Flute",
                type: "Woodwind",
                price: "$700",
                brand: "Fender",
                color:"green",
                selected:false, img:"https://freepngimg.com/thumb/flute/9-2-flute-png.png",
            },
            {
                name: "Piano",
                type: "Percussion",
                price: "$5000",
                brand: "Maton",
                color:"red",
                selected:false, img:"https://freepngimg.com/thumb/piano/2-2-piano-png-file.png"
            },
            {
                name: "Guitar",
                type: "String",
                price: "$900",
                brand: "Yamaha",
                color:"red",
                selected:false, img:"https://freepngimg.com/thumb/guitar/31-guitar-png-image.png"
            },
            {
                name: "Violin",
                type: "Woodwind",
                price: "$1300",
                brand: "Fender",
                color:"Blue",
                selected:false,
                img:"https://freepngimg.com/thumb/violin/6-2-violin-picture.png",

            },
            {
                name: "Saxophone",
                type: "Woodwind",
                price: "$850",
                brand: "Maton",
                color:"blue",
                selected:false,
                img:"https://www.freepngimg.com/thumb/saxophone/1-2-saxophone-png.png"
            }
        ],
        cart: []
    },
    methods:{
        popUp:function (x) {
            this.instrument[x].selected = !this.instrument[x].selected;
        },
        popUp2:function () {
            this.selected = !this.selected;
        },
        submit:function(item,x){

            this.instrument[x].selected=false;
            this.instrument.splice(x,1);
            this.cart.push(item);

            return this.instrument

        },
        emptyCart:function(x){

            this.instrument= this.instrument.concat(this.cart);
            this.cart=[];

        },

        newInstrument:function(){
            this.instrument.push({
                name:this.name,
                type:this.type,
                price:this.price,
                brand:this.brand,
                img:this.img,
                selected:false
            });this.selected = !this.selected;
        }
    },
    watch:{
        name:function(){
            if (!this.name || !this.type || !this.brand || !this.price){
                this.mess="Form not yet complete."
            }
            else{this.mess="You may now submit. Image is optional."}
        },
        type:function(){
            if (!this.name || !this.type || !this.brand || !this.price){
                this.mess="Form not yet complete."
            }
            else{this.mess="You may now submit. Image is optional."}
        },
        brand:function(){
            if (!this.name || !this.type || !this.brand || !this.price){
                this.mess="Form not yet complete."
            }
            else{this.mess="You may now submit. Image is optional."}
        },
        price:function(){
            if (!this.name || !this.type || !this.brand || !this.price){
                this.mess="Form not yet complete."
            }
            else{this.mess="You may now submit. Image is optional."}
        }



    }

})