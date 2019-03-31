<template>
    <header @click="updateTitle">
        <h1 v-text="title+title1"></h1>
    </header>
</template>

<script>
export default {
    name:'app-header',
    props:{
        title1:{
            type:String
        }
    },
    data(){
        return{
            title:"Vue Demo"
        }
    },
    methods:{
        updateTitle(){
            // this.title1=" changed!";
            this.$emit("titleChanged","changed，子组件向父组件传值");
        }
    }
}
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    text-align: center;
    color: #222;
}
</style>