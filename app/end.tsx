import Dino from "@/components/Dino";
import Obstacle from "@/components/Obstacle";
import { useGame } from "@/hooks/gameHook";
import { Link } from "expo-router";
import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

export default function End(){
    const { score } = useGame()
    return(  
    <View style={s.container}>
        <ImageBackground 
        style={s.image} 
        source={require("@/assets/images/fundo1.jpeg")}
        />
        
    <View>
        <Image source={require("@/assets/images/fundo1.jpeg")} style={s.image}/>
    </View>

    <View style={s.dino}>
        <Image source={require("@/assets/images/goku-Photoroom.png")} 
        style={s.image}
        resizeMode="contain"
        />
    </View>

    <View style={s.obstaculo}>
        <Image source={require("@/assets/images/obs-Photoroom.png")} 
        style={s.image}
        resizeMode="contain"
        />
    </View>
        <View style={s.textcontainer}>
        <Text style={s.text}>FIM DE JOGO!!</Text>

        <Text style={s.text}>{score}</Text> 
        
        <Link href="/" asChild>
         <Text style={s.text}>voltar</Text>
        </Link>
        </View>
    </View>
    )
}

const s = StyleSheet.create({
    text:{
        width:"auto",
        color:"white"
    },
    textcontainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: [{ translateX: "-50%"}, {translateY:"-50%"}],
        gap:10,
        justifyContent:"center",
    },
     obstaculo: {
    width: 65,
    height: 65,
    position: "absolute",
    bottom: "30%",
    right: 770,
  },
     dino: {
    width: 100,
    height: 200,
    position: "absolute",
    zIndex: 50,
    top: "35%",
    left:50,
  },
  image:{
    width:"100%",
    height:"100%"
  },
    container:{
        width:"100%",
        height:"100%",
        position:"relative",
    }
})
