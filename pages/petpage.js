const indexPage = pet => {
    const capit = w => w.charAt(0).toUpperCase() + w.slice(1)

    const title = `${capit(pet.name)}`

    return  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <a href="/">Home</a>
    <h1>${title}</h1>
    <img src="${pet.url}" alt="Image of ${title}">
    <p>${pet.description}</p>
    <ul>
        <li>Breed: ${pet.breed}</li>
        <li>Age: ${pet.age}</li>
    </ul>    
</body>
</html>
`
}

export default indexPage