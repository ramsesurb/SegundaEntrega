import db from "../../config/firebase.js"
const carrito = db.collection("carrito")

class ContenedorCartFirebase {


//metodos cart
    async getCart() {
        try {
            const snapshot = await carrito.get();
            snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            });
              return snapshot
              
          } catch (error) {
          console.log(error)
          return []
          }
      }
    async addToCart (prod){
            
        try {
            
            const save = await carrito.doc().set({ title: prod.title ,price: prod.price, thumbnail: prod.thumbnail , stock: prod.stock })
            console.log('producto guardado')
            return save
           
        } catch (error) {
        console.log(error)
        }
    }
   
    async deleteByIdCart (id){
        try {
            const Delete = await carrito.doc(id).delete()
            console.log(Delete)
            return Delete
            
            
        } catch (error) {
        console.log(error)
        }

    }
    
}
    
const rute = new ContenedorCartFirebase ("cart.json")

//rute.getCart()
//rute.addToCart({ "title": "Fender BlackTop","price": 599, "thumbnail": "https://muzikercdn.com/uploads/products/196/19613/main_c65761a5.jpg","stock":8})
export default ContenedorCartFirebase


