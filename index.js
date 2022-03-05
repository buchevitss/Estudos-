const axios = require('axios')
const cheerio = require ('cheerio')


async function pegaJson(){
    
    let linkPrincipal, titulo, imagem, subtitulo
    let linksRelacionados = []
    const noticias = []
    const url = 'https://g1.globo.com/'

    try{
        const { data } = await axios.get(url)
        const html = data
        const $ = cheerio.load(html)


        $('.feed-post-body',html).each( function (i, element){
            linkPrincipal = $(element).find('.feed-post-link').attr('href')
            titulo = $(element).find('.feed-post-link').text()
            imagem = $(element).find('.bstn-fd-picture-image').attr('src')
            subtitulo = $(element).find('.feed-post-body-resumo').text()

            $('.bstn-relateditems',html).each(function (i, element){
                linksRelacionados = $(element).find('.bstn-relatedtext').attr('href')
            })

        noticias.push({
            titulo
            ,linkPrincipal
            ,imagem
            ,subtitulo
            ,linksRelacionados

        })
        })
        console.log(noticias)
        }

    catch(err){
        console.log(err)
    }

}

pegaJson()



