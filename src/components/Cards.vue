<template>

    <div id="userCardBox">
    <h1 id="userCard">USER CARDS</h1>
    </div>
    <section >
    <Loading v-if="Loading"/>
   </section>
    <div id="MainBox">
        <div v-for="element in post" id="eachBox" @click="showProducts(element.id)">
          <h2>Name : <span id="name">{{ element.name }}</span></h2>
          <h2>Username : {{ element.username }}</h2>
          <h3>Email : {{ element.email }}</h3>
          <h3>Phone : {{ element.phone }}</h3>
          <p>Company : <span id="address">{{ element.company.name }}</span></p>
          <p>Address : <span id="address">{{ element.address.city }}</span></p>
        
      </div>
    </div>

</template>




<script>


import axios from 'axios'
import Loading from "./Loading.vue"



export default {
    components: {
        Loading
  },
  data() {
    return {
      post: null,
      Loading : true
    };
  },
 methods:
 {
   showProducts: function(id) {
    console.log(id)
    this.$router.push(`posts/${id}`)
   }
},
 created:   function() {
       axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data)
        this.post = res.data;
        this.Loading = false
    })
}
};








</script>




<style scoped>

#userCardBox{
    border-top: 3px solid #41B883;
    border-bottom: 3px solid #41B883;
    width: 50%;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    gap: 20px;
   margin-top: 30px;
  }

#userCard{
    font-size: 35px;
    font-family: "Merienda", Helvetica, Arial
}

#MainBox{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 70px;
    width: 85%;
    margin: auto;
    margin-top: 100px;
   
}



#eachBox{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px;
    text-align: left;
    border-radius: 20px;
    flex-direction: column;
    height: 300px;
    font-family: "Merienda", Helvetica, Arial
    
}


#eachBox:hover{
    cursor: pointer;
    border: 4px solid #41B883;
}


#name{
    color:  #41B883;
}



#CommentBtn{
    background-color: blueviolet;
    border: none;
    border-radius: 15px;
    padding: 7px 15px;
    color: white;
}


#CommentBtn:hover{
    cursor: pointer;
    transform: scale(1.3);
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
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 20px;
        text-align: left;
        border-radius: 20px;
        flex-direction: column;
        height: 300px;
    }

    #eachBox:hover{
        cursor: pointer;
        transform: scale(1.1);
        border: 4px solid #41B883;
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
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 20px;
        text-align: left;
        border-radius: 20px;
        flex-direction: column;
        height: 300px;
    }


    #eachBox:hover{
        cursor: pointer;
        transform: scale(1.1);
        border: 4px solid #41B883;
    }
}
</style>