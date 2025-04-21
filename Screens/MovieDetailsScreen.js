import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import{
    COLORS,
    SIZES,
    FONTS,
    icons, 
} from '../Constants'
import AppButton from "../Components/AppButton";



const MovieDetails = ({navigation, route}) => {

    const item = route.params


    //Header Code
    function renderHeader () {
        return(
            <View style={{height:200,}}>
                
             <ImageBackground
                source={require('../assets/images/poster_1.jpg')}
                resizeMode="cover"
                style={{
                    height:220,
                    width:'100%',
                  }}
                  imageStyle={{
                   opacity:0.5
                  }}>

   
                {/*Back Arrow*/}
                <View
                    style={{
                        marginTop:SIZES.base,
                        flexDirection:'row',
                        justifyContent:'space-between',
                   
                    }}
                    >
   
                <TouchableOpacity
                  style={{
                   position:'absolute',
                   left:SIZES.font,
                   top:SIZES.font,
                  
                  }}
                  onPress={()=>navigation.goBack()}
                  >
                  <Image 
                    source={icons.back_arrow}
                    resizeMode="cover"
                    style={{
                        height:25,
                        width:25,
                        tintColor:COLORS.grey60
                    }}
                    />
                  </TouchableOpacity>
                  </View>
   

                {/*title*/}
                 <View
                 style={{
                     position:'absolute',
                     bottom:50,
                     left:20
                 }}
                 >
                <Text
                  style={{
                      fontSize:SIZES.h2,
                      fontWeight:'800',
                      color:COLORS.white,   
                  }}
                  >{item.title}</Text>
   
                 </View>
                </ImageBackground>
   
            </View>
        )
    }



   //Movie Details
   function renderMovieDetails () {
       return(
        <View
        style={{
           flex:2,
           marginTop:-15,
           //backgroundColor: dark ? COLORS.darkColor : COLORS.gray3,
           backgroundColor:COLORS.primary1,
           borderTopLeftRadius:SIZES.radius2_1,
           borderTopRightRadius:SIZES.radius2_1, 
           borderTopColor:COLORS.lightGrey20,
           borderLeftColor:COLORS.lightGrey20,
           borderRightColor:COLORS.lightGrey20,
           borderWidth:0.5,  
        }}
        >

            {/* Movie Details */}
            <View
            style={{
                flexDirection:'row',
                height:90,
                marginTop:SIZES.base,
            }}
            >

                {/*movie type & director*/}
            <View>
                <View
                style={{
                    flexDirection:'row',
                    marginLeft:SIZES.base_1,
                    marginTop:SIZES.font
                }}
                >
                <Image 
                    source={icons.video_1}
                    resizeMode="cover"
                    style={{
                        height:23,
                        width:23,
                        tintColor:COLORS.gray,
                        marginRight:3
                    }}
                    />
                <Text
                style={{
                    fontSize:16,
                    fontWeight:'300',
                    color:COLORS.gray,
                   
                }}
                >Type: {item.genre}</Text>
                </View>

                <View
                style={{
                    flexDirection:'row',
                    width:'90%',
                    marginLeft:SIZES.base_1,
                    marginTop:SIZES.font
                }}
                >
                <Image 
                    source={icons.director}
                    resizeMode="cover"
                    style={{
                        height:23,
                        width:23,
                        tintColor:COLORS.gray,
                        marginRight:3
                    }}
                    />
                <Text
                  numberOfLines={2}
                style={{
                    fontSize:16,
                    fontWeight:'300',
                    color:COLORS.gray,
                    
                }}
                >Director: {item.director}</Text>
                </View>   
            </View>


              {/*movie year & rating */}
            <View>
                <View
                style={{
                    flexDirection:'row',
                    marginLeft:SIZES.base_1,
                    marginTop:SIZES.font
                }}
                >
                <Image 
                    source={icons.calendar}
                    resizeMode="cover"
                    style={{
                        height:23,
                        width:23,
                        tintColor:COLORS.gray,
                        marginRight:3
                    }}
                    />
                <Text
                style={{
                    fontSize:16,
                    fontWeight:'300',
                    color:COLORS.gray,
                }}
                >Year: {item.year}</Text>
                </View>

                <View
                style={{
                    flexDirection:'row',
                    marginLeft:SIZES.base_1,
                    marginTop:SIZES.font
                }}
                >
                <Image 
                    source={icons.star}
                    resizeMode="cover"
                    style={{
                        height:23,
                        width:23,
                        top:-2,
                        tintColor:COLORS.red,
                        marginRight:3
                    }}
                    />
                <Text
                style={{
                    fontSize:16,
                    fontWeight:'300',
                    color:COLORS.gray
                }}
                >{item.rating}</Text>
                </View>   
            </View>
            </View>


            {/*movie general info*/}
             <ScrollView>
             <View  style={{}}>
                <View style={{
                    flexDirection:'row',
                    marginLeft:SIZES.base_1,
                    marginTop:SIZES.base,
                    
                }}>
                      {/*Award,Country & Language..etc*/}
                    <View style={{
                        backgroundColor:'#141313',
                        width:'97%',
                        height:200,
                        left:5,
                        paddingVertical:30,
                        paddingHorizontal:10,
                        borderRadius:SIZES.radius
                        }}>

                        <Text style={{
                            fontSize:14,
                            fontWeight:'300',
                            color:COLORS.gray,
                            marginTop:4,
                        }}>Awards: {item.awards}</Text>
                            <Text style={{
                             fontSize:14,
                             fontWeight:'300',
                             color:COLORS.gray,
                             marginTop:4,

                        }}>RunTime: {item.runtime}</Text>
                         <Text style={{
                            fontSize:14,
                            fontWeight:'300',
                            color:COLORS.gray,
                            marginTop:4,

                        }}>BoxOffice: {item.boxOffice}</Text>

                         <Text style={{
                             fontSize:14,
                             fontWeight:'300',
                             color:COLORS.gray,
                             marginTop:4,

                        }}>Production: {item.production}</Text>

                         <Text style={{
                             fontSize:14,
                             fontWeight:'300',
                             color:COLORS.gray,
                             marginTop:4,

                        }}>Country: {item.country}</Text>

                         <Text style={{
                             fontSize:14,
                             fontWeight:'300',
                             color:COLORS.gray,
                             marginTop:4,

                        }}>Language: {item.language}</Text>

                    </View>

                    <View style={{width:"100%",position:'absolute', left:245, top:10  }}>
                    <Image 
                      source={{uri: item.poster}}
                      resizeMode="cover"
                      style={{
                        width:"30%",
                        height:180,
                        borderRadius:SIZES.radius,
                       
                        
                      }}
                    
                    />
                    </View>
                </View>
            </View>


            {/*actor, plot & trailer*/}
            <View style={{marginTop:SIZES.base,left:15,}}>
            <Text style={{color:COLORS.grey,fontWeight:'bold', ...FONTS.body3}}>Actors:</Text>
              
              {/*actor name*/}
            <ScrollView
               horizontal
               showsHorizontalScrollIndicator={false} 
               contentContainerStyle={{paddingHorizontal:40,}}>
                {item.actors.map((name) => (
                    <View style={{right:40, marginHorizontal:SIZES.base_1,}}>
                        <TouchableOpacity 
                        style={{
                        width:'100%',
                        paddingHorizontal:10,
                        height:50,
                        borderRadius:20,
                        backgroundColor:'#141313',   
                    }}>
                        <Text style={{color:COLORS.gray2, top:15, fontWeight:'bold'}}>
                           {name}
                        </Text>
                    </TouchableOpacity>
                    </View>
                 
             ))}
                
            
            </ScrollView>
              
              {/*plot*/}
              <View  style={{}}>
                <View style={{
                    marginLeft:-SIZES.base,
                   // marginTop:SIZES.base,
                   left:5
                    
                }}>
                     <Text style={{
                            fontSize:14,
                            fontWeight:'bold',
                            color:COLORS.gray,

                        }}>Plot:</Text>
                    <View style={{
                        backgroundColor:'#141313',
                        width:'95%',
                        height:160,
                        paddingVertical:1,
                        paddingHorizontal:8,
                        borderRadius:SIZES.radius,
                        }}>

                        <Text 
                         numberOfLines={5}
                        style={{
                            fontSize:14,
                            marginVertical:SIZES.font,
                            fontWeight:'300',
                            color:COLORS.gray,
                        }}>{item.plot}</Text>

                         <Text 
                        style={{
                            fontSize:12,
                            marginVertical:10,
                            fontWeight:'300',
                            color:'#4169E1',
                        }}>Trailer:  {item.trailer}</Text>

                        <Text 
                        style={{
                            fontSize:12,
                            fontWeight:'300',
                            color:'#4169E1',
                            bottom:5
                        }}>Website:  {item.website}</Text>
                    </View>
                </View>
            </View>
            </View>
             </ScrollView>


             {/*Watch Button*/}
             <View style={{
                alignItems:'center',
                justifyContent:'center',
                height:70
             }}>
             <AppButton
                label='Watch'
                contentContainerStyle={{
                height:50,
                width:'80%',
                borderRadius:SIZES.radius,
              }}
              labelStyle={{
                color:COLORS.gray3,
                fontWeight:'500'
              }}
              onPress={() =>navigation.goBack()}
             />
             </View>
        </View>
             
       )

   }

 


    return(
        <View style={{flex:1, backgroundColor:COLORS.primary1}}>

            {/*render header*/}
            {renderHeader()}

            {/*render Details*/}
            {renderMovieDetails()}
             
        </View>
    )
}


export default MovieDetails