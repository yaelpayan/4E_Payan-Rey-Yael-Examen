const express = require('express');
//routear a los pintores
let pintor = require('../controllers/PintoresController.js');
// creamos nuestras rutas
let router = express.Router();

router.get('/',pintor.list);


router.get('/picasso',(req,res)=>{
res.render('picasso',{
    autor:'Yael Payan Rey 4E',
    titulo:'Pablo Picasso',
    year: new Date().getFullYear()
});
});

router.get('/vince',(req,res)=>{
    res.render('vince',{
        autor:'Yael Payan Rey 4E',
        titulo:'Vincent van Gogh',
        year: new Date().getFullYear()
    });
    });

    router.get('/dali',(req,res)=>{
        res.render('dali',{
            autor:'Yael Payan Rey 4E',
            titulo:'Salvador Dalí',
            year: new Date().getFullYear()
        });
        });

        router.get('/leo',(req,res)=>{
            res.render('leonardo',{
                autor:'Yael Payan Rey 4E',
                titulo:'Leonardo da Vinci',
                year: new Date().getFullYear()
            });
            });

module.exports = router;