<template>
    <div id="MainBox">
        <div v-for="element in 10" id="eachBox">
          <h2></h2>
          <h2></h2>
          <h3></h3>
          <h3></h3>
          <p></p>
          <p></p>
      </div>
   
    </div>
</template>


<script setup>



</script>



<style scoped>

#MainBox{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 25px;
    width: 85%;
    margin: auto;
}



#eachBox{
    width: 335px;
   height: 300px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    padding: 20px;
}





h2 , h3, p{
    background-color: rgb(194, 188, 188);
    width: 100%;
    height: 20px;
    animation: pluse-bg 3s infinite;
}


@keyframes pluse-bg{
    0%{
        background-color: #eee;
    }
    50%{
        background-color: rgb(218, 210, 210);
    }
    100%{
        background-color: #eee;
    }
}


@media  (min-width:80px) and (max-width:500px)
{
    #MainBox{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap: 25px;
        width: 85%;
        margin: auto;
        margin-top: 25px;
    } 


    #eachBox{
        width: 280px;
       height: 300px;
       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 20px;
        padding: 20px;
    }

}



@media  (min-width:501px) and (max-width:1000px)
{
    #MainBox{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 25px;
        width: 85%;
        margin: auto;
        margin-top: 25px;
    } 


    #eachBox{
        width: 315px;
       height: 300px;
       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 20px;
        padding: 20px;
    }

}

</style>