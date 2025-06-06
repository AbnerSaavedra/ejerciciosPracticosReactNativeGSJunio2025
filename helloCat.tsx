import React from 'react'
import {View , Text , Image , ScrollView , TextInput } from 'react-native'

const HelloCat = () =>{
return(
    <ScrollView>
        <Text>Some text Text</Text>
        <View>
            <Text>
                Some more text Text
            </Text>
            <Image source={{
                uri: 'https://blog.felinus.cl/wp-content/uploads/2023/04/gato-azul-2.png',
            }}
            style={{
                width : 200 , height : 200
            }}
            >
            </Image>
            <TextInput style={{height: 40,
                            borderColor: 'gray',
                            borderWidth: 1
                        }}
            defaultValue='Type your name'>

            </TextInput>

        </View>
    </ScrollView>
)
}

export default HelloCat