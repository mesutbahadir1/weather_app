import {LogBox} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "../screens";

const Stack=createNativeStackNavigator()

LogBox.ignoreLogs(['Something'])

export default function AppNavigation() {

    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                options={{headerShown: false}}
                component={Home}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
}
