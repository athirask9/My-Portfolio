// <!-- ..............Script to change navbar position.............. -->
window.onload=function() {
    resize();
     ;
   };
   window.addEventListener("resize",resize);

   function resize(){
     var elementPosition = $('#navbar').offset();
     console .log(elementPosition);
     console .log("Iwidth: "+window.innerWidth);

     if(window .innerWidth >= 997){
       console.log("Entered");
         $(window).scroll(function(){
           // console.log("Scroll");
           // console.log(elementPosition.top);
           if($('.mobile-nav-toggle').css('display','none')){

             if(($(window).scrollTop() > elementPosition.top)){
                 $('#navbar').css('position','fixed').css('top','0');
                 $('#navbar').css('background-color','#161a1d');
                 $('#navbar').css('margin-top','0px');
                 $('#navbar').css('padding','5px 0');

                 $('#navbar').css('width','100%');
                 $('#navbar').css('margin-left','-0.6em');
             }else {
                 
                 $("#navbar").removeAttr("style");

             }    


           } 
         });
     }else {
             console.log("Remove Atrbt");
             $(window).scroll(function(){


             
               $("#navbar").removeAttr("style");
             });



      }    
   }

//<!-- .............Script for AOS........... -->

    AOS.init({
        once: true,
    });


// <!-- .......Script to change navbar active class...... -->

$(window).scroll(function(){
    console.log($(window).scrollTop());
    if($(window).scrollTop()!=0){
      

      $(" header li a").click(function(event) {
      $('header li a').removeClass('active');
      $(this).addClass('active');
      // event.preventDefault()
      });
      
    }
    else{
      if($( "header ul  li a" ).hasClass( "active" )){
        $(this).removeClass('active');
      
      }
      // $('header ul  li a').removeClass('active');
      $('header ul  li:first-child a').addClass('active');


    }
  });


//<!-- .......Script to submit enquiry to mail......... -->

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyUnV52Au_HSVmLctakxiY23CkSj9iC6glEryhSqef_FPol16hC7z8fi19mcj-SfFut1A/exec",
        // url:"",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})


// <!-- ................Script to make typewriter effect........... -->

var typed = new Typed('.autoinput', {
    strings:['Athira S Kumar','a Web Developer'],
    typeSpeed: 100,
    backSpeed:100,
    loop:true


  });








