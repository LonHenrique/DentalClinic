<template>
    <b-row class="d-flex btnAssignAlign">
        <input type="button" value="assine agora" class="fontFamily btnAssign">
    </b-row>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.btnAssign {
    background: linear-gradient(45deg, #62bdfc 0%, #8490ff 100%);    
    color: #FFF;
    border-radius: 15px;
    padding: 5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 40px;
    width: 300px;
    cursor: pointer;
    text-decoration: none;    
    border: none;    
    box-shadow: 1px 1px 2px  #777;
    text-shadow: 1px 2px 2px #777;            
}
.btnAssignAlign {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btnAssign:hover {
    background: #32a3f3;            
    
}
</style>