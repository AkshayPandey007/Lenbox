<template>
    <div>

      <div id="userPostBox">
        <div>
      <h2 id="userPost">POST COMMENTS</h2>
        </div>
        <!-- <div>
      <button id="btn" @click="goBack()">GO BACK</button>
        </div> -->
    </div>

        <div  id="detailEachBox">
        
            <section v-if="Loading">
              <div id="LoadingBox">
              <img src="https://media3.giphy.com/media/52qtwCtj9OLTi/giphy.gif?cid=ecf05e479bjw2zxt4i8jqs2go7yud3pd2g65dtfv8kn7krqc&rid=giphy.gif&ct=g" alt="" id="LoadingGif"
              >
            </div>
              </section>
              <div v-for="element in post">
            <p >{{ element.body }}  <span id="email"> : {{ element.email  }}</span></p>
           
        </div>
        </div>
    </div>
</template>



<script>


import axios from 'axios'
import {useRoute} from "vue-router"


const route = useRoute()


export default {
  data() {
    return {
        id: this.$route.params.id,
      post: null,
      Loading:true
    };
  },
 methods:
 {
//   goBack:function(){
//     this.$router.push(`/posts/${ this.$route.params.id}`)
    // console.log(this.$route)
//   }
},
  created:function() {
       axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${ this.$route.params.id}`)
      .then((res) => {
        console.log(res.data)
        this.post = res.data;
        this.Loading=false
    })
}
};

</script>


<style scoped>

#userPostBox{
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
  font-family: "Merienda", Helvetica, Arial;
  margin-top: 30px;
}


#btn{
  margin-top: 35px;
  background-color: blueviolet;
  color: white;
  font-weight: 500;
  border-radius: 15px;
  border: none;
  padding: 7px 15px;
}


#btn:hover{
  cursor: pointer;
  transform: scale(1.3);
}

#userPost{
  font-size: 35px;
  font-family: "Merienda", Helvetica, Arial
}

#LoadingBox{
  width: 60%;
  height: 250px;
  margin: auto;
  flex-wrap: wrap;
}


#LoadingGif{
  width: 100%;
  height: 100%;
}


#detailEachBox{
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    padding: 15px;
    text-align: left;
    margin: auto;
    margin-top: 30px;
    flex-wrap: wrap;
    border: 3.5px solid #41B883;
    margin-top: 100px;
}


#email{
  color: #41B883;
}
</style>