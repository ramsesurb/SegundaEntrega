import db from "../../config/firebase.js"
const productos = db.collection('productos')


class ContenedorFirebase {
   
    async getAll(){
        try {
          const snapshot = await productos.get();
          snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          });
            return snapshot
            
        } catch (error) {
        console.log(error)
        return []
        }
    }
    async deleteById (id){
        try {
            const Delete = await productos.doc(id).delete()
            console.log(Delete)
            return Delete
            
            
        } catch (error) {
        console.log(error)
        }

    }
    async save (prod){
        try {
            const saveCont = await rute.getAll()
            await productos.doc().set({ title: prod.title ,price: prod.price, thumbnail: prod.thumbnail , stock: prod.stock })
            console.log('producto guardado')
            return saveCont
           
        } catch (error) {
        console.log(error)
        }
    }

    
}
  
const rute = new ContenedorFirebase ("productos.json")
//rute.getAll() 
//rute.deleteById("gV7XEHgqN8rnUx5vXUU3") 
//rute.save({ "title": "Fender BlackTop","price": 599, "thumbnail": "https://muzikercdn.com/uploads/products/196/19613/main_c65761a5.jpg","stock":8})
export default ContenedorFirebase

