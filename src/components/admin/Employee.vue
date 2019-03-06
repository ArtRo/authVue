<template>
    <div>
        <el-button type="success" @click="get">成功</el-button>
    </div>
</template>

<script>
    import sqlite from 'sync-sqlite'
    export default {
        name: "Employee",
        data(){
            return{
                options :{
                    dbPath: '/static/sqlFile/test.db',
                    autoSave: true
                }
            }
        },
        methods:{
            get:function () {
                let db = new sqlite(this.options);
                db.connect();
            }
        }
    }
</script>

<style scoped>

</style>