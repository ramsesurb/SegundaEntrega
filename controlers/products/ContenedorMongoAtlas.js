import productoModel from "../../config/mongo.js"
class ContenedorMongo {
   
    async getAll(){
        try {
            const content = await productoModel.find({})
            console.log(content)
            return content
            
        } catch (error) {
        console.log(error)
        return []
        }
    }
    async getByid (id){
        try {
            
            const getByid = await productoModel.findOne({id:id})
            return getByid 
           
        } catch (error) {
        console.log(error)
        }

    }
    async deleteById (id){
        try {
            const deleteByid= await productoModel.findOneAndDelete({id:id})
            return deleteByid
            
            
        } catch (error) {
        console.log(error)
        }

    }
  
    async save (prod){
        try {
            const saveCont = await rute.getAll()
            const lastId = saveCont.length
            const newProduct = new productoModel ({id:(lastId+1), title: prod.title ,price: prod.price, thumbnail: prod.thumbnail , stock: prod.stock })
            await newProduct.save()
            console.log('producto guardado')
            return newProduct
           
        } catch (error) {
        console.log(error)
        }
    }
    async put(id, prod){
        try {
            const put= await productoModel.findOneAndUpdate({id:id},prod)
            return put
            
            
        } catch (error) {
        console.log(error)
        }

    }
  
        
    }

    
}


    
const rute = new ContenedorMongo ("productos.json")
//rute.getAll()
//rute.getByid(3)
//rute.save({ "title": "Fender BlackTop","price": 599, "thumbnail": "https://muzikercdn.com/uploads/products/196/19613/main_c65761a5.jpg","stock":8})
export default ContenedorMongo


