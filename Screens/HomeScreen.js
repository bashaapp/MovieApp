import React, { useEffect, useState } from "react";

import{
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import{
    COLORS,
    SIZES,
    FONTS,
    icons,
    images, 
} from '../Constants'
import {MoviesTypes } from "../Constants/dummyData";
import Swiper from 'react-native-swiper'



const HomeScreen = ({navigation}) => {


    //States
    const [category, setCategory] = useState(MoviesTypes)
    const [selected, setSelected] = useState(null)
    const [moviesList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('');
    



    //call the function 
    useEffect(() => {
      getMovies()
    },[])


  //fetch API data function
    function getMovies () {
      const URL = "https://www.freetestapi.com/api/v1/movies";

      fetch(URL)
        .then((request)=>{
          if (!request.ok) {
            throw new Error ("something went wrong.Please try again..")
          }
          return request.json();
        })
        .then((data) => {
         setMovieList(data)
         setIsLoading(false)
        })
        .catch((error) => {
          setError(error.message)
          setIsLoading(false)
        })
    }
    

  //Header Code
     function renderHeader () {
        return(
            <View
            style={{
             marginTop:SIZES.margin,
            }}
         >

        {/*Profile, Title, Notification icons*/}
        <View
            style={{
               flexDirection:'row',
               justifyContent:'space-between',
               marginHorizontal:SIZES.radius
            }}
         >     


             {/*profile photo*/}
             <TouchableOpacity
               onPress={()=>{}}
             >
                 <Image 
                    source={icons.user_photo}
                    style={{
                        width:35,
                        height:35,
                        borderRadius:30
                      
               }}
             />
             </TouchableOpacity>


             {/*title*/}
             <Image 
                    source={icons.movie}
                     resizeMode='cover'
                    style={{
                        marginTop:-SIZES.base_1,
                        width:90,
                        height:70,
                        tintColor:COLORS.red

               }}
             />

               {/*ligh & noti icons*/}
               <TouchableOpacity>
               <Image 
                  source={icons.bell}
                  style={{
                     width:25,
                     height:25,
                     tintColor:COLORS.lightGrey60

                   }}
              />
             </TouchableOpacity>

             </View>

       
         </View>
        )
    }

   

 //Search bar function Code
 function handleSearch (query) {
   const filterData = moviesList.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase())
   })
   setMovieList(filterData)
   setSearch(query)
 }


 //Search Bar Code   
    function renderSearchBar () {
        return(
            <View style={{ marginTop:-SIZES.font,}}>

            {/*Search Input*/}  
            <View>
                <TouchableOpacity 
                     onPress={()=>{}} 
                     style={{
                          flexDirection:'row',
                          alignSelf:'center',
                      }}>
                    <TextInput 
                      placeholder="Find Your Favourite..."
                      placeholderTextColor={COLORS.lightGrey20}
                      value={search}
                      onChangeText={text=>handleSearch(text)}
                      style={{
                        height:50,
                        width:330,
                        borderRadius:SIZES.base_1,
                        backgroundColor:'#141313',
                        paddingLeft:SIZES.margin,
                        color:COLORS.lightGrey60
                      }}
                    />
                      {/*Search Icon*/}
                      <Image 
                           source={icons.search}
                           style={{
                            position:'absolute',
                            marginLeft:10,
                            alignSelf:'center',
                            width:20,
                            height:20,
                            tintColor:COLORS.grey60,
                            paddingHorizontal:-20
                           }}
                      />
            </TouchableOpacity>
                 </View>
    
            </View>
        )

}


//Swiper
function renderSwiper () {
          return(
              <View style={styles.sliderContainer}>
              <Swiper
              height={160}
              autoplay
              activeDotColor={COLORS.primary2}
              dotColor={COLORS.gray3}
              >
                  <View style={styles.slide}>
                  <Image 
                  source={images.slide_1}
                  resizeMode="cover"
                  style={styles.sliderImage}
                  />
                  </View>
                  <View style={styles.slide}>
                  <Image 
                  source={images.slide_2}
                  resizeMode="cover"
                  style={styles.sliderImage}
                  />
                  </View>
                  
                  <View style={styles.slide}>
                  <Image 
                  source={images.slide_3}
                  resizeMode="cover"
                  style={styles.sliderImage}
                  />
                  </View>
  
                  <View style={styles.slide}>
                  <Image 
                  source={images.slide_4}
                  resizeMode="cover"
                  style={styles.sliderImage}
                  />
                  </View>
              </Swiper>
              </View>
          )
      
}


 


//Movies Categories  Code
function renderCategories () {
    return(
        <View
        style={{
         marginTop:5,
         marginLeft:14
        }}
     >
         <FlatList
           horizontal
           showsHorizontalScrollIndicator={false}
           data={category}
           keyExtractor={item=>item.id}
           renderItem={({item,index})=>{
             return(
               <TouchableOpacity  
                  
                  onPress={()=> setSelected(item.id)}
                  style={{
                    height:50,
                    width:100,
                    backgroundColor:(selected?.id == item.id)? COLORS.red:'#141313',
                    borderRadius:SIZES.base,
                    alignItems:'center',
                    justifyContent:'center',
                    marginHorizontal:SIZES.base,
                    
                  }}
               >

                 <Text style={{
                     ...FONTS.body3,
                     color:COLORS.lightGrey60,
                     fontWeight:'600'

                 }}>
                   {item.title}
                 </Text>

               </TouchableOpacity>
             )
           }}
         
         />

     </View>
    )
  }


  
//Movie List Code 
function renderMovieList () {
    return(
        <View style={{flex:1,top:20, alignItems:'center',
            justifyContent:'center',marginBottom:25}}>

          {isLoading ? (
             <ActivityIndicator color={COLORS.red} size='large' />
          ) : error ? <Text style={{color:COLORS.gray2,...FONTS.body3}}>{error}</Text>: (
          <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
           data={moviesList}
           keyExtractor={item=>item.id}
           renderItem={({item,index})=>{
             return(
               <TouchableOpacity  
                  onPress={()=> navigation.navigate('MovieDetails', item)}
                  style={{
                    marginHorizontal:SIZES.base_1,
                    marginVertical:SIZES.base_1,
                    borderRadius:SIZES.radius,
                    backgroundColor:'rgba(0,0,0,0.7)',
                    borderColor:COLORS.lightGrey20,
                    borderWidth:1,
                    height:250,
                    width:170,  
                  }}
               >

                {/*Movie Poster*/}
                <Image 
                  source={require('../assets/images/poster_1.jpg')}
                  resizeMode="cover"
                  style={{
                    height:247,
                    width:167,
                    borderRadius:SIZES.radius,
                  }}
                />

                {/*Movie Year*/}
                <View 
                    style={{
                        width:65,
                        height:30,
                        position:'absolute',
                        right:1,
                        top:0,
                        zIndex:1,
                        backgroundColor:'#141313',
                        borderBottomLeftRadius:15,
                        borderLeftColor:COLORS.lightGrey20,
                        borderBottomColor:COLORS.lightGrey20,
                        borderWidth:1,
                        borderTopRightRadius:15,
                        justifyContent:'center',
                        alignItems:'center'
                        }}
                        >
                        <Text style={{color:COLORS.lightGrey,...FONTS.body3}}>{item.year}</Text>
                    </View>


                 {/*Movie title & director*/}
                 <View 
                        style={{
                            height:100,
                            borderRadius:SIZES.radius,
                            backgroundColor:"rgba(0,0,0,0.8)",
                            borderColor:COLORS.lightGrey20,
                            borderWidth:1,
                            position:'absolute',
                            left:-1,
                            bottom:-1,
                            width:170,
                        }}
                        >
            
                            <Text style={{
                                fontSize:15,
                                top:8,
                               alignSelf:'center',
                               color:COLORS.gray2,
                                fontWeight:'bold',
                                marginTop:SIZES.base,
                                marginBottom:2,
                            }}>{item.title}</Text>


                            <Text style={{
                                color:COLORS.lightGrey60,
                                ...FONTS.body4,
                                top:8,
                                alignSelf:'center',
                            }}>Director: {item.director}</Text>
                        </View>
               </TouchableOpacity>
             )
           }}
         
         />
          )}    

        
        </View>
    )
}  






    return(
        <View style={{flex:1, backgroundColor:COLORS.primary1}}>

            {/*render header*/}
            {renderHeader()}

            {/*render search bar*/}
            {renderSearchBar()}

            {/*render Swiper*/}
            {renderSwiper()}

            {/*render Category*/}
            {renderCategories()}

            {/*render MoviesList*/}
            {renderMovieList()}
            
             
        </View>
    )
}



const styles = StyleSheet.create({
    sliderContainer:{
        height:170,
        width:'94%',
        marginTop:SIZES.font,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:SIZES.radius,
      
    },

    slide:{
       // flex:1,
        justifyContent:'center',
        backgroundColor:'transparent',
        borderRadius:SIZES.radius
    },
    sliderImage:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:SIZES.radius
    },
    overlay:{
        height:165,
        width:160,
        backgroundColor:COLORS.gray3,
        position:'absolute',
        zIndex:1,
        borderRadius:SIZES.radius
    }
})


export default HomeScreen