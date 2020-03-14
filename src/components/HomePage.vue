<template>
<b-container class=" pb-5 topcontentrow">
  

    <div class=" pt-5 mb-5 mt-5 pb-5">
        
        <b-row class="">
            <b-col cols="12" class=" pb-5 text-left">
                <h1 class="">Hey<span class="kitcat">!</span></h1>
                <h6 class="">I'm a graphic designer based in Halifax, NS.</h6>
            </b-col>
        </b-row>

        <b-row class="p-0 m-0 pt-4 pb-5 mb-5 mt-5"> 

            <b-col cols="3" class="pl-0 ml-0" >
              <a href="#" class="speachlink">
                <div class="inlineblock light speachshape">
                    <h6>Can I see your work?</h6>
                </div>
              </a>
            </b-col>

            <b-col cols="3" class="pl-0 ml-0" >
              <a href="#" class="speachlink">
                <div class="inlineblock primary speachshape">
                    <h6>So, what do you <span style="font-style:italic; font-weight:500;">do?</span></h6>
                </div>
              </a>
            </b-col>

            <b-col cols="3" class="pl-0 ml-0" >
              <a href="#" class="speachlink">
                <div class="inlineblock speachshape secondary ">
                    <h6>What's up?</h6>
                </div>
              </a>
            </b-col>

            <b-col cols="3" class="pl-0 ml-0" >
              <b-link to="Contact" class="speachlink">
                <div class="inlineblock dark speachshape">
                    <h6>{{"\{\{other message\}\}"}}</h6>
                </div>
              </b-link>
            </b-col>
        </b-row>
        <b-row>
      <b-col @click="toggleKitcat()" class="d-flex justify-content-center divider pb-4" >
       
      </b-col>
    </b-row>
        <b-row>
          <b-col>
            <div :class="kitcatActive?'kitcatBg':''"></div>
          </b-col>
        </b-row>
        
    </div>
    

</b-container>

</template>
<script>

export default {
    name: 'HomePage',
   data(){
     return {
       kitcatActive: false
     }
   },
   methods:{
     toggleKitcat(){
       if(!this.kitcatActive){
         this.kitcatActive = true
       }else{
         this.kitcatActive = false
       }
       
     }
   }
}



</script>

<style lang="scss">
@import'/../assets/styles.scss';

  .inlineblock{
      display: inline-block;
  }

.speachlink{
       width: inherit;

}

.speachlink:hover
     h6{color:$primary;
     font-weight: 500 !important;
     }
     
.speachlink:hover
     .speachshape{color: $green;}






   .speachshape:before {
    content: "";
    position: absolute;
    bottom: -16px;
    left: -2px;
    border-right: 45px solid transparent;
    border-top: 15px solid $green;
    z-index: 20;
   
}

 .speachshape{
    width: inherit;
    height: 50px;
    padding-top: 18px;
    background: currentColor;
    position: relative;
    margin: 10px auto;
    border: solid 2px $green;
}




.speachshape:after {
    content: "";
    background-color: inherit none;
    color: currentColor;  
    width: 0;
    height: 0;
    position: absolute;
    bottom: -12px;
    left: 0px;
    border-right:41px solid transparent;
    border-top: 13px solid currentColor;
    z-index: 20;}





.topcontentrow{
    position: absolute;
    top: 25%;
    padding-bottom: 200px ;
    
    }

    .kitcatBg{
      background-image: url('../assets/kitcat.svg');
      height: 100%;
      width:100%;
      position: fixed;
      top:0;
      left:0;
      z-index: -10;

    }
    
    

</style>