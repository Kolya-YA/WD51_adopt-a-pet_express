const indexPage = petsType => {
    const capit = w => w.charAt(0).toUpperCase() + w.slice(1)

    const title = 'Adopt a Pet!'
    const paragraph = ''
    const list = petsType.map(p => (
    `        <li><a href="/animals/${p}">${capit(p)}</a></li>`
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
    <h1>${title}</h1>
    <p>${paragraph}</p>
    <ul>${list}</ul>    
</body>
</html>
`
}

export default indexPage