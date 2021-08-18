$(document).ready(function(){

  $(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(false); /* false to get page from cache */
  /* true to fetch page from server */
});
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});
//   this is profile show section---------
$(".name").click(function(){
  $(".show-profile").toggleClass("d-block");
  
})
$(".section2").click(function(){
  $(".show-profile").removeClass("d-block");})
$(".section1").click(function(){
  $(".show-profile").removeClass("d-block");})

//   ended profile show section---------
var checker = true;
var checker2=null;
$(".for-tran .only-this").click(function(e){  
    e.preventDefault();    
    var thiss = $(this);
    thiss.parent().siblings().children("div.dropdowns").slideUp("slow");  
    // $(".for-tran").siblings().children("div.dropdowns").slideUp("slow");   
    thiss.siblings().slideToggle("slow");   

    thiss.find(".labels i").toggleClass("dropd-arw-rotate");
    thiss.parent().siblings().find(".labels i").removeClass("dropd-arw-rotate");


    $(".for-tran .dropdowns a").click(function(){
      var this2 = $(this).children();
      $(".for-tran .dropdowns div").removeClass("active2")
      this2.toggleClass("active2");
      $(".for-tran .only-this div").removeClass("activee")
      thiss.children().addClass("activee");
    })

  }); 
    
//  ---------------------- when slider toggle active-----
      $(".for-tran .only-this").hover(function(e){
        var temp = $(this);
          $(".for-tran .dropdowns a").click(function(){
            $(".for-tran .only-this").children().removeClass("activee")
            temp.children().addClass("activee");
          })
        });
//  --------------------------slider toggle ends-------------

// ----------------------this is when sidebar active and when clicked otside disapper

$(".section2").click(function(){
  $(".section1").removeClass("hide-sidebar");
})


// -------------------------------------------ends----------------------------
      $(".dropdowns").click(function(e){
        e.preventDefault();
      })

      $(".admin-t").mouseenter(function(){
        $(".admin-t").addClass("bg-success");
      })


      // sidebar toggle
      var valuechanged=false;

      $(".menu-bars").click(function(){

        if(window.innerWidth < 768){
          $(".section1").toggleClass("hide-sidebar");
        }
        else{
          if(valuechanged==true){
            $(".section1").find("*").css("opacity","0");
            $(".section1").toggleClass("sidebar-toggle");
            var timeout=setTimeout(() => {
              $(".section1").find("*").css("opacity","1");
            }, 500);
          }
          else{
            $(".section1").toggleClass("sidebar-toggle");
          }
          
        }

        if(window.innerWidth >767){
          $(".adminlte").toggleClass("change-width");
        } 
        
        if(window.innerWidth < 768){
          if(valuechanged==false){
            $(".section2").css("width","100%"); 
            valuechanged=true;
          }
          else{
            valuechanged=false;
          }
        }

        else if(valuechanged==false){
          $(".section2").css("width","calc(100% - 50px)");
          $(".adminlte").html("<h5>ALT</h5>");
          valuechanged=true;
        }
        else{
          $(".section2").css("width","calc(100% - 230px)");
          $(".adminlte").html("<h5>Admin<span>LTE</span></h5>");
          valuechanged=false;
        }
        
      })

  });