const axios = require('axios')
const cheerio = require ('cheerio')
const fs = require ('fs')


async function pegaJson(){
    
    let linkPrincipal, titulo, imagem, subtitulo
    let linksRelacionados = []
    const noticias = []
    const url = 'https://g1.globo.com/'

    try{
        const { data } = await axios.get(url)
        const html = data
        const $ = cheerio.load(html)


        $('.feed-post-body', html).each( function (i, element){
            linkPrincipal = $(element).find('.feed-post-link').attr('href')
            titulo = $(element).find('.feed-post-link').text()
            imagem = $(element).find('.bstn-fd-picture-image').attr('src')
            subtitulo = $(element).find('.feed-post-body-resumo').text()

            linksRelacionados = []
            $(element).find('.bstn-relateditems').each(function (i, item){
                $(item).find('.bstn-relatedtext').each(function (i, linkRel){
                    linksRelacionados.push($(linkRel).attr('href'))
                })
            })

            noticias.push({
                titulo
                ,linkPrincipal
                ,imagem
                ,subtitulo
                ,linksRelacionados
            })
        })
        //console.log(noticias)
    }

    catch(err){
        console.log(err)
    }
    fs.writeFileSync('g1-home.json', JSON.stringify(noticias, null, '\t'))
}

pegaJson()
