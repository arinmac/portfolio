<template>
    <div :style="cssVars" class="speachshape"></div>
</template>
<script>
export default {
    name: 'SpeechBox',
    props: {
        color:{
            type: String,
            default: '#0099CC'
        }
    },
    computed: {
        cssVars(){
            return {
                '--bg-color': this.color
            }
        }
    }
}
</script>
<style lang="scss">
@import '/../assets/styles.scss';
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
    background: var(--bg-color) !important;
    position: relative;
    margin: 10px auto;
    border: solid 2px $green;
}


.speachshape:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -12px;
    left: 0px;
    border-right:41px solid transparent;
    border-top: 13px solid var(--bg-color) !important;
    z-index: 20;

}
</style>