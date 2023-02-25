module.exports = (req, res, next) => {
    //interceptando toda vez que é postado um formulario com campo name
    if(req.body.name){
        //tratando dados do input
        req.body.name = req.body.name.replace('Meltrozo', '(Meltrozo não da!)');

        console.log();
        console.log(`Hola! ${req.body.name}`);
        console.log();
    }
    console.log();
    console.log('Only home page render');
    console.log();
    next();
}