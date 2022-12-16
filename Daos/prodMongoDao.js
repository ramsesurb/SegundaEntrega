import ContenedorMongo from "../controlers/products/ContenedorMongoAtlas"

class ContenedorDaoMon extends ContenedorMongo {
    constructor() {

        super("productos", {
        
        title: { type: String, required: true },
        
        price: { type: Number, required: true },
        
        thumbnail: { type: String, required: true },
        
        })
        
        }
        
}

export default ContenedorDaoMon