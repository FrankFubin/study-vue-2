<template>
    <footer @click="updateTitle">
        <p v-text="title+title1"></p>
    </footer>
</template>

<script>
export default {
    name:'app-footer',
    props:{
        title1:{
            type:String
        }
    },
    data(){
        return{
            title:"Copyright 2017 Vue.js"
        }
    },
    methods:{
        updateTitle(){
            // this.title1=" changed!";
            this.$emit("titleChanged","title changed");
        }
    }
}
</script>

<style scoped>
footer{
    background: #222;
	padding: 6px;
}
p{
    color: lightgreen;
	text-align: center;
}
</style>