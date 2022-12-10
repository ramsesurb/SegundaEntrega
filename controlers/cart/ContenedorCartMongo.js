
import productoCartModel from "../../config/mongoCart.js"

class ContenedorCartMongo {

//metodos cart
    async getCart() {
        try {
            const content = await productoCartModel.find({})
            return content
              
        } catch (error) {
        console.log(error)
        return []
        }
    }
    async addToCart (prod){
            
        try {
            const saveCont = await rute.getCart()
            const lastId = saveCont.length
            const  newProduct = new productoCartModel ({id:(lastId+1), title: prod.title ,price: prod.price, thumbnail: prod.thumbnail , stock: prod.stock })
            console.log(newProduct)
            await newProduct.save()
            return newProduct
        } catch (error) {
        console.log(error)
        }

    }
   
    async deleteByIdCart (id){
        try {
            const cart = await rute.getCart()
            const deleteByid = cart.filter(e => e.id !== id)
            await fs.writeFile(`./api/cart.json`, JSON.stringify(deleteByid ,null, 2))
           
            return deleteByid
        } catch (error) {
        console.log(error)
        }

    }}
    
const rute = new ContenedorCartMongo ("cart.json")
//rute.getCart()
//rute.addToCart({ "title": "Fender BlackTop","price": 599, "thumbnail": "https://muzikercdn.com/uploads/products/196/19613/main_c65761a5.jpg","stock":8})
export default ContenedorCartMongo


