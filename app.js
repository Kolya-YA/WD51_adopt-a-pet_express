import express from 'express'
import pets from './data/petlist.js'
import indexPage from "./pages/indexpage.js"
import typePage from "./pages/typepage.js"
import petPage from "./pages/petpage.js"

const app = express()
const port = 3001;

app.get('/', (request, response) => {
  response.send(indexPage(Object.keys(pets)))
})

app.get('/animals/:pet_type', (request, response) => {
    const petType = request.params.pet_type
    response.send(typePage(petType, pets[petType]))
})

app.get('/animals/:pet_type/:pet_id', (request, response) => {
    const { pet_type, pet_id } = request.params
    response.send(petPage(pets[pet_type][+pet_id]))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});