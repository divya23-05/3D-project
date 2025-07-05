
const isMobile = window.innerWidth <= 768;
if(isMobile){
   
     /*else if(rightangle === 360 ){
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im1').style.height = `${16}rem`;
     }
     
     document.querySelector('.img1,.img2,.im3,.im4,.im5,.im6').transition = all `${6}s`;
     return;*/
 function inc(){

    if((currentrotation === 60 )|| (currentrotation === 420)||(currentrotation === -300)|| (currentrotation === -660)||(currentrotation === 780)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${18.5}rem`;
        document.querySelector('.head3').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p3').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span3').style.opacity = 1;
          document.querySelector('.span1').style.opacity = 0;
          document.querySelector('.span2').style.opacity = 0;
          document.querySelector('.span4').style.opacity = 0;
          document.querySelector('.span5').style.opacity = 0;
          document.querySelector('.span6').style.opacity = 0;
        

     }
    else if((currentrotation === 120 )|| (currentrotation === 480)||(currentrotation === -240)|| (currentrotation === 840)||(currentrotation === -600)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        
        document.querySelector('.im5').style.height = `${18.5}rem`;
        document.querySelector('.head5').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p5').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span5').style.opacity = 1;
          document.querySelector('.span1').style.opacity = 0;
          document.querySelector('.span3').style.opacity = 0;
          document.querySelector('.span4').style.opacity = 0;
          document.querySelector('.span2').style.opacity = 0;
          document.querySelector('.span6').style.opacity = 0;
    }
     else if((currentrotation === 180 )|| (currentrotation === 540)||(currentrotation === -180)|| (currentrotation === 900)||(currentrotation === -540)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im4').style.height = `${19.5}rem`;
        document.querySelector('.head4').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p4').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span4').style.opacity = 1;
          document.querySelector('.span1').style.opacity = 0;
          document.querySelector('.span3').style.opacity = 0;
          document.querySelector('.span2').style.opacity = 0;
          document.querySelector('.span5').style.opacity = 0;
          document.querySelector('.span6').style.opacity = 0;

     }
     else if((currentrotation === 240 )|| (currentrotation === 600)||(currentrotation === -120)|| (currentrotation === 960)||(currentrotation === -480)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${21}rem`;
        document.querySelector('.head6').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.p6').style.opacity = 0.7;
        document.querySelector('.p1').style.opacity = 0;
        document.querySelector('.p3').style.opacity = 0;
        document.querySelector('.p4').style.opacity = 0;
        document.querySelector('.p5').style.opacity = 0;
        document.querySelector('.p2').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
     }
     else if((currentrotation === 300 )|| (currentrotation === 660)||(currentrotation === -60)|| (currentrotation === 1020)||(currentrotation === -420)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        
        document.querySelector('.im2').style.height = `${18.5}rem`;
        document.querySelector('.head2').style.opacity = 1;

        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p2').style.opacity = 0.7;
        document.querySelector('.p1').style.opacity = 0;
        document.querySelector('.p3').style.opacity = 0;
        document.querySelector('.p4').style.opacity = 0;
        document.querySelector('.p5').style.opacity = 0;
        document.querySelector('.p6').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
     }
     else if((currentrotation === 360 )|| (currentrotation === 720)||(currentrotation === 0)|| (currentrotation === 1080)||(currentrotation === -360)||currentrotation === 0){
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im1').style.height = `${19.5}rem`;
        document.querySelector('.head1').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p1').style.opacity = 0.7;
        document.querySelector('.p2').style.opacity = 0;
        document.querySelector('.p3').style.opacity = 0;
        document.querySelector('.p4').style.opacity = 0;
        document.querySelector('.p5').style.opacity = 0;
        document.querySelector('.p6').style.opacity = 0;
        document.querySelector('.span1').style.opacity = 1;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
     }
     else {
      document.querySelector('.im5').style.height = `${18}rem`;
      
      document.querySelector('.im2').style.height = `${16}rem`;
      document.querySelector('.im3').style.height = `${16}rem`;
      document.querySelector('.im6').style.height = `${16}rem`;
      
      document.querySelector('.im4').style.height = `${16}rem`;
      document.querySelector('.im1').style.height = `${16}rem`;
      document.querySelector('.head1').style.opacity = 0;

      document.querySelector('.head2').style.opacity = 0;
      document.querySelector('.head3').style.opacity = 0;
      document.querySelector('.head4').style.opacity = 0;
      document.querySelector('.head5').style.opacity = 0;
      document.querySelector('.head6').style.opacity = 0;
      document.querySelector('.p1').style.opacity = 0;
      document.querySelector('.p2').style.opacity = 0;
      document.querySelector('.p3').style.opacity = 0;
      document.querySelector('.p4').style.opacity = 0;
      document.querySelector('.p5').style.opacity = 0;
      document.querySelector('.p6').style.opacity = 0;
   }
     return currentrotation
    } /*else if(rightangle === 360 ){
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im1').style.height = `${16}rem`;
     }
     
     document.querySelector('.img1,.img2,.im3,.im4,.im5,.im6').transition = all `${6}s`;
     return;*/
     
     function inc1(){

      if((currentrotation === -60 )|| (currentrotation === 300)||(currentrotation === 660)|| (currentrotation === -420)||(currentrotation === 1020)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${18}rem`;
          
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          document.querySelector('.im2').style.height = `${18}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          document.querySelector('.head2').style.opacity = 1;

          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span2').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
  
       }
      else if((currentrotation === -120 )|| (currentrotation === 240)||(currentrotation === 600)|| (currentrotation === 960)||(currentrotation === -480)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${18}rem`;
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          
          document.querySelector('.im6').style.height = `${20}rem`;
          document.querySelector('.head6').style.opacity = 1;

          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.span6').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
      }
       else if((currentrotation === -180 )|| (currentrotation === 180)||(currentrotation === 540)|| (currentrotation === -540)||(currentrotation === 900)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${18}rem`;
          
          document.querySelector('.im4').style.height = `${19}rem`;
          document.querySelector('.head4').style.opacity = 1;

          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span4').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
       }
       else if((currentrotation === -240 )|| (currentrotation === 120)||(currentrotation === 480)|| (currentrotation === 840)||(currentrotation === -600)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${21}rem`;
          document.querySelector('.head5').style.opacity = 1;

          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span5').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
       }
       else if((currentrotation === -300 )|| (currentrotation === 60)||(currentrotation === 420)|| (currentrotation === 780)||(currentrotation === -660)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${18}rem`;
          
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          
          document.querySelector('.im3').style.height = `${18}rem`;
          document.querySelector('.head3').style.opacity = 1;
         
          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span3').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
       }
       else if((currentrotation === -360 )|| (currentrotation === 360)||(currentrotation === 720)|| (currentrotation === 0)||(currentrotation === -720)){
          document.querySelector('.im5').style.height = `${18}rem`;
          
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im1').style.height = `${19}rem`;
          document.querySelector('.head1').style.opacity = 1;
          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p1').style.opacity = 0.7;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span1').style.opacity = 1;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
         
       }
       else {
         document.querySelector('.im5').style.height = `${18}rem`;
         
         document.querySelector('.im2').style.height = `${16}rem`;
         document.querySelector('.im3').style.height = `${16}rem`;
         document.querySelector('.im6').style.height = `${16}rem`;
         
         document.querySelector('.im4').style.height = `${16}rem`;
         document.querySelector('.im1').style.height = `${16}rem`;
         document.querySelector('.head1').style.opacity = 0;
   
         document.querySelector('.head2').style.opacity = 0;
         document.querySelector('.head3').style.opacity = 0;
         document.querySelector('.head4').style.opacity = 0;
         document.querySelector('.head5').style.opacity = 0;
         document.querySelector('.head6').style.opacity = 0;
         document.querySelector('.p1').style.opacity = 0;
         document.querySelector('.p2').style.opacity = 0;
         document.querySelector('.p3').style.opacity = 0;
         document.querySelector('.p4').style.opacity = 0;
         document.querySelector('.p5').style.opacity = 0;
         document.querySelector('.p6').style.opacity = 0;
      }
       return currentrotation;
    
}

   

}
else{
   function inc(){

    if((currentrotation === 60 )|| (currentrotation === 420)||(currentrotation === -300)|| (currentrotation === -660)||(currentrotation === 780)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${18.5}rem`;
        document.querySelector('.head3').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p3').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span3').style.opacity = 1;
          document.querySelector('.span1').style.opacity = 0;
          document.querySelector('.span2').style.opacity = 0;
          document.querySelector('.span4').style.opacity = 0;
          document.querySelector('.span5').style.opacity = 0;
          document.querySelector('.span6').style.opacity = 0;
        

     }
    else if((currentrotation === 120 )|| (currentrotation === 480)||(currentrotation === -240)|| (currentrotation === 840)||(currentrotation === -600)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        
        document.querySelector('.im5').style.height = `${20.5}rem`;
        document.querySelector('.head5').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p5').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span5').style.opacity = 0.9;
          document.querySelector('.span1').style.opacity = 0;
          document.querySelector('.span3').style.opacity = 0;
          document.querySelector('.span4').style.opacity = 0;
          document.querySelector('.span2').style.opacity = 0;
          document.querySelector('.span6').style.opacity = 0;
    }
     else if((currentrotation === 180 )|| (currentrotation === 540)||(currentrotation === -180)|| (currentrotation === 900)||(currentrotation === -540)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im5').style.height = `${18}rem`;
      
        document.querySelector('.im4').style.height = `${19.5}rem`;
        document.querySelector('.head4').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p4').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span4').style.opacity = 0.9;
          document.querySelector('.span1').style.opacity = 0;
          document.querySelector('.span3').style.opacity = 0;
          document.querySelector('.span2').style.opacity = 0;
          document.querySelector('.span5').style.opacity = 0;
          document.querySelector('.span6').style.opacity = 0;

     }
     else if((currentrotation === 240 )|| (currentrotation === 600)||(currentrotation === -120)|| (currentrotation === 960)||(currentrotation === -480)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${21}rem`;
        document.querySelector('.head6').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.p6').style.opacity = 0.7;
        document.querySelector('.p1').style.opacity = 0;
        document.querySelector('.p3').style.opacity = 0;
        document.querySelector('.p4').style.opacity = 0;
        document.querySelector('.p5').style.opacity = 0;
        document.querySelector('.p2').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0.9;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
     }
     else if((currentrotation === 300 )|| (currentrotation === 660)||(currentrotation === -60)|| (currentrotation === 1020)||(currentrotation === -420)){
        document.querySelector('.im1').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        
        document.querySelector('.im2').style.height = `${18.5}rem`;
        document.querySelector('.head2').style.opacity = 1;

        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.head1').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p2').style.opacity = 0.7;
        document.querySelector('.p1').style.opacity = 0;
        document.querySelector('.p3').style.opacity = 0;
        document.querySelector('.p4').style.opacity = 0;
        document.querySelector('.p5').style.opacity = 0;
        document.querySelector('.p6').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0.9;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
     }
     else if((currentrotation === 360 )|| (currentrotation === 720)||(currentrotation === 0)|| (currentrotation === 1080)||(currentrotation === -360)||currentrotation === 0){
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im1').style.height = `${19.5}rem`;
        document.querySelector('.head1').style.opacity = 1;

        document.querySelector('.head2').style.opacity = 0;
        document.querySelector('.head3').style.opacity = 0;
        document.querySelector('.head4').style.opacity = 0;
        document.querySelector('.head5').style.opacity = 0;
        document.querySelector('.head6').style.opacity = 0;
        document.querySelector('.p1').style.opacity = 0.7;
        document.querySelector('.p2').style.opacity = 0;
        document.querySelector('.p3').style.opacity = 0;
        document.querySelector('.p4').style.opacity = 0;
        document.querySelector('.p5').style.opacity = 0;
        document.querySelector('.p6').style.opacity = 0;
        document.querySelector('.span1').style.opacity = 0.9;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
     }
     else {
      document.querySelector('.im5').style.height = `${18}rem`;
      
      document.querySelector('.im2').style.height = `${16}rem`;
      document.querySelector('.im3').style.height = `${16}rem`;
      document.querySelector('.im6').style.height = `${16}rem`;
      
      document.querySelector('.im4').style.height = `${16}rem`;
      document.querySelector('.im1').style.height = `${16}rem`;
      document.querySelector('.head1').style.opacity = 0;

      document.querySelector('.head2').style.opacity = 0;
      document.querySelector('.head3').style.opacity = 0;
      document.querySelector('.head4').style.opacity = 0;
      document.querySelector('.head5').style.opacity = 0;
      document.querySelector('.head6').style.opacity = 0;
      document.querySelector('.p1').style.opacity = 0;
      document.querySelector('.p2').style.opacity = 0;
      document.querySelector('.p3').style.opacity = 0;
      document.querySelector('.p4').style.opacity = 0;
      document.querySelector('.p5').style.opacity = 0;
      document.querySelector('.p6').style.opacity = 0;
   }
     return currentrotation
    } /*else if(rightangle === 360 ){
        document.querySelector('.im5').style.height = `${18}rem`;
        
        document.querySelector('.im2').style.height = `${16}rem`;
        document.querySelector('.im3').style.height = `${16}rem`;
        document.querySelector('.im6').style.height = `${16}rem`;
        
        document.querySelector('.im4').style.height = `${16}rem`;
        document.querySelector('.im1').style.height = `${16}rem`;
     }
     
     document.querySelector('.img1,.img2,.im3,.im4,.im5,.im6').transition = all `${6}s`;
     return;*/
     
     function inc1(){

      if((currentrotation === -60 )|| (currentrotation === 300)||(currentrotation === 660)|| (currentrotation === -420)||(currentrotation === 1020)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${18}rem`;
          
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          document.querySelector('.im2').style.height = `${18}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          document.querySelector('.head2').style.opacity = 1;

          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span2').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
  
       }
      else if((currentrotation === -120 )|| (currentrotation === 240)||(currentrotation === 600)|| (currentrotation === 960)||(currentrotation === -480)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${18}rem`;
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          
          document.querySelector('.im6').style.height = `${20}rem`;
          document.querySelector('.head6').style.opacity = 1;

          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.span6').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
      }
      
       else if((currentrotation === -180 )|| (currentrotation === 180)||(currentrotation === 540)|| (currentrotation === -540)||(currentrotation === 900)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${18}rem`;
          
          document.querySelector('.im4').style.height = `${19}rem`;
          document.querySelector('.head4').style.opacity = 1;

          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span4').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
       }
       else if((currentrotation === -240 )|| (currentrotation === 120)||(currentrotation === 480)|| (currentrotation === 840)||(currentrotation === -600)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${21}rem`;
          document.querySelector('.head5').style.opacity = 1;

          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span5').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
       }
       else if((currentrotation === -300 )|| (currentrotation === 60)||(currentrotation === 420)|| (currentrotation === 780)||(currentrotation === -660)){
          document.querySelector('.im1').style.height = `${16}rem`;
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im5').style.height = `${18}rem`;
          
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          
          document.querySelector('.im3').style.height = `${18}rem`;
          document.querySelector('.head3').style.opacity = 1;
         
          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head1').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0.7;
          document.querySelector('.p1').style.opacity = 0;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span3').style.opacity = 1;
        document.querySelector('.span1').style.opacity = 0;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
       }
       else if((currentrotation === -360 )|| (currentrotation === 360)||(currentrotation === 720)|| (currentrotation === 0)||(currentrotation === -720)){
          document.querySelector('.im5').style.height = `${18}rem`;
          
          document.querySelector('.im2').style.height = `${16}rem`;
          document.querySelector('.im3').style.height = `${16}rem`;
          document.querySelector('.im6').style.height = `${16}rem`;
          
          document.querySelector('.im4').style.height = `${16}rem`;
          document.querySelector('.im1').style.height = `${19}rem`;
          document.querySelector('.head1').style.opacity = 1;
          document.querySelector('.head2').style.opacity = 0;
          document.querySelector('.head3').style.opacity = 0;
          document.querySelector('.head4').style.opacity = 0;
          document.querySelector('.head5').style.opacity = 0;
          document.querySelector('.head6').style.opacity = 0;
          document.querySelector('.p1').style.opacity = 0.7;
          document.querySelector('.p2').style.opacity = 0;
          document.querySelector('.p3').style.opacity = 0;
          document.querySelector('.p4').style.opacity = 0;
          document.querySelector('.p5').style.opacity = 0;
          document.querySelector('.p6').style.opacity = 0;
          document.querySelector('.span1').style.opacity = 1;
        document.querySelector('.span2').style.opacity = 0;
        document.querySelector('.span3').style.opacity = 0;
        document.querySelector('.span4').style.opacity = 0;
        document.querySelector('.span5').style.opacity = 0;
        document.querySelector('.span6').style.opacity = 0;
         
       }
       else {
         document.querySelector('.im5').style.height = `${18}rem`;
         
         document.querySelector('.im2').style.height = `${16}rem`;
         document.querySelector('.im3').style.height = `${16}rem`;
         document.querySelector('.im6').style.height = `${16}rem`;
         
         document.querySelector('.im4').style.height = `${16}rem`;
         document.querySelector('.im1').style.height = `${16}rem`;
         document.querySelector('.head1').style.opacity = 0;
   
         document.querySelector('.head2').style.opacity = 0;
         document.querySelector('.head3').style.opacity = 0;
         document.querySelector('.head4').style.opacity = 0;
         document.querySelector('.head5').style.opacity = 0;
         document.querySelector('.head6').style.opacity = 0;
         document.querySelector('.p1').style.opacity = 0;
         document.querySelector('.p2').style.opacity = 0;
         document.querySelector('.p3').style.opacity = 0;
         document.querySelector('.p4').style.opacity = 0;
         document.querySelector('.p5').style.opacity = 0;
         document.querySelector('.p6').style.opacity = 0;
      }
       return currentrotation;
    
}
}
/*
document.querySelector('.im5').style.height = `${12}rem`;
      
      document.querySelector('.im2').style.height = `${10}rem`;
      document.querySelector('.im3').style.height = `${10}rem`;
      document.querySelector('.im6').style.height = `${10}rem`;
      
      document.querySelector('.im4').style.height = `${10}rem`;
      document.querySelector('.im1').style.height = `${10}rem`;
      document.querySelector('.head1').style.opacity = 0;

      document.querySelector('.head2').style.opacity = 0;
      document.querySelector('.head3').style.opacity = 0;
      document.querySelector('.head4').style.opacity = 0;
      document.querySelector('.head5').style.opacity = 0;
      document.querySelector('.head6').style.opacity = 0;
      document.querySelector('.p1').style.opacity = 0;
      document.querySelector('.p2').style.opacity = 0;
      document.querySelector('.p3').style.opacity = 0;
      document.querySelector('.p4').style.opacity = 0;
      document.querySelector('.p5').style.opacity = 0;
      document.querySelector('.p6').style.opacity = 0;
      



*/




let currentrotation = 0;
function rotate10left(){
    
    
    const rotate = document.querySelector('.platerotate');
   if(rotate){
      currentrotation-=60
   }
   rotate.style.transform = `rotate(${currentrotation}deg)`;



}


function rotate10right(){
   const rotate = document.querySelector('.platerotate');
   if(rotate){
      currentrotation+=60
   }
   
 rotate.style.transform = `rotate(${currentrotation}deg)`;
 
 
   
 
   
   
}
 







/*
function show1(){
  const items =  document.querySelectorAll('.con');
  items.forEach((currentrotation) => {
   if((currentrotation === -60 )|| (currentrotation === 300)||(currentrotation === 660)|| (currentrotation === -420)||(currentrotation === 1020)){
      document.querySelector('.intro2').style.opacity = 1000;

   }
  else if((currentrotation === -120 )|| (currentrotation === 240)||(currentrotation === 600)|| (currentrotation === 960)||(currentrotation === -480)){
   document.querySelector('.intro6').style.opacity = 1000;
  }
   else if((currentrotation === -180 )|| (currentrotation === 180)||(currentrotation === 540)|| (currentrotation === -540)||(currentrotation === 900)){
      document.querySelector('.intro4').style.opacity = 1000;
   }
   else if((currentrotation === -240 )|| (currentrotation === 120)||(currentrotation === 480)|| (currentrotation === 840)||(currentrotation === -600)){
      document.querySelector('.intro5').style.opacity = 1000;
   }
   else if((currentrotation === -300 )|| (currentrotation === 60)||(currentrotation === 420)|| (currentrotation === 780)||(currentrotation === -660)){
      document.querySelector('.intro3').style.opacity = 1000;
   }
   else if((currentrotation === -360 )|| (currentrotation === 360)||(currentrotation === 720)|| (currentrotation === 0)||(currentrotation === -720)){
      document.querySelector('.intro1').style.opacity = 1000;
   }

  });
}*/

function clickit(){
   document.querySelector('.contactdisplay').style.opacity = 0.5;
}