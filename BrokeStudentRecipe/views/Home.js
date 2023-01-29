import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    FlatList
} from 'react-native';
import {FONTS, COLORS, SIZES, mockData } from "../essentials"

// The Food Item is imported from the Components file. It stores the information for each of the recipes that will be displayed on the home page
import { FoodItem } from '../components';

/*
 * The Home.js file renders all the components for the home screen of the Broke Student Recipes application
 *
 * @author Timothy Yang
 * @version 2022.11.30
*/
const Home = ({ navigation }) => {

    // Display welcome message at the top of the screen when a user first opens the application
    function welcomeMessage() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 80
                }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.green,
                                ...FONTS.h2
                            }}
                        >Welcome Back John!</Text>
                        <Text
                            style={{
                                marginTop: 3,
                                color: COLORS.black,
                                ...FONTS.body4
                            }}
                        >Let's help you find a recipe today.</Text>
                    </View>
                </View>
        )
    }

    // Create search bar with text input that the user can search for recipes with
    function recipeSearchBar() {
        return (
            <View
            // Styling for all components to look consistent on the page
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <TextInput
                // Styling for all components to look consistent on the page
                    style={{
                        // marginLeft: SIZES.radius,
                        ...FONTS.body4
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="🔍 Search For Recipes"
                />

            </View>
        )

    }

    // Create a list with FoodItem components that show recipe results. Currently, all the data is hardcoded in for testing purposes.
    function recentRecipesList() {
        return (
            <View
            // Styling for all components to look consistent on the page
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 40
                }}
                >
                <Text
                // Styling for all components to look consistent on the page
                    style={{
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                >Your Results</Text>
            </View>
        )
    }

    // Renders and returns all the components of the home page onto the screen within certain dimensions
    return (
        <SafeAreaView
        // Styling for all components to look consistent on the page
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <FlatList
                data={mockData.recipes}
                ListHeaderComponent={
                    // Displays all 3 components on the screen in the order listed
                    <View>
                        {welcomeMessage()}
                        {recipeSearchBar()}
                        {recentRecipesList()}
                    </View>
                }
                // Displays each of the FoodItem recipe cards with the hardcoded data
                renderItem={({item}) => {
                    return (
                        <FoodItem
                            // Styling for all components to look consistent on the page
                            style={{
                                marginHorizontal: SIZES.padding
                            }}
                            food={item}
                        />
                    )
                }}
                >

            </FlatList>
        </SafeAreaView>
    )
}

export default Home;