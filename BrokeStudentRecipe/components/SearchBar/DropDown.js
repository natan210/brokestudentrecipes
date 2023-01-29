//Mohamed
import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';

export default function DropDown(props) {
    const { dataSource } = props
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}>

            <View style={styles.subContainer}>
                {
                    dataSource.length ?

                        dataSource.map(item => {//"for each" item in the list
                            return (
                                <View style={styles.itemView}>
                                    <Text style={styles.itemText}>{item}</Text>
                                    <Text style={styles.itemText}>+</Text>{/* TODO: replace place holder -
                                    to be replaced by and X or + icon depending on if the ingredient 
                                    is in the pantry */}
                                </View>
                            )
                        })
                        ://list has nothing
                        <View
                            style={styles.noResultView}>
                            <Text style={styles.noResultText}>No ingredients matched</Text>
                        </View>
                }

            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '6.2%',
        left: 0, right: 0, bottom: 0,
        alignItems: 'center',
    },
    subContainer: {
        backgroundColor: 'gray',
        paddingTop: 10,
        width: '80%',
        marginHorizontal: 10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    itemView: {
        backgroundColor: 'white',
        height: 30,
        width: '90%',
        marginBottom: 10,
        justifyContent: 'space-between',
        
        borderRadius: 4,
        flexDirection: "row",
    },
    itemText: {
        alignSelf: 'center',
        color: 'black',
        paddingHorizontal: 10,
        
    },
    noResultView: {
        alignSelf: 'center',        
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

});