$(document).ready(function(e){
    $('.click1').css("color","#0856c1");
    $(".three .about").animate({
        opacity: '1',
        right: '0',
    });
    $(".three .exp").animate({
        opacity: '0',
        right: '150px',
    }); 
    $(".three .educa").animate({
        opacity: '0',
        right: '150px',
    }); 
    $(".three .skill").animate({
        opacity: '0',
        right: '150px',
    }); 
    $(".three .works").animate({
        opacity: '0',
        right: '150px',
    });
    $(".three .contact").animate({
        opacity: '0',
        right: '150px',
    });
    $('.click1').click(function (e) {
        $('.click1').css("color","#0856c1");
        $('.click2').css("color","black");
        $('.click3').css("color","black");
        $('.click4').css("color","black");
        $('.click5').css("color","black");
        $('.click6').css("color","black");

        $(".three .about").animate({
            opacity: '1',
            right: '0',
        });
        $(".three .exp").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .educa").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .skill").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .works").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .contact").animate({
            opacity: '0',
            right: '150px',
        });
    });
    $('.click2').click(function (e) {
        $('.click1').css("color","black");
        $('.click2').css("color","#0856c1");
        $('.click3').css("color","black");
        $('.click4').css("color","black");
        $('.click5').css("color","black");
        $('.click6').css("color","black");

        $(".three .about").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .exp").animate({
            opacity: '1',
            right: '0',
        }); 
        $(".three .educa").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .skill").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .works").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .contact").animate({
            opacity: '0',
            right: '150px',
        });
    });
    $('.click3').click(function (e) {
        $('.click1').css("color","black");
        $('.click2').css("color","black");
        $('.click3').css("color","#0856c1");
        $('.click4').css("color","black");
        $('.click5').css("color","black");
        $('.click6').css("color","black");
        $(".three .about").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .exp").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .educa").animate({
            opacity: '1',
            right: '0px',
        }); 
        $(".three .skill").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .works").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .contact").animate({
            opacity: '0',
            right: '150px',
        });
    });
    $('.click4').click(function (e) {
        $('.click1').css("color","black");
        $('.click2').css("color","black");
        $('.click3').css("color","black");
        $('.click4').css("color","#0856c1");
        $('.click5').css("color","black");
        $('.click6').css("color","black");

        $(".three .about").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .exp").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .educa").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .skill").animate({
            opacity: '1',
            right: '0',
        }); 
        $(".three .works").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .contact").animate({
            opacity: '0',
            right: '150px',
        });
    });
    $('.click5').click(function (e) {
        $('.click1').css("color","black");
        $('.click2').css("color","black");
        $('.click3').css("color","black");
        $('.click4').css("color","black");
        $('.click5').css("color","#0856c1");
        $('.click6').css("color","black");

        $(".three .about").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .exp").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .educa").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .skill").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .works").animate({
            opacity: '1',
            right: '0',
        });
        $(".three .contact").animate({
            opacity: '0',
            right: '150px',
        });
    });
    $('.click6').click(function (e) {
        $('.click1').css("color","black");
        $('.click2').css("color","black");
        $('.click3').css("color","black");
        $('.click4').css("color","black");
        $('.click5').css("color","black");
        $('.click6').css("color","#0856c1");

        $(".three .about").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .exp").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .educa").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .skill").animate({
            opacity: '0',
            right: '150px',
        }); 
        $(".three .works").animate({
            opacity: '0',
            right: '150px',
        });
        $(".three .contact").animate({
            opacity: '1',
            right: '0',
        });
    });
});
$(document).ready(function(e){
    var width = $(window).width();
    console.log(width);
       if (width <= 768){
           $(".click1").click(function(e){
               $("html, body").animate({ scrollTop: $('.three').offset().top }, "slow");
               return false;
           }); 
           $(".click2").click(function(e){
            $("html, body").animate({ scrollTop: $('.three').offset().top }, "slow");
            return false;
           }); 
           $(".click3").click(function(e){
            $("html, body").animate({ scrollTop: $('.three').offset().top }, "slow");
            return false;
           }); 
           $(".click4").click(function(e){
            $("html, body").animate({ scrollTop: $('.three').offset().top }, "slow");
            return false;
           }); 
           $(".click5").click(function(e){
            $("html, body").animate({ scrollTop: $('.three').offset().top }, "slow");
            return false;
           }); 
           $(".click6").click(function(e){
            $("html, body").animate({ scrollTop: $('.three').offset().top }, "slow");
            return false;
           });
           
       }

});