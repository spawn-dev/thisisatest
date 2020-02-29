import React from 'react';
import { StyleSheet, TextInput, TextInputProperties, TextStyle, View } from 'react-native';
import { styleConstants } from '../../config/constants';

function getPlaceholderStyle(props: TextInputProperties): TextStyle {
    return props.value ? {} : styles.placeholderFont;
}

const Input: React.SFC<TextInputProperties> = ({ style, ...props }) => {
    return (
        <View style={styles.maxWidth}>
            <TextInput
                {...props}
                style={[styles.input, style, getPlaceholderStyle(props)]}
                placeholder={props.placeholder}
                placeholderTextColor="gray"
                autoCorrect={false}
                spellCheck={false}
            />
            <View style={styles.bottomBorder} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: 'gray',
        width: '85%',
        marginLeft: '7.5%',
        marginRight: '7.5%',
        height: 50,
        marginTop: 20,
        paddingBottom: 0
    } as TextStyle,
    bottomBorder: {
        height: 1,
        backgroundColor: '#F6F8FB',
        width: '85%',
        marginLeft: '7.5%',
        marginRight: '7.5%',
        marginTop: -8,
        borderRadius: 5
    },
    maxWidth: {
        width: '100%'
    },
    placeholderFont: {
        color: 'gray',
        fontSize: 16,
        opacity: 1.0
    }
});

export default Input;
