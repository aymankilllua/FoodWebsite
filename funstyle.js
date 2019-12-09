$(function(){

    $(".item1").hover(function(){
        $(".CHICKEN").toggleClass("action animated fadeInUp");
        $(".CHICHENimg").toggleClass("action animated fadeIn");
        
    })
    $(".item2").hover(function(){
        $(".MEAT").toggleClass("action animated fadeInUp");
        $(".MEATimg").toggleClass("action animated fadeIn");
    })
    $(".item3").hover(function(){
        $(".VEGATARIN").toggleClass("action animated fadeInUp");
        $(".VEGAimg").toggleClass("action animated fadeIn");

    })
    $(".item4").hover(function(){
        $(".FOR-CHILDREN").toggleClass("action animated fadeInUp");
        $(".CHILDRENimg").toggleClass("action animated fadeIn");
    })

    /* navbr anime */
    $(".open").click(function(){
        $(".mynavbar").toggleClass("translate")
    })
    $(".close").click(function(){
        $(".mynavbar").toggleClass("translate")
    })
    /* menu animtaion */
    $(".chickenhover").hover(function(){
        $(".chicken").toggleClass("action animated fadeIn");
    })
    $(".meathover").hover(function(){
        $(".meat").toggleClass("action animated fadeIn");
    })
    $(".vegahove").hover(function(){
        $(".vega").toggleClass("action animated fadeIn");
    })
    $(".childhover").hover(function(){
        $(".child").toggleClass("action animated fadeIn");
    })

   
    

    if(window.location.search == "?food=chicken"){
        chicken.forEach(chicken => {
        $(".select2").append('<div class="col-12 p-0 hover"  id="'+chicken.id+'"><div class="row"><div class="col-12 pr-0"><div class="img"><img src="'+chicken.img+'"</div></div><div class="col-12  p-3"><h4 class="text-dark">'+chicken.name+'</h4> <p class="text-secondary mb-0">by : '+chicken.cooker+'</p></div></div></div>')
        $(".select2 #"+chicken.id).click(function(){
            var id = $(this).attr("id");
            $(".select1 .img").append('<img class="animated fadeIn" src="'+chicken.img+'">');
            $(".Ingredients").html(chicken.Ingredients);
            $(".Preparation ol").html(chicken.Preparation);

        })
    });
    
    }

    if(window.location.search == "?food=meat"){
        meat.forEach(meat => {
            $(".select2").append('<div class="col-12 p-0 hover"  id="'+meat.id+'"><div class="row"><div class="col-12 pr-0"><div class="img"><img src="'+meat.img+'"</div></div><div class="col-12  p-3"><h4 class="text-dark">'+meat.name+'</h4> <p class="text-secondary mb-0">by : '+meat.cooker+'</p></div></div></div>')
            $(".select2 #"+meat.id).click(function(){
                var id = $(this).attr("id");
                $(".select1 .img").append('<img class="animated fadeIn" src="'+meat.img+'">');
                $(".Ingredients").html(meat.Ingredients);
                $(".Preparation ol").html(meat.Preparation);
    
            })
        });    }

    if(window.location.search == "?food=VEGATARIN"){
        vegetarian.forEach(vega => {
            $(".select2").append('<div class="col-12 p-0 hover"  id="'+vega.id+'"><div class="row"><div class="col-12 pr-0"><div class="img"><img src="'+vega.img+'"</div></div><div class="col-12  p-3"><h4 class="text-dark">'+vega.name+'</h4> <p class="text-secondary mb-0">by : '+vega.cooker+'</p></div></div></div>')
            $(".select2 #"+vega.id).click(function(){
                var id = $(this).attr("id");
                $(".select1 .img").append('<img class="animated fadeIn" src="'+vega.img+'">');
                $(".Ingredients").html(vega.Ingredients);
                $(".Preparation ol").html(vega.Preparation);
    
            });     
        }); }
    if(window.location.search == "?food=CHILDREN"){
        children.forEach(child => {
            $(".select2").append('<div class="col-12 p-0 hover"  id="'+child.id+'"><div class="row"><div class="col-12 pr-0"><div class="img"><img src="'+child.img+'"</div></div><div class="col-12  p-3"><h4 class="text-dark">'+child.name+'</h4> <p class="text-secondary mb-0">by : '+child.cooker+'</p></div></div></div>')
            $(".select2 #"+child.id).click(function(){
                var id = $(this).attr("id");
                $(".select1 .img").append('<img class="animated fadeIn" src="'+child.img+'">');
                $(".Ingredients").html(child.Ingredients);
                $(".Preparation ol").html(child.Preparation);
    
            });     
        }); 
    }

})
