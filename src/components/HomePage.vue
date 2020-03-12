<template>
<b-container class="topcontentrow">

    <div class="mt-5 pt-5">
        
        <b-row class="">

            <b-col cols="12" class=" text-left">
                <h1 class="">Hey!</h1>
                <h4 class="">I'm a graphic designer based in Halifax, NS.</h4>
            </b-col>

        </b-row>

        <b-row class="p-0 m-0 pt-5 mt-5"> 

            <b-col cols="3" class="pl-0 ml-0" >
                <div class="inlineblock speachshape"></div>
            </b-col>
            <b-col cols="3" class="pl-0 ml-0" >
                <div class="inlineblock speachshape"></div>
            </b-col>
            <b-col cols="3" class="pl-0 ml-0" >
                <div class="inlineblock speachshape"></div>
            </b-col>
            <b-col cols="3" class="pl-0 ml-0" >
                <div class="inlineblock speachshape"></div>
            </b-col>

        </b-row>
        
    </div>


</b-container>

</template>
<script>
export default {
    name: 'HomePage'
}
</script>

<style lang="scss">
@import '/../assets/styles.scss';


  .inlineblock{
      display: inline-block;
  }


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
    
    background: $light;
    position: relative;
    margin: 10px auto;
    border: solid 2px $green;
}


.speachshape:after {
    content: "";
    background-color: inherit;  
    width: 0;
    height: 0;
    position: absolute;
    bottom: -12px;
    left: 0px;
    border-right:41px solid transparent;
    border-top: 13px solid;
    border-color: $light;
    z-index: 20;

}

// $buttoncolor


.topcontentrow{
    position: absolute;
    top: 25%;}

</style>