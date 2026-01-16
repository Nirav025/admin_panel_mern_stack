const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded())
//cors mate
app.use(cors());


//upload kereli image show karva mate..ahi /uploads e route set karyu chhe ane coma , pachi uploads namna folder ne static kari didhu so apde e folder ane ema raheli image access kari sakiye..
app.use('/uploads',express.static('uploads'))



require('dotenv').config()

require('./config/db.js')()




//route import karvo route set karva
const categoryRoute = require('./routes/categoryRoute.js')
const subcategoryRoute = require('./routes/subcategoryRoute.js')
const productRoute = require('./routes/productRoute.js')


// halma user nu kai karta nathi mate comment karyu che future ma kari daisu

// const userRoute = require('./routes/userRoute.js')



//route set karyo
app.use("/api/category", categoryRoute)
app.use("/api/subcategory", subcategoryRoute)
app.use("/api/product", productRoute)


// halma user nu kai karta nathi mate comment karyu che future ma kari daisu

// app.use("/api/user", userRoute)




const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))