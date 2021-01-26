import app from './app.js'

async function main(){
    await app.listen(app.get('PORT'))
    console.log('Server on port:', app.get('PORT'))
}

main()