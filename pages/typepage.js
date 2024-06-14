const typePage = (type, pets) => {
    const capit = w => w.charAt(0).toUpperCase() + w.slice(1)

    const title = `List of ${type}`
    const list = pets.map((p, i) => (
        `        <li>
                   <a href="/animals/${type}/${i}">Name: ${capit(p.name)}. Age: ${p.age}. Breed: ${p.breed}</a>
                </li>`
    )).join('\n')

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
    <ul>${list}</ul>    
</body>
</html>
`
}

export default typePage