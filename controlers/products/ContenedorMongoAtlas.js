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
            const prod = await rute.getAll()
            const getByid = prod.filter(e => e.id === id)
            console.log(getByid)
            
            return getByid
        } catch (error) {
        console.log(error)
        }

    }
    async deleteById (id){
        try {
            const content = await rute.getAll()
            const deleteByid = content.filter(e => e.id !== id)
            await fs.writeFile(`./api/productos.json`, JSON.stringify(deleteByid ,null, 2))
            console.log(deleteByid)
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
            return saveCont
           
        } catch (error) {
        console.log(error)
        }
    }
    async put(id){
        
    }

    
}


    
const rute = new ContenedorMongo ("productos.json")
//rute.getAll()
//rute.getByid(3)
//rute.save({ "title": "Fender BlackTop","price": 599, "thumbnail": "https://muzikercdn.com/uploads/products/196/19613/main_c65761a5.jpg","stock":8})
export default ContenedorMongo


