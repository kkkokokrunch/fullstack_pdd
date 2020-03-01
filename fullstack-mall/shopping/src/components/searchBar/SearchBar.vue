<template>
<div class="wrapper">
  <div class="search">
      <a href="#" class="content">
        <img src="../../assets/images/search.png" alt="">
        <span>宽松牛仔外套</span>
      </a>    
  </div>
</div>
  
</template>

<script>
export default {
    name:'SearchBar'
}
</script>

<style scoped>
.search {
    width: 100vw;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search a {
    width: 350px;
    height: 80%;
    background-color: #ededed;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9c9c9c;
}
.search img {
    width: 14px;
    height: 14px;
    margin-right: 6px;
}
</style>