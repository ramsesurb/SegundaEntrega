import ContenedorCartMongo from "../controlers/cart/ContenedorCartMongo"

class ContenedorDaoCartMon extends ContenedorCartMongo {
    constructor() {

        super("carritos", {
        
        title: { type: String, required: true },
        
        price: { type: Number, required: true },
        
        thumbnail: { type: String, required: true },
        
        })
        
        }
}

export default ContenedorDaoCartMon