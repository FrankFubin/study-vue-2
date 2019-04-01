<template>
    <div>
        <h1>Home</h1>
        <button class="btn btn-success" @click="goToMenu">Let's go</button>
    </div>
</template>
<script>
    export default {
        methods: {
            goToMenu() {
                // 跳转到上一次浏览的页面
                // this.$router.go(-1);

                // 指定跳转的页面
                // this.$router.replace('/menu');

                // 指定跳转到路由的名字下
                // this.$router.replace({name: 'menu'});

                // 用push进行跳转
                // this.$router.push('/menu');
                this.$router.push({name:'menu'});
            }
        }
    }
</script>