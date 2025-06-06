import React, {useState} from 'react';
import{Text, TextInput, View} from'react-native';

const PizzaTranslator = () => {

const[text, setText] = useState('');

return(
    <View style={{ padding: 10, flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <TextInput
            style={{ height: 40, padding: 5, width: 200 }}
            placeholder="Type here to translate!"
            onChangeText={ newText => setText(newText)}
            defaultValue={text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
            {text
            .split(' ')
            .map(word=> word && '🍕')
            .join(' ')}
        </Text>
    </View>
    );
};
export default PizzaTranslator;
